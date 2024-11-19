async function my_function(dv, tp, weekNum, language, scriptName) {
  const script = dv.page(scriptName);

  let endText = await dv.io.load(scriptName);

  const draft_num = script.DraftNum;

  endText = endText.replace(
    `DraftNum: ${draft_num}`,

    `DraftNum: ${draft_num + 1}`
  );

  const section = `# ${tp.user.stringifyNumber(draft_num)} Draft`;

  const filename = `Scripts/Week_${weekNum} ${language}/Week_${weekNum} Thoughts(${language})# ${tp.user.stringifyNumber(
    draft_num
  )} Draft`;

  const text = (await tp.file.include(`[[${filename}]]`)).slice(
    section.length,

    -1
  );

  const subjectsText = text
    .split("##")
    .sort((a, b) => {
      const inda = a.indexOf("\n");

      const aTitle = a.slice(0, inda).trim();

      const indb = b.indexOf("\n");

      const bTitle = b.slice(0, indb).trim();

      return a.localeCompare(b);
    })
    .filter((t) => t.trim() != "");

  const draftNumTitle = `${tp.user.stringifyNumber(draft_num + 1)}`.trim();

  console.log(subjectsText);

  complete_subject = [];

  subjectsText.forEach((subject) => {
    const index_title = subject.indexOf("\n");

    const title = subject.slice(0, index_title).trim();

    const topics = subject.slice(index_title).split("---");

    let complete_draft =
      "\n\n## Completed " + `${tp.user.stringifyNumber(draft_num)} Draft`;

    let new_draft = "## " + title + "\n\n";

    let completed_topics = [];

    topics.forEach((topic) => {
      const sentences = topic.split(/[.\n]/).filter((t) => t.trim() != "");
      const heading = "\n\n" + sentences[0] + "\n\n";

      const rewritten_sentences = sentences
        .filter((t) => t[0] == ">")
        .map((t) => t.slice(1).trim());
      console.log(rewritten_sentences);

      completed_topics.push(
        heading +
          rewritten_sentences
            .map((t) => t.trim())
            .filter((t) => t != "")
            .join(". ") +
          "."
      );
    });

    complete_subject.push(new_draft + completed_topics.join("\n\n---\n\n"));
  });

  console.log(complete_subject);

  endText += "\n\n# Final" + ` Draft\n\n` + complete_subject.join("\n\n");
  const temptFile = await tp.file.find_tfile(scriptName);
  await app.vault.modify(temptFile, endText);
}
module.exports = my_function;

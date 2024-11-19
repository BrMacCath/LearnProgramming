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

  const draftNumTitle = `${tp.user.stringifyNumber(draft_num + 1)}`;

  let temp_text = `${tp.user.stringifyNumber(draft_num + 1)} Draft\n\n`;
  temp_text = temp_text.charAt(0).toUpperCase() + temp_text.substring(1);
  endText += "\n\n# " + temp_text;
  console.log(subjectsText);

  subjectsText.forEach((subject) => {
    const index_title = subject.indexOf("\n");
    const title = subject.slice(0, index_title).trim();

    endText += "## " + title + "\n\n";

    const topics = subject.slice(index_title).split("---");

    topics.forEach((topic) => {
      const sentences = topic.split(/[.\n]/).filter((t) => t.trim() != "");
      endText += "\n\n" + sentences[0] + "\n\n";

      endText +=
        sentences
          .slice(1)
          .map((t) => t.trim())
          .join(".\n> \n\n") + ".\n> \n\n";
      if (topics.indexOf(topic) < topics.length - 1) {
        endText += "---";
      }
    });
  });

  const temptFile = await tp.file.find_tfile(scriptName);
  await app.vault.modify(temptFile, endText);
}
module.exports = my_function;

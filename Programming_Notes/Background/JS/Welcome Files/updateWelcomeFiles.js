async function my_function(dv, tp, allLangs) {
  languageText = [];
  // This is to figure out what week we are working with.
  let welcomeText = await tp.file.include("[[WelcomeStart]]");
  const langLength = allLangs.length;
  for (i = 0; i < langLength; i++) {
    const language = allLangs[i];
    const weekNum = await tp.user.languageWeekNum(dv, language);
    welcomeText += `\n\n# ${language} Script this week\n\n[[Week ${weekNum} ${language} Publish| Week ${weekNum} in ${language}]]\n\n![[Week ${weekNum} ${language} Publish#Script Goals]] `;
    // Now we also need to add the current thoughts
    const scriptName = `${tp.user.thoughtsPath(tp, language, weekNum)}.md`;
    const thought_script = await dv.page(scriptName);

    if (thought_script.complete) {
      const temp_thought_text_location = `${tp.user.thoughtsPath(
        tp,
        language,
        weekNum
      )}# Final Draft`;
      const thought_text = await tp.file.include(
        `[[${temp_thought_text_location}]]`
      );
      const index_start = thought_text.indexOf("\n");
      welcomeText +=
        "\n\n## This weeks Thoughts\n\n" + thought_text.slice(index_start + 1);
    } else {
      const draft_num = thought_script.DraftNum;
      if (draft_num == 1) {
        const temp_thought_text_location = `${tp.user.thoughtsPath(
          tp,
          language,
          weekNum
        )}# First Draft`;
        const thought_text = await tp.file.include(
          `[[${temp_thought_text_location}]]`
        );
        const index_start = thought_text.indexOf("\n");
        welcomeText +=
          "\n\n## Current Thoughts\n\n" + thought_text.slice(index_start + 1);
      } else {
        let temp_text_str = `Complete ${tp.user.stringifyNumber(
          draft_num - 1
        )} Draft`;
        const temp_thought_text_location = `${tp.user.thoughtsPath(
          tp,
          language,
          weekNum
        )}# ${temp_text_str}$`;
        const thought_text = await tp.file.include(
          `[[${temp_thought_text_location}]]`
        );
        const index_start = thought_text.indexOf("\n");
        welcomeText +=
          "\n\n## Current Thoughts\n\n" + thought_text.slice(index_start + 1);
      }
    }
  }

  const tFileWelcome = tp.file.find_tfile("Welcome");
  await app.vault.modify(tFileWelcome, welcomeText);
}
module.exports = my_function;

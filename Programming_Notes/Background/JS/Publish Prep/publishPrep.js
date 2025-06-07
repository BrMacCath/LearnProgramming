async function my_function(dv, tp) {
  currentLangs = await tp.user.currentWeekLanguages(dv);
  const taskChoices = (
    await dv.io.load("Background/Choices/TaskChoices.md")
  ).split("\n");
  currentLangs.forEach(async (language) => {
    const weekNum = await tp.user.languageWeekNum(dv, language);
    // Here for each week we want to look at the
    // finished tasks and move them into the complete folder.
    // This may be better as a forEach?
    for (let i = 1; i < weekNum + 1; i++) {
      const weekUpdate = await tp.user.checkIfWeekShouldUpdate(
        dv,
        tp,
        language,
        i
      );
      if (!weekUpdate) {
        continue;
      }
      await tp.user.moveCompletedTasks(dv, tp, language, i);

      await tp.user.updateTaskManagementFiles(dv, tp, language, i, app.vault);
      let [queryChoice, text] = await tp.user.finishedTasksDataviewQuery(
        dv,
        tp,
        language,
        taskChoices,
        i
      );
      const queryOutput = await dv.queryMarkdown(queryChoice);
      text += "\n\n" + queryOutput.value;

      // Let's add final draft here.
      // We first add the final draft
      const [temp_text, mermaid_text] = await tp.user.createDraftAndMermaid(
        dv,
        tp,
        language,
        i
      );
      text += temp_text + mermaid_text;

      // Create data about thought file
      const thought_text = await tp.user.extractThoughtsText(
        dv,
        tp,
        i,
        language
      );
      text += thought_text;
      const filename = `${tp.user.publishPath(tp, language, i)}.md`;
      const tFile = tp.file.find_tfile(filename);
      await app.vault.modify(tFile, text);
    }
  });
  await tp.user.updateWelcomeFiles(dv, tp, currentLangs);
  const vault = app.vault;
  await tp.user.cleanTrash(dv, tp, vault);
}
module.exports = my_function;

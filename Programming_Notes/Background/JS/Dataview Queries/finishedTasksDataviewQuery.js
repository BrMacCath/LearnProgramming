async function my_function(dv, tp, language, taskChoices, i) {
  let text = await tp.file.include(
    `[[${tp.user.overviewPath(tp, language, i)}]]`
  );
  let tasksAvailable = false;
  const folder = tp.user.taskFolderPath(tp, language, i);

  await Promise.all(
    taskChoices.map(async (Choice) => {
      const queryChoice = `
TABLE WITHOUT ID
file.link As "${Choice} Task", file.frontmatter.taskStatus As Status, file.frontmatter.due_date As "Due Date"
FROM "${folder}"
WHERE file.frontmatter.taskStatus != "Done" AND file.frontmatter.taskType = "${Choice}"
SORT file.link DESC
`;

      const queryOutput = await dv.queryMarkdown(queryChoice);
      const count = (queryOutput.value.match(/\n/g) || []).length;
      if (count === 2) {
        return;
      }
      tasksAvailable = true;

      text += "\n\n" + queryOutput.value;
    })
  );

  let queryLink = "link";

  if (!tasksAvailable) {
    // Ask if the week is done.
    const trueFalse = [true, false];
    const finalisedWeek = await tp.system.suggester(
      (truth) => `${truth}`,
      trueFalse,
      true,
      `Is week ${i} for ${language} finalised?`
    );
    if (finalisedWeek) {
      queryLink = "name";
      text = text.replace("finalised: false", "finalised: true");
      text = text.replace("complete: false", "complete: true");
      // Replace the Base file too!.
      const tempFilename = `${tp.user.overviewPath(tp, language, i)}.md`;
      const temptFile = await tp.file.find_tfile(tempFilename);
      await app.vault.modify(temptFile, text);
    }
  }

  // Let's add tasks here
  const queryChoice = `TABLE WITHOUT ID
    file.${queryLink} As Finished-Task, file.frontmatter.taskStatus As Status, file.frontmatter.taskType As Task-Type
    FROM "${folder}"
    WHERE file.frontmatter.taskStatus = "Done"
    SORT file.${queryLink} DESC`;
  return [queryChoice, text];
}
module.exports = my_function;

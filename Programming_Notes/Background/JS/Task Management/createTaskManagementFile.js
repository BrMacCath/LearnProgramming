async function my_function(dv, tp, script, weekNum, dueDate, language) {
  console.log("Start" + language);
  console.log("num" + weekNum);
  const query = tp.user.taskManagementDataviewQuery(
    tp,
    script,
    weekNum,
    language
  );
  console.log(weekNum);
  const markdown = await dv.queryMarkdown(query);
  console.log(weekNum);
  const scriptLocation = `${tp.user.taskManagementFolderPath(
    tp,
    language,
    weekNum
  )}/Task Management for ${script}`;
  let scriptData = `---\n`;
  scriptData += `fileClass: Task Management\n`;
  scriptData += `save: false\n`;
  scriptData += `language: ${language}\n`;
  scriptData += `taskNum: 0\n`;
  scriptData += "taskStatus: Not Started\n";
  scriptData += `weekNum: ${weekNum}\n`;
  scriptData += `script: ${script}\n`;
  scriptData += `---\n`;
  scriptData += "# Task List\n";
  scriptData += markdown.value;
  await tp.file.create_new(scriptData, scriptLocation);
}
module.exports = my_function;

async function my_function(dv, tp, script, weekNum, dueDate, language) {
  const query = tp.user.taskManagementDataviewQuery(
    tp,
    script,
    weekNum,
    language
  );
  const markdown = await dv.queryMarkdown(query);
  const scriptLocation = `${tp.user.baseFolder(
    language,
    weekNum
  )}/Task Management/Task Management for ${script}`;
  let scriptData = `---\n`;
  scriptData += `fileClass: Task Management\n`;
  scriptData += `save: false\n`;
  scriptData += `language: ${language}\n`;
  scriptData += "taskStatus: Not Started\n";
  scriptData += `weekNum: ${weekNum}\n`;
  scriptData += `script: ${script}\n`;
  scriptData += `---\n`;
  scriptData += "# Task List\n";
  scriptData += markdown.value;
  await tp.file.create_new(scriptData, scriptLocation);
}
module.exports = my_function;

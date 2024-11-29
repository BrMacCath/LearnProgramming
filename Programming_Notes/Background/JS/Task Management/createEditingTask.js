async function my_function(dv, tp, script, weekNum, dueDate, language) {
  const scriptLocation = `${tp.user.baseFolder(
    language,
    weekNum
  )}/Tasks/NotFinished/Edit ${script} Video.md`;
  let scriptData = `---\n`;
  scriptData += `fileClass: Task\n`;
  scriptData += `save: false\n`;
  scriptData += "taskStatus: Not Started\n";
  scriptData += `weekNum: ${weekNum}\n`;
  scriptData += `script: ${script}\n`;
  scriptData += `taskType: Editing\n`;
  scriptData += `due_date: ${dueDate}\n`;
  scriptData += `---\n`;
  scriptData += `\n\n# Task\n\n- [ ] Edit [[${script}(${language})|${script}]] video #Editing`;
  await tp.file.create_new(scriptData, scriptLocation);
}
module.exports = my_function;

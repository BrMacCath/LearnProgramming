async function my_function(dv, tp, script, weekNum, dueDate, language) {
  const scriptLocation = `${tp.user.baseFolder(
    language,
    weekNum
  )}/Tasks/NotFinished/Record ${script} Video.md`;
  let scriptData = `---\n`;
  scriptData += `fileClass: Task\n`;
  scriptData += `save: false\n`;
  scriptData += "taskStatus: Not Started\n";
  scriptData += `weekNum: ${weekNum}\n`;
  scriptData += `script: ${script}\n`;
  scriptData += `taskType: Recording\n`;
  scriptData += `due_date: ${dueDate}\n`;
  scriptData += `---\n`;
  scriptData += `\n\n# Task\n\n- [ ] Record [[${script}(${language})|${script}]] Video #Recording`;
  await tp.file.create_new(scriptData, scriptLocation);
}
module.exports = my_function;

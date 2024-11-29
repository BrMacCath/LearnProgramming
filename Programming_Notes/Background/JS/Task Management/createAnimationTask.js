async function my_function(dv, tp, script, weekNum, dueDate, language) {
  const scriptLocation = `${tp.user.baseFolder(
    language,
    weekNum
  )}/Tasks/NotFinished/Create Animations for ${script}`;
  let scriptData = `---\n`;
  scriptData += `fileClass: Task\n`;
  scriptData += `save: false\n`;
  scriptData += "taskStatus: Not Started\n";
  scriptData += `script: ${script}\n`;
  scriptData += `weekNum: ${weekNum}\n`;
  scriptData += `taskType: Animation\n`;
  scriptData += `due_date: ${dueDate}\n`;
  scriptData += `---\n`;
  scriptData += `\n\n# Task\n\n- [ ] Create animation for [[${script}(${language})|${script}]] video #Animation`;

  return await tp.file.create_new(scriptData, scriptLocation);
}
module.exports = my_function;

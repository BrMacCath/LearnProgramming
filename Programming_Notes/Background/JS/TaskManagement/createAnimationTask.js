async function my_function(dv, tp, script, weekNum, dueDate, language) {
  const scriptLocation = `Scripts/Week_${weekNum} ${language}/Tasks/NotFinished/Write script for ${script}.md`;
  let scriptData = `---\n`;
  scriptData += `fileClass: Task\n`;
  scriptData += `save: false\n`;
  scriptData += "taskStatus: Not Started\n";
  scriptData += `weekNum: ${weekNum}\n`;
  scriptData += `taskType: Animation\n`;
  scriptData += `due_date: ${dueDate}\n`;
  scriptData += `---\n`;
  scriptData += `\n\n# Task\n\n- [ ] Create animation for [[${script}(${language})|${script}]] video #Animation`;
  console.log(scriptData);
  console.log(scriptLocation);
  return await tp.file.create_new(scriptData, scriptLocation);
}
module.exports = my_function;

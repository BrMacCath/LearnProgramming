async function my_function(dv, tp, script, weekNum, dueDate, language) {
  const query = `
TABLE WITHOUT ID
file.link AS Note, file.frontmatter.taskStatus as "Task Status",file.frontmatter.taskType AS Task_Type
FROM "${language} Scripts/Week ${weekNum}"
WHERE file.frontmatter.fileClass = "Task"
SORT file.mtime desc
LIMIT 5
`;
  const markdown = await dv.queryMarkdown(query);
  const scriptLocation = `${tp.user.baseFolder(
    language,
    weekNum
  )}/Task Management/Task Management for ${script}.md`;
  let scriptData = `---\n`;
  scriptData += `fileClass: Task Management\n`;
  scriptData += `save: false\n`;
  scriptData += "taskStatus: Not Started\n";
  scriptData += `weekNum: ${weekNum}\n`;
  scriptData += `script: ${script}\n`;
  scriptData += `---\n`;
  scriptData += "# Task List\n";
  scriptData += markdown.value;
  console.log(scriptData);
  await tp.file.create_new(scriptData, scriptLocation);
}
module.exports = my_function;
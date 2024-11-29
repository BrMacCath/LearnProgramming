async function my_function(dv, tp, langs) {
  let task_text = "# Current Tasks\n";
  langs.forEach(async (language) => {
    const taskQuery = `
    TABLE WITHOUT ID
    file.link AS Note, dateformat(file.mtime, "ff") AS Modified,file.frontmatter.taskType AS Task_Type
    FROM "${language} Scripts"
    WHERE file.frontmatter.fileClass = "Task"
    SORT file.mtime desc
    `;
    const task_query_output = await dv.queryMarkdown(taskQuery);

    task_text += `## ${language} Tasks\n`;
    task_text += task_query_output.value + "\n\n";
  });
  return task_text;
}
module.exports = my_function;

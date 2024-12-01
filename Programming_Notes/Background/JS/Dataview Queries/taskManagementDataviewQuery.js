function my_function(tp, script, weekNum, language) {
  const query = `
TABLE WITHOUT ID
file.link AS Note, file.frontmatter.taskStatus as "Task Status",file.frontmatter.taskType AS "Task Type"
FROM "${tp.user.taskFolderPath(tp, language, weekNum)}"
WHERE file.frontmatter.script = "${script}"
SORT file.mtime desc
`;
  return query;
}
module.exports = my_function;

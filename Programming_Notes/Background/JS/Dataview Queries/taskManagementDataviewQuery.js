function my_function(tp, script, weekNum, language) {
  const query = `
TABLE WITHOUT ID
file.link AS Note, file.frontmatter.taskStatus as "Task Status",file.frontmatter.taskType AS "Task Type"
FROM "${tp.user.taskFolderPath(tp, language, weekNum)}"
WHERE file.frontmatter.script = "${script}"
SORT choice(file.taskType = "Research", 1,
choice(file.taskType = "Script", 2,
choice(file.taskType = "Sketch", 3,
choice(file.taskType = "Animation", 4,
choice(file.taskType = "Recording", 5,
choice(file.taskType = "Editing", 6, "other")))))) ASC
`;

  return query;
}
module.exports = my_function;

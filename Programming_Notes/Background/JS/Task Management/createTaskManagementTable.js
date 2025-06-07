async function my_function(dv, tp, language, week, management) {
  let properties = ["Note", "Task Status", "Task Type"];
  const text = await tp.file.include(`[[${management.file.name}]]`);
  const frontmatter = tp.user.extractFrontMatter(text);
  const altQuery = allTasks
    .filter((page) => page.script == management.script)
    .sort((p) => tp.user.taskTypeOrder(p.taskType));
  let table = "| " + properties.join("|") + " |\n";
  table += "|----".repeat(properties.length) + "|\n";
  //properties.map(p=> tp.user.convertTitleToFrontmatter)
  allTasks.forEach((task) => {
    // table += tp.user.createTableLine(task,properties);
  });
  return table;
}
module.exports = my_function;

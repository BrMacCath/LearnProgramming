async function my_function(dv, tp, language, week, vault) {
  const task_management_folder_location = `${tp.user.taskManagementFolderPath(
    tp,
    language,
    week
  )}`;
  const task_folder_location = `${tp.user.taskFolderPath(tp, language, week)}`;
  const allTasks = dv.pages(`"${task_folder_location}"`);
  const managers = dv.pages(`"${task_management_folder_location}"`);
  const taskFiles = managers.forEach(async (management) => {
    console.log(management);
    const text = await tp.file.include(`[[${management.file.name}]]`);
    const frontmatter = tp.user.extractFrontMatter(text);
    const altQuery = allTasks
      .filter((page) => page.script == management.script)
      .sort((p) => tp.user.taskTypeOrder(p.taskType));
    const query = tp.user.taskManagementDataviewQuery(
      tp,
      management.script,
      week,
      language
    );
    const markdown = await dv.queryMarkdown(query);
    const tFile = tp.file.find_tfile(management.file.name);
    await vault.modify(tFile, frontmatter + markdown.value);
  });
}
module.exports = my_function;

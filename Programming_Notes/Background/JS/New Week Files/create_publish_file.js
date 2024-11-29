async function my_function(tp, language, week_num) {
  const file = `Week ${week_num} ${language} Publish`;
  const folder = tp.user.baseFolder(language, week_num);
  await tp.file.create_new("", `${file}`, true, folder);
}
module.exports = my_function;

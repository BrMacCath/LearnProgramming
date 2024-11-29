async function my_function(tp, language, week_num) {
  const file = `Week ${week_num} ${language} Thoughts`;
  const folder = tp.user.baseFolder(language, week_num);
  let text = await tp.file.include(
    "[[Background/Background Templates/Thought Template.md]]"
  );
  text = text.replace("weekNum: ", "weekNum: " + week_num);
  text = text.replace("language: ", "language: " + language);
  await tp.file.create_new(`${text}`, `${file}`, true, folder);
}
module.exports = my_function;

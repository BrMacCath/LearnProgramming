async function my_function(tp, language, week_num) {
  const file = `Week_${week_num} ${language} Publish`;
  const folder = `Scripts/Week_${week_num} ${language}`;
  await tp.file.create_new("", `${file}`, true, folder);
}
module.exports = my_function;

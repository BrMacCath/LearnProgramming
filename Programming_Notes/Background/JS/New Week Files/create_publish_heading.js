async function my_function(tp, language, week_num) {
  const file = `Week_${week_num} ${language}(${language})`;
  const folder = `Scripts/Week_${week_num} ${language}`;
  let text = await tp.file.include(
    "[[Background/Templates/New_Week_Template.md]]"
  );
  text = text.replace("weekNum: ", "weekNum: " + week_num);
  text = text.replace("language: ", "language: " + language);
  await tp.file.create_new(`${text}`, `${file}`, true, folder);
}
module.exports = my_function;

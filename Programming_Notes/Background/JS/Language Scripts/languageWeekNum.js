async function my_function(dv, language) {
  const languageWeekNumLocation = `Background/Choices/${language}WeekNum.md`;
  const weekNum = Number(await dv.io.load(languageWeekNumLocation));
  return weekNum;
}
module.exports = my_function;

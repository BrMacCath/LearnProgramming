async function my_function(dv, tp) {
  const language = await tp.user.chooseLanguage(dv, tp);
  const languageWeekNumLocation = `Background/Choices/${language}WeekNum.md`;
  const weekNum = await tp.system.prompt(
    "What week?",
    await dv.io.load(languageWeekNumLocation)
  );
  return [language, weekNum, languageWeekNumLocation];
}
module.exports = my_function;

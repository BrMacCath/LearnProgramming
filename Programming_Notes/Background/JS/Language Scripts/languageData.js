async function my_function(dv, tp) {
  let location = "Background/Choices/ProgrammingChoices.md";
  const content = await dv.io.load(location);
  const langs = `${content}`.split("\n");
  const language = await tp.system.suggester(
    langs,
    langs,
    true,
    "What language?"
  );
  const languageWeekNumLocation = `Background/Choices/${language}WeekNum.md`;
  const weekNum = await tp.system.prompt(
    "What week?",
    await dv.io.load(languageWeekNumLocation)
  );
  return [language, weekNum, languageWeekNumLocation];
}
module.exports = my_function;

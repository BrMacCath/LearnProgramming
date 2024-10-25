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
  const weekNum = Number(await dv.io.load(languageWeekNumLocation));
  return [language, weekNum];
}
module.exports = my_function;

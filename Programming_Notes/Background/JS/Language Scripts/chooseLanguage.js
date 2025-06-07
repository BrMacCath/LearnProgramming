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
  return language;
}
1;
module.exports = my_function;

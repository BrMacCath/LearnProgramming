async function my_function(dv) {
  let location = "Background/Choices/ProgrammingChoices.md";
  const content = await dv.io.load(location);
  let langs = `${content}`.split("\n");
  return langs;
}
module.exports = my_function;
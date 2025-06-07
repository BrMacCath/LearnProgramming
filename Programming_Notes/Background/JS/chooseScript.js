async function my_function(dv, tp, language, weekNum) {
  const script_location = `${tp.user.baseFolder(language, weekNum)}/Scripts`;
  console.log("Here Script");
  const scripts = dv.pages(`"${script_location}"`).filter((t) => !t.complete);

  const script = await tp.system.suggester(
    (script) => script.file.name,
    scripts,
    true,
    "Which script?"
  );
  return script;
}
module.exports = my_function;

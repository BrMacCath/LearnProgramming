async function my_function(dv, tp, weekNum, language) {
  const script_location = `${tp.user.baseFolder(language, weekNum)}/Scripts`;
  const scripts = dv.pages(`"${script_location}"`).filter((t) => !t.complete);

  const script = await tp.system.suggester(
    (script) => script.file.name,
    scripts,
    true,
    "Which script?"
  );

  let text = await dv.io.load(
    script.file.folder + "/" + script.file.name + ".md"
  );
  const paragraphSeparator = await dv.io.load(
    "Background/Background Data/Paragraph Separator.md"
  );
  return [script, text, paragraphSeparator];
}
module.exports = my_function;

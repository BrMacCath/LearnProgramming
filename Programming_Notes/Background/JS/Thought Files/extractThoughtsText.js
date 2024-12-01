async function my_function(dv, tp, weekNum, language) {
  const scriptName = `${tp.user.thoughtsPath(tp, language, weekNum)}.md`;
  const thought_script = dv.page(scriptName);

  let text = "";

  if (thought_script.complete) {
    const temp_thought_text_location = `${tp.user.thoughtsPath(
      tp,
      language,
      weekNum
    )}# Final Draft`;
    const thought_text = await tp.file.include(
      `[[${temp_thought_text_location}]]`
    );
    const index_start = thought_text.indexOf("\n");
    text +=
      "\n\n# This weeks Thoughts\n\n" + thought_text.slice(index_start + 1);
  } else {
    const temp_thought_text_location = `${tp.user.thoughtsPath(
      tp,
      language,
      weekNum
    )}# ${tp.user.stringifyNumber(thought_script.draftnum)} Draft`;
    const thought_text = await tp.file.include(
      `[[${temp_thought_text_location}]]`
    );
    const index_start = thought_text.indexOf("\n");
    text += "\n\n# Current Thoughts\n\n" + thought_text.slice(index_start + 1);
  }
  return text;
}
module.exports = my_function;

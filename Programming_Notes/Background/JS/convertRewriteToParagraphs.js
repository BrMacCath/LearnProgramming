async function my_function(dv, tp, script, paragraphSeparator, draftChoices) {
  const draftName = `# ${draftChoices[script.DraftNum - 1]} Draft`;
  const draft_location =
    script.file.folder + "/" + script.file.name + draftName;
  let draft = (await tp.file.include(`[[${draft_location}]]`)).slice(
    draftName.length
  );
  const sections = draft.split(paragraphSeparator).filter((t) => t != "");
  let paragraphs = [];
  sections.forEach((section) => {
    let sentences = section.split("\n").filter((t) => t[0] == ">");
    sentences = sentences.map((sentence) => sentence.slice(2));
    paragraphs.push(sentences.join(". "));
  });
  return paragraphs;
}
module.exports = my_function;

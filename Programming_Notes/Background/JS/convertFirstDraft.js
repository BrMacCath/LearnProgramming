async function my_function(dv, tp, script, paragraphSeparator, text) {
  // In this case we need to get each paragraph
  const paragraphNum = script.ParagraphNum;
  const paragraphs = (
    await dv.io.load("Background/Choices/DraftNumChoices.md")
  ).split("\n");
  let completeDraft = "\n\n## Completed First Draft\n\n";
  let newDraft = "\n\n# Second Draft\n\n";

  for (i = 0; i < paragraphNum; i++) {
    const section_name =
      script.file.folder +
      "/" +
      script.file.name +
      "## " +
      paragraphs[i] +
      " Paragraph";
    let paragraph_sentences = (await tp.file.include(`[[${section_name}]]`))
      .split("\n")
      .filter((t) => t != "")
      .pop()
      .split(".");
    completeDraft += paragraph_sentences.join(".") + "\n\n";
    newDraft += paragraph_sentences.join(".\n> \n\n");
    newDraft += paragraphSeparator;
  }
  text += completeDraft + newDraft;
  const draftText = "DraftNum: " + `${script.DraftNum}`;
  text = text.replace(
    `DraftNum: ${script.DraftNum}`,
    `DraftNum: ${script.DraftNum + 1}`
  );
  const tFile = tp.file.find_tfile(script.file.name);
  await app.vault.modify(tFile, text);
}
module.exports = my_function;

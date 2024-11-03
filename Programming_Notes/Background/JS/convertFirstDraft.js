async function my_function(dv, tp, script, paragraphSeparator, text) {
  // In this case we need to get each paragraph
  let completeDraft = "\n\n## Completed First Draft\n\n";
  let newDraft = "\n\n# Second Draft\n\n";
  const firstDraftSeparator = await tp.file.include(`[[Draft One Separator]]`);
  const first_draft_location =
    script.file.folder + "/" + script.file.name + "# First Draft";
  let paragraphs = (await tp.file.include(`[[${first_draft_location}]]`)).split(
    firstDraftSeparator
  );

  paragraphs.forEach((paragraph) => {
    let paragraph_sentences = paragraph
      .split("\n")
      .filter((t) => t != "")
      .pop()
      .split(".");
    completeDraft += paragraph_sentences.join(".") + "\n\n";
    newDraft += paragraph_sentences.join(".\n> \n\n");
    newDraft += paragraphSeparator;
  });

  text += completeDraft + newDraft;
  text = text.replace(
    `DraftNum: ${script.DraftNum}`,
    `DraftNum: ${script.DraftNum + 1}`
  );
  text = text.replace(
    `ScriptStatus: Not Started`,
    `ScriptStatus: Making Progress`
  );
  const tFile = tp.file.find_tfile(script.file.name);

  await app.vault.modify(tFile, text);
}
module.exports = my_function;

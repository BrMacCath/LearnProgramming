function my_function(paragraph) {
  let paragraph_sentences = paragraph
    .split("\n")
    .filter((t) => t != "")
    .pop()
    .split(".");
  paragraph_draft = paragraph_sentences.join(".\n> \n\n");
  return paragraph_draft;
}
module.exports = my_function;

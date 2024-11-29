function my_function(ordered_scripts, language) {
  let mermaid_text = "```mermaid\ngraph TB\n";
  let mermaid_arrows = "";
  for (let i = 0; i < ordered_scripts.length - 1; i++) {
    const start_file = `${ordered_scripts[i].file.name}`.slice(
      0,
      -(2 + language.length)
    );
    const end_file = `${ordered_scripts[i + 1].file.name}`.slice(
      0,
      -(2 + language.length)
    );
    mermaid_text +=
      "\t" +
      `${start_file}`.trim().replaceAll(" ", "_") +
      `(${start_file})` +
      `\n`;
    mermaid_arrows +=
      "\t" +
      `${start_file}`.trim().replaceAll(" ", "_") +
      ` --> ` +
      `${end_file}\n`.trim().replaceAll(" ", "_") +
      "\n";
  }
  const last_file = `${ordered_scripts.slice(-1)[0].file.name}`.slice(
    0,
    -(2 + language.length)
  );
  mermaid_text +=
    "\t" + `\t${last_file}`.trim().replaceAll(" ", "_") + `(${last_file})\n`;
  mermaid_arrows += "```";
  return mermaid_text + mermaid_arrows;
}
module.exports = my_function;

async function my_function(dv, tp, language, i) {
  let text = "\n\n# Final Draft\n\n";
  // Now we need to get all the current script locations
  let sources = "\n\n## Sources\n\n";
  const script_folder = tp.user.scriptFolderPath(tp, language, i);
  const ordered_scripts = dv
    .pages(`"${script_folder}"`)
    .sort((p) => p.SectionNum);
  await Promise.all(
    ordered_scripts.map(async (script) => {
      //text += tp.user.finalDraftText(script)
      sources += await tp.user.createSourceList(tp, script);
      if (script.ScriptStatus != "Done") {
        text += `The script: [[${script.file.name}]] is incomplete.\n`;

        return;
      }
      console.log(script);
      const otherFile =
        script.file.folder + "/" + script.file.name + "." + script.file.ext;
      const script_file = await dv.io.load(otherFile);
      const index_title = "# Final Draft";
      const ind = script_file.indexOf(index_title);

      text += script_file.slice(ind + index_title.length) + "\n";
    })
  );
  text += sources + "\n";
  const mermaid_text = tp.user.createMermaidGraph(ordered_scripts, language);
  return [text, mermaid_text];
}
module.exports = my_function;

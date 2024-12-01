async function my_function(dv, tp, language, i) {
  let text = "\n\n# Final Draft\n\n";
  // Now we need to get all the current script locations

  const script_folder = tp.user.scriptFolderPath(tp, language, i);
  const ordered_scripts = dv
    .pages(`"${script_folder}"`)
    .sort((p) => p.SectionNum);
  await Promise.all(
    ordered_scripts.map(async (script) => {
      //text += tp.user.finalDraftText(script)
      if (script.ScriptStatus != "Done") {
        text += `The script: [[${script.file.name}]] is incomplete.\n`;
        return;
      }

      const otherFile =
        script.file.folder + "/" + script.file.name + "." + script.file.ext;

      // This is where the issues lie.
      const script_file = await dv.io.load(otherFile);

      const ind = script_file.indexOf("# Final Draft");

      text += script_file.slice(ind + 13) + "\n";
    })
  );

  const mermaid_text = tp.user.createMermaidGraph(ordered_scripts, language);
  return [text, mermaid_text];
}
module.exports = my_function;

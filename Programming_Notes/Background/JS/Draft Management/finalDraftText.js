async function my_function(dv, tp, script) {
  let text = "";
  if (script.ScriptStatus != "Done") {
    text += `The script: [[${script.file.name}]] is incomplete.\n`;
    return text;
  }

  const otherFile =
    script.file.folder + "/" + script.file.name + "." + script.file.ext;

  // This is where the issues lie.
  const script_file = await dv.io.load(otherFile);

  const ind = script_file.indexOf("# Final Draft");

  text += script_file.slice(ind + 13) + "\n";
  return text;
}
module.exports = my_function;

async function my_function(dv, tp, text) {
  text = text.replace(`complete: false`, `complete: true`);
  text = text.replace(`ScriptStatus: Making Progress`, `ScriptStatus: Done`);
  text = text.replace(`ScriptStatus: Not Started`, `ScriptStatus: Done`);
  return text;
}
module.exports = my_function;

async function my_function(tp, script) {
  const file_location = `${script.file.name}#Sources`;
  console.log(file_location);
  try {
    await tp.file.include(`[[${file_location}]]`);
  } catch {
    console.log("Error here:");
    console.log(`[[${file_location}]]`);
  }
  const sources_text = await tp.file.include(`[[${file_location}]]`);

  console.log(file_location);
  console.log(sources_text);
  // Check if there are sources in this file.
  const source_check = "# Sources";
  if (sources_text.slice(0, source_check.length) != source_check) {
    return "";
  }
  const source_lines = sources_text
    .split("\n")
    .slice(1) // Removes title
    .filter((t) => t != "");
  if (source_lines.length != 0) {
    return source_lines.join("\n");
  }
  return "";
}
module.exports = my_function;

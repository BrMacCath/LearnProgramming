function my_function(text) {
  const meta_data_start = "---";
  const meta_data_end = "\n---\n";
  const start_file = text.slice(0, 3);
  if (meta_data_start != start_file) {
    return "";
  }
  const index = text.indexOf(meta_data_end) + meta_data_end.length;
  return text.slice(0, index);
}
module.exports = my_function;

function my_function(tp, language, week_num) {
  return `${tp.user.baseFolder(
    language,
    week_num
  )}/Week ${week_num} ${language}`;
}
module.exports = my_function;
function my_function(tp, language, week_num, script) {
  return `${tp.user.baseFolder(
    language,
    week_num
  )}/Scripts/${script}(${language})`;
}
module.exports = my_function;

function my_function(tp, language, week_num) {
  return `${tp.user.baseFolder(language, week_num)}/Scripts`;
}
module.exports = my_function;

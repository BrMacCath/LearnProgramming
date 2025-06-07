function my_function(task_type) {
  switch (task_type) {
    case "Research":
      return 0;
    case "Script":
      return 1;
    case "Sketch":
      return 2;
    case "Animation":
      return 3;
    case "Recording":
      return 4;
    case "Editing":
      return 5;
  }
}
module.exports = my_function;

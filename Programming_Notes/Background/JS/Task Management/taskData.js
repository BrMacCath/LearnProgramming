async function my_function(dv, tp) {
  const task = await tp.system.prompt("Task?");
  const dueDate = await tp.system.prompt(
    "Due Date",
    tp.date.weekday("MM-DD-YYYY", 8)
  );

  // Now we are going to categorize out tasks
  let taskLocation = "Background/Choices/TaskChoices.md";
  let contentTask = await dv.io.load(taskLocation);
  let tasks = `${contentTask}`.split("\n");
  const taskCategory = await tp.system.suggester(
    tasks,
    tasks,
    true,
    "What is the category of the task?"
  );
  return [task, taskCategory, dueDate];
}
module.exports = my_function;

<%*

// This section is to figure out which language it is related to.
let dv = app.plugins.plugins.dataview.api;
let location = 'Background/Choices/ProgrammingChoices.md'
let content = await dv.io.load(location)
let temp = `${content}`.split("\n")
let langs =[]
for(i=0; i < temp.length;i++){
	langs.push(temp[i])
}
const language = await tp.system.suggester(langs,langs,true,"What language?");

// This is to figure out what week we are working with.

const languageWeekNumLocation = `Background/Choices/${language}WeekNum.md`;
const weekNumDefault = await dv.io.load(languageWeekNumLocation);
const weekNum = await tp.system.prompt("What week is this for?",`${weekNumDefault}`);

// Our goal is to get out task at this point and the date of when it is due. It is automatically set to the following Monday.
const task = await tp.system.prompt("Task?");
const dueDate = await tp.system.prompt("Due Date",tp.date.weekday('YYYY-MM-DD',8)  );

// Now we are going to categorize out tasks
let taskLocation = 'Background/Choices/TaskChoices.md'
let contentTask = await dv.io.load(taskLocation)
let tempTask = `${contentTask}`.split("\n")
let tasks =[]
for(i=0; i < tempTask.length;i++){
	tasks.push(tempTask[i])
}
const taskCategory = await tp.system.suggester(tasks,tasks,true,"What is the category of the task?");



tR = `---\n`
tR += `fileClass: Task\n`
tR += "taskStatus: Not Started\n"
tR += `weekNum: ${weekNum}\n`
tR += `taskType: ${taskCategory}\n`
tR += `due_date: ${dueDate}\n`
tR+= `---\n`
-%>

# Task
- [ ] <% task %> #Script 


<% tp.file.move(`Scripts/Week_${weekNum} ${language}/Tasks/NotFinished/${task}`) %> 

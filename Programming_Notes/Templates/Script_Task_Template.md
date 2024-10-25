<%*

// This section is to figure out which language it is related to.
let dv = app.plugins.plugins.dataview.api;
const [language,weekNumDefault] = await tp.user.languageData(dv,tp); 
const weekNum = await tp.system.prompt("What week is this for?",`${weekNumDefault}`);
const [task,taskCategory,dueDate] = await tp.user.taskData(dv,tp);


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

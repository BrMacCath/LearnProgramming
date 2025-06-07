<%*

// This section is to figure out which language it is related to.
let dv = app.plugins.plugins.dataview.api;
const [language,weekNum] = await tp.user.languageData(dv,tp); 

const [task,taskCategory,dueDate] = await tp.user.taskData(dv,tp);
const script = (await tp.user.chooseScript(dv,tp,language,weekNum)).file.name;


tR = `---\n`
tR += `fileClass: Task\n`
tR += "taskStatus: Not Started\n"
tR += `weekNum: ${weekNum}\n`
tR += `script: ${script}\n`
tR += "save: false\n"
tR += `taskType: ${taskCategory}\n`
tR += `due_date: ${dueDate}\n`
tR+= `---\n`
-%>

# Task
- [ ] <% task %> #<% taskCategory %>


<% tp.file.move(`${tp.user.notFinishedTasksFolder(tp, language, weekNum)}/${task}${script}`) %> 


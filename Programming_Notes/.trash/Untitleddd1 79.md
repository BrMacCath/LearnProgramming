
`<%*
// Create a record and write script task for this.
const fileName = tp.file.title;
let dv = app.plugins.plugins.dataview.api;
const [language,weekNum] = await tp.user.languageData(dv,tp); 

const script = await tp.system.prompt("Name of script:");
const dueDate = await tp.system.prompt(
    "Due Date",
    tp.date.weekday("MM-DD-YYYY", 8)
  );

tR ="---\n"
tR += `fileClass: Script\n`
tR += `ScriptStatus: Not Started\n`
tR += "ParagraphNum: 1\n"
tR += `due_date: ${dueDate}\n`
tR += "DraftNum: 1\n"
tR += "complete: false\n"
tR += "---"
-%>

# Script Goal

## Key points


# Sources

# First Draft


<%tp.file.move(tp.user.scriptPath(tp,language,weekNum,script))%>

<%*
// This needs to be at the end as this interacts with tp, effecting tp.move. 
  await tp.user.createAnimationTask(dv,tp,script,weekNum,dueDate,language);
  await tp.user.createRecordTask(dv,tp,script,weekNum,dueDate,language);
  await tp.user.createScriptTask(dv,tp,script,weekNum,dueDate,language);
  await tp.user.createSketchTask(dv,tp,script,weekNum,dueDate,language);
  await tp.user.createEditingTask(dv,tp,script,weekNum,dueDate,language);

  await tp.user.createTaskManagementFile(dv,tp,script,weekNum,dueDate,language);
  %>
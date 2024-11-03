
`<%*
let dv = app.plugins.plugins.dataview.api;
const [language,weekNumDefault] = await tp.user.languageData(dv,tp); 
const weekNum = await tp.system.prompt("What week is this for?",`${weekNumDefault}`);

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


<%tp.file.move(`Scripts/Week_${weekNum} ${language}/Scripts/${script}(${language})`)%>

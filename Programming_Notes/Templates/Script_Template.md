
`<%*
let dv = app.plugins.plugins.dataview.api;
const [language,weekNumDefault] = await tp.user.languageData(dv,tp); 
const weekNum = await tp.system.prompt("What week is this for?",`${weekNumDefault}`);

const script = await tp.system.prompt("Name of script:");
tR ="---\n"
tR += `fileClass: Script\n`
tR += `ScriptStatus: Not Started\n`
tR += "ParagraphNum: 1\n"
tR += "DraftNum: 1\n"
tR += "complete: false\n"
tR += "Links: \n"
tR += "---"
-%>

# Script Goal

## Key points


<%tp.file.move(`Scripts/Week_${weekNum} ${language}/Scripts/${script}(${language})`)%>

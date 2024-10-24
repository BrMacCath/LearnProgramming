
`<%*
let dv = app.plugins.plugins.dataview.api;
let location = 'Background/Choices/ProgrammingChoices.md';
let content = await dv.io.load(location);
let temp = `${content}`.split("\n");
let langs =[];
for(i=0; i < temp.length;i++){
	langs.push(temp[i])
}

const language = await tp.system.suggester(langs,langs,true,"What language?");

const languageWeekNumLocation = `Background/Choices/${language}WeekNum.md`;
const weekNumDefault = await dv.io.load(languageWeekNumLocation);
const weekNum = await tp.system.prompt("What week is this for?",`${weekNumDefault}`);

const script = await tp.system.prompt("Name of script:");
tR ="---\n"
tR += `fileClass: Script\n`
tR += `ScriptStatus: Not Started\n`
tR += "ParagraphNum: 1\n"
tR += "DraftNum: 1\n"
tR += "Links: \n"
tR += "---"
-%>

# Script Goal

## Key points


<%tp.file.move(`Scripts/Week_${weekNum} ${language}/Scripts/${script}(${language})`)%>

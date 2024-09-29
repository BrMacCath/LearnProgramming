

<%*
const dv = app.plugins.plugins["dataview"].api;
//await new Promise(r => setTimeout(r, 300));


const text3 = await tp.file.include('[[Background/Templates/New_Week_Template.md]]');

let location = 'Background/Choices/ProgrammingChoices.md';
const content = await dv.io.load(location);
const temp = `${content}`.split("\n");
let langs =[];
for(i=0; i < temp.length;i++){
	langs.push(temp[i]);
}

const language = await tp.system.suggester(langs,langs,true,"What language?");

// This is to figure out what week we are working with.
const languageWeekNumLocation = `Background/Choices/${language}WeekNum.md`;
const weekNumDefault = await dv.io.load(languageWeekNumLocation);
const newNum = Number(weekNumDefault) + 1;




const name = `Week_${newNum}`;

const folder = `Scripts/Week_${newNum} ${language}`;

await tp.file.create_new(`${text3}`,name + ` ${language}(${language})`,true,folder);
const tFile = tp.file.find_tfile(languageWeekNumLocation);
await app.vault.modify(tFile, `${newNum}`);
await tp.file.create_new("",name + ` ${language} Publish`,true,folder)
// This prevents an untitled file from being created. Need another way to do this.
%>



<%*
const dv = app.plugins.plugins["dataview"].api;
//await new Promise(r => setTimeout(r, 300));


const text3 = await tp.file.include('[[Background/Templates/New_Week_Template.md]]');

const [language,weekNumDefault] = await tp.user.languageData(dv,tp);

const newNum = Number(weekNumDefault) + 1;
let text ="---\n";
text += `fileClass: Overview\nlanguage: ${language}\nweekNum: ${newNum}\n---`;
const name = `Week_${newNum}`;
const folder = `Scripts/Week_${newNum} ${language}`;

await tp.file.create_new(`${text}`,name + ` ${language}(${language})`,true,folder);
const tFile = tp.file.find_tfile(languageWeekNumLocation);
await app.vault.modify(tFile, `${newNum}`);
await tp.file.create_new("",name + ` ${language} Publish`,true,folder)
// This prevents an untitled file from being created. Need another way to do this.
%>

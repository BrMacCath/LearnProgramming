

<%*
const dv = app.plugins.plugins["dataview"].api;

const text3 = await tp.file.include('[[Background/Templates/New_Week_Template.md]]');

const [language,weekNumDefault,languageWeekNumLocation] = await tp.user.languageData(dv,tp);

const newNum = Number(weekNumDefault) + 1;


// Need to create the files for the new week.

// Create the File for the start of the publish file.

await tp.user.create_publish_heading(tp,language,newNum)

// Update the number file.

const tFile = tp.file.find_tfile(languageWeekNumLocation);
await app.vault.modify(tFile, `${newNum}`);

// Create the publish file.

await tp.user.create_publish_file(tp,language,newNum)

// Create the thoughts file.

await tp.user.create_thoughts_file(tp,language,newNum)

%>

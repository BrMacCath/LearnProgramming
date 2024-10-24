
<%*
const dv = app.plugins.plugins["dataview"].api;
const language = "Rust";
// This is to put the start of the welcome file into what we are doing.

const languageWeekNumLocation = `Background/Choices/RustWeekNum.md`;
const weekNum = Number(await dv.io.load(languageWeekNumLocation));
const taskChoices = (await dv.io.load("Background/Choices/TaskChoices.md")).split("\n");
// Here for each week we want to look at the 
// finished tasks and move them into the complete folder.
// This may be better as a forEach?
for(let i = 1; i <weekNum+1;i++){
	let folder =`Scripts/Week_${i} ${language}/Tasks`;
	const query = `TABLE WITHOUT ID
	file.link AS Note
	FROM "${folder}"`;
	let text = "";
	text = await tp.file.include(`[[Scripts/Week_${i} ${language}/Week_${i} Rust(Rust)]]`);
	
	const filename = `Scripts/Week_${i} ${language}/Week_${i} ${language} Publish.md`;
	
	await Promise.all(taskChoices.map(async (Choice) => {
		const queryChoice =`TABLE WITHOUT ID
		file.link As ${Choice}-Task, file.taskStatus As Status, file.frontmatter.due_date As Due-Date
		FROM "${folder}"
		WHERE file.taskStatus != "Done"
		SORT file.link DESC`;
		const queryOutput = await dv.queryMarkdown(queryChoice);
		text += "\n\n" +queryOutput.value;
	}));
	
	const queryChoice =`TABLE WITHOUT ID
	file.link As Finished-Task, file.taskStatus As Status, file.frontmatter.taskType As Task-Type
	FROM "${folder}"
	WHERE file.taskStatus = "Done"
	SORT file.link DESC`;
	const queryOutput = await dv.queryMarkdown(queryChoice);
	text += "\n\n" +queryOutput.value;
	const tFile = tp.file.find_tfile(filename);
	await app.vault.modify(tFile, text);
}


%>

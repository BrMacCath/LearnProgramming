<%*
// // This is updating the welcome part.
const dv = app.plugins.plugins["dataview"].api;

// This is to put the start of the welcome file into what we are doing.
const filenameWelcome = "Welcome";
// Once I start using other languages, I need to change the from so that
// It allows for each language. It may have to be a Join with OR call
const welcomeQuery = `TABLE WITHOUT ID
file.link AS Note, dateformat(file.mtime, "ff") AS Modified,file.frontmatter.fileClass AS Language
FROM "Rust"
SORT file.mtime desc
LIMIT 5`;


const tFileWelcome = tp.file.find_tfile(filenameWelcome);
const queryOutput = await dv.queryMarkdown(welcomeQuery);
const text = await tp.file.include('[[WelcomeStart]]');
let welcomeText = text + "\n\n" + queryOutput.value;
// write query output to file
await app.vault.modify(tFileWelcome, welcomeText);
// This prevents an untitled file from being created. Need another way to do this.



// This is the update Tasks part.
let location = 'Background/Choices/ProgrammingChoices.md';
const content = await dv.io.load(location);
const temp = `${content}`.split("\n");
let langs =[];
for(i=0; i < temp.length;i++){
	langs.push(temp[i]);
}

//const language = await tp.system.suggester(langs,langs,true,"What language?");
const language = "Rust";
// This is to figure out what week we are working with.
const languageWeekNumLocation = `Background/Choices/${language}WeekNum.md`;
const weekNum = Number(await dv.io.load(languageWeekNumLocation));

// Here for each week we want to look at the 
// finished tasks and move them into the complete folder.
// This may be better as a forEach?
for(let i = 1; i <weekNum+1;i++){
	let folder =`Scripts/Week_${i} ${language}/Tasks/NotFinished`;
	let newFolder = `Scripts/Week_${i} ${language}/Tasks/Complete/`
	const filename = `Scripts/Week_${i} ${language}/Scripts/Week_${i} ${language} Publish`;
	const query = `TABLE WITHOUT ID
	file.link AS Note
	FROM "${folder}"`;
	
	const queryOutput = await dv.queryMarkdown(query);
	
	let tempStr = queryOutput.value.replace("\n|","");
	
	const taskPages = dv.pages(`"${folder}"`);
	
	taskPages.forEach( p =>{
		const taskStatus = p.file.frontmatter.taskStatus;
		if(taskStatus =="Done"){
		
		const tFile = tp.file.find_tfile(p.file.name);
		tp.file.move(newFolder + p.file.name,tFile);
		}
	} )
}

//const language = "Rust";
// This is to put the start of the welcome file into what we are doing.


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
	text = await tp.file.include(`[[Scripts/Week_${i} ${language}/Week_1 Rust(Rust)]]`);
	
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
	console.log(text);
	console.log(tFile);
	await app.vault.modify(tFile, text);
}

%>
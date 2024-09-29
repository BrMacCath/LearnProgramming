<%*
// First get the number of weeks we have for the language we are talking about.
const dv = app.plugins.plugins["dataview"].api;


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

-%>
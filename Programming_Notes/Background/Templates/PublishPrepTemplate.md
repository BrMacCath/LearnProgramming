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


// Now we need to let the Current weeks Scripts
let location = 'Background/Choices/ProgrammingChoices.md';
const content = await dv.io.load(location);
const temp = `${content}`.split("\n");
let langs =[];
for(i=0; i < temp.length;i++){
	langs.push(temp[i]);
}


// write query output to file

// This prevents an untitled file from being created. Need another way to do this.



// This is the update Tasks part.


//const language = await tp.system.suggester(langs,langs,true,"What language?");

langs.forEach( async (language) =>   {

	const taskChoices = (await dv.io.load("Background/Choices/TaskChoices.md")).split("\n");
	const languageWeekNumLocation = `Background/Choices/${language}WeekNum.md`;
	const weekNum = Number(await dv.io.load(languageWeekNumLocation));


	// Here for each week we want to look at the 
	// finished tasks and move them into the complete folder.
	// This may be better as a forEach?
	for(let i = 1; i <weekNum+1;i++){
		const filename = `Scripts/Week_${i} ${language}/Week_${i} ${language} Publish.md`;
		
		const weekCheckFinalised = await dv.io.load(filename); 
		if (weekCheckFinalised.finalised){
			continue;
		}
				
		let folder =`Scripts/Week_${i} ${language}/Tasks`;
		const query = `TABLE WITHOUT ID
		file.link AS Note
		FROM "${folder}"`;
		let text = "";
		text = await tp.file.include(`[[Scripts/Week_${i} ${language}/Week_${i} ${language}(${language})]]`);

		let tasksAvailable = false;
		await Promise.all(taskChoices.map(async (Choice) => {
			const queryChoice =`TABLE WITHOUT ID
			file.link As ${Choice}-Task, file.frontmatter.taskStatus As Status, file.frontmatter.due_date As Due-Date
			FROM "${folder}"
			WHERE file.frontmatter.taskStatus != "Done" AND file.frontmatter.taskType = "${Choice}"
			SORT file.link DESC`;
			
			const queryOutput = await dv.queryMarkdown(queryChoice);
			const count = (queryOutput.value.match(/\n/g) || []).length;
			if (count ===2){
				return;
			}
			tasksAvailable = true;
			
			text += "\n\n" +queryOutput.value;
		}));

		let queryLink = "link";

		if (!tasksAvailable){
			// Ask if the week is done.
			const trueFalse = [true,false];
			const finalisedWeek = await tp.system.suggester(trueFalse, trueFalse,true,"Is this week finalised?");
			if (finalisedWeek){
				queryLink = "name";
				text = text.replace("finalised: false","finalised: true");
				text = text.replace("complete: false","complete: true");
				// Replace the Base file too!.
				const tempFilename = `Scripts/Week_${i} ${language}/Week_${i} ${language}(${language}).md`;
				const temptFile =  await tp.file.find_tfile(tempFilename); 
				await app.vault.modify(temptFile,text);
			}
		}

		// Let's add tasks here
		const queryChoice =`TABLE WITHOUT ID
		file.${queryLink} As Finished-Task, file.frontmatter.taskStatus As Status, file.frontmatter.taskType As Task-Type
		FROM "${folder}"
		WHERE file.frontmatter.taskStatus = "Done"
		SORT file.${queryLink} DESC`;
		
		const queryOutput = await dv.queryMarkdown(queryChoice);
		text += "\n\n" +queryOutput.value;
	
		const tFile = tp.file.find_tfile(filename);
		
		// Let's add final draft here.
		// We first add the final draft
		text += "\n\n# Final Draft\n\n";
		// Now we need to get all the current script locations
		const script_folder = `Scripts/Week_${i} ${language}/Scripts`;
	
		const ordered_scripts =dv.pages(`"${script_folder}"`).sort(p =>p.SectionNum);

		await Promise.all(ordered_scripts.map(async (script)=>
		{
			
			if(script.ScriptStatus != "Done"){
				text += `The script: [[${script.file.name}]] is incomplete.\n`;
				return;
			} 
			
			const otherFile =script.file.folder + "/"+script.file.name+"."+script.file.ext;
			
			// This is where the issues lie.
			const script_file = await dv.io.load(otherFile);

			const ind = script_file.indexOf("# Final Draft");
			
			text += script_file.slice(ind+13)+"\n";
		}))


		await app.vault.modify(tFile, text);
	}

	
	// This is to figure out what week we are working with.
	
	welcomeText = welcomeText + `\n\n# ${language} Script this week\n\n[[Week_${weekNum} ${language} Publish| Week ${weekNum} in ${language}]]\n\n![[Week_${weekNum} ${language} Publish#Script Goald]] `;
	
	await app.vault.modify(tFileWelcome, welcomeText);
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
	
	
	
})


%>

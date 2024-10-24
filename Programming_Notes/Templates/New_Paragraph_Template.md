
<%*
// Our goal is to get a paragraph from the file we are examining. 
let dv = app.plugins.plugins.dataview.api;
let location = 'Background/Choices/ProgrammingChoices.md';
const content = await dv.io.load(location);
const langs = `${content}`.split("\n");
const language = await tp.system.suggester(langs,langs,true,"What language?");
const languageWeekNumLocation = `Background/Choices/${language}WeekNum.md`;
const weekNum = Number(await dv.io.load(languageWeekNumLocation));
const script_location = `Scripts/Week_${weekNum} ${language}/Scripts`;
const scripts = dv.pages(`"${script_location}"`);

const script = await tp.system.suggester((script) =>script.file.name,scripts,true,"What language?");

let text=await dv.io.load(script.file.folder + "/" + script.file.name +".md");
console.log(text);
const paragraphSeparator = await(dv.io.load("Background/Background Data/Paragraph Separator.md"));
if(script.DraftNum ==1){
// In this case we need to get each paragraph
	const paragraphNum =script.ParagraphNum;
	const paragraphs = (await dv.io.load("Background/Choices/DraftNumChoices.md")).split("\n");
	let completeDraft = "\n\n## Completed First Draft\n\n";
	let newDraft ="\n\n# Second Draft\n\n";
	
	for (i=0;i<paragraphNum;i++){
	
		const section_name = script.file.folder + "/" + script.file.name +"## " + paragraphs[i] +" Paragraph";
		let paragraph_sentences = (await tp.file.include(`[[${section_name}]]`)).split("\n").filter((t)=> t!="" ).pop().split(".");
		completeDraft += paragraph_sentences.join(".") +"\n\n";
		newDraft += paragraph_sentences.join(".\n> \n\n");
		newDraft += paragraphSeparator;
	}
	
	
	 text += completeDraft +newDraft;
	 const draftText = "DraftNum: "+ `${script.DraftNum}`;
	 console.log(draftText);
	 text = text.replace(`DraftNum: ${script.DraftNum}`,`DraftNum: ${script.DraftNum+1}`)
	console.log(text);
	const tFile = tp.file.find_tfile(script.file.name);
	await app.vault.modify(tFile,text);

}else{
	const draftChoices = (await dv.io.load("Background/Choices/DraftNumChoices.md")).split("\n");
	const draftName = `# ${draftChoices[script.DraftNum-1]} Draft`;
	console.log(draftName);
	const draft_location = script.file.folder + "/" + script.file.name +draftName;
	let draft = (await tp.file.include(`[[${draft_location}]]`)).slice(draftName.length);
	console.log(draft);
	const sections = draft.split(paragraphSeparator).filter((t)=> t!="");
	console.log(sections);
	let paragraphs = [];
	sections.forEach((section) =>{
		let sentences = section.split("\n").filter( (t) => t[0]== ">" ).filter( (t) => t != "> " );
		console.log(sentences);
		console.log(sentences[0][0]);
		sentences = sentences.map( (sentence) => sentence.slice(2) );
		console.log(sentences);
		paragraphs.push(sentences.join(". ") )
	})
	console.log(paragraphs);

	// Here I will make the complete Draft
	text += `\n\n## Complete ${draftChoices[script.DraftNum-1]} Draft\n\n` + paragraphs.join("\n\n");
	

	// Now we will add the next Draft
	text += `\n\n # ${draftChoices[script.DraftNum]} Draft\n\n`;
	paragraphs.forEach((paragraph) => {
		const sentences = paragraph.split(".");
		text += sentences.join("\n> \n\n") +"\n> "+ paragraphSeparator;
	
	} 
	)
	text = text.replace(`DraftNum: ${script.DraftNum}`,`DraftNum: ${script.DraftNum+1}`);
	console.log(text);
	const tFile = tp.file.find_tfile(script.file.name);
	await app.vault.modify(tFile,text);

	}
%>

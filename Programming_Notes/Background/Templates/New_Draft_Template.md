
<%*
// Our goal is to get a paragraph from the file we are examining. 
let dv = app.plugins.plugins.dataview.api;

const [language,weekNum] = await tp.user.languageData(dv,tp); 

let [script, text, paragraphSeparator] = await tp.user.scriptData(dv, tp, weekNum, language);

if(script.DraftNum ==1){
	tp.user.convertFirstDraft(dv, tp, script, paragraphSeparator, text);

}else{
	const draftChoices = (await dv.io.load("Background/Choices/DraftNumChoices.md")  ).split("\n");
	console.log(5);
	const paragraphs = await tp.user.convertRewriteToParagraphs(dv,tp,script, paragraphSeparator,draftChoices);
	// Here I will make the complete Draft
	text += `\n\n## Complete ${draftChoices[script.DraftNum-1]} Draft\n\n` + paragraphs.join(".\n\n");
	
	// Now we will add the next Draft
	text += `\n\n# ${draftChoices[script.DraftNum]} Draft\n\n`;
	text = text.replace(`DraftNum: ${script.DraftNum}`,`DraftNum: ${script.DraftNum+1}`);
	paragraphs.forEach((paragraph) => {
		const sentences = paragraph.split(".");
		text += sentences.join(".\n> \n\n")+ "\n> \n\n"+ paragraphSeparator;
	} 
	)

	
	const tFile = tp.file.find_tfile(script.file.name);
	await app.vault.modify(tFile,text);


	}


%>

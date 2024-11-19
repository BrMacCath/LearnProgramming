
<%*

const dv = app.plugins.plugins["dataview"].api;
const [language,weekNum] = await tp.user.languageData(dv,tp); 
const scriptName =`Scripts/Week_${weekNum} ${language}/Week_${weekNum} Thoughts(${language}).md`
const script_num = dv.page(scriptName).DraftNum
if (script_num ==1){
	await tp.user.convertFirstDraftThoughs(dv, tp, weekNum, language, scriptName)
}else{
// Create new Draft.
	await tp.user.convertThoughtsDraft(dv, tp, weekNum, language, scriptName)
}

%>
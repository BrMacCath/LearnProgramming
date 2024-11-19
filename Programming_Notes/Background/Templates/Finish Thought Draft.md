<%*

const dv = app.plugins.plugins["dataview"].api;
const [language,weekNum] = await tp.user.languageData(dv,tp); 
const scriptName =`Scripts/Week_${weekNum} ${language}/Week_${weekNum} Thoughts(${language}).md`
const script_num = dv.page(scriptName).DraftNum
if (script_num <2){
	console.error("You need to make a revision before finishing this draft.")
}
await tp.user.finishDraftThoughts(dv, tp, weekNum, language, scriptName)
%>
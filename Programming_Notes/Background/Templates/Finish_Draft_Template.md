<%*
// Our goal is to get a paragraph from the file we are examining. 
let dv = app.plugins.plugins.dataview.api;

const [language,weekNum] = await tp.user.languageData(dv,tp);

let [script, text, paragraphSeparator] = await tp.user.scriptData(dv, tp, weekNum, language);

const draftChoices = (await dv.io.load("Background/Choices/DraftNumChoices.md")  ).split("\n");

const paragraphs = await tp.user.convertRewriteToParagraphs(dv,tp,script, paragraphSeparator,draftChoices);
text = await tp.user.finishScriptMetadata(dv,tp,text);
text += `\n\n# Final Draft\n\n` + paragraphs.join("\n\n");
const tFile = tp.file.find_tfile(script.file.name);
await app.vault.modify(tFile,text);

%>
<%*
let dv = app.plugins.plugins.dataview.api;
let bin = dv.pages(`"Background/Trash"`);
console.log(bin);
bin.forEach( (trash) =>{
const tFile = tp.file.find_tfile(trash.file.name);
console.log(trash);
app.vault.trash(tFile);
} )
tp.file.move("Background/Trash/clean_up.md")
%>
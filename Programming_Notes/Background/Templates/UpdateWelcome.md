
<%*
const dv = app.plugins.plugins["dataview"].api;

// This is to put the start of the welcome file into what we are doing.
const filename = "Welcome";
// Once I start using other languages, I need to change the from so that
// It allows for each language. It may have to be a Join with OR call
const query = `TABLE WITHOUT ID
file.link AS Note, dateformat(file.mtime, "ff") AS Modified,file.frontmatter.fileClass AS Language
FROM "Rust"
SORT file.mtime desc
LIMIT 5`;


const tFile = tp.file.find_tfile(filename);
const queryOutput = await dv.queryMarkdown(query);

const text = await tp.file.include('[[WelcomeStart]]');
let welcomeText = text + "\n\n" + queryOutput.value;
// write query output to file
await app.vault.modify(tFile, welcomeText);
// This prevents an untitled file from being created. Need another way to do this.



%>

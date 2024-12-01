<%*
// // This is updating the welcome part.
const dv = app.plugins.plugins["dataview"].api;
await tp.user.publishPrep(dv,tp);
// This is to put the start of the welcome file into what we are doing.
const filenameWelcome = "Welcome";
// Once I start using other languages, I need to change the from so that
// It allows for each language. It may have to be a Join with OR call

const text = await tp.file.include('[[WelcomeStart]]');





// Now we need to let the Current weeks Scripts
langs = await tp.user.allLanguages(dv)



const welcomeQuery = `TABLE WITHOUT ID
file.link AS Note, dateformat(file.mtime, "ff") AS Modified,file.frontmatter.fileClass AS Language
FROM "Rust"
SORT file.mtime desc
LIMIT 5`;

%>

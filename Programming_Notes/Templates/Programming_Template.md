``<%*
let dv = app.plugins.plugins.dataview.api;
let location = 'Background/Choices/ProgrammingChoices.md'
let content = await dv.io.load(location)
let temp = `${content}`.split("\n")
let langs =[]
for(i=0; i < temp.length;i++){
	langs.push(temp[i])
}
const language = await tp.system.suggester(langs,langs,true,"What language?");
let location2 = 'Background/Choices/PurposeChoices.md'
let content2 = await dv.io.load(location2)
let temp2 = `${content2}`.split("\n")
let purp =[]
for(i=0; i < temp2.length;i++){
	purp.push(temp2[i])
}
const purpose = await tp.system.suggester(purp,purp,true,"What Purpose?");

const topic = await tp.system.prompt("Name of Topic:");
tR ="---\n"
tR += `fileClass: ${language}\n`
tR += `Purpose: ${purpose}\n`
tR += "Links: \n"
tR += "---"
-%>

# Purpose


# Links


[[Style(Rust)|Style]]


<%tp.file.move(`${language}/${purpose}/${topic}(${language})`)%>

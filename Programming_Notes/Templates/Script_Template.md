
`<%*
let dv = app.plugins.plugins.dataview.api;
let location = 'Background/Choices/ProgrammingChoices.md'
let content = await dv.io.load(location)
let temp = `${content}`.split("\n")
let langs =[]
for(i=0; i < temp.length;i++){
	langs.push(temp[i])
}
const language = await tp.system.suggester(langs,langs,true,"What language?");
const script = await tp.system.prompt("Name of script:");
tR ="---\n"
tR += `fileClass: Scripts, Programming\n`
tR += "Links: \n"
tR += "---"
-%>

# Script Goal

## Key points


<%tp.file.move(`Scripts/${script}/${script}(${language})`)%>

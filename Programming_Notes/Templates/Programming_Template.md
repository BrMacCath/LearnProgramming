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
const topic = await tp.system.prompt("Name of Topic:");
tR ="---\n"
tR += `fileClass: ${language}, Programming\n`
tR += "Links: \n"
tR += "---"
-%>

# Purpose


# Links

[[main(Rust)|main]]
[[Macro(Rust)|Macro]]
[[Ending Sentences(Rust)|Ending Sentences]]
[[Style(Rust)|Style]]


<%tp.file.move(`${language}/${topic}(${language})`)%>

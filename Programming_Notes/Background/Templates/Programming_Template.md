``<%*
let dv = app.plugins.plugins.dataview.api;
const [language,weekNumDefault] = await tp.user.languageData(dv,tp); 
let location2 = `Background/Choices/${language}Choices.md`
let content2 = await dv.io.load(location2)
let purp = `${content2}`.split("\n")

const purpose = await tp.system.suggester(purp,purp,true,"What Purpose?");

const topic = await tp.system.prompt("Name of Topic:");
tR ="---\n"
tR += `fileClass: ${language}\n`
tR += `Purpose: ${purpose}\n`
tR += "---"
-%>

# Purpose





# Links

[[<% purpose %>(<% language %>)|<% purpose %>]]


<%tp.file.move(`${language}/${purpose}/${topic}(${language})`)%>

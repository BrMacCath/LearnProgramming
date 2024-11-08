`<%*
let dv = app.plugins.plugins.dataview.api;
const [language,weekNumDefault] = await tp.user.languageData(dv,tp); 
const project = await tp.system.prompt("Name of Project:");
tR ="---\n"
tR += `fileClass: ${language}\n`
tR += "---"
-%>

# Purpose


# Programming features used



<%tp.file.move(`${language}/Projects/${project}/${project}(${language})`)%>

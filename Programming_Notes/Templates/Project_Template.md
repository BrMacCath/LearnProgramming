`<%*
let dv = app.plugins.plugins.dataview.api;
const [language,weekNumDefault] = await tp.user.languageData(dv,tp); 
const project = await tp.system.prompt("Name of Project:");
tR ="---\n"
tR += `fileClass: ${language}\n`
tR += "---"
-%>

# Purpose


# Links

[[main(Rust)|main]]
[[Macro(Rust)|Macro]]
[[Ending Sentences(Rust)|Ending Sentences]]
[[Style(Rust)|Style]]


<%tp.file.move(`${language}/Projects/${project}/${project}(${language})`)%>

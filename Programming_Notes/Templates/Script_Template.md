`<%*
let dv = app.plugins.plugins.dataview.api;
const folder = "Scripts"
const script = await tp.system.prompt("Name of Script:");
tR ="---\n"
tR += `fileClass: Script$
tR += "Links: \n"
tR += "---"
-%>

# Script Goal

## Key points



<%tp.file.move(`${folder}\${script}`)%>

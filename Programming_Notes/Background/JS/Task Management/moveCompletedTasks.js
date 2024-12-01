async function my_function(dv, tp, language, i) {
  let folder = `${tp.user.notFinishedTasksFolder(tp, language, i)}`;
  let newFolder = `${tp.user.completeTasksFolder(tp, language, i)}`;
  const filename = `${tp.user.publishPath(tp, language, i)}`;
  const query = `TABLE WITHOUT ID
  file.link AS Note
  FROM "${folder}"`;

  const queryOutput = await dv.queryMarkdown(query);

  let tempStr = queryOutput.value.replace("\n|", "");

  const taskPages = dv.pages(`"${folder}"`);

  taskPages.forEach((p) => {
    const taskStatus = p.file.frontmatter.taskStatus;
    if (taskStatus == "Done") {
      const tFile = tp.file.find_tfile(p.file.name);
      tp.file.move(newFolder + "/" + p.file.name, tFile);
    }
  });
}
module.exports = my_function;

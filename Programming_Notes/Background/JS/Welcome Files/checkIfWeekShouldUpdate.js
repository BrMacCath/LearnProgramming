async function my_function(dv, tp, language, i) {
  const filename = `${tp.user.overviewPath(tp, language, i)}.md`;
  const tempFile = await dv.page(filename);
  if (tempFile == undefined) {
    return false;
  }

  const weekCheckFinalised = (await dv.page(filename)).file.frontmatter
    .finalised;

  if (weekCheckFinalised) {
    return false;
  }
  return true;
}
module.exports = my_function;

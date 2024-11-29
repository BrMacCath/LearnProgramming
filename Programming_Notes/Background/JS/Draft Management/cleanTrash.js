async function my_function(dv, tp, vault) {
  bin = dv.pages(`"Background/Trash"`);
  bin.forEach(async (trash) => {
    const tFile = tp.file.find_tfile(trash.file.name);
    await vault.trash(tFile);
  });
}
module.exports = my_function;

---
cssclasses:
  - dashboard
---
# Rust YouTube

```dataviewjs

const {fieldModifier: f} = this.app.plugins.plugins["metadata-menu"].api;

  

dv.table(["Project", "Task Type", "Priority", "Checked", "Task File"],

await Promise.all(dv.pages('"Scripts"').where(p =>(p.fileClass == "Task" && p.taskStatus != "Done")).map(async p => [

    p.file.link,

	p.file.frontmatter.fileClass,

    f(dv,p, "taskType"),

    await f(dv,p, "taskStatus"),

    await p.file.tasks.section])

))

```


# Recent Changes in Notes
```dataview
TABLE WITHOUT ID
file.link AS Note, dateformat(file.mtime, "ff") AS Modified,file.frontmatter.fileClass AS Language
FROM "Rust"
SORT file.mtime desc
LIMIT 5
```


# Last few projects in Rust
```dataview
TABLE WITHOUT ID
file.link AS Note, dateformat(file.mtime, "ff") AS Modified
FROM "Rust/Projects"
SORT file.mtime desc
LIMIT 5
```



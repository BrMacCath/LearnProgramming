---
cssclasses:
  - dashboard
rust_num: 2
---
w**
:sw
current schedule vs ideal schedule
- add something that makes you fee;\l alive.
- trim time for bad tasks
Identify what needs to change
Implement changes
Practice gratitude.tj

:s
# testtt

## sdgsg

<!-- Table of Contents default-->
# Table of Contents
1. [[Home# testtt|testtt]]
	1. [[Home## sdgsg|sdgsg]]
2. [[Home# Things to fix|Things to fix]]
	1. [[Home## When does this work|When does this work]]
	2. [[Home## Test the update|Test the update]]
	3. [[Home## Aeatyumryu|Aeatyumryu]]
3. [[Home# Rust YouTube|Rust YouTube]]
4. [[Home# Recent Changes in Notes|Recent Changes in Notes]]

<!-- End of TOC -->

# Things to fix

Make a citation command that could work in obsidian and latex. Something like this^[test tjos os si] 
## When does this work
## Test the update

## Aeatyumryu

ry


Test^[This] does it repeat^[This]
Active leaf change
Okay
# Rust YouTube

```dataviewjs

const {fieldModifier: f} = this.app.plugins.plugins["metadata-menu"].api;

  

dv.table(["Project", "Task Type", "Priority", "Checked", "Task File"],

await Promise.all(dv.pages('"Rust Scripts"').where(p =>(p.fileClass == "Task" && p.taskStatus != "Done")).sort(p => p.taskType).map(async p => [

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

```dataview
TABLE WITHOUT ID
file.link AS Note, dateformat(file.mtime, "ff") AS Modified,file.frontmatter.taskType AS "Task Type"
FROM "Rust Scripts"
WHERE file.frontmatter.fileClass = "Task"
SORT file.mtime desc
LIMIT 5
```

<%*
await app.vault.create("test.tex","Test")
-%>
This[^1] With[^1]


[^1]: This is a check
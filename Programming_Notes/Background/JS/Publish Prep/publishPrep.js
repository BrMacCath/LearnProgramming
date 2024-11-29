async function my_function(dv, tp) {
  const filenameWelcome = "Welcome";
  const text = await tp.file.include("[[WelcomeStart]]");
  allLangs = await tp.user.allLanguages(dv);
  console.log(allLangs);
  languageText = [];
  allLangs.forEach(async (language) => {
    const taskChoices = (
      await dv.io.load("Background/Choices/TaskChoices.md")
    ).split("\n");
    const languageWeekNumLocation = `Background/Choices/${language}WeekNum.md`;
    const weekNum = Number(await dv.io.load(languageWeekNumLocation));

    // Here for each week we want to look at the
    // finished tasks and move them into the complete folder.
    // This may be better as a forEach?
    for (let i = 1; i < weekNum + 1; i++) {
      const filename = `${tp.user.thoughtsPath(tp, language, i)}.md`;
      console.log((await dv.page(filename))[0]);
      const weekCheckFinalised = (await dv.page(filename)).file.frontmatter
        .finalised;

      if (weekCheckFinalised) {
        continue;
      }
      let folder = `${tp.user.taskFolderPath(tp, language, i)}`;
      const query = `TABLE WITHOUT ID
		file.link AS Note
		FROM "${folder}"`;

      let text2 = await tp.file.include(
        `[[${tp.user.overviewPath(tp, language, i)}]]`
      );
      let [queryChoice, text] = await tp.user.finishedTasksDataviewQuery(
        dv,
        tp,
        language,
        taskChoices,
        text2
      );

      const queryOutput = await dv.queryMarkdown(queryChoice);
      text += "\n\n" + queryOutput.value;

      const tFile = tp.file.find_tfile(filename);

      // Let's add final draft here.
      // We first add the final draft
      text += "\n\n# Final Draft\n\n";
      // Now we need to get all the current script locations

      const script_folder = tp.user.scriptFolderPath(tp, language, i);
      console.log(script_folder);
      const ordered_scripts = dv
        .pages(`"${script_folder}"`)
        .sort((p) => p.SectionNum);
      console.log(ordered_scripts);
      await Promise.all(
        ordered_scripts.map(async (script) => {
          //text += tp.user.finalDraftText(script)
          if (script.ScriptStatus != "Done") {
            text += `The script: [[${script.file.name}]] is incomplete.\n`;
            return;
          }

          const otherFile =
            script.file.folder + "/" + script.file.name + "." + script.file.ext;

          // This is where the issues lie.
          const script_file = await dv.io.load(otherFile);

          const ind = script_file.indexOf("# Final Draft");

          text += script_file.slice(ind + 13) + "\n";
        })
      );

      text += tp.user.createMermaidGraph(ordered_scripts, language);

      // Create data about thought file
      const scriptName = `${tp.user.thoughtsPath(tp, language, i)}.md`;
      const thought_script = dv.page(scriptName);
      if (thought_script.complete) {
        const temp_thought_text_location = `${tp.user.thoughtsPath(
          tp,
          language,
          i
        )}# Final Draft`;
        const thought_text = await tp.file.include(
          `[[${temp_thought_text_location}]]`
        );
        const index_start = thought_text.indexOf("\n");
        text +=
          "\n\n# This weeks Thoughts\n\n" + thought_text.slice(index_start + 1);
      }

      await app.vault.modify(tFile, text);
    }

    // This is to figure out what week we are working with.

    welcomeText =
      welcomeText +
      `\n\n# ${language} Script this week\n\n[[Week ${weekNum} ${language} Publish| Week ${weekNum} in ${language}]]\n\n![[Week ${weekNum} ${language} Publish#Script Goals]] `;

    // Now we also need to add the current thoughts
    const scriptName = `${tp.user.thoughtsPath(tp, language, weekNum)}.md`;
    const thought_script = dv.page(scriptName);
    if (thought_script.complete) {
      const temp_thought_text_location = `${tp.user.thoughtsPath(
        tp,
        language,
        weekNum
      )}# Final Draft`;
      const thought_text = await tp.file.include(
        `[[${temp_thought_text_location}]]`
      );
      const index_start = thought_text.indexOf("\n");
      welcomeText +=
        "\n\n# This weeks Thoughts\n\n" + thought_text.slice(index_start + 1);
    } else {
      const draft_num = thought_script.DraftNum;
      if (draft_num <= 2) {
        const temp_thought_text_location = `${tp.user.thoughtsPath(
          tp,
          language,
          weekNum
        )}# First Draft`;
        const thought_text = await tp.file.include(
          `[[${temp_thought_text_location}]]`
        );
        const index_start = thought_text.indexOf("\n");
        welcomeText +=
          "\n\n# Current Thoughts\n\n" + thought_text.slice(index_start + 1);
      } else {
        if (thought_script.complete) {
        } else {
          let temp_text_str = `${tp.user.stringifyNumber(draft_num - 1)} Draft`;

          temp_tex_str =
            temp_text_str.charAt(0).toUpperCase() + temp_text_str.substring(1);
          const temp_thought_text_location = `${tp.user.thoughtsPath(
            tp,
            language,
            weekNum
          )}# ${temp_text_str}$`;
          const thought_text = await tp.file.include(
            `[[${temp_thought_text_location}]]`
          );
          const index_start = thought_text.indexOf("\n");
          welcomeText +=
            "\n\n# Current Thoughts\n\n" + thought_text.slice(index_start + 1);
        }
      }
    }

    await app.vault.modify(tFileWelcome, welcomeText);
    // Here for each week we want to look at the
    // finished tasks and move them into the complete folder.
    // This may be better as a forEach?
    for (let i = 1; i < weekNum + 1; i++) {
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
          tp.file.move(newFolder + p.file.name, tFile);
        }
      });
    }

    //const language = "Rust";
    // This is to put the start of the welcome file into what we are doing.
  });
}
module.exports = my_function;

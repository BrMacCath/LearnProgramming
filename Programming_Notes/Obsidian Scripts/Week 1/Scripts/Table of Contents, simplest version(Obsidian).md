---
fileClass: Script
ScriptStatus: Done
ParagraphNum: 1
due_date: 12-09-2024
DraftNum: 2
complete: true
SectionNum: 2
---
# Script Goal

# Sources


## Key points

- take a page.
- Frontmatter and content.
- Need to split the 
# First Draft
Topic: Structure of a page in obsidian
- Structure of the page.
- Structure of the function.

**Sketch**
Content example side by side with how it is converted. (Apply indicate function)


We will begin by examining the structure of a page in obsidian. It consists of two parts, the frontmatter and the content of the file. To examine this we use a picture. The goal of this function is to split the frontmatter and content of the file to place a table of contents between them. Note that the table of contents is generated solely by the content of the file. Therefore we should have a function toc that takes in the contents to generate it. The final output will be combining the original frontmatter followed by the table of contents and then ending with the content of the file.


+---+

Topic: Structure of the table of contents file.
- how to create a table of contents from the file.
- Examine difficulty
- 

So a table of contents file will have the frontmatter that we will temporarily remove and then the main content of the file. Then we need to see that the table of contents can have headings and subheadings that we be nested beneath them respectively. There could be many many subheadings but for the moment we will assume that there can be at most one subheading in order to simplify the task. From here we can start talking about how to build our table of contents. To do we will need to see how to convert out file structure into the data we need.

+---+

Topic: Structure of the table of contents


For the table of contents we want our main headings to be numbered in order. Then any subheadings will also be numbered in order, starting at one for each new section. This means that we want to "forget" the numbering system as we move from different sections of subheadings. We also would like if we add more subheadings in the meantime that the are counted too. In JavaScript that implies we want a function that is applied for each heading to infer data about subheadings. So we want to be able to take headings and create subheadings, pushing down other headings if needed. Note that the tab space will change as we get more subheadings.





## Completed First Draft

We will begin by examining the structure of a page in obsidian. It consists of two parts, the frontmatter and the content of the file. To examine this we use a picture. The goal of this function is to split the frontmatter and content of the file to place a table of contents between them. Note that the table of contents is generated solely by the content of the file. Therefore we should have a function toc that takes in the contents to generate it. The final output will be combining the original frontmatter followed by the table of contents and then ending with the content of the file.

So a table of contents file will have the frontmatter that we will temporarily remove and then the main content of the file. Then we need to see that the table of contents can have headings and subheadings that we be nested beneath them respectively. There could be many many subheadings but for the moment we will assume that there can be at most one subheading in order to simplify the task. From here we can start talking about how to build our table of contents. To do we will need to see how to convert out file structure into the data we need.

For the table of contents we want our main headings to be numbered in order. Then any subheadings will also be numbered in order, starting at one for each new section. This means that we want to "forget" the numbering system as we move from different sections of subheadings. We also would like if we add more subheadings in the meantime that the are counted too. In JavaScript that implies we want a function that is applied for each heading to infer data about subheadings. So we want to be able to take headings and create subheadings, pushing down other headings if needed. Note that the tab space will change as we get more subheadings.



# Second Draft

We will begin by examining the structure of a page in obsidian.
> We will start by examining the structure of a markdown file.

 It consists of two parts, the frontmatter and the content of the file.
> It consists of the frontmatter and the contents of the file.

 To examine this we use a picture. (Just sketch the picture)
> 

 The goal of this function is to split the frontmatter and content of the file to place a table of contents between them.
> We need to split the frontmatter from the content of the file.   

 Note that the table of contents is generated solely by the content of the file.
> The table of contents only applies to the content of the file. We store the frontmatter for later.

 Therefore we should have a function toc that takes in the contents to generate it.
> We also make a function, toc, that takes the content in to generate the table of contents.

 The final output will be combining the original frontmatter followed by the table of contents and then ending with the content of the file.
> The final step will be recreating the file. We start with the frontmatter, which is then followed by the table of contents. Then the content of the file is added back in.



---

So a table of contents file will have the frontmatter that we will temporarily remove and then the main content of the file.
> Now lets examine how the table of contents is generated in more detail.

 Then we need to see that the table of contents can have headings and subheadings that we be nested beneath them respectively.
> Markdown files can have headings and multiple different subheadings. The subheadings will need to be nested beneath their respective headings correctly.

 There could be many many subheadings but for the moment we will assume that there can be at most one subheading in order to simplify the task.
> There could be subheadings of subheadings. We will deal with those later to simplify the task.

 From here we can start talking about how to build our table of contents.
> Let's start talking about how to build our table of contents.

 To do we will need to see how to convert out file structure into the data we need.
> We need to plan how to convert a markdown file into the data we need.



---

For the table of contents we want our main headings to be numbered in order.
> To start we want the main headings to be numbered in order.

 Then any subheadings will also be numbered in order, starting at one for each new section.
> Subheadings should also be numbered in order. The order should restart under each new section.

 This means that we want to "forget" the numbering system as we move from different sections of subheadings.
> This means we should "forget" the numbering system as we move to new sections.

 We also would like if we add more subheadings in the meantime that the are counted too.
>

 In JavaScript that implies we want a function that is applied for each heading to infer data about subheadings.
> This indicates that we want a function to be applied to each heading. From there we can figure out data about the subheadings.

 So we want to be able to take headings and create subheadings, pushing down other headings if needed.
> Structurally, we want to separate the text into its headings. From there we can create subheadings as they are needed.

 Note that the tab space will change as we get more subheadings.
> Note that the number of hashtags changes as we get more subheadings.



---



# Final Draft

We will start by examining the structure of a markdown file. It consists of the frontmatter and the contents of the file. We need to split the frontmatter from the content of the file. The table of contents only applies to the content of the file. We store the frontmatter for later. We also make a function, toc, that takes the content in to generate the table of contents. The final step will be recreating the file. We start with the frontmatter, which is then followed by the table of contents. Then the content of the file is added back in.

Now lets examine how the table of contents is generated in more detail. Markdown files can have headings and multiple different subheadings. The subheadings will need to be nested beneath their respective headings correctly. There could be subheadings of subheadings. We will deal with those later to simplify the task. Let's start talking about how to build our table of contents. We need to plan how to convert a markdown file into the data we need.

To start we want the main headings to be numbered in order. Subheadings should also be numbered in order. The order should restart under each new section. This means we should "forget" the numbering system as we move to new sections. This indicates that we want a function to be applied to each heading. From there we can figure out data about the subheadings. Structurally, we want to separate the text into its headings. From there we can create subheadings as they are needed. Note that the number of hashtags changes as we get more subheadings.
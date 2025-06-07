---
fileClass: Script
ScriptStatus: Done
ParagraphNum: 1
due_date: 12-09-2024
DraftNum: 2
complete: true
SectionNum: 3
---
# Script Goal

## Key points
- Take in a markdown file.
- Split it into frontmatter and content.
- create table of content from content.
- Add the file back in to make this work.
- Then table of content file will be 

# Sources

# First Draft
Topic: Overview of code.
- Break big function down into smaller functions.
- Show how each part will work systematically.


**Sketch**
Have diagrams that will change to focus on different aspects of the code.

We will begin with some psuedo code of the overall structure and then systematically go into the details of the finer details of what is happening. To begin we will have a code that takes in a file and then separates the frontmatter from the content. From here we extract the frontmatter and content from the file. Then we create the Table of contents from the content file. At the end we create a new file by combing all three together and then modify the file they originate from. This is the broad overview so lets now examine how we would create each of the two functions mentioned in our pseudo code. Let's begin with the split file function.

+---+

Topic: Split file function
- Take a file and figure out how to split it into its frontmatter and content.
- Have to recognise the structure of how this is done to make this occur.

So the split function will take a markdown file and return its frontmatter and content but how do we create this function? To create it, we need to examine the structure of the markdown file. If a file has frontmatter, it starts off with "- --".  If this is not how the function starts off, the frontmatter is nothing and the content is the file so we return the following. However, if we do start off with this, how do we know where it ends? It ends in the second instance of "-- -". It might be tempting to use content.indexOf("- --") however, that will get us the first instance we have of that. We can take advantage of the layout of the note by noticing the second instance of the three minus signs is the first time there is a return character before it. Therefore we can use indexOf("\n- --") to figure out this index. Then the frontmatter is content.slice(0, frontIndex+ endFront.length) and the content is content.slice(endFront.length+1). Let's now examine the function to turn the content into a table of contents.

+---+

Topic: How to identify the headings
- Identify headings.
- Differentiate structure.
- Recognise when we can and cannot do an operation.

Now that we have the content we need to recognise what to do to create the table. First we need a way to identify the main headings. These are done be seeing that they are identified by a singular hashtag followed by a space. We cannot use this with split as if we do content.split("hashtag ") we could split not just along the headings but also along the subheadings. We need a method to differentiate when we have a heading and a subheading. With our headings, they are preceded by an enter character so we use content.split("\nhashtag ") so that we do not catch any of the subheadings. One issue is that our top heading many have to be dealt with individually as at the top of the page we may not have an enter character preceding the first heading. 



+---+ 

**Sketch**
Show what the content will look like

Topic: Convert heading content to table of contents
- Recognise that the hashtags disappear.
- Show how to match each situation to the.

When we do this, the content will be split like this. The first heading, may or may not have the hashtag but the rest of the headings won't. For the first heading, we can split the content into lines. Then we filter any lines that are empty. Our first line will be our heading. It it has the hashtag, we remove the hashtag and then the text left will be our heading. So on our table of contents we would have one, heading.Then the rest would follow as the numbered headings. However, we need to account for the subheadings within that section before proceeding. 



## Completed First Draft

We will begin with some psuedo code of the overall structure and then systematically go into the details of the finer details of what is happening. To begin we will have a code that takes in a file and then separates the frontmatter from the content. From here we extract the frontmatter and content from the file. Then we create the Table of contents from the content file. At the end we create a new file by combing all three together and then modify the file they originate from. This is the broad overview so lets now examine how we would create each of the two functions mentioned in our pseudo code. Let's begin with the split file function.

So the split function will take a markdown file and return its frontmatter and content but how do we create this function? To create it, we need to examine the structure of the markdown file. If a file has frontmatter, it starts off with "- --".  If this is not how the function starts off, the frontmatter is nothing and the content is the file so we return the following. However, if we do start off with this, how do we know where it ends? It ends in the second instance of "-- -". It might be tempting to use content.indexOf("- --") however, that will get us the first instance we have of that. We can take advantage of the layout of the note by noticing the second instance of the three minus signs is the first time there is a return character before it. Therefore we can use indexOf("\n- --") to figure out this index. Then the frontmatter is content.slice(0, frontIndex+ endFront.length) and the content is content.slice(endFront.length+1). Let's now examine the function to turn the content into a table of contents.

When we do this, the content will be split like this. The first heading, may or may not have the hashtag but the rest of the headings won't. For the first heading, we can split the content into lines. Then we filter any lines that are empty. Our first line will be our heading. It it has the hashtag, we remove the hashtag and then the text left will be our heading. So on our table of contents we would have one, heading.Then the rest would follow as the numbered headings. However, we need to account for the subheadings within that section before proceeding. 



# Second Draft

We will begin with some psuedo code of the overall structure and then systematically go into the details of the finer details of what is happening.
> To simplify we will talk about how the code operates. Later we can preoceed systematically through the details of what is happening.

 To begin we will have a code that takes in a file and then separates the frontmatter from the content.
> To begin we want our code to take in a file. This file contains the frontmatter and the content of the file. The content is what we create the table of contents from so we separate out the content from the frontmatter.

 From here we extract the frontmatter and content from the file.
> 

 Then we create the Table of contents from the content file.
> Then we focus on creating the table of contents from the content.

 At the end we create a new file by combing all three together and then modify the file they originate from.
> From these three pieces we create out new file. We combine them all together.

 This is the broad overview so lets now examine how we would create each of the two functions mentioned in our pseudo code.
> Lets examine this in more detail.

 Let's begin with the split file function.
> We will start with the function that separates the frontmatter from the content. I will refer to this as the split function.



---

So the split function will take a markdown file and return its frontmatter and content but how do we create this function? To create it, we need to examine the structure of the markdown file.
> The split function takes a markdown file and returns its frontmatter and contents. To create it we need to examine the structure of a markdown file.

 If a file has frontmatter, it starts off with "- --".
> Not all markdown files will have frontmatter. If it does, the file will start off with three minus signs.

  If this is not how the function starts off, the frontmatter is nothing and the content is the file so we return the following.
> If this is not there, there is no frontmatter and the entire file is content. In this situation we return an empty string as the frontmatter and the file as the content.

 However, if we do start off with this, how do we know where it ends? It ends in the second instance of "-- -".
> If the file does start off with three empty strings we need to know where the frontmatter ends. It ends with the second instance of three minus signs. If the file does not have a second instance, an error has occurred (in my model.)

 It might be tempting to use content.
> We could use the method index of to find the three minus signs but that will only give us the first instance of this. To find the second instance we need some other indicator. Note that the second instance will occur after a line break.

indexOf("- --") however, that will get us the first instance we have of that.
> 

 We can take advantage of the layout of the note by noticing the second instance of the three minus signs is the first time there is a return character before it.
> 

 Therefore we can use indexOf("\n- --") to figure out this index.
> Therefore we can use the index of method on a return character followed by three minus signs to find the second instance. We denote this index as endFront.

 Then the frontmatter is content.slice(0, frontIndex+ endFront.length) and the content is content.
> The frontmatter can be found using the slice operator on the file. The frontmatter should go from 0 to endFront.

slice(endFront, length+1).
> The content is the rest of the file so it should range from endFront to the length of the file.

 Let's now examine the function to turn the content into a table of contents.
> Now we will focus on how to turn the content into the table of contents. 



---

When we do this, the content will be split like this.
> We split the content based off of the hastags that indicate the main headings.

 The first heading, may or may not have the hashtag but the rest of the headings won't.
> The first heading may have a character return after it or not. The rest of them won't.

 For the first heading, we can split the content into lines.
> From here we split each section's content into lines.

 Then we filter any lines that are empty.
> We then remove any lines that are empty.

 Our first line will be our heading.
> The first line is the title that will be in our heading.

 It it has the hashtag, we remove the hashtag and then the text left will be our heading.
> 

 So on our table of contents we would have one, heading.
> 

Then the rest would follow as the numbered headings.
> 

 However, we need to account for the subheadings within that section before proceeding.
> From here we need to account for the subheadings in our section. This will be accounted for within the content.

 

---



# Final Draft

To simplify we will talk about how the code operates. Later we can preoceed systematically through the details of what is happening. To begin we want our code to take in a file. This file contains the frontmatter and the content of the file. The content is what we create the table of contents from so we separate out the content from the frontmatter. Then we focus on creating the table of contents from the content. From these three pieces we create out new file. We combine them all together. Lets examine this in more detail. We will start with the function that separates the frontmatter from the content. I will refer to this as the split function.

The split function takes a markdown file and returns its frontmatter and contents. To create it we need to examine the structure of a markdown file. Not all markdown files will have frontmatter. If it does, the file will start off with three minus signs. If this is not there, there is no frontmatter and the entire file is content. In this situation we return an empty string as the frontmatter and the file as the content. If the file does start off with three empty strings we need to know where the frontmatter ends. It ends with the second instance of three minus signs. If the file does not have a second instance, an error has occurred (in my model.). We could use the method index of to find the three minus signs but that will only give us the first instance of this. To find the second instance we need some other indicator. Note that the second instance will occur after a line break. Therefore we can use the index of method on a return character followed by three minus signs to find the second instance. We denote this index as endFront. The frontmatter can be found using the slice operator on the file. The frontmatter should go from 0 to endFront. The content is the rest of the file so it should range from endFront to the length of the file. Now we will focus on how to turn the content into the table of contents.

We split the content based off of the hastags that indicate the main headings. The first heading may have a character return after it or not. The rest of them won't. From here we split each section's content into lines. We then remove any lines that are empty. The first line is the title that will be in our heading. From here we need to account for the subheadings in our section. This will be accounted for within the content.
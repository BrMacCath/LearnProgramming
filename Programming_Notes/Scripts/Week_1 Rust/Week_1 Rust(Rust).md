---
fileClass: Script
Links: 
---
# Script Goal

The main point here is to get used to talking about what I think. I am going to talk about things I have seen before.

# Key points

## Hello World
### Introduction

Introduces the main file type which is rs and shows the main format of the files with a main function. This is what the function uses to start the program.

### rustc

Compiles the program to create an executable.



## hello_cargo

Topic: Introduce the functionality of cargo.
- Introduces TOML.
- States the depencies.
- Can lock the dependencies into the file. Does not let the file update itself.


## Guessing game

This is a project that allows us to witness some of the skills we use to input data into our programs and use it.



# Skills I will need

- Ability to record the screen.
- Ability to voice over what I am doing.
- Ability to stitch together what I am using.


# Essay points

Topic: Introduction to Rust
- Why pick Rust?
- How am I going to proceed through Rust?
- Why am I choosing to do this in this fashion?
- What is the structure of this video series going to be?

# First Draft
## Why pick Rust?

So according to a lot of youtubers Rust is a memory safe language. It is being adopted by a lot of companies in order to ensure security (find sources). A large part of why I chose Rust is after college a lot of people I asked who went into the field I wanted to go into said Rust is incredibly useful and if it worked them I am curious to try it myself. Another reason is I learned some type theory and looking in the documentation of Rust we can see some type theory style of coding. I could be wrong about this but I think it worth investigating.

## How am I going to proceed through Rust?

My first strategy is to try proceed through the Rust book to try understand the concepts. However, I think it is important that in order to try understand a language, you must try things that could be incorrect. Therefore, my strategy is to proceed through the examples but also to try stretch what the example is to potential future cases. One issue with this is that Rust has a stylistic guide and in trying to expand without knowing what that is could lead to incorrect stylistic syntax, but I believe it is more important to be able to have intuition about the language and I can learn the syntax later. Note I do think that the syntax is important but having syntax without understanding is useless in my opinion.

## Why am I doing it this way?

I think what inspired this were two YouTube creators, Nicole Van _ and destiny. These two creators have a public repository of their knowledge for different reasons that I think are both useful. Nicole Van _ has a public repository that allows her to display her knowledge and allows it to be understood and used by people in public. I think that is a noble endeavor and I would like to try emulate that behaviour even if it is not as successful. Destiny also has a public repository that shows how and why he argues the way that he does. Having a people be able to see your ideas in a way that lets them slowly and methodically question your methodologies and sources seems like a worthy way of approaching arguments. If your arguments only work because they are a surprise, that you with held information, is is the content of your argument or the surprise factor that enabled you to win this argument? While I am not arguing, I think I would prefer if my content was questioned as a) I am new to Rust, b) I don't like the general notion of not saying what we mean in general. (Phrase this better.)

Secondly, in this job market, people say you need something to stand out. There are a lot of really qualified people and with people able to generate resumes with AI, doing the same standard approach to applications will probably mean I just get ignored as I will be undistinguishable from anyone else. There are potentially many ways of doing this but I thought YouTube seemed the most interesting. I know other people have blog posts and these notes may become my equivalent of that but in general that just didn't sound interesting.

### Links
Nicole van der Hoeven's video https://www.youtube.com/watch?v=i-uNtkre1aE


## Structure of the video series

The method of proceeding through this series is to basically proceed through the Rust book and try to state what I understand, what I don't and try to expand on what is occurring. I intend to go through the Rust doc when I have questions about things I do not get and try to proceed through ideas/ I have. I think it would be a waste to just repeat the Rust book on YouTube. Also potentially illegal. While proceeding through it, I also want to try link concepts used in Rust to other languages and other places as I think linking ideas can make them stronger. To show this process the rest of the video is going to be following this process as a demonstration.

## Starting off with rust

Topic: Talk about Rustc and cargo
- Mention how we can make things in Rust as is but the recommendation is to use Cargo.
- Talk about dependencies that seems like a very important part of what is needed. Also mention how it varies.
- Talk about cargo run and build and check. How this works together is still a bit unknown. 
- Mention that deploying an app is unknown, however I should probably learn how to build an app first as if I can't do that deployment is irrelevant. 


# Not completed Tasks

```dataview
TASK
FROM "Scripts/Week_1 Rust/Tasks"
FLATTEN file.link
WHERE !completed
GROUP BY taskType
```



```dataview 
TABLE WITHOUT ID
file.link as "Task",
file.frontmatter.taskStatus  AS "Task Status",
file.frontmatter.due_date,
file
FROM "Scripts/Week_1 Rust/Tasks"
GROUP BY file.frontmatter.taskType
```





# Completed Tasks
```dataview
TASK
From "Scripts/Week_1 Rust/Tasks"
WHERE completed
GROUP BY taskType
```


# Links

[[hello_world(Rust)]]
[[hello_cargo(Rust)]]
[[Guessing Game(Rust)]]
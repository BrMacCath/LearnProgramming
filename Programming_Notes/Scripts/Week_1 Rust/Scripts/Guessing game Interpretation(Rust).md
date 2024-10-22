---
fileClass: Script
Links: 
SectionNum: "4"
---
# Script Goal

## Key points
Topic: Getting going with Rust
- To actually learn programming, you need to program.
- Testing out input features.
- what the game is about.
- Testing ideas.

## Algorithm Diagram
Topic: Techniques




# First draft

## First Paragraph
Topic: Programming is an active skill
- Programming is an participator skill. To learn it you must do it.
- Project that builds skills.
- Taking input
- Comparing it
- 

Programming is a participation skill. To learn it, you need to actively take part yourself. We will do this with the first project from the book, guessing a secret number. The project is to randomly generate a number, and by taking user's input, guide them towards the answer by saying higher or lower. This game helps build a set of skills such as identifying what types of data you should store data in, taking user inputs and making decisions based off of them. You will also learn how to deal with errors. We will start off using Cargo and highlighting how TOML is used within it. I am also going to try build diagrams of the algorithm as seen on the screen.


## Second Paragraph
Topic: Cargo process
- State the goals of this.
- 
So when we use Cargo to build this, we can create our TOML file with a lot of information within it. We can see the name and the dependencies on it. You can start swapping out versions of it that you want. Show experiment. Note that if you go try to use a version that does not exist it will cause errors. It will also tell you to specify if you want to beta test a version. 


## Third Paragraph
Topic: Diagram of the code. 

- Going to start trying to learn best practices.
- Make diagrams to show what the concepts are.
- Describe the problem

When doing this, I want to try to learn best practices for coding as well. On this note I have seen people made diagrams to explain the problem so I have decided I will try to do the same. On the screen I have made a diagram for the problem we are going to be trying to solve. We are making the a game where the user has to guess a secret number. If it is too high, they get a response of too high and if it is too low they get a response of too low. They keep repeating until they get the correct answer in which the game ends with a message telling them they have won. Lets start building the pieces of this game.


## Fifth Paragraph
Topic: Generating random numbers.
- Libraries.
- Messing with them.
Our first step is to create a secret number. To do this we need to use a library. We will be using the rand library. To import a library we use the keyword use followed by the library name. This is followed by some other things we import aswell (this is vague but I think I will fix it after the later paragraphs.) Note that we also need to state the version of this we have in our TOML file. Here we can state the version of the library we want as shown on screen. We can also change it and try to build it again. Note if we try ask for a version that does not exist we will get an error message.


## Sixth Paragraph
Topic: Unmutable variables and accepting inputs. Pointers too!
- variables enter unchangeable
- We use the let keyword.
- gen range function notation
Now we will generate the random number. We use the let keyword to assign variables. An interesting thing about Rust is that this assumes variables are unchangeable to begin. Rust also follows the convention of snake case for variables. Snake case is where we make all the initial letters lower case and put an underscore between words. Therefore our secret number is written as seen on screen. To generate the random number we use the command rand :: thread_rng().gen_range(1..=100)
## Seventh Paragraph
Topic: Error matching


## Eight Paragraph
Topic: Comparison Library





## Ninth Paragraph
Topic Things I don't understand.
- Using :: :: get's the top library.
- :: versus .
- mut inside and outside the variable.
- names with pattern matching.
- ..= is inclusive range, .. is exclusive range





## Tenth Paragraph
Topic: Sign off!





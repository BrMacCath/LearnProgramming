---
fileClass: Script
Links: 
SectionNum: "4"
ScriptStatus: Done
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
Now we will generate the random number. We use the let keyword to assign variables. An interesting thing about Rust is that this assumes variables are unchangeable to begin. Rust also follows the convention of snake case for variables. Snake case is where we make all the initial letters lower case and put an underscore between words. Therefore our secret number is written as seen on screen. To generate the random number we use the command rand :: thread_rng().gen_range(1..=100). The 1..=100 feels like the spread operator in Javascript. 

# Sixth.5 Paragraph

Topic: Loop
- Repeatedly guess until we get the answer.
- Have to create a break condition.
- Does Rust have a compiler issue if there is no break condition?

We now have to start taking guesses from our player but there's no guarantee about a fixed amount. Therefore we need a form of control flow that is flexible to any amount of guesses so Rust has the loop control flow. I am not sure why we did not use a while statement as Rust has one. The reason I am unsure is that having infinite loops can be dangerous and I am not sure how Rust handles infinite loops. We do have a break condition later on but I am going to test if we remove the break condition does it still compile (check answer)? (I assume it does)(it does). I am actually unsure if this is a problem as there are probably cases where you do want something to be able to respond indefinitely but it feels suspicious to me.
## Seventh Paragraph
Topic: Handling errors
- Accepting input.
- Handling that input in case of errors.
- Pointers
To continue with the game, we need to accept inputs from the player. Note that this input now needs to be able to be changed so we put mut after let to let that happen. Note that we also need to ensure that the input is read so we put an expect on the end that runs a string if a string is not inputted. Note that Rust puts a pointer on the mut keyword before the variable being changed. This is to pass it as a reference in a safe way according to the book that will be explained later. For now we need to isolate the number from the string input.



# Seventh.5 Paragraph
Topic: What if the string is not a number?
- Is it a number?
- How to extract the number.
- How to deal with a non number put in?

To begin, we need to be sure we received a number. If we don't receive a number we just want to let the player guess again. We first trim our input to remove spaces and then parse to see if it is a number. We may get something that is not a number so we use pattern matching to deal with these issues. If we get a number, we can see that it is okay and we do the ok(num) thing. If it is not a number we continue onto the next iteration of our loop. One issue I have is we didn't denote num so I wondered is it a keyword or a placement kind of problem. To test this, I changed num to a different word and checked to see if the code still worked. It still worked so it is a placement kind of input. I will have to investigate this more.

## Eight Paragraph
Topic: Comparison Library
- Compare
- Pointers

For the final part of our game we need to compare our guess with the secret answer. To do so, we use a compare library. Note in this case we take our guess and use the .cmp function with a pointer to the variable we want to check. We pass the reference to our variable rather than our variable itself. The ampersand signifies that we are using a reference. We get three possibilities that we then run through. Whether it is larger equal or smaller. We then inform the player about the situation by informing them if their guess was too large or small. Note that if it is correct, we should tell them they won and break out of the loop.  





## Ninth Paragraph
Topic Things I don't understand.
- Using :: :: get's the top library.
- :: versus .
- mut inside and outside the variable.
- names with pattern matching.
- ..= is inclusive range, .. is exclusive range

There are certain aspects of this code I still do not understand or gained through checking back through this. At the start of the code we have std :: io at the start and rather than importing std.io, std is imported itself. I think python this would not be the case and I unsure of the terminology to investigate this at the moment.  This comes down to what does :: versus . mean in Rust? I have heard of RAII (Real aquisition is initialization) is in Rust and that it comes from C++. I don't know if that is relevant, however, I am sure that as we discuss more in these chapters it will be revealed.  

Next is the pattern matching aspects of Rust. We saw that we could do error checking and the placement of the variable would tell you its name. This still feels unclear to me. What if we need to do pattern matching with 2 or more variables, is it still just placement or do we need to pas them as keyword arguments into the pattern matching? I can experiment and test the code but I would rather aim for deeper understanding. 

When figuring out the range for the random guess, in the documentation it mentioned that with the equal sign the range is inclusive and without it it is exclusive. One more interesting thing it mentioned is that that syntax is restricted to that documentation. Does this have no significance outside of that package? Is there a reason why that package would have a unique syntax? When I tried to print this range out, the compiler started mentioning issues with macros so I intend to investigate when I understand macros if I remember.

## Tenth Paragraph
Topic: Sign off!
- Thank them for joining me on this journey
- Hope to see ye next week
Thanks for joining me on this journey! If ye want to hear more, join the discord below or check out the website where I put all the scripts and tasks. 

# Second Draft

Programming is a participation skill. To learn it, you need to actively take part yourself. 
> Programming is learned by programming problems.

We will do this with the first project from the book, guessing a secret number.
> We will create a game where the user has to guess a secret number.

The project is to randomly generate a number, and by taking user's input, guide them towards the answer by saying higher or lower. 
> This will involve taking a players input and responding based off its relation to the answer.

This game helps build a set of skills such as identifying what types of data you should store data in, taking user inputs and making decisions based off of them.

> This will help build skills such as identifying data types and making decisions based off how things could occur.

You will also learn how to deal with errors.
> We will also learn to deal with errors in our code.

We will start off using Cargo and highlighting how TOML is used within it. 
> We will use Cargo, highlighted how TOML is used in it.

I am also going to try build diagrams of the algorithm as seen on the screen.
> I am also going to try build diagrams of the algorithm as seen on the screen.
---

So when we use Cargo to build this, we can create our TOML file with a lot of information within it.
> Using cargo to build our project will create a TOML file automatically.

We can see the name and the dependencies on it. 
> This will hold the necessary dependencies our program needs.

You can start swapping out versions of it that you want.
> We can play with testing different versions of the libraries with our code.

Show experiment.
> We can move back a few versions as shown, or even forwards like so.

Note that if you go try to use a version that does not exist it will cause errors.
> If we go too far, it will cause an error.

It will also tell you to specify if you want to beta test a version. 
> It also tells us we can beta test a version of a library which I thought was interesting.

---

When doing this, I want to try to learn best practices for coding as well. 
> Let's start strong by beginning with best practices.

On this note I have seen people made diagrams to explain the problem so I have decided I will try to do the same. 
> I have seen people use diagrams to explain their problems so I will do the same.

On the screen I have made a diagram for the problem we are going to be trying to solve.
> Here is the diagram for our game.

> We create a secret number.

We are making the a game where the user has to guess a secret number. 
> The player guesses the secret number.

If it is too high, they get a response of too high and if it is too low they get a response of too low.
> If the answer is incorrect, the player is then informed if it is too high or too low.

> Then they guess again.

They keep repeating until they get the correct answer in which the game ends with a message telling them they have won. 
> This repeats until they win and the game closes out after congratulating them.

Lets start building the pieces of this game.

> Let's build this.

---

Our first step is to create a secret number. 
> We start by creating a secret number.


To do this we need to use a library. 
> We need a library to do this.

We will be using the rand library.
> The library that works for this is rand.


To import a library we use the keyword use followed by the library name.
> We import a library by using the use keyword followed by the library name.

This is followed by some other things we import aswell (this is vague but I think I will fix it after the later paragraphs.)
> The libraries can have some conditions on them but we have not yet got to discussing that in this project.


Note that we also need to state the version of this we have in our TOML file. 
> Note that we need to mention any library we use in our TOML file.

Here we can state the version of the library we want as shown on screen.
> Let's state the version of the library as shown on screen.

We can also change it and try to build it again.
> We can change the version of the library used by changing the version in our TOML file.

Note if we try ask for a version that does not exist we will get an error message.
>""

---

Now we will generate the random number. 
> ""

We use the let keyword to assign variables.
> ""

An interesting thing about Rust is that this assumes variables are unchangeable to begin. 
> Interesting, variables default to being immutable in Rust.

Rust also follows the convention of snake case for variables. 
> ""

Snake case is where we make all the initial letters lower case and put an underscore between words.
> The format of snake case is to make the initials lower case and have an underscore between words.

Therefore our secret number is written as seen on screen.
> We can see secret number in this format.


To generate the random number we use the command rand :: thread_rng().gen_range(1..=100).
>""

The 1..=100 feels like the spread operator in Javascript. 
> The 1..=100 reminds me of the spread operator in Javascript.

---

We now have to start taking guesses from our player but there's no guarantee about a fixed amount.
> We can now take guesses from our player. We don't know how many guesses it will take.


Therefore we need a form of control flow that is flexible to any amount of guesses so Rust has the loop control flow.
> To manage this we use a form of control flow that is flexible to any amount of guesses. loop is a form of control flow that can keep working indefinitely.

I am not sure why we did not use a while statement as Rust has one. 
> Rust does have a while statement but this is not used here.

The reason I am unsure is that having infinite loops can be dangerous and I am not sure how Rust handles infinite loops.
> I am a bit confused by this as having infinite loops can be dangerous. This may be just an inexperience issue as I am not sure what the Rust strategy for handling loops is. I looked at the documentation and they can label their loops in order to break loops in certain ways (I think).

We do have a break condition later on but I am going to test if we remove the break condition does it still compile (check answer)?
> My doubts originate from infinite loops. If I remove the break condition, does this still compile?

(I assume it does)(it does). I am actually unsure if this is a problem as there are probably cases where you do want something to be able to respond indefinitely but it feels suspicious to me.
> It does. I am unsure if this is an issue as there are situations where you would like processes to be able to respond indefinitely.


---


To continue with the game, we need to accept inputs from the player. 
> We now want to accept guesses from the player.

Note that this input now needs to be able to be changed so we put mut after let to let that happen.
> To make sure we can change our guess if we repeat, we use the mut keyword after let.

Note that we also need to ensure that the input is read so we put an expect on the end that runs a string if a string is not inputted.
> If anything goes wrong with retrieving an input, we handle this error with the expect method that prints that string if an error occurs.

Note that Rust puts a pointer on the mut keyword before the variable being changed. 
> Note that Rust puts a point on the mut keyword to let the function know the data is mutable. If the data is immutable, the mut keyword is not there and the ampersand is on the variable itself.
 

This is to pass it as a reference in a safe way according to the book that will be explained later. 
> This is to pass references in safely. This will be explained in more depth later.

For now we need to isolate the number from the string input.

> Now we need to extract the number the player gave.

---

To begin, we need to be sure we received a number.
> First, we need to ensure we received a number.

If we don't receive a number we just want to let the player guess again. 
> If we don't have a number, we let the player guess again.


We first trim our input to remove spaces and then parse to see if it is a number.
> We apply trim to remove spaces. Then we apply parse to see if it is a number.


We may get something that is not a number so we use pattern matching to deal with these issues
> We use pattern matching to solve any errors that occur.

If we get a number, we can see that it is okay and we do the ok(num) thing.
> For a number, we keep going with our algorithm.

If it is not a number we continue onto the next iteration of our loop. 
> ""


One issue I have is we didn't denote num so I wondered is it a keyword or a placement kind of problem. 
>I wondered how the code associated num with our input. Is it a placement pattern?

To test this, I changed num to a different word and checked to see if the code still worked.
> ""

It still worked so it is a placement kind of input.
> As this worked I think it is a placement situation.

I will have to investigate this more.
>""

---
For the final part of our game we need to compare our guess with the secret answer. 
> Lastly, we need to compare our guess with the secret answer.

To do so, we use a compare library. 
> We do this with the compare library.


Note in this case we take our guess and use the .cmp function with a pointer to the variable we want to check.
> We get a .cmp function with a pointer to the variable we want to check. Note that as we do not want to mutate the variable, there is no mut keyword.

We pass the reference to our variable rather than our variable itself.
> We pass a reference to our variable by using the ampersand.

The ampersand signifies that we are using a reference. 


We get three possibilities that we then run through.
> We have three options to run through.

Whether it is larger equal or smaller. 
> Larger, smaller or equal.


We then inform the player about the situation by informing them if their guess was too large or small. 
> We tell the player whether their guess is too large or small and let them try again.

Note that if it is correct, we should tell them they won and break out of the loop.  
> If they are correct, we congratulate them and break out of the loop.

---



There are certain aspects of this code I still do not understand or gained through checking back through this.
>There are aspects of this code I still do not understand.


At the start of the code we have std :: io at the start and rather than importing std.io, std is imported itself.
> I think I view :: as getting a subfolder of a library but I also know that that it is false. The reason why is that when importing std :: io we still have access to std. Some part of my model is incorrect and I need to fix it. Googling it I found a stack overflow article that says they are path separators. Looking at the documentation I was unsure as they showed many cases and I assume there is some overarching principal here. I see in the rust book that they talk about these in chapter 7 so I am going to postpone till then. One thing I did see in the documentation was about absolute and relative paths. I have seen that before in Django.

I think python this would not be the case and I unsure of the terminology to investigate this at the moment.
>

This comes down to what does :: versus . mean in Rust? 
>

I have heard of RAII (Real acquisition is initialization) is in Rust and that it comes from C++. 
> I don't know if it is related to this but I heard the terminology of RAII (real acquisition is initialization) is in Rust and that it comes from C++.


I don't know if that is relevant, however, I am sure that as we discuss more in these chapters it will be revealed.  
>

---

Next is the pattern matching aspects of Rust. 
> My next issue is pattern matching in Rust.

We saw that we could do error checking and the placement of the variable would tell you its name. 
> We can name variables in pattern matching via their placement.

This still feels unclear to me. 
> This still feels unclear to me.

What if we need to do pattern matching with 2 or more variables, is it still just placement or do we need to pas them as keyword arguments into the pattern matching?
>What happens if we have 2 or more variables. Do we ok() and then have a list of names? Do we use keyword assignment? While googling it I found people talking about multiple pattern matching in Stack overflow and they referenced the book. Pattern matching with multiple cases appears in Chapter 18. They did not mention pattern matching with multiple inputs which leads me to think that maybe this just does not happen?

I can experiment and test the code but I would rather aim for deeper understanding. 
> I can just experiment for now.


---
When figuring out the range for the random guess, in the documentation it mentioned that with the equal sign the range is inclusive and without it it is exclusive. 
One more interesting thing it mentioned is that that syntax is restricted to that documentation. Does this have no significance outside of that package? Is there a reason why that package would have a unique syntax? When I tried to print this range out, the compiler started mentioning issues with macros so I intend to investigate when I understand macros if I remember.
> Double checked my sources and I was wrong.

---
Thanks for joining me on this journey! If ye want to hear more, join the discord below or check out the website where I put all the scripts and tasks. 
>""
# Sources
https://stackoverflow.com/questions/33350721/what-does-mean-in-rust


# Final Draft

Programming is learned by programming problems. We will create a game where the user has to guess a secret number. This will involve taking a players input and responding based off its relation to the answer. This will help build skills such as identifying data types and making decisions based off how things could occur. We will also learn to deal with errors in our code.  We will use Cargo, highlighted how TOML is used in it. I am also going to try build diagrams of the algorithm as seen on the screen.

 Using cargo to build our project will create a TOML file automatically. This will hold the necessary dependencies our program needs. We can play with testing different versions of the libraries with our code. We can move back a few versions as shown, or even forwards like so. If we go too far, it will cause an error. It also tells us we can beta test a version of a library which I thought was interesting.

Let's start strong by beginning with best practices. I have seen people use diagrams to explain their problems so I will do the same. Here is the diagram for our game. We create a secret number. The player guesses the secret number. If the answer is incorrect, the player is then informed if it is too high or too low. Then they guess again.This repeats until they win and the game closes out after congratulating them. Let's build this!

We start by creating a secret number.  We need a library to do this. The library that works for this is rand.  We import a library by using the use keyword followed by the library name. The libraries can have some conditions on them but we have not yet got to discussing that in this project. Note that we need to mention any library we use in our TOML file. Let's state the version of the library as shown on screen. We can change the version of the library used by changing the version in our TOML file. Note if we try ask for a version that does not exist we will get an error message.

Now we will generate the random number.  We use the let keyword to assign variables. An interesting thing about Rust is that this assumes variables are unchangeable to begin.  Interesting, variables default to being immutable in Rust. Rust also follows the convention of snake case for variables.  The format of snake case is to make the initials lower case and have an underscore between words. We can see secret number in this format. To generate the random number we use the command rand :: thread_rng().gen_range(1..=100). The 1..=100 reminds me of the spread operator in JavaScript.

 We can now take guesses from our player. We don't know how many guesses it will take. Form of control flow that can keep working indefinitely. Rust does have a while statement but this is not used here. I am a bit confused by this as having infinite loops can be dangerous. This may be just an inexperience issue as I am not sure what the Rust strategy for handling loops is. I looked at the documentation and they can label their loops in order to break loops in certain ways (I think). My doubts originate from infinite loops. If I remove the break condition, does this still compile? It does. I am unsure if this is an issue as there are situations where you would like processes to be able to respond indefinitely.

We now want to accept guesses from the player. To make sure we can change our guess if we repeat, we use the mut keyword after let.  If anything goes wrong with retrieving an input, we handle this error with the expect method that prints that string if an error occurs.  Note that Rust puts a point on the mut keyword to let the function know the data is mutable. If the data is immutable, the mut keyword is not there and the ampersand is on the variable itself.  This is to pass references in safely. This will be explained in more depth later. Now we need to extract the number the player gave.

First, we need to ensure we received a number.  If we don't have a number, we let the player guess again. We apply trim to remove spaces. Then we apply parse to see if it is a number. We use pattern matching to solve any errors that occur. For a number, we keep going with our algorithm. If it is not a number we continue onto the next iteration of our loop. I wondered how the code associated num with our input. Is it a placement pattern? To test this, I changed num to a different word and checked to see if the code still worked. As this worked I think it is a placement situation. I will have to investigate this more.

Lastly, we need to compare our guess with the secret answer. We do this with the compare library. We get a .cmp function with a pointer to the variable we want to check. Note that as we do not want to mutate the variable, there is no mut keyword. We pass a reference to our variable by using the ampersand. We have three options to run through. Larger, smaller or equal.  We tell the player whether their guess is too large or small and let them try again. If they are correct, we congratulate them and break out of the loop.

There are aspects of this code I still do not understand. I think I view :: as getting a subfolder of a library but I also know that that it is false. The reason why is that when importing std :: io we still have access to std. Some part of my model is incorrect and I need to fix it. Googling it I found a stack overflow article that says they are path separators. Looking at the documentation I was unsure as they showed many cases and I assume there is some overarching principal here. I see in the rust book that they talk about these in chapter 7 so I am going to postpone till then. One thing I did see in the documentation was about absolute and relative paths. I have seen that before in Django. I don't know if it is related to this but I heard the terminology of RAII (real acquisition is initialization) is in Rust and that it comes from C++.

My next issue is pattern matching in Rust. We can name variables in pattern matching via their placement. This still feels unclear to me. What happens if we have 2 or more variables. Do we ok() and then have a list of names? Do we use keyword assignment? While googling it I found people talking about multiple pattern matching in Stack overflow and they referenced the book. Pattern matching with multiple cases appears in Chapter 18. They did not mention pattern matching with multiple inputs which leads me to think that maybe this just does not happen? I can just experiment for now.

Thanks for joining me on this journey! If ye want to hear more, join the discord below or check out the website where I put all the scripts and tasks. 
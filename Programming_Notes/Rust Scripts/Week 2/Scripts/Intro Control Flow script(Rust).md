---
fileClass: Script
ScriptStatus: Done
ParagraphNum: 1
due_date: 11-04-2024
DraftNum: 2
complete: true
SectionNum: 
---
# Script Goal

## Key points
- Control flow is important in programming to make choices.
- It decides what actions to take when. 
- We have a few tools for control flow : if, loop, while and for.
- There can be return methods with these tools that I have not seen before.

# First Draft
Topic: The point is control flow.
- With programming we would like to have automatic responses to situations.
- With multiple situations, we may need different response.
- Control flow is a way to provide a set of instructions depending on what the situation requires.

Programming is a tool that lets us build a system to automatically respond to certain situations. However, different situations will require different responses. Control flow allows us to respond to different scenarios in a suitable fashion. The response is dependant on the situation so we need to pair the control flow tool with its purpose in this video. We will be going through several methods of control flow: if, else if, loops, while and for loops. Something I founds surprising about Rust is that there are ways of using the control flow methods as return statements that I have not seen in other languages. Let's begin with if statements.

+---+

Topic: [[If(Rust)|if]] statements
- If we are in a situation where we would apply a certain response we would use an if statement.
- An example is if we have a string that is a name.
- Capitalize the first letter.
- Sometimes there could be multiple cases that require a response such as if it is a City.
- Note we could also have the situation where it is not capitalized so perhaps we would like our string to start with lower case. These situations could be handled with an else if.
- Furthermore can use if statements for assignment.

If statements are used in situations where we apply an operation if a condition is satisfied. For instance, imagine if we have a string. We take alternative actions for different types of words. An example would be if our string is a name. With names we capitalise the initial letter of that word. So if str is Name, str = CapatiliseInitial(str). Capitalising letters also occurs if our string is a capital city. Rather than repeating if statements so that we check all the conditions, we can use an else if statement. We can also use if statements to assign values to variables. It has the following syntax if condition {} else {}. One restriction is that the outputs in each case need to be the same type. I am unsure of when this would be used. It may be a refactoring technique like guard clauses or a useful style etiquette.    

+---+

Topic: [[loop(Rust)|loops]].
- Used for indefinite amount of repeats.
- Can return values from loops.
- Can use break or return. Return will leave the function.
- Label loops and interactively break from them.

Certain situations may require us to keep doing an action for an unknown amount of iterations, perhaps indefinitely. One such scenario is where we may have a program that keeps resounding to input from the user . Loops care a method of control flow that allow for this. We saw this already in [[Guessing Game(Rust)|guessing game]]. There are a couple of features that are interesting with loops. First we can return values from loops. I am unsure of the current use of this. Secondly, we can name loops. This allows you to choose which loop you want to break when breaking a loop. I can see the advantages of this so I am going to try to find examples of where it is used.


+---+


Topic: [[While(Rust)|while]] loops
- Used for an indefinite amount of loops.
- Cannot see if we can name them.
- While condition format.
- Loops are for indefinite processes. 
- While is for unknown length processes.
The while loop is also used for indefinite processes. These seem to be preferable for processes we wish to break (refind source.) I am going to find an example where Rust docs prefer while loops over loops. There are certain features that are different between them. For instance loops will always run once whereas while loops may not run. While loops cannot be used to return values like loops can. Lastly we cannot name our while loops. I am hoping that the rust book will highlight why we choose one over the other in more concrete terms.

+---+

Topic: [[For(Rust)|For]] loops
- Used to take the same action repeatedly.
- Can still use brake.
- Have a fixed length.
The situation that we have for this method of control flow is when we wish to take an action repeated but we know how many times it will occur in advance. Reword the last sentence. An example could be we want to capitalize every letter in a string. This will have a fixed length and we can repeat the same function on each letter as we progress.




## Completed First Draft

Programming is a tool that lets us build a system to automatically respond to certain situations. However, different situations will require different responses. Control flow allows us to respond to different scenarios in a suitable fashion. The response is dependant on the situation so we need to pair the control flow tool with its purpose in this video. We will be going through several methods of control flow: if, else if, loops, while and for loops. Something I founds surprising about Rust is that there are ways of using the control flow methods as return statements that I have not seen in other languages. Let's begin with if statements.

If statements are used in situations where we apply an operation if a condition is satisfied. For instance, imagine if we have a string. We take alternative actions for different types of words. An example would be if our string is a name. With names we capitalise the initial letter of that word. So if str is Name, str = CapatiliseInitial(str). Capitalising letters also occurs if our string is a capital city. Rather than repeating if statements so that we check all the conditions, we can use an else if statement. We can also use if statements to assign values to variables. It has the following syntax if condition {} else {}. One restriction is that the outputs in each case need to be the same type. I am unsure of when this would be used. It may be a refactoring technique like guard clauses or a useful style etiquette.    

Certain situations may require us to keep doing an action for an unknown amount of iterations, perhaps indefinitely. One such scenario is where we may have a program that keeps resounding to input from the user . Loops care a method of control flow that allow for this. We saw this already in [[Guessing Game(Rust)|guessing game]]. There are a couple of features that are interesting with loops. First we can return values from loops. I am unsure of the current use of this. Secondly, we can name loops. This allows you to choose which loop you want to break when breaking a loop. I can see the advantages of this so I am going to try to find examples of where it is used.

The while loop is also used for indefinite processes. These seem to be preferable for processes we wish to break (refind source.) I am going to find an example where Rust docs prefer while loops over loops. There are certain features that are different between them. For instance loops will always run once whereas while loops may not run. While loops cannot be used to return values like loops can. Lastly we cannot name our while loops. I am hoping that the rust book will highlight why we choose one over the other in more concrete terms.

The situation that we have for this method of control flow is when we wish to take an action repeated but we know how many times it will occur in advance. Reword the last sentence. An example could be we want to capitalize every letter in a string. This will have a fixed length and we can repeat the same function on each letter as we progress.



# Second Draft

Programming is a tool that lets us build a system to automatically respond to certain situations.
> Programming can be used to build systems to respond automatically to situations.

 However, different situations will require different responses.
> However, different scenarios require different responses.

 Control flow allows us to respond to different scenarios in a suitable fashion.
> Control flow is how we match the response to the scenario.

 The response is dependant on the situation so we need to pair the control flow tool with its purpose in this video.
> We have different methods of control flow depending on the structure of the event.

 We will be going through several methods of control flow: if, else if, loops, while and for loops.
> The methods of control flow we will be exploring are if, else if, loops, while and for loops.

 Something I founds surprising about Rust is that there are ways of using the control flow methods as return statements that I have not seen in other languages.
> I found it surprising that Rust has ways or returning values from control flow methods such as loop. I have not seen that in other languages.

 Let's begin with if statements.
> We will begin with if statements.



---

If statements are used in situations where we apply an operation if a condition is satisfied.
> These are used when we wish to apply an operation if a condition is satisfied.

 For instance, imagine if we have a string.
> Let's take a string.

 We take alternative actions for different types of words.
> We take alternative actions for different types of words.

 An example would be if our string is a name.
> For instance, if our string here is a name.

 With names we capitalise the initial letter of that word.
> We capatilize the initial letter of names.

 So if str is Name, str = CapatiliseInitial(str).
> So if str is a name, str = CapatiliseInitial(str).

 Capitalising letters also occurs if our string is a capital city.
> Other situations also have capitalisation. For instance if we had a capital city.

 Rather than repeating if statements so that we check all the conditions, we can use an else if statement.
> Rather than repeating if statements, we can use an else if statement. This way any time the situation is satisfied we stop after taking that action.

 We can also use if statements to assign values to variables.
> If statement scan also be used to assign values to variables.

 It has the following syntax if condition {} else {}.
> It has the following syntax: let variable = condition {} else {}

 One restriction is that the outputs in each case need to be the same type.
> It is restricted by the fact the outputs in each case need to be the same type.

 I am unsure of when this would be used.
> I have seen this used in a video on building a website with Rust.

 It may be a refactoring technique like guard clauses or a useful style etiquette.
> 

    

---

Certain situations may require us to keep doing an action for an unknown amount of iterations, perhaps indefinitely.
> We may be in a situation where we have an unknown amount of times we have to prefom an action. It could even be indefinite. 

 One such scenario is where we may have a program that keeps resounding to input from the user .
> We could have a program that keeps responding to the input from a user. An example is how people use chatGPT.

 Loops care a method of control flow that allow for this.
> Loops are a method of control flow designed for this.

 We saw this already in [[Guessing Game(Rust)|guessing game]].
> We've see this in [[Guessing Game(Rust)|guessing game]].

 There are a couple of features that are interesting with loops.
> There are a couple of features of loops I find interesting.

 First we can return values from loops.
> We can return values from loops.

 I am unsure of the current use of this.
> I am unsure of the current use for this.

 Secondly, we can name loops.
> Next we can name loops.

 This allows you to choose which loop you want to break when breaking a loop.
> Then when we are breaking from loops, we can decide which loop we wish to exit from.

 I can see the advantages of this so I am going to try to find examples of where it is used.
> I want to find examples where this is used.



---

The while loop is also used for indefinite processes.
> The while loop is also used for indefinite processes.

 These seem to be preferable for processes we wish to break (refind source.
> 

) I am going to find an example where Rust docs prefer while loops over loops.
> 

 There are certain features that are different between them.
> There are certain features that are different between them.

 For instance loops will always run once whereas while loops may not run.
>  Loops will always run once whereas while loops may not run.

 While loops cannot be used to return values like loops can.
> While loops cannot be used to return values like loops can.

 Lastly we cannot name our while loops.
>  Lastly we cannot name our while loops.

 I am hoping that the rust book will highlight why we choose one over the other in more concrete terms.
> Loops seem to be an efficient way to write while true. Apparently there are times you wish to do that and compilers have made efficient code based off of this. 



---

The situation that we have for this method of control flow is when we wish to take an action repeated but we know how many times it will occur in advance.
> The last method of control flow that I will be talking about is [[For(Rust)|for loops]]. These occur when we take a repeated action for a known amount of iterations. 

 Reword the last sentence.
> 

 An example could be we want to capitalize every letter in a string.
> An example is capitalising every letter in a string. The number of times we capitalise a letter is the number of letters in the string.

 This will have a fixed length and we can repeat the same function on each letter as we progress.
> This will have a fixed length and we can repeat the same function on each letter as we progress.



---



# Final Draft

Programming can be used to build systems to respond automatically to situations. However, different scenarios require different responses. Control flow is how we match the response to the scenario. We have different methods of control flow depending on the structure of the event. The methods of control flow we will be exploring are if, else if, loops, while and for loops. I found it surprising that Rust has ways or returning values from control flow methods such as loop. I have not seen that in other languages. We will begin with if statements.

These are used when we wish to apply an operation if a condition is satisfied. Let's take a string. We take alternative actions for different types of words. For instance, if our string here is a name. We capatilize the initial letter of names. So if str is a name, str = CapatiliseInitial(str). Other situations also have capitalisation. For instance if we had a capital city. Rather than repeating if statements, we can use an else if statement. This way any time the situation is satisfied we stop after taking that action. If statement scan also be used to assign values to variables. It has the following syntax: let variable = condition {} else {}. It is restricted by the fact the outputs in each case need to be the same type. I have seen this used in a video on building a website with Rust.

We may be in a situation where we have an unknown amount of times we have to prefom an action. It could even be indefinite. . We could have a program that keeps responding to the input from a user. An example is how people use chatGPT. Loops are a method of control flow designed for this. We've see this in [[Guessing Game(Rust)|guessing game]]. There are a couple of features of loops I find interesting. We can return values from loops. I am unsure of the current use for this. Next we can name loops. Then when we are breaking from loops, we can decide which loop we wish to exit from. I want to find examples where this is used.

The while loop is also used for indefinite processes. There are certain features that are different between them.  Loops will always run once whereas while loops may not run. While loops cannot be used to return values like loops can.  Lastly we cannot name our while loops. Loops seem to be an efficient way to write while true. Apparently there are times you wish to do that and compilers have made efficient code based off of this.

The last method of control flow that I will be talking about is [[For(Rust)|for loops]]. These occur when we take a repeated action for a known amount of iterations. . An example is capitalising every letter in a string. The number of times we capitalise a letter is the number of letters in the string. This will have a fixed length and we can repeat the same function on each letter as we progress.
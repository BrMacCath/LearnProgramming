---
fileClass: Script
Links: 
SectionNum: "2"
ScriptStatus: Done
complete: true
---
# Script Goal

Talk about why Rustc occurs but mention that it is not often used.
## Key points
- First step in Rust.
- Acts like javac in Java.
- Not used too often as people use [[Cargo(Rust)|cargo]] instead.

# First Draft

rustc is the simplest compiler you can have for rust. It compliles the program and then you can later run it. It reminds me of Java where you have to compile the program and then run it with javac and java. A difference here is that you just create an executable. While this is nice to know about, people seem to use cargo instead as it has a lot of inbuilt support for developers which we will shortly discuss. To demonstrate this process, we will proceed through the first exercise that is provided in Rust, (and in many other languages), and make a program that says "hello world".


Topic: Main necessary components of a Rust file.
- Need a function keyword.
- Need a main function.
To begin creating a Rust program we need a function that signals the program where to begin. This function is called main. You see this kind of behaviour in Java but we also see it in html with the index files and Python with init files. Like regular functions we have the behaviour of the function inside pairs of parenthesis but when we want to output something from this we use println! with an exclamation at the end. To examine this more, I decided to look at the Rust documetation and saw that there are quite a few use cases for it. As I am trying to learn the basics I decided to just proceed through the book for a little while. To make the hello world file print hello we use the println! macro, making sure to end the sentence with a semi-colon.


# Second Draft


rustc is the simplest compiler you can have for rust.
> The simplest method you can use to compile a rust file is to use rustc on a rust file.

It compliles the program and then you can later run it.
> Doing so creates an executable you can run.

It reminds me of Java where you have to compile the program and then run it with javac and java.
> You can see this in other languages such as Java that have javac to compile a file.

A difference here is that you just create an executable.
> .

While this is nice to know about, people seem to use cargo instead as it has a lot of inbuilt support for developers which we will shortly discuss.
> This is not used too often as there is inbuilt support of creating rust programs through a tool called cargo. We will discuss this tool shortly.


To demonstrate this process, we will proceed through the first exercise that is provided in Rust, (and in many other languages), and make a program that says "hello world".
> To start we will create a "hello world" file in Rust using rustc.




To begin creating a Rust program we need a function that signals the program where to begin. 
> To start, we will focus on what needs to be in a rust file for it to compile. 

This function is called main. 
> The rust compiler looks for a main function. 

You see this kind of behaviour in Java but we also see it in html with the index files and Python with init files.
> Which is also seen in java.

Like regular functions we have the behaviour of the function inside pairs of parenthesis but when we want to output something from this we use println! with an exclamation at the end.
> Then the main behaviour of the function is captured between the parentheses. We can output the phrase we want using a macro println!. This initially seemed to act like a function with a exclamation point attached.

To examine this more, I decided to look at the Rust documentation and saw that there are quite a few use cases for it.
> To try understand this more, I decided to use the Rust documentation and saw there were quite a few uses for it.

As I am trying to learn the basics I decided to just proceed through the book for a little while.
> There seemed to be a lot of building blocks to make macros so I decided to focus on proceeding through the book first.


To make the hello world file print hello we use the println! macro, making sure to end the sentence with a semi-colon.

> To print hello world, we use the macro println!, making sure to end the sentence with a semi-colon.
# Final Draft
The simplest method you can use to compile a rust file is to use rustc on a rust file. Doing so creates an executable you can run.You can see this in other languages such as Java that have javac to compile a file.This is not used too often as there is inbuilt support of creating rust programs through a tool called cargo. We will discuss this tool shortly. To start we will create a "hello world" file in Rust using rustc.
To start, we will focus on what needs to be in a rust file for it to compile. The rust compiler looks for a main function. Which is also seen in java. Then the main behaviour of the function is captured between the parentheses. We can output the phrase we want using a macro println!. This initially seemed to act like a function with a exclamation point attached. To try understand this more, I decided to use the Rust documentation and saw there were quite a few uses for it. There seemed to be a lot of building blocks to make macros so I decided to focus on proceeding through the book first. To print hello world, we use the macro println!, making sure to end the sentence with a semi-colon.
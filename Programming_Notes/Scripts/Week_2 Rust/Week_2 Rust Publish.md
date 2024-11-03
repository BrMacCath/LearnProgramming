---
fileClass: Overview
language: Rust
weekNum: 2
complete: false
finalised: 
---
# Script Goals

- Proceed through 3 chapters this week.
- Learn more about editing.
- Utilize algorithmic diagrams more.
- Figure out how to organise sources better.




| Animation-Task                                                                                                                                | Status      | Due-Date   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------- |
| [[Scripts/Week_2 Rust/Tasks/NotFinished/Make animation for different sized integer bits.md\|Make animation for different sized integer bits]] | Not Started | 11-04-2024 |


| Recording-Task                                                                                      | Status      | Due-Date   |
| --------------------------------------------------------------------------------------------------- | ----------- | ---------- |
| [[Scripts/Week_2 Rust/Tasks/NotFinished/Record Video for mutabiity.md\|Record Video for mutabiity]] | Not Started | 11-04-2024 |
| [[Scripts/Week_2 Rust/Tasks/NotFinished/Record Speal Video.md\|Record Speal Video]]                 | Not Started | 11-04-2024 |


| Script-Task                                                                                                                   | Status          | Due-Date   |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------- |
| [[Scripts/Week_2 Rust/Tasks/NotFinished/Write Script for Compounding Data Types.md\|Write Script for Compounding Data Types]] | Making Progress | 11-04-2024 |


| Finished-Task                                                                                                | Status | Task-Type |
| ------------------------------------------------------------------------------------------------------------ | ------ | --------- |
| [[Scripts/Week_2 Rust/Tasks/Complete/Write speal for channel.md\|Write speal for channel]]                   | Done   | Script    |
| [[Scripts/Week_2 Rust/Tasks/Complete/Finish writing mutability script.md\|Finish writing mutability script]] | Done   | Script    |


# Final Draft

The script: [[Compounding data types(Rust)]] is incomplete.
The script: [[Function Structure(Rust)]] is incomplete.
The script: [[Intro Control Flow script(Rust)]] is incomplete.


Let's examine a new data type called const. It is an immutable data type that has certain restrictions. We declare it using upper case letters. We still have underscores between words. There are restrictions on how we can create them. We cannot use data that is built during the runtime of our program. The data must be constant data.  We can still use expressions on the constant data to create these variables. The list of constrains are listed in Chapter 17 of the Rust book.  Const is used for global variables, variables we can access in any scope. It is recommended to store your global variables in one place by the Rust book. I remember hearing issues about Toyota's cars having too many global variables.  They had over 10,000 global variables stored in the software and people couldn't figure out what was causing issues. I read a couple of places on the internet and the recommended maximum number of global variables was 10. . We will now talk about different methods variables can appear from instead of being created.

Rust has a technique called shadowing. It allows you to reuse a variable name inside a scope without reassigning that variable name outside of that scope. This feels like a method to avoid issues with having too many names for different versions of the same data with modifications applied to it. I also wonder does this prevent some kinds of computing problems where people tend to mutate data in multiple different scenarios. If people are altering data with multiple functions, keeping track of the form of data you have could be an issue. It is better to assume that the data is always of one particular form perhaps?. To use shadowing, we say let variable name. Then we can use that name in an alternative context. My first time seeing this felt odd to me, why is this useful? To build intuition and understanding about this, I decided to google how people use this technique in practice. I found out that people use shadowing when dealing with sanitising data they receive from the internet. They still wish to retain the old data but using it could be dangerous. Rather than coming up with new names, they just shadow the old data with the sanitised new data. This prevents using multiple names for the same data. A downside could be that we have not distinguished what stage of processing the data is at from the name. Something I found interesting is that there is no restriction on data type when using shadow. If my original data type is an integer, I could shadow it with a boolean without issue. I thought there may be some restriction but it seems not. This may change later. In summary I believe the purpose of shadowing it to allow for scope related actions where we want to keep the original data


Hi All! Welcome to this channel. We have a discord if you would like to join us. There is also a website build using obsidian publish that will have all the scripts, including the rough drafts. Notes made during the week will also be put online on this website. You can also vote for new projects! In the meantime, there will be weekly YouTube videos so you are more than welcome to stick around here for a while.

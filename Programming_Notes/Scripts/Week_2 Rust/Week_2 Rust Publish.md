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




| Recording-Task                                                                                                                      | Status      | Due-Date   |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------- |
| [[Scripts/Week_2 Rust/Tasks/NotFinished/Record Video for mutabiity.md\|Record Video for mutabiity]]                                 | Not Started | 11-04-2024 |
| [[Scripts/Week_2 Rust/Tasks/NotFinished/Record Speal Video.md\|Record Speal Video]]                                                 | Not Started | 11-04-2024 |
| [[Scripts/Week_2 Rust/Tasks/NotFinished/Record Rules of ownership in Rust Video.md.md\|Record Rules of ownership in Rust Video.md]] | Not Started | 11-11-2024 |
| [[Scripts/Week_2 Rust/Tasks/NotFinished/Record References and borrowing Video.md.md\|Record References and borrowing Video.md]]     | Not Started | 11-11-2024 |
| [[Scripts/Week_2 Rust/Tasks/NotFinished/Record Outro Speal Video.md.md\|Record Outro Speal Video.md]]                               | Not Started | 11-11-2024 |
| [[Scripts/Week_2 Rust/Tasks/NotFinished/Record Intro Control Flow Script.md\|Record Intro Control Flow Script]]                     | Not Started | 11-11-2024 |


| Script-Task                                                                                                                                 | Status          | Due-Date   |
| ------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------- |
| [[Scripts/Week_2 Rust/Tasks/NotFinished/Write script for Rules of ownership in Rust.md.md\|Write script for Rules of ownership in Rust.md]] | Making Progress | 11-11-2024 |
| [[Scripts/Week_2 Rust/Tasks/NotFinished/Write script for References and borrowing.md.md\|Write script for References and borrowing.md]]     | Not Started     | 11-11-2024 |
| [[Scripts/Week_2 Rust/Tasks/NotFinished/Write Intro Control Flow Script.md\|Write Intro Control Flow Script]]                               | Making Progress | 11-11-2024 |


| Finished-Task                                                                                                                              | Status | Task-Type |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------ | --------- |
| [[Animate Transfering ownership of data\|Animate Transfering ownership of data]]                  | Done   | Animation |
| [[Animate losing ownership of variable\|Animate losing ownership of variable]]                    | Done   | Animation |
| [[Scripts/Week_2 Rust/Tasks/Complete/Write speal for channel.md\|Write speal for channel]]                                                 | Done   | Script    |
| [[Scripts/Week_2 Rust/Tasks/Complete/Write script for Outro Speal.md.md\|Write script for Outro Speal.md]]                                 | Done   | Script    |
| [[Scripts/Week_2 Rust/Tasks/Complete/Write Script for Compounding Data Types.md\|Write Script for Compounding Data Types]]                 | Done   | Script    |
| [[Scripts/Week_2 Rust/Tasks/Complete/Make animation for different sized integer bits.md\|Make animation for different sized integer bits]] | Done   | Animation |
| [[Scripts/Week_2 Rust/Tasks/Complete/Fix Script Template File.md\|Fix Script Template File]]                                               | Done   | Script    |
| [[Scripts/Week_2 Rust/Tasks/Complete/Finish writing mutability script.md\|Finish writing mutability script]]                               | Done   | Script    |


# Final Draft

The script: [[Intro Control Flow script(Rust)]] is incomplete.
The script: [[Rules of ownership in Rust(Rust)]] is incomplete.
The script: [[References and borrowing(Rust)]] is incomplete.


We will now study changing properties of the data types we are studying. Then we will focus on different methods of combining data types. We will start with the foundation of data types, scalar types. These are integers, floating-point numbers, Booleans and characters. Let's examine integers first. We can have signed or unsigned integers. Signed integers are denoted with i, unsigned integers with u. Then we can alter how many bits we wish to assign for our data. We put the number beside the type we wish to use. The book mentions allocate 8,16,32,64 or 128 bits. This allows us to reduce or add data for specific cases. There is a special case called size. This allocates the number of bits the architecture of your software is using. I will avoid that for now. An example is a grade for a course. A negative number does not make sense for this so we can use unsigned numbers. As the largest number is 100, we can use the smallest data size, 8, to store this. We assign our data type using the convection data_name: data_type. Our grade example would then be: u8.

Let's examine the rest of the scalar types. While floating point numbers don't have an unsigned option, we can change the number of bits we assign to it. Booleans are just true or false as is usually the case. The are denoted as bool. Lastly, we have characters. They are denoted as char. They are single letters between single quotes. I did notice rust uses  a structure for strings. Reflecting on this, I think this happens with JavaScript as well as you can use methods on them.

To take advantage of data types, we often combine them together. These types are called compound types. There are two compound types in Rust, Tuples and arrays. They have their advantages and disadvantages. Let's start with Tuples. Tuples can be any combination of any data. This can vary in both number and order. This data type is incredibly flexible. Tuples are declared using round parentheses. Inside the parentheses you can write in the types you want. . We access particular elements by writing the name of the tuple, full stop, the element number. The book mentions a tuple without any value has a special name called [[Unit(Rust)|unit]]. Looking at the documentation, it is mentioned that this is often used implicitly in functions. Functions without -> output_type have a unit output. .

The structure of arrays is similar to that of arrays in other languages. The entries are all the same data type. A lot of the syntax is similar to the syntax for arrays in Python. We use square parentheses for arrays. We can declare the type of array by assigning it in one line. Otherwise we can declare its structure within square parentheses. We have two entries to declare the type of array we have. The first entry is the type each element of the array will be. The second entry is to state how many entries we will have. The entries are separated by a ;. The book emphasizes that you cannot access elements outside the bounds of the array. This is also true for tuples.

Let's compare these two compound data types. When deciding which to chose, I think the deciding factor is flexibility of data types while trying to be as inflexible as possible. . Flexibility at first seemed like an advantage to me but I can see a lot of drawbacks after thinking about it. The more structure your object has, the more functions you can build upon them. As tuples have no structure between its elements, you have to explicitly state the data type of each entry. If we have 100 entries, that would be tedious. Furthermore, with arrays there can be a map method. In Rust it is a try_map method. Looking at Rust's documentation, I could not find an equivalent for tuples. I can see why it may not be able to exist too. The map method requires a function and functions require you to state the data type of your inputs. The purpose of tuples is that you don't have a restricted data type. In my opinion, this makes tuples less natural to use for functions as you do not know what the data type of the input is. . Perhaps there are ways to get around this by using [[Enum(Rust)|enum]] which allows you to group types together. However, to me, this seems like I would use an array with this enum. . To me, it seems like tuples should be used when necessary and arrays should be the default.

A question I had was could I combine arrays and tuples?. I know they combine in other languages. To check, I build code to see if it worked. You absolutely can. One aspect that caught me off guard is that you have to switch your method of accessing elements. As array elements are accessed using square parentheses and tuples are accessed using periods, you will need to be careful about the order of using them. In hindsight, maybe this is obvious but I didn't think about it when first trying to build it.


Functions are denoted by fn in Rust. They follow the mathematical declaration of functions : function_name: Inputs ->outputs. Albeit with parentheses around the inputs. If there are no inputs, the input piece is dropped. If there are no outputs, the output piece is dropped along with the arrow. The action of the function occurs within a pair of curly parenthesis. A feature that struck me as odd is that if the last line does not have a semi-colon on it, it is treated as a return value. I don't know why this is done.

One of my goals with Rust is to build a website with it. To do so, I investigated whether asynchronous functions exist in Rust too as they are fundamental for web development. Rust asynchronous functions with similar notation to JavaScript! To make a function asynchronous, we put async before fn. On this note, I wondered if promise all appeared in Rust. This is used to deal with asynchronous functions is JavaScript. There seems to be a macro called join which takes its place. When I understand macros more I will take another look.

.


Thank ye for watching! There is a discord link below as well as a Twitter.  If you wish to examine either notes or scripts, the Obsidian publish is attached too! You can see scripts and plans for the next video there.  My GitHub is linked below too. Looking forward to seeing ye next week!


Let's examine a new data type called const. It is an immutable data type that has certain restrictions. We declare it using upper case letters. We still have underscores between words. There are restrictions on how we can create them. We cannot use data that is built during the runtime of our program. The data must be constant data.  We can still use expressions on the constant data to create these variables. The list of constrains are listed in Chapter 17 of the Rust book.  Const is used for global variables, variables we can access in any scope. It is recommended to store your global variables in one place by the Rust book. I remember hearing issues about Toyota's cars having too many global variables.  They had over 10,000 global variables stored in the software and people couldn't figure out what was causing issues. I read a couple of places on the internet and the recommended maximum number of global variables was 10. . We will now talk about different methods variables can appear from instead of being created.

Rust has a technique called shadowing. It allows you to reuse a variable name inside a scope without reassigning that variable name outside of that scope. This feels like a method to avoid issues with having too many names for different versions of the same data with modifications applied to it. I also wonder does this prevent some kinds of computing problems where people tend to mutate data in multiple different scenarios. If people are altering data with multiple functions, keeping track of the form of data you have could be an issue. It is better to assume that the data is always of one particular form perhaps?. To use shadowing, we say let variable name. Then we can use that name in an alternative context. My first time seeing this felt odd to me, why is this useful? To build intuition and understanding about this, I decided to google how people use this technique in practice. I found out that people use shadowing when dealing with sanitising data they receive from the internet. They still wish to retain the old data but using it could be dangerous. Rather than coming up with new names, they just shadow the old data with the sanitised new data. This prevents using multiple names for the same data. A downside could be that we have not distinguished what stage of processing the data is at from the name. Something I found interesting is that there is no restriction on data type when using shadow. If my original data type is an integer, I could shadow it with a boolean without issue. I thought there may be some restriction but it seems not. This may change later. In summary I believe the purpose of shadowing it to allow for scope related actions where we want to keep the original data


Hi All! Welcome to this channel. We have a discord if you would like to join us. There is also a website build using obsidian publish that will have all the scripts, including the rough drafts. Notes made during the week will also be put online on this website. You can also vote for new projects! In the meantime, there will be weekly YouTube videos so you are more than welcome to stick around here for a while. All the code made to use this in Rust and obsidian will be available on GitHub too.

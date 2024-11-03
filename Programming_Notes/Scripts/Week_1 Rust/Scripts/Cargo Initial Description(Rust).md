---
fileClass: Script
Links: 
SectionNum: "3"
ScriptStatus: Done
complete: true
---
# Script Goal

## Key points

- Commonly used to build packages.
- Has commands that help you understand concepts: TOML dependencies. Has build and check commands.


# First Draft

While rustc can be used to compile code, in practice a tool called cargo is used. This allows you to use other packages and allows you to use commands to help you create your project. To use cargo you use the command cargo new_project and it will create a new folder that has structure to it. Some of the benefits of cargo are that it allows you to figure out your dependencies on different libraries in a toml folder. This allows you to enforce which version of the programs you want. Let's discuss TOML a little more.

TOML  stands for Tom's obvious markdown language. It adds titles through square parentheses and the more subtitles you have the more square parentheses you use. The depencies you want to use are simply put under the titles you want and you can enforce theses depencies using cargo. An important point is that you can upgrade or downgrade what library you want. To do this you simple select the setting you want and then cargo will use it when it wants to build your project. To build the project all you need to type is cargo build into the terminal. Cargo also has the advantage of having the cargo check command. This is a command that checks if your code can compile but doesn't compile it in order to save time. For large projects this could be extremely handy.


# Second Draft

While rustc can be used to compile code, in practice a tool called cargo is used.
> In practice, cargo is used instead of rustc to make code.


This allows you to use other packages and allows you to use commands to help you create your project. 
> Cargo allows you to manage other libraries and packages in your code efficiently.


To use cargo you use the command cargo new_project and it will create a new folder that has structure to it.
> We can create a project with cargo by typing cargo project name and it will automatically make a folder of that name with files in it.

Some of the benefits of cargo are that it allows you to figure out your dependencies on different libraries in a toml folder.
> The libraries that we can use will be held within a TOML folder.


This allows you to enforce which version of the programs you want. 
> To decide which libraries you want, enter them with the version you wish to have.


Let's discuss TOML a little more.
> Let's dig into TOML by looking at the documentation.

---
TOML  stands for Tom's obvious markdown language. 
> TOML is an abbreviation for Tom's obvious markdown language


It adds titles through square parentheses and the more subtitles you have the more square parentheses you use. (This was an incorrect statement I think.)
> To talk about the libraries you want to use, you have a title with square parentheses. You can talk about subfolders of this library by having the title dot followed by the subfolder. This convention is used in other places (find them). 


The depencies you want to use are simply put under the titles you want and you can enforce theses depencies using cargo.
> These conditions are automatically enforced by cargo when the program is built.


An important point is that you can upgrade or downgrade what library you want. 
> Also, you have the advantage of selecting which version of a library you want. This is important as if there is an update to a library you are using and it causes your program to no longer work, you can downgrade.

To do this you simple select the setting you want and then cargo will use it when it wants to build your project. 
> To do this, you specify which version of the library you want to use in your TOML file.

To build the project all you need to type is cargo build into the terminal.
> To build the project, type cargo build into the terminal.

Cargo also has the advantage of having the cargo check command. 
> One problem that could arise is that building your project each time to check for errors could be extremely time consuming. To combat this, cargo has a check command..


This is a command that checks if your code can compile but doesn't compile it in order to save time. 
> This runs tests on your code to see if it will compile but does not compile it itself.

For large projects this could be extremely handy.
>.

# Sources

https://toml.io/en/


# Final Draft

(My section on TOML is wrong. I am realising I don't actually know it. So I am just going to admit that)

In practice, cargo is used instead of rustc to make code. Cargo allows you to manage other libraries and packages in your code efficiently. We can create a project with cargo by typing cargo project name and it will automatically make a folder of that name with files in it. The libraries that we can use will be held within a TOML folder. Let's dig into TOML by looking at the documentation.

TOML is an abbreviation for Tom's obvious markdown language. To talk about the libraries you want to use, you have a title with square parentheses. You can talk about subfolders of this library by having the title dot followed by the subfolder. This convention is used in other places such as Python. These conditions are automatically enforced by cargo when the program is built.  Also, you have the advantage of selecting which version of a library you want. This is important as if there is an update to a library you are using and it causes your program to no longer work, you can downgrade. To do this, you specify which version of the library you want to use in your TOML file. To build the project, type cargo build into the terminal. One problem that could arise is that building your project each time to check for errors could be extremely time consuming. To combat this, cargo has a check command.  This runs tests on your code to see if it will compile but does not compile it itself. There's probably a lot more to TOML but we will go back to Rust now. To see cargo in action, let's build our first project!

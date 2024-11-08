---
fileClass: Rust
Links: 
Purpose: Crate
---
# Purpose

Cargo is a package manager. It is the same idea as PIP in python.

# Functionality

This may be more useful than PIP. It seems like I can use it to create new projects and it will add a lot of information. The subtitles will tell more.

## new

So to create a new project with cargo you can 
```cmd
cargo new project_title
```
This will build an initial project. The actual files will be made in a source folder but it also lists a [[toml(Rust)|toml file]] that lists its dependencies.

## Build

To build the file you run the command 
```cmd 
cargo build
```
from within the project folder. This will create an executable in a folder for you that you can run but it is probably better to just use run.

## Run

To run the file after you have built it, all you need to do is
```cmd
cargo run
```
from within the project folder.

## Check

If you wish to test your code without building it you can use 

```cmd
cargo check
```
to run a test without building things. This can save time.



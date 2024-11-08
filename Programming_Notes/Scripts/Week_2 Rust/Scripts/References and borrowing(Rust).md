---
fileClass: Script
ScriptStatus: Not Started
ParagraphNum: 1
due_date: 11-11-2024
DraftNum: 1
complete: false
---
# Script Goal

## Key points
- We need to pass values into our functions, references are the key to doing this. 
- Allows the ownership to stay where it is.
- This practice is called [[Borrowing(Rust)|borrowing]].
- Can have multiple references by adding &mut.


# First Draft
Topic: Borrowing
- Need to be able to pass values into functions.
- Borrowing is the key.
- Let's look at a simple example.



+---+

Topic: Allowing mutability

- Sometimes data needs to change.
- How do we allow data to change withing a function and not change ownership?

+---+

Topic: Differences with references
- Rust allows for any number of potential references within a function.
- However, only one mutable reference per variable.
- This prevents "data races". I am not sure what these are but they cause hard to find bugs.
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
Topic: [[Ownership(Rust)|ownership]] Rules in Rust
- New concept to Rust.
- Stack Vs heap.
- Shallow vs deep copy.
- Rust automatically does shallow copying.
- Use clone for deep copying.

# First Draft

Topic: Two different kinds of data collection.
- Stack vs heap.
- Differences in performance.
- Heap: C, Rust
- Stack: Javascript.
- Library versus stack of books.

+---+

Topic: The structure of heap.
- Have references to where locations are.
- Need to allocate data.


+---+

Topic: Structure of the stack.
- Data is stacked one ontop of the other.
- No concern about memory allocation.


+---+

Topic: Comparison.
- Stack is faster at retrieving information.
- Can reduce the difference in speed in things are close together in the heap.


+---+

Topic: Confusion.
- Fast languages use slow methods of data retrieval.


+---+

Topic: Ownership Rules
- State the Rules and your interpretation of them.
	- Each value in Rust has an _owner_.
	- There can only be one owner at a time.
	- When the owner goes out of scope, the value will be dropped.
- State similarities and differences with this to other languages.


+---+

Topic: Methods of copying data
- Shallow versus deep copy.
- Referencing homework. 
- Clone is allowed
- Integers are copied deeply.


+---+


Topic: Ownership with functions
- Functions can take the ownership of variables too.
- They can give or take ownership.
- Lets proceed through an example that highlights that.





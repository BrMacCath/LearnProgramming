---
fileClass: Rust
Purpose: Style
Links: 
---
# Purpose

I think that ownership is made to deal with garbage collection (removing data). The book mentions two ways of storing data, adding to the stack and allocating to the heap. I think adding to the stack is the way JavaScript works and allocating to the heap is C as the book mentions pointers.


So it seems by how the structures of these two garbage collection systems work, pushing to the stack seems more favorable. The reason for this is by how the stack is created, you explicitly know how to make data with this structure, (i.e. the last place you are at.) and proceeding through it is relatively easy. When allocating to the heap, the space for the data needs to be found and then when trying to access it you need to follow the pointer. (I think this is malloc.)

## Important Note

The ownership rules are fundamental to Rust as if you don't follow them, the program won't compile. The main point of ownership is to manage heap data. Why is this method chosen? I am going to try find the advantages for the heap method as from the description so far it seems more awkward and you have issues with not just accessing data but also you could start replicating it. There must be an advantage.


## Things I don't understand from the first part

- I have heard C is the fastest language but it allocates to the heap whereas 'slower' languages like JavaScript use Stack.
	- How do you measure the difference between computer language speed?
	- How much is the difference between these languages?
	- Is memory allocation a small part of speed?
	- Is my analogy with C and JavaScript correct?
	- Are there advantages to the heap method of allocating data?


# Rules of ownership

There are three rules of ownership but they only apply to certain types of data (unsure of which). These are the three rules.

- Each value in Rust has an owner.
- There can only be one owner (relabeling can occur).
- When the owner goes out of scope, the variable will be dropped.

# Variable Scope

This seems like a regular scope strategy that occurs in many languages. When I see how it is different to languages such as Matlab, I will rewrite this.

# Links


[[Style(Rust)|Style]]




---
fileClass: Rust, Programming
Links: 
---
# Purpose
This is to have a list on a computer of a set length. It is also a [[Compound types(Rust)|compound type]] like [[Tuples(Rust)|tuples]]. There are multiple ways to initialize them. That we will proceed through in this note. One issue is that the size of these arrays don't change. I am curious how rust deals with that? [[Shadowing(Rust)|Shadowing]], perhaps?

# Example

## Exactly as is

```Rust
let a = [1,2,3,4,5];
```

## Type and number with an expression

```Rust
let a :[i32;4] = [3;5];
```
This will create an array of 5 elements consisting of threes. One question I had was what kind of expressions could we use on the right side and so I read the docs for a little bit. There are two types, const and copy. I am not sure what copy is but reading the docs, there seems to be ways to move variables from one variable to another and copy ensures we just copy the variable?

## Advantages

Rust does not let you exceed the bounds of an array as a given. I have seen that this can be an issue in other languages such as C.




---
fileClass: Rust
Links: 
Purpose: Data Type
---
# Purpose
Tuples are a [[Compound types(Rust)|compound type]] that allow you to both put different types of data together and deconstruct using pattern matching. One downside is that the length of a tuple is not changed. Note that you can also access them through their position but instead of having [] parentheses, you put a decimal and then the index you are looking for(starting from 0).

# Example
```Rust
let example: (i32,i64) = (12.3,14.6);
let (x,y) = example;
let first_param = example.0;
let second_param = example.1;
```

# Links

[[main(Rust)|main]]
[[Macro(Rust)|Macro]]
[[Ending Sentences(Rust)|Ending Sentences]]
[[Style(Rust)|Style]]




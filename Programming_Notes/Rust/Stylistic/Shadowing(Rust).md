---
fileClass: Rust
Links: 
Purpose: Stylistic
---
# Purpose
This allows us to reuse variable names. The first example of this is shown in [[Guessing Game(Rust)|guessing game]].  It is used to restart a variable within a loop. It can be used to prevent compiler issues such as those shown in guessing game. For instance if I try to declare a variable outside of a [[loop(Rust)|loop]] and then use it inside the loop where the first line redeclares it, the code will run but the compiler will say it is an issue.

```Rust
let example = 5;
loop {
    example = 4;
    break;
}
```
This might be an impractical example but the compiler will complain.

# Question

Shadowing works with immutable variables. That seems contradictory to the purpose of making them immutable if I can just rename them though?

Also mut causes a compiler issue if I use shadowing on a mut variable.






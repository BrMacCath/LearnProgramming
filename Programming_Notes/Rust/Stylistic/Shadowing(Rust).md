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

I am now wondering if we have a situation where within a function we wish to change what we do with a variable but not change its value?

```Rust
fn exampleFunction(data: T){
	if (situation){
		let data = something_else;
	}
	process(data);
}
```
The point of this example is to show how maybe in a certain context we would like to temporarily change data. Using shadowing we can change what our data is to process it but afterwards the data resets automatically.

# Question

Shadowing works with immutable variables. That seems contradictory to the purpose of making them immutable if I can just rename them though?

Also mut causes a compiler issue if I use shadowing on a mut variable.

# Answer

This can be used when we are doing temporary operations with data that we wish to return to a certain state after processing. I was googling to find examples and I came across one on Reddit for sanitizing data. https://www.reddit.com/r/rust/comments/xx6ibp/what_is_the_logic_behind_shadowing/ 






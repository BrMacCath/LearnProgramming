---
fileClass: Rust
Links: 
Purpose: Data Type
---
# Purpose
These are ways to reuse code and separate different parts of the code in order to increase usability, readability and coding style. In Rust [[Snake Case(Rust)|snake case]] is used to denote function variables.

# Examples

## Basic example

If a function does not return anything, we do not need to add syntax to denote any outputs.

```Rust
fn main(){
	println!("Hello World");
}
```


## Examples with parameters
If a function has parameters we declare the parameters within the parenthesis and state their type. If there are multiple parameters, we need to separate them with a comma.

```Rust
fn main() {
    another_function(5);
}

fn another_function(x: i32) {
    println!("The value of x is: {x}");
}
```

## Examples with outputs

If we have an output for our function we can put it after an-> arrow. This seems like the same notation in mathematics. Here is an example.

```Rust
fn five() -> i32 {
    5
}

fn main() {
    let x = five();

    println!("The value of x is: {x}");
}
```

## Experimenting with outputs

I was curious with what happens if I want to make multiple outputs so I thought if we can format the outputs that then we can have multiple outputs grouped together. For instance:

```Rust
fn five() -> (i32,i32) {
    (5,5)
}

fn main() {
    let x = five();

    println!("The value of x is: {x.0}");
}
```
I think this example works but I have no idea if it fits the style of Rust formatting.

## Gripes with functions

In functions the last statement is what is returned if it is not explicitly stated. This sounds okay until you realise you have to not use a semi-colon to return a value in the last line. This feels odd to me as it goes against things before this. There is probably a clever reason for this but I don't know what it is.
# Links
[[Macro(Rust)]]
[[Snake Case(Rust)]]
[[Style(Rust)]]
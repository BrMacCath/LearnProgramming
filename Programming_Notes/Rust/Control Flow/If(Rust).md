---
fileClass: Rust
Purpose: Control Flow
---
# Purpose

This is to help control the flow of the program. We use them if we wish to check whether to take a step or not. The general format is something along the lines

```Rust
if bool {
  // Do something.
}
```
It is important to note that Rust does not do automatic type conversion so strategies in Java or C might fail.

```Rust
if 3{
  // Do somethings
}
```
The above line will fail as it is not a boolean type put into the condition.

## Creating data with variables.

We can create variables based off certain conditions. We can say let variable_name = conditions.

```Rust
const even = true;
let Number = if(even){4} else{5}
```

One restriction on this is that you need the same data type. 

## Else if


# Links


[[Style(Rust)|Style]]




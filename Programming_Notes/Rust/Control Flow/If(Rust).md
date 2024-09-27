---
fileClass: Rust
Links: 
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
# Links


[[Style(Rust)|Style]]




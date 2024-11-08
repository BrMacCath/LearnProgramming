---
fileClass: Rust
Links: 
Purpose: Data Type
---
# Purpose
This is to return a resultant value for some action. For instance

```Rust 
let x = 3;
let y = x+1;
```
The y is defined by an expression.

## Statements Vs Expressions

In the book it is noted that with [[Statements(Rust)|statements]] we cannot use them to assign values. For instance

```Rust 
let y = (let x = 3);
```
will give a compliler issue due to the fact that let x =3 does not return anything. I know you can do this in other languages but I can see this allowing for mistakes.

# Links

[[Data Type(Rust)|Data Type]]


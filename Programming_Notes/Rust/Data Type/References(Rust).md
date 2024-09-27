---
fileClass: Rust
Links: 
Purpose: Data Type
---
# Purpose
This is used to pass the reference to a piece of data rather than the value itself. This is done in C too.

# Example

```Rust
let mut guess = String::new();
io::stdin().read_line(&mut guess).expect("Failed to read line!");
```

# Links

[[main(Rust)|main]]
[[Macro(Rust)|Macro]]
[[Ending Sentences(Rust)|Ending Sentences]]
[[Style(Rust)|Style]]




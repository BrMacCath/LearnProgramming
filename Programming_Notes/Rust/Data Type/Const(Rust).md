---
fileClass: Rust
Links: 
Purpose: Data Type
---
# Purpose
Const is a data type in Rust that is immutable, in contrast to the let [[Variables(Rust)|variable]] which can change. They state that they must be a constant expression rather than something that can be computed. I know in other languages there are things such as currying? Is that what the book is talking about here. 

I now understand what I misunderstood (I hope). You can't have a situation like below

```Rust 
const BAD_EXAMPLE = current_time - 2;
```
as this would require current data to compute. The only data you can have is fixed (look up terminology) data.

# Links

[[Data Type(Rust)|Data Type]]



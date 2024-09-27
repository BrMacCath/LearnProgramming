---
fileClass: Rust
Links: 
Purpose: Control Flow
---
# Purpose
This is used to repeat conditions until the situation is over. An example is seen in [[Guessing Game(Rust)|guessing game]]. You need to hit Ctrl+C to stop it or have a break condition.

## Example
This example will go on forever unless manually stopped.

```Rust
fn main() {
    loop {
        println!("again!");
    }
}
```

Look through this example

```Rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {result}");
}
```

When loops break they return something. Is this always true?


## Loop Labels

Here is an example from the book

```Rust
fn main() {
    let mut count = 0;
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {count}");
}
```

I am going to try to create a new example to understand things.
# Links




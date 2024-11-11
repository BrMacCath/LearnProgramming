---
fileClass: Script
ScriptStatus: Not Started
ParagraphNum: 1
due_date: 11-11-2024
DraftNum: 1
complete: false
---
# Script Goal

## Key points
Topic: [[Ownership(Rust)|ownership]] Rules in Rust
- New concept to Rust.
- Stack Vs heap.
- Shallow vs deep copy.
- Rust automatically does shallow copying.
- Use clone for deep copying.

# First Draft

Topic: Two different kinds of data collection.
- Stack vs heap.
- Differences in performance.
- Heap: C, Rust
- Stack: Javascript.
- Library versus stack of books.

One important facet of programming is memory allocation, the way a language deals with storing its data. There are two different kinds of memory allocation, heap and stack. There are popular languages for both. C and Rust have heap collection, whereas JavaScript has stack. The book mentions that Stack is faster and we will see why shortly. Let's begin talking about the structure of each. For stack collection, data is stored in order, one after the other. To access that data we proceed backwards through the data. For heap, we figure out a place to store data and then allocate our data there. Let's compare these with the analogy of storing books. Stack collection could be viewed as a storing books as a stack. In this system you can add a book to the top layer or remove a book from the top layer. Note you cannot keep adding books as at some point  they would just topple over (stack overflow error). In heap collection, you are storing your book in the library shelves. You need to find space for it according to some order and then you can store it. To access the book you would need a location reference to find it. If you were accessing multiple books, the closer they were to each other the faster you could find them. Stack allows for faster retrieval but heap allows for more complex organisation. I believe that is how a language decides which memory system you should use.

+---+

Topic: Confusion.
- Fast languages use slow methods of data retrieval.
One point of confusion I had was that "fast" languages such as C and Rust use a "slow" memory allocation system but "slow" languages like Javascript use a "fast" allocation system. I am wondering in the scheme of things, does the more complex a system becomes, the worse stacks memory retrieval becomes? Or could this allow for unsafe behaviour that Rust is trying to avoid so it takes the hit in performance for security reasons? In looking further, it is clear that this is more complicated than I thought. Languages seem to use both.

+---+

Topic: Ownership Rules
- State the Rules and your interpretation of them.
	- Each value in Rust has an _owner_.
	- There can only be one owner at a time.
	- When the owner goes out of scope, the value will be dropped.
- State similarities and differences with this to other languages.

Rust has a new method of memory allocation to prevent issues that commonly occur from arising. The concept is called Ownership Rules. There rules are. Each value in Rust has an _owner_. There can only be one owner at a time. When the owner goes out of scope, the value will be dropped. This is going to have a significant impact on how we conduct our memory management, especially with functions. We'll start with copying data. There are two ways of copying data in Rust, shallow versus deep copies. A shallow copy is where we create a second reference to the same piece of data. A deep copy is when you make an exact copy of the data. Let's talk about this with a homework example. Suppose we have two people, Aoife and Tadgh, where Aoife has done the homework. We say Tadgh has a shallow copy of the homework if he just borrows it whenever he needs it. They pass it back and forth as required. We say that he has made a deep copy if he transcribes it. This highlights some issues with shallow copies. Suppose Tadgh borrows the homework and then writes on it. If Aoife tries to use it, she'll find her notes changed in potentially unexpected ways. How Rust deals with this issue, is that if you try to relabel the data, it moves its ownership over. In this case, if Aoife passed the homework to Tadgh, Tadgh is now the owner of it.

+---+

Topic: Methods of copying data
- Shallow versus deep copy.
- Referencing homework. 
- Clone is allowed
- Integers are copied deeply.

Rust by default tends to shallow copies for performance, rewriting all that homework is far more time consuming than simply passing it over. One exception to this is with integers. Integers are deep copied. Then how does this interact with the rules of ownership in Rust? With our example of the homework, if Aoife passes the homework to Tadgh, that homework is now Tadgh's. Whenever ownership could be shared, the last variable to own it is the permanent owner. We can create deep copies of data such as with strings we can use clone to do so. Let's look at functions


+---+


Topic: Ownership with functions
- Functions can take the ownership of variables too.
- They can give or take ownership.
- Lets proceed through an example that highlights that.

When passing our data as is into the function, we can be transferring ownership. Let's look at an example here. (Go through example where we change ownership. Try make animation for this.)



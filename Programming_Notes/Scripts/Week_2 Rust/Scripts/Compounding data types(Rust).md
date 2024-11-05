---
fileClass: Script
ScriptStatus: Making Progress
ParagraphNum: 1
due_date: 11-04-2024
DraftNum: 2
complete: false
SectionNum: 
---
# Script Goal

## Key points
- We can signify data types. We have different data types depending on how much data we want to allocate.
- Can have ints, floats, boolean and chars.
- Can create data types by joining data types together. This creates data types such as [[Tuples(Rust)|tuples]] and [[Arrays(Rust)|arrays]]. The general name for these types are [[Compound types(Rust)|compound types]]. 


# First Draft

Topic: The first kind of data type. We can change the size we want allocated to the type of memory.
- Alter settings on our variables and methods of combining them. 
- The most basic type of data is a [[Scalar Type(Rust)|scalar type]]. 
- integers, floating-point numbers, Booleans, and characters.
- Can alter size of integers and whether they are signed or not.
- Can alter the size of data allocated to this.
- Advantage is that we can shorten the data to what we want.

We are now going to change aspects of the variables we have and study different methods of combining them. To begin, we start off with the foundation of data types, scalar types. The list of these are integers, floating-point numbers, Booleans, and characters. Let's examine how we can alter the aspects of integers first. We can have signed or unsigned integers. For regular integers we use i and for unsigned integers we use u to signify their type. The next thing we want to do is tell our system how much data bits do we want to assign to this variable, we put the number beside the type we are applying. We have restrictions to the numbers as we can only put numbers 8,16,32,64 and 128. We also have special case of saying size, which allocates size based off the architecture that we are using. I think I will avoid that for now and stick with the specified numbers. Note that this flexibility allows us to reduce or add data for specific cases. Suppose that you were inputting a grade for a student, a negative number doesn't make sense so we may aswell use u for this. Furthermore, as we have a limit of 100, we can use the smallest size of data to store this. To assign our data type with a type we follow the convention of let data_name: data_type. With our grade example, we could say let grade: u8.

+---+

Topic: The remaining scalar types
- Floating point numbers can only have their amount of allocated data changed.
- We can still do the expected algebraic operations with these.
- We also have booleans.

Let's examine the rest of the scalar types. With floating point numbers, we don't have an unsigned option, we can change how many bits we assign to the variable. Booleans are just true or false as is usually the case. We denote the type with bool. The last type is characters. These are denoted as char and are single letters in between single quotes. There is emphasis to state that these are different to string literals. I have noticed that Rust seems to use a library for strings.

+---+
Topic: Compound types
- Combining pieces of data to make new data is useful.
- Two methods of combining data :[[Arrays(Rust)]] and [[Tuples(Rust)]].
- Pros and con's of each.
- Let's begin with tuples

To truly take advantage of data types, we often combine them together. These types are referred to as compound types. The are two types of compound types in Rust, Tuples and arrays. Each have their advantages and disadvantages. Let's start with Tuples. Tuples can be groups of any data type. There is complete flexibility in what you wish to group together. Tuples are declared using round parenthesis. We can access particular elements by writing the tuple, full stop, element number. They mention a tuple without any value has a special name called unit. I've seen this a couple of times so I assume it comes up later in other contexts. What happens if we try to access an array element that does not exist?

+---+

Topic: Arrays
- More familiar with these.
- Seen them in other languages such as python
- Invalid array access.
- Methods such as try Map still exist.

Arrays are structure that appear in other languages in the same style. It is a compound data type where all the entries are the same data type. The syntax seems quite familiar to what you would see in Python. The syntax for an array uses square parenthesis.  There are the usual ways of declaring an array by stating what the array is. The other method is to to declare its structure within square parenthesis. The first entry is the type and the second entry is the amount of that type within the array. The two entries are separated by a ;. The book emphasizes that if you try to access an entry outside of the array it will cause an error. I wonder why that was not emphasized with tuples? Perhaps this is something that will be explained later in the book.

+---+

Topic: Contrasting arrays and tuples. 
- Tuples versus arrays come down to flexibility of data types.
- Flexibility allows for more situations.
- Downside: Less methods you can use on it.
- Arrays have try map. Looking at the documentation there is no equivalent for that in tuples.

To compare these two compound data types, the choice of which to choose seems to be about how flexible you are with the data types. Tuples allow for any combination which may seem like an advantage but has some drawbacks that relate to programming. With programming, the more structure your object has, the more methods you can potentially build upon them. As tuples has no structure between its entries, you have to explicitly state the data type of each entry. If we had 100 entries that would be a potentially tedious job. Furthermore, with arrays there is a map method, in Rust it is a try_map method. Looking at the documentation, I don't see an equivalent for tuples and I can think of reasons why it couldn't exist. The map method requires a function which has inputs of one type. Perhaps there are ways around this by having grouped types but the requirement of the map method seems oppositional to the purpose of using tuples. It seems to me we should only use tuples when absolutely necessary so we can take advantage of the methods the structure of arrays let us use.

+---+
Topic curiosity
- One thing I wondered is can we combine arrays with tuples and vice versa

One quick thing I wondered was whether we could combine arrays and tuples together. I would be surprised if arrays could not combine with themselves as they do in other languages. Out of curiosity I ran some experiments to see what matched with what. Update this section later.



## Completed First Draft

We are now going to change aspects of the variables we have and study different methods of combining them. To begin, we start off with the foundation of data types, scalar types. The list of these are integers, floating-point numbers, Booleans, and characters. Let's examine how we can alter the aspects of integers first. We can have signed or unsigned integers. For regular integers we use i and for unsigned integers we use u to signify their type. The next thing we want to do is tell our system how much data bits do we want to assign to this variable, we put the number beside the type we are applying. We have restrictions to the numbers as we can only put numbers 8,16,32,64 and 128. We also have special case of saying size, which allocates size based off the architecture that we are using. I think I will avoid that for now and stick with the specified numbers. Note that this flexibility allows us to reduce or add data for specific cases. Suppose that you were inputting a grade for a student, a negative number doesn't make sense so we may aswell use u for this. Furthermore, as we have a limit of 100, we can use the smallest size of data to store this. To assign our data type with a type we follow the convention of let data_name: data_type. With our grade example, we could say let grade: u8.

Let's examine the rest of the scalar types. With floating point numbers, we don't have an unsigned option, we can change how many bits we assign to the variable. Booleans are just true or false as is usually the case. We denote the type with bool. The last type is characters. These are denoted as char and are single letters in between single quotes. There is emphasis to state that these are different to string literals. I have noticed that Rust seems to use a library for strings.

To truly take advantage of data types, we often combine them together. These types are referred to as compound types. The are two types of compound types in Rust, Tuples and arrays. Each have their advantages and disadvantages. Let's start with Tuples. Tuples can be groups of any data type. There is complete flexibility in what you wish to group together. Tuples are declared using round parenthesis. We can access particular elements by writing the tuple, full stop, element number. They mention a tuple without any value has a special name called unit. I've seen this a couple of times so I assume it comes up later in other contexts. What happens if we try to access an array element that does not exist?

Arrays are structure that appear in other languages in the same style. It is a compound data type where all the entries are the same data type. The syntax seems quite familiar to what you would see in Python. The syntax for an array uses square parenthesis.  There are the usual ways of declaring an array by stating what the array is. The other method is to to declare its structure within square parenthesis. The first entry is the type and the second entry is the amount of that type within the array. The two entries are separated by a ;. The book emphasizes that if you try to access an entry outside of the array it will cause an error. I wonder why that was not emphasized with tuples? Perhaps this is something that will be explained later in the book.

To compare these two compound data types, the choice of which to choose seems to be about how flexible you are with the data types. Tuples allow for any combination which may seem like an advantage but has some drawbacks that relate to programming. With programming, the more structure your object has, the more methods you can potentially build upon them. As tuples has no structure between its entries, you have to explicitly state the data type of each entry. If we had 100 entries that would be a potentially tedious job. Furthermore, with arrays there is a map method, in Rust it is a try_map method. Looking at the documentation, I don't see an equivalent for tuples and I can think of reasons why it couldn't exist. The map method requires a function which has inputs of one type. Perhaps there are ways around this by having grouped types but the requirement of the map method seems oppositional to the purpose of using tuples. It seems to me we should only use tuples when absolutely necessary so we can take advantage of the methods the structure of arrays let us use.

One quick thing I wondered was whether we could combine arrays and tuples together. I would be surprised if arrays could not combine with themselves as they do in other languages. Out of curiosity I ran some experiments to see what matched with what. Update this section later.
# Second Draft

We are now going to change aspects of the variables we have and study different methods of combining them.
> 

 To begin, we start off with the foundation of data types, scalar types.
> 

 The list of these are integers, floating-point numbers, Booleans, and characters.
> 

 Let's examine how we can alter the aspects of integers first.
> 

 We can have signed or unsigned integers.
> 

 For regular integers we use i and for unsigned integers we use u to signify their type.
> 

 The next thing we want to do is tell our system how much data bits do we want to assign to this variable, we put the number beside the type we are applying.
> 

 We have restrictions to the numbers as we can only put numbers 8,16,32,64 and 128.
> 

 We also have special case of saying size, which allocates size based off the architecture that we are using.
> 

 I think I will avoid that for now and stick with the specified numbers.
> 

 Note that this flexibility allows us to reduce or add data for specific cases.
> 

 Suppose that you were inputting a grade for a student, a negative number doesn't make sense so we may aswell use u for this.
> 

 Furthermore, as we have a limit of 100, we can use the smallest size of data to store this.
> 

 To assign our data type with a type we follow the convention of let data_name: data_type.
> 

 With our grade example, we could say let grade: u8.
> 



---

Let's examine the rest of the scalar types.
> 

 With floating point numbers, we don't have an unsigned option, we can change how many bits we assign to the variable.
> 

 Booleans are just true or false as is usually the case.
> 

 We denote the type with bool.
> 

 The last type is characters.
> 

 These are denoted as char and are single letters in between single quotes.
> 

 There is emphasis to state that these are different to string literals.
> 

 I have noticed that Rust seems to use a library for strings.
> 



---

To truly take advantage of data types, we often combine them together.
> 

 These types are referred to as compound types.
> 

 The are two types of compound types in Rust, Tuples and arrays.
> 

 Each have their advantages and disadvantages.
> 

 Let's start with Tuples.
> 

 Tuples can be groups of any data type.
> 

 There is complete flexibility in what you wish to group together.
> 

 Tuples are declared using round parenthesis.
> 

 We can access particular elements by writing the tuple, full stop, element number.
> 

 They mention a tuple without any value has a special name called unit.
> 

 I've seen this a couple of times so I assume it comes up later in other contexts.
> 

 What happens if we try to access an array element that does not exist?

---

Arrays are structure that appear in other languages in the same style.
> 

 It is a compound data type where all the entries are the same data type.
> 

 The syntax seems quite familiar to what you would see in Python.
> 

 The syntax for an array uses square parenthesis.
> 

  There are the usual ways of declaring an array by stating what the array is.
> 

 The other method is to to declare its structure within square parenthesis.
> 

 The first entry is the type and the second entry is the amount of that type within the array.
> 

 The two entries are separated by a ;.
> 

 The book emphasizes that if you try to access an entry outside of the array it will cause an error.
> 

 I wonder why that was not emphasized with tuples? Perhaps this is something that will be explained later in the book.
> 



---

To compare these two compound data types, the choice of which to choose seems to be about how flexible you are with the data types.
> 

 Tuples allow for any combination which may seem like an advantage but has some drawbacks that relate to programming.
> 

 With programming, the more structure your object has, the more methods you can potentially build upon them.
> 

 As tuples has no structure between its entries, you have to explicitly state the data type of each entry.
> 

 If we had 100 entries that would be a potentially tedious job.
> 

 Furthermore, with arrays there is a map method, in Rust it is a try_map method.
> 

 Looking at the documentation, I don't see an equivalent for tuples and I can think of reasons why it couldn't exist.
> 

 The map method requires a function which has inputs of one type.
> 

 Perhaps there are ways around this by having grouped types but the requirement of the map method seems oppositional to the purpose of using tuples.
> 

 It seems to me we should only use tuples when absolutely necessary so we can take advantage of the methods the structure of arrays let us use.
> 



---

One quick thing I wondered was whether we could combine arrays and tuples together.
> 

 I would be surprised if arrays could not combine with themselves as they do in other languages.
> 

 Out of curiosity I ran some experiments to see what matched with what.
> 

 Update this section later.
> 



---


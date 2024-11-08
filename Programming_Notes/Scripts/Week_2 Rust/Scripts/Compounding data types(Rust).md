---
fileClass: Script
ScriptStatus: Done
ParagraphNum: 1
due_date: 11-04-2024
DraftNum: 2
complete: true
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
> We will now study changing properties of the data types we are studying. Then we will focus on different methods of combining data types.

 To begin, we start off with the foundation of data types, scalar types.
> We will start with the foundation of data types, scalar types.

 The list of these are integers, floating-point numbers, Booleans, and characters.
> These are integers, floating-point numbers, Booleans and characters.

 Let's examine how we can alter the aspects of integers first.
> Let's examine integers first.

 We can have signed or unsigned integers.
> We can have signed or unsigned integers.

 For regular integers we use i and for unsigned integers we use u to signify their type.
> Signed integers are denoted with i, unsigned integers with u.

 The next thing we want to do is tell our system how much data bits do we want to assign to this variable, we put the number beside the type we are applying.
> Then we can alter how many bits we wish to assign for our data. We put the number beside the type we wish to use.

 We have restrictions to the numbers as we can only put numbers 8,16,32,64 and 128.
> The book mentions allocate 8,16,32,64 or 128 bits. This allows us to reduce or add data for specific cases.

 We also have special case of saying size, which allocates size based off the architecture that we are using.
> There is a special case called size. This allocates the number of bits the architecture of your software is using.

 I think I will avoid that for now and stick with the specified numbers.
> I will avoid that for now.

 Note that this flexibility allows us to reduce or add data for specific cases.
> 

 Suppose that you were inputting a grade for a student, a negative number doesn't make sense so we may as well use u for this.
> An example is a grade for a course. A negative number does not make sense for this so we can use unsigned numbers.

 Furthermore, as we have a limit of 100, we can use the smallest size of data to store this.
> As the largest number is 100, we can use the smallest data size, 8, to store this.

 To assign our data type with a type we follow the convention of let data_name: data_type.
> We assign our data type using the convection data_name: data_type.

 With our grade example, we could say let grade: u8.
> Our grade example would then be: u8.



---

Let's examine the rest of the scalar types.
> Let's examine the rest of the scalar types.

 With floating point numbers, we don't have an unsigned option, we can change how many bits we assign to the variable.
> While floating point numbers don't have an unsigned option, we can change the number of bits we assign to it.

 Booleans are just true or false as is usually the case.
> Booleans are just true or false as is usually the case.

 We denote the type with bool.
> The are denoted as bool.

 The last type is characters.
> Lastly, we have characters. They are denoted as char.

 These are denoted as char and are single letters in between single quotes.
> They are single letters between single quotes.

 There is emphasis to state that these are different to string literals.
> 

 I have noticed that Rust seems to use a library for strings.
> I did notice rust uses  a structure for strings. Reflecting on this, I think this happens with JavaScript as well as you can use methods on them.



---

To truly take advantage of data types, we often combine them together.
> To take advantage of data types, we often combine them together.

 These types are referred to as compound types.
> These types are called compound types.

 The are two types of compound types in Rust, Tuples and arrays.
> There are two compound types in Rust, Tuples and arrays.

 Each have their advantages and disadvantages.
> They have their advantages and disadvantages.

 Let's start with Tuples.
> Let's start with Tuples.

 Tuples can be groups of any data type.
> Tuples can be any combination of any data. This can vary in both number and order.

 There is complete flexibility in what you wish to group together.
> This data type is incredibly flexible.

 Tuples are declared using round parenthesis.
> Tuples are declared using round parentheses. Inside the parentheses you can write in the types you want. 

 We can access particular elements by writing the tuple, full stop, element number.
> We access particular elements by writing the name of the tuple, full stop, the element number.

 They mention a tuple without any value has a special name called unit.
> The book mentions a tuple without any value has a special name called [[Unit(Rust)|unit]].

 I've seen this a couple of times so I assume it comes up later in other contexts.
> Looking at the documentation, it is mentioned that this is often used implicitly in functions. Functions without -> output_type have a unit output. 

 What happens if we try to access an array element that does not exist?

---

Arrays are structure that appear in other languages in the same style.
> The structure of arrays is similar to that of arrays in other languages.

 It is a compound data type where all the entries are the same data type.
> The entries are all the same data type.

 The syntax seems quite familiar to what you would see in Python.
> A lot of the syntax is similar to the syntax for arrays in Python.

 The syntax for an array uses square parenthesis.
> We use square parentheses for arrays.

  There are the usual ways of declaring an array by stating what the array is.
> We can declare the type of array by assigning it in one line.

 The other method is to to declare its structure within square parenthesis.
> Otherwise we can declare its structure within square parentheses.

 The first entry is the type and the second entry is the amount of that type within the array.
> We have two entries to declare the type of array we have. The first entry is the type each element of the array will be. The second entry is to state how many entries we will have.

 The two entries are separated by a ;.
> The entries are separated by a ;.

 The book emphasizes that if you try to access an entry outside of the array it will cause an error.
> The book emphasizes that you cannot access elements outside the bounds of the array.

 I wonder why that was not emphasized with tuples? Perhaps this is something that will be explained later in the book.
> This is also true for tuples.



---

To compare these two compound data types, the choice of which to choose seems to be about how flexible you are with the data types.
> Let's compare these two compound data types. When deciding which to chose, I think the deciding factor is flexibility of data types while trying to be as inflexible as possible. 

 Tuples allow for any combination which may seem like an advantage but has some drawbacks that relate to programming.
> Flexibility at first seemed like an advantage to me but I can see a lot of drawbacks after thinking about it.

 With programming, the more structure your object has, the more methods you can potentially build upon them.
> The more structure your object has, the more functions you can build upon them.

 As tuples has no structure between its entries, you have to explicitly state the data type of each entry.
> As tuples have no structure between its elements, you have to explicitly state the data type of each entry.

 If we had 100 entries that would be a potentially tedious job.
> If we have 100 entries, that would be tedious.

 Furthermore, with arrays there is a map method, in Rust it is a try_map method.
> Furthermore, with arrays there can be a map method. In Rust it is a try_map method.

 Looking at the documentation, I don't see an equivalent for tuples and I can think of reasons why it couldn't exist.
> Looking at Rust's documentation, I could not find an equivalent for tuples. I can see why it may not be able to exist too.

 The map method requires a function which has inputs of one type.
> The map method requires a function and functions require you to state the data type of your inputs. The purpose of tuples is that you don't have a restricted data type. In my opinion, this makes tuples less natural to use for functions as you do not know what the data type of the input is. 

 Perhaps there are ways around this by having grouped types but the requirement of the map method seems oppositional to the purpose of using tuples.
> Perhaps there are ways to get around this by using [[Enum(Rust)|enum]] which allows you to group types together. However, to me, this seems like I would use an array with this enum. 

 It seems to me we should only use tuples when absolutely necessary so we can take advantage of the methods the structure of arrays let us use.
> To me, it seems like tuples should be used when necessary and arrays should be the default.



---

One quick thing I wondered was whether we could combine arrays and tuples together.
> A question I had was could I combine arrays and tuples?

 I would be surprised if arrays could not combine with themselves as they do in other languages.
> I know they combine in other languages.

 Out of curiosity I ran some experiments to see what matched with what.
> To check, I build code to see if it worked.

 Update this section later.
> You absolutely can. One aspect that caught me off guard is that you have to switch your method of accessing elements. As array elements are accessed using square parentheses and tuples are accessed using periods, you will need to be careful about the order of using them. In hindsight, maybe this is obvious but I didn't think about it when first trying to build it.



---



# Final Draft

We will now study changing properties of the data types we are studying. Then we will focus on different methods of combining data types. We will start with the foundation of data types, scalar types. These are integers, floating-point numbers, Booleans and characters. Let's examine integers first. We can have signed or unsigned integers. Signed integers are denoted with i, unsigned integers with u. Then we can alter how many bits we wish to assign for our data. We put the number beside the type we wish to use. The book mentions allocate 8,16,32,64 or 128 bits. This allows us to reduce or add data for specific cases. There is a special case called size. This allocates the number of bits the architecture of your software is using. I will avoid that for now. An example is a grade for a course. A negative number does not make sense for this so we can use unsigned numbers. As the largest number is 100, we can use the smallest data size, 8, to store this. We assign our data type using the convection data_name: data_type. Our grade example would then be: u8.

Let's examine the rest of the scalar types. While floating point numbers don't have an unsigned option, we can change the number of bits we assign to it. Booleans are just true or false as is usually the case. The are denoted as bool. Lastly, we have characters. They are denoted as char. They are single letters between single quotes. I did notice rust uses  a structure for strings. Reflecting on this, I think this happens with JavaScript as well as you can use methods on them.

To take advantage of data types, we often combine them together. These types are called compound types. There are two compound types in Rust, Tuples and arrays. They have their advantages and disadvantages. Let's start with Tuples. Tuples can be any combination of any data. This can vary in both number and order. This data type is incredibly flexible. Tuples are declared using round parentheses. Inside the parentheses you can write in the types you want. . We access particular elements by writing the name of the tuple, full stop, the element number. The book mentions a tuple without any value has a special name called [[Unit(Rust)|unit]]. Looking at the documentation, it is mentioned that this is often used implicitly in functions. Functions without -> output_type have a unit output. .

The structure of arrays is similar to that of arrays in other languages. The entries are all the same data type. A lot of the syntax is similar to the syntax for arrays in Python. We use square parentheses for arrays. We can declare the type of array by assigning it in one line. Otherwise we can declare its structure within square parentheses. We have two entries to declare the type of array we have. The first entry is the type each element of the array will be. The second entry is to state how many entries we will have. The entries are separated by a ;. The book emphasizes that you cannot access elements outside the bounds of the array. This is also true for tuples.

Let's compare these two compound data types. When deciding which to chose, I think the deciding factor is flexibility of data types while trying to be as inflexible as possible. . Flexibility at first seemed like an advantage to me but I can see a lot of drawbacks after thinking about it. The more structure your object has, the more functions you can build upon them. As tuples have no structure between its elements, you have to explicitly state the data type of each entry. If we have 100 entries, that would be tedious. Furthermore, with arrays there can be a map method. In Rust it is a try_map method. Looking at Rust's documentation, I could not find an equivalent for tuples. I can see why it may not be able to exist too. The map method requires a function and functions require you to state the data type of your inputs. The purpose of tuples is that you don't have a restricted data type. In my opinion, this makes tuples less natural to use for functions as you do not know what the data type of the input is. . Perhaps there are ways to get around this by using [[Enum(Rust)|enum]] which allows you to group types together. However, to me, this seems like I would use an array with this enum. . To me, it seems like tuples should be used when necessary and arrays should be the default.

A question I had was could I combine arrays and tuples?. I know they combine in other languages. To check, I build code to see if it worked. You absolutely can. One aspect that caught me off guard is that you have to switch your method of accessing elements. As array elements are accessed using square parentheses and tuples are accessed using periods, you will need to be careful about the order of using them. In hindsight, maybe this is obvious but I didn't think about it when first trying to build it.
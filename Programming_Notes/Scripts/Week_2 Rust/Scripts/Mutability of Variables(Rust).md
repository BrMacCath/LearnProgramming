---
fileClass: Script
ScriptStatus: Done
ParagraphNum: 1
due_date: 11-04-2024
DraftNum: 3
complete: true
---
# Script Goal

## Key points

- Variables are often unmutable.
- const is also a cariable type that is always unmutable.
- [[Shadowing(Rust)|Shadowing]] is scope related.
- Can be used to restore data to its original state afterwards.


Toyota sourcing https://users.ece.cmu.edu/~koopman/toyota/koopman-09-18-2014_toyota_slides.pdf

# First Draft

Topic: [[Const(Rust)|const]] is a data type with certain features.
- Always immutable.
- Allow for global scope.
- Restricted methods of creating it.
We have seen data types such as let but now lets examine another data type called const. This is an immutable data type that has certain restrictions. The convention for declaration is to have all the letters upper case. Furthermore, it has conditions on the methods of how to create it. We cannot have runtime data to create the constant variable. The full list of constraints are listed in Chapter 17. Const is often used for global variables, ones that can be accessed in any scope. The book also recommends keeping one place to store your global variables.  To continue we will talk about different ways variables can appear instead of being created.

+---+

Topic: Shadowing allows you to reuse the names of variables.
- Shadowing is the act of reusing the name of a variable. 
- It allows you to change the type of the variable as well.
- It's applications feel useful for scope related activities. 
- People use it for sanitising data.

To reuse the name of a variable without reassignment we can use a technique called shadowing. This is to reuse the name of a variable in another context. Examples I have found in other situations are when you are sanitising data, you want to keep the old data but in context you wish to use the sanitised version. Rather than having multiple names for the data dependant on the stage of processing you just relabel the steps as data all along. An interesting property of this is that there is no restriction on the new type of data that is being given the old label. I think the purpose of shadowing is to allow for scope related actions where we want to retain the original input.




## Completed First Draft

We have seen data types such as let but now lets examine another data type called const. This is an immutable data type that has certain restrictions. The convention for declaration is to have all the letters upper case. Furthermore, it has conditions on the methods of how to create it. We cannot have runtime data to create the constant variable. The full list of constraints are listed in Chapter 17. Const is often used for global variables, ones that can be accessed in any scope. The book also recommends keeping one place to store your global variables.  To continue we will talk about different ways variables can appear instead of being created.

To reuse the name of a variable without reassignment we can use a technique called shadowing. This is to reuse the name of a variable in another context. Examples I have found in other situations are when you are sanitising data, you want to keep the old data but in context you wish to use the sanitised version. Rather than having multiple names for the data dependant on the stage of processing you just relabel the steps as data all along. An interesting property of this is that there is no restriction on the new type of data that is being given the old label. I think the purpose of shadowing is to allow for scope related actions where we want to retain the original input.



# Second Draft

We have seen data types such as let but now lets examine another data type called const.
> Let's look at a new data type called const.

 This is an immutable data type that has certain restrictions.
>  This is an immutable data type that has certain restrictions.

 The convention for declaration is to have all the letters upper case.
> We declare it using upper case letters.

 Furthermore, it has conditions on the methods of how to create it.
> It has restrictions on the methods we can use to create it.

 We cannot have runtime data to create the constant variable.
> We cannot use data that is created during the process of programming. The data must be constant data. We can still use expressions on the constant data to create these variables.

 The full list of constraints are listed in Chapter 17.
>  The full list of constraints are listed in Chapter 17.

 Const is often used for global variables, ones that can be accessed in any scope.
> Const is used for global variables, variables we can access in any scope.

 The book also recommends keeping one place to store your global variables.
>  The book also recommends keeping one place to store your global variables. I remember hearing the issue about Toyota's cars having too many variables. They had 10,000 stored in the car and people couldn't figure out what was causing issues.

  To continue we will talk about different ways variables can appear instead of being created.
> We will now talk about different methods variables can appear from instead of being created.



---

To reuse the name of a variable without reassignment we can use a technique called shadowing.
> We can reuse the name of a variable in a scope without reassignment. This technique is called shadowing. This still feels a little strange to me. To apply this technique we call the variable name again but we use the let keyword before it.

 This is to reuse the name of a variable in another context.
> This enables us to reuse the name in an alternative context.

 Examples I have found in other situations are when you are sanitising data, you want to keep the old data but in context you wish to use the sanitised version.
> To build intuition about this process, I decided to try figure out how people do this in practice. An example I found was people who are sanitising data they receive from the internet. They still wish to keep the old data but to use it we would need to process it. 

 Rather than having multiple names for the data dependant on the stage of processing you just relabel the steps as data all along.
> We could use multiple names for the data depending on the stage of processing. The downside here is that this could become confusing if we have multiple names for the same piece of data.

 An interesting property of this is that there is no restriction on the new type of data that is being given the old label.
> One thing I found interesting is that there is no restriction on the new data that is being given the old label. I assume, given how much thought the creators of Rust have put into creating it, that there are conventions and compiler checks to prevent security issues from mislabelling.

 I think the purpose of shadowing is to allow for scope related actions where we want to retain the original input.
> To me, the purpose of shadowing it to allow for scope related actions where we want to keep the original data.





## Complete Second Draft

Let's look at a new data type called const.  This is an immutable data type that has certain restrictions. We declare it using upper case letters. It has restrictions on the methods we can use to create it. We cannot use data that is created during the process of programming. The data must be constant data. We can still use expressions on the constant data to create these variables.  The full list of constraints are listed in Chapter 17. Const is used for global variables, variables we can access in any scope.  The book also recommends keeping one place to store your global variables. I remember hearing the issue about Toyota's cars having too many variables. They had 10,000 stored in the car and people couldn't figure out what was causing issues. We will now talk about different methods variables can appear from instead of being created.

We can reuse the name of a variable in a scope without reassignment. This technique is called shadowing. This still feels a little strange to me. To apply this technique we call the variable name again but we use the let keyword before it. This enables us to reuse the name in an alternative context. To build intuition about this process, I decided to try figure out how people do this in practice. An example I found was people who are sanitising data they receive from the internet. They still wish to keep the old data but to use it we would need to process it. . We could use multiple names for the data depending on the stage of processing. The downside here is that this could become confusing if we have multiple names for the same piece of data. One thing I found interesting is that there is no restriction on the new data that is being given the old label. I assume, given how much thought the creators of Rust have put into creating it, that there are conventions and compiler checks to prevent security issues from mislabelling. To me, the purpose of shadowing it to allow for scope related actions where we want to keep the original data

# Third Draft

Let's look at a new data type called const.
> Let's examine a new data type called const.

  This is an immutable data type that has certain restrictions.
> It is an immutable data type that has certain restrictions.

 We declare it using upper case letters.
> We declare it using upper case letters. We still have underscores between words.

 It has restrictions on the methods we can use to create it.
> There are restrictions on how we can create them.

 We cannot use data that is created during the process of programming.
> We cannot use data that is built during the runtime of our program.

 The data must be constant data.
> The data must be constant data.

 We can still use expressions on the constant data to create these variables.
>  We can still use expressions on the constant data to create these variables.

  The full list of constraints are listed in Chapter 17.
> The list of constrains are listed in Chapter 17 of the Rust book.

 Const is used for global variables, variables we can access in any scope.
>  Const is used for global variables, variables we can access in any scope.

  The book also recommends keeping one place to store your global variables.
> It is recommended to store your global variables in one place by the Rust book.

 I remember hearing the issue about Toyota's cars having too many variables.
> I remember hearing issues about Toyota's cars having too many global variables.

 They had 10,000 stored in the car and people couldn't figure out what was causing issues.
>  They had over 10,000 global variables stored in the software and people couldn't figure out what was causing issues. I read a couple of places on the internet and the recommended maximum number of global variables was 10. 

 We will now talk about different methods variables can appear from instead of being created
> We will now talk about different methods variables can appear from instead of being created.



---

We can reuse the name of a variable in a scope without reassignment.
> Rust has a technique called shadowing. It allows you to reuse a variable name inside a scope without reassigning that variable name outside of that scope.

 This technique is called shadowing.
> This feels like a method to avoid issues with having too many names for different versions of the same data with modifications applied to it.

 This still feels a little strange to me.
> I also wonder does this prevent some kinds of computing problems where people tend to mutate data in multiple different scenarios. If people are altering data with multiple functions, keeping track of the form of data you have could be an issue. It is better to assume that the data is always of one particular form perhaps?

 To apply this technique we call the variable name again but we use the let keyword before it.
> To use shadowing, we say let variable name.

 This enables us to reuse the name in an alternative context.
> Then we can use that name in an alternative context.

 To build intuition about this process, I decided to try figure out how people do this in practice.
> My first time seeing this felt odd to me, why is this useful? To build intuition and understanding about this, I decided to google how people use this technique in practice.

 An example I found was people who are sanitising data they receive from the internet.
> I found out that people use shadowing when dealing with sanitising data they receive from the internet.

 They still wish to keep the old data but to use it we would need to process it.
> They still wish to retain the old data but using it could be dangerous. Rather than coming up with new names, they just shadow the old data with the sanitised new data.

 We could use multiple names for the data depending on the stage of processing.
> This prevents using multiple names for the same data.

 The downside here is that this could become confusing if we have multiple names for the same piece of data.
> A downside could be that we have not distinguished what stage of processing the data is at from the name.

 One thing I found interesting is that there is no restriction on the new data that is being given the old label.
> Something I found interesting is that there is no restriction on data type when using shadow. If my original data type is an integer, I could shadow it with a boolean without issue. I thought there may be some restriction but it seems not. This may change later.

 I assume, given how much thought the creators of Rust have put into creating it, that there are conventions and compiler checks to prevent security issues from mislabelling.
> 

 To me, the purpose of shadowing it to allow for scope related actions where we want to keep the original data
> In summary I believe the purpose of shadowing it to allow for scope related actions where we want to keep the original data.

# Final Draft

Let's examine a new data type called const. It is an immutable data type that has certain restrictions. We declare it using upper case letters. We still have underscores between words. There are restrictions on how we can create them. We cannot use data that is built during the runtime of our program. The data must be constant data.  We can still use expressions on the constant data to create these variables. The list of constrains are listed in Chapter 17 of the Rust book.  Const is used for global variables, variables we can access in any scope. It is recommended to store your global variables in one place by the Rust book. I remember hearing issues about Toyota's cars having too many global variables.  They had over 10,000 global variables stored in the software and people couldn't figure out what was causing issues. I read a couple of places on the internet and the recommended maximum number of global variables was 10. . We will now talk about different methods variables can appear from instead of being created.

Rust has a technique called shadowing. It allows you to reuse a variable name inside a scope without reassigning that variable name outside of that scope. This feels like a method to avoid issues with having too many names for different versions of the same data with modifications applied to it. I also wonder does this prevent some kinds of computing problems where people tend to mutate data in multiple different scenarios. If people are altering data with multiple functions, keeping track of the form of data you have could be an issue. It is better to assume that the data is always of one particular form perhaps?. To use shadowing, we say let variable name. Then we can use that name in an alternative context. My first time seeing this felt odd to me, why is this useful? To build intuition and understanding about this, I decided to google how people use this technique in practice. I found out that people use shadowing when dealing with sanitising data they receive from the internet. They still wish to retain the old data but using it could be dangerous. Rather than coming up with new names, they just shadow the old data with the sanitised new data. This prevents using multiple names for the same data. A downside could be that we have not distinguished what stage of processing the data is at from the name. Something I found interesting is that there is no restriction on data type when using shadow. If my original data type is an integer, I could shadow it with a boolean without issue. I thought there may be some restriction but it seems not. This may change later. In summary I believe the purpose of shadowing it to allow for scope related actions where we want to keep the original data
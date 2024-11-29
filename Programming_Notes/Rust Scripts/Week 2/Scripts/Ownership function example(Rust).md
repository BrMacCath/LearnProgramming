---
fileClass: Script
ScriptStatus: Done
ParagraphNum: 1
due_date: 11-25-2024
DraftNum: 2
complete: true
---
# Script Goal

## Key points
- Look at how the ownership of the variables moves.
- The ownership of a variable can move from name to name. 
- Use Yellow boxes for Ownership

# First Draft

Topic: Visualising ownership.
- Have a visual aid for the name of a variable.
- Use yellow box. 
- Go through an example of adding one to a number to fix things up.

We are going to proceed through an example to show some ownership rules. To show where the ownership of a variable is, we will enclose it in a yellow box. Our first example is passing in a number to a function that just prints it out. We will declare that function as drop variable as that will be its effect in this example. For now we are going to assign a variable a name. To keep it simple, we will assign 5 to x. Therefore the ownership of this arrangement is with x. The next step is to fill in our variable to our function. Note however when we fill into our function, the ownership goes into the function too. Then we apply the process of our drop variable function. However, at the end of the function, the ownership goes out of scope. We can no longer access it even inside our main function.

+---+

Topic: Lose and take ownership
- Focus on giving and receiving ownership of functions.
- Go through an example where one name loses the ownership of a variable and the other takes it. 

Let's now see how we can use this concept to transfer the ownership of a function. We have a function called lose and take that we will use to make one name lose ownership and the other to take ownership of the variable. Let's proceed through the following example that highlights how ownership travels along different names. We start off with assigning 5 to x again. Here x is now the owner of that variable.  Then we pass it into our function so it travels to within the function scope. When it passes to return x, we are transfering the value back out of the scope. This means our 5 from the start is now assigned to s instead of x at the end of this function.



## Completed First Draft

We are going to proceed through an example to show some ownership rules. To show where the ownership of a variable is, we will enclose it in a yellow box. Our first example is passing in a number to a function that just prints it out. We will declare that function as drop variable as that will be its effect in this example. For now we are going to assign a variable a name. To keep it simple, we will assign 5 to x. Therefore the ownership of this arrangement is with x. The next step is to fill in our variable to our function. Note however when we fill into our function, the ownership goes into the function too. Then we apply the process of our drop variable function. However, at the end of the function, the ownership goes out of scope. We can no longer access it even inside our main function.

Let's now see how we can use this concept to transfer the ownership of a function. We have a function called lose and take that we will use to make one name lose ownership and the other to take ownership of the variable. Let's proceed through the following example that highlights how ownership travels along different names. We start off with assigning 5 to x again. Here x is now the owner of that variable.  Then we pass it into our function so it travels to within the function scope. When it passes to return x, we are transfering the value back out of the scope. This means our 5 from the start is now assigned to s instead of x at the end of this function.



# Second Draft

We are going to proceed through an example to show some ownership rules.
> Lets use examples to show some ownership rules.

 To show where the ownership of a variable is, we will enclose it in a yellow box.
> We will enclose the owner of a variable in a yellow box to highlight where ownership is.

 Our first example is passing in a number to a function that just prints it out.
> To start we will have a function that takes a number and then prints it out.

 We will declare that function as drop variable as that will be its effect in this example.
> We will name that function drop_variable.

 For now we are going to assign a variable a name.
> For now we are going to assign a variable a name.

 To keep it simple, we will assign 5 to x.
> We assign 5 to x.

 Therefore the ownership of this arrangement is with x.
> So the ownership of this 5 is x.

 The next step is to fill in our variable to our function.
> Then we fill our variable into our function.

 Note however when we fill into our function, the ownership goes into the function too.
> Note that the ownership of 5 now goes into the function. This prevents there being two owners of a variable.

 Then we apply the process of our drop variable function.
> Now we apply the process of drop variable.

 However, at the end of the function, the ownership goes out of scope.
> At the end of the function, the ownership goes out of scope.

 We can no longer access it even inside our main function.
> Now we cannot access it even inside the main function.



---

Let's now see how we can use this concept to transfer the ownership of a function.
> Lets now see how to transfer ownership of a variable with functions.

 We have a function called lose and take that we will use to make one name lose ownership and the other to take ownership of the variable.
> The function we will use is called lose and take. We will use it to show how to transfer ownership.

 Let's proceed through the following example that highlights how ownership travels along different names.
> 

 We start off with assigning 5 to x again.
> We start off with assigning 5 to x again.


 Here x is now the owner of that variable.
>  Here x is now the owner of that variable.

  Then we pass it into our function so it travels to within the function scope.
> Then we pass it into our function so it travels to within the function scope.

 When it passes to return x, we are transfering the value back out of the scope.
> When it passes to return x, we are transferring the value back out of the scope.

 This means our 5 from the start is now assigned to s instead of x at the end of this function.
> This means our 5 from the start is now assigned to s instead of x at the end of this function.



---



# Final Draft

Lets use examples to show some ownership rules. We will enclose the owner of a variable in a yellow box to highlight where ownership is. To start we will have a function that takes a number and then prints it out. We will name that function drop_variable. For now we are going to assign a variable a name. We assign 5 to x. So the ownership of this 5 is x. Then we fill our variable into our function. Note that the ownership of 5 now goes into the function. This prevents there being two owners of a variable. Now we apply the process of drop variable. At the end of the function, the ownership goes out of scope. Now we cannot access it even inside the main function.

Lets now see how to transfer ownership of a variable with functions. The function we will use is called lose and take. We will use it to show how to transfer ownership. We start off with assigning 5 to x again. Here x is now the owner of that variable. Then we pass it into our function so it travels to within the function scope. When it passes to return x, we are transferring the value back out of the scope. This means our 5 from the start is now assigned to s instead of x at the end of this function.
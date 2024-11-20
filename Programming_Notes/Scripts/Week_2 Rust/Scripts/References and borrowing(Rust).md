---
fileClass: Script
ScriptStatus: Done
ParagraphNum: 1
due_date: 11-11-2024
DraftNum: 3
complete: true
---
# Script Goal

## Key points
- We need to pass values into our functions, references are the key to doing this. 
- Allows the ownership to stay where it is.
- This practice is called [[Borrowing(Rust)|borrowing]].
- Can have multiple references by adding &mut.


# First Draft
Topic: Borrowing
- Need to be able to pass values into functions.
- Borrowing is the key.
- Let's look at a simple example.
With Rust we want to use our variables without changing them. Therefore we want to have a method to pass the value into our functions without losing ownership of that variable. We do this through a technique called borrowing. To do this we pass the reference for the variable instead of the ownership of the variable into the function. I will use yellow boxes to show ownership and blue boxes for references. Let's show this through an example.


+---+

Topic: Allowing mutability

- Sometimes data needs to change.
- How do we allow data to change withing a function and not change ownership?

While this is useful, sometimes functions are used to change our variables. Therefore we wish to make the variable we put into the functions mutable. With our declaration we declare it as mut but we put an ampersand before the mut keyword. This allows us to alter the variable within the function but we do not have it as an output. Lets look at a function that increases the output by 1. We will call this function add_one. We have our fn keyword followed by the name. Then there is the ampersand mut followed by our variable. We are not getting an output so there is nothing after the parentheses. Then inside our function we simply take our variable and add one to it. Notice though that the ownership never enters the function, only the references. We need to make sure that we put a semi-colon at the end to ensure our output is a [[Unit(Rust)|unit]] Type.


+---+


Topic: Differences with references
- Rust allows for any number of potential references within a function.
- However, only one mutable reference per variable.
- This prevents "data races". I am not sure what these are but they cause hard to find bugs.

Rust has rules about how we can use references based off of preventing errors. One such error that rust is trying to prevent is called a data race error. This occurs when one variable is being rewritten in two places. This leads to unexpected bugs as they can interfere with each other. Therefore, Rust places restrictions on mutable variables to prevent this but as we are unable to write over immutable variables, Rust does not place restrictions on immutable variables. So what are the restrictions? Mutable variables can only have one variable assigned to them in a function. We cannot have two references competing if only one exists. For immutable variables, data racing can't occur so there are no restrictions. We can assign as many variables as we want as data racing is prevented by the immutable nature of the data. Here is a summary of the different approached immutable versus mutable data types take to prevent data racing.


## Completed First Draft

With Rust we want to use our variables without changing them. Therefore we want to have a method to pass the value into our functions without losing ownership of that variable. We do this through a technique called borrowing. To do this we pass the reference for the variable instead of the ownership of the variable into the function. I will use yellow boxes to show ownership and blue boxes for references. Let's show this through an example.

While this is useful, sometimes functions are used to change our variables. Therefore we wish to make the variable we put into the functions mutable. With our declaration we declare it as mut but we put an ampersand before the mut keyword. This allows us to alter the variable within the function but we do not have it as an output. Lets look at a function that increases the output by 1. We will call this function add_one. We have our fn keyword followed by the name. Then there is the ampersand mut followed by our variable. We are not getting an output so there is nothing after the parentheses. Then inside our function we simply take our variable and add one to it. Notice though that the ownership never enters the function, only the references. We need to make sure that we put a semi-colon at the end to ensure our output is a [[Unit(Rust)|unit]] Type.

Rust has rules about how we can use references based off of preventing errors. One such error that rust is trying to prevent is called a data race error. This occurs when one variable is being rewritten in two places. This leads to unexpected bugs as they can interfere with each other. Therefore, Rust places restrictions on mutable variables to prevent this but as we are unable to write over immutable variables, Rust does not place restrictions on immutable variables. So what are the restrictions? Mutable variables can only have one variable assigned to them in a function. We cannot have two references competing if only one exists. For immutable variables, data racing can't occur so there are no restrictions. We can assign as many variables as we want as data racing is prevented by the immutable nature of the data. Here is a summary of the different approached immutable versus mutable data types take to prevent data racing.



# Second Draft

With Rust we want to use our variables without changing them.
> We still want to use our variables without changing them.

 Therefore we want to have a method to pass the value into our functions without losing ownership of that variable.
> Therefore we need a method of passing the value of our variable into functions without losing ownership.

 We do this through a technique called borrowing.
> A technique called borrowing solves this.

 To do this we pass the reference for the variable instead of the ownership of the variable into the function.
> Borrowing is passing the reference for a variable into the function instead of the ownership.

 I will use yellow boxes to show ownership and blue boxes for references.
> I will use yellow boxes to show ownership and blue boxes for references.

 Let's show this through an example.
> Let's show this through an example.



---

While this is useful, sometimes functions are used to change our variables.
> Sometimes we wish for our functions to change our variables.

 Therefore we wish to make the variable we put into the functions mutable.
> Therefore we wish the value of the variable that we put into our function to be valuable.

 With our declaration we declare it as mut but we put an ampersand before the mut keyword.
> Therefore we add mut before our variable and then also put the ampersand before the mut keyword.

 This allows us to alter the variable within the function but we do not have it as an output.
> This allows us to alter the variable within the function. Note that this does not become an output for our function.

 Lets look at a function that increases the output by 1.
> Let's make a function that increases an integer by one.

 We will call this function add_one.
> We will name it add_one.

 We have our fn keyword followed by the name.
> We have fn followed by add_one.

 Then there is the ampersand mut followed by our variable.
> Next, within the parentheses, we have & mut followed by the variable.

 We are not getting an output so there is nothing after the parentheses.
> As there is no output, we have no arrow followed by a type of output.

 Then inside our function we simply take our variable and add one to it.
> Then inside our function we simply take our variable and add one to it.

 Notice though that the ownership never enters the function, only the references.
> The ampersand means that only the reference enters the function and not the ownership.

 We need to make sure that we put a semi-colon at the end to ensure our output is a [[Unit(Rust)|unit]] Type.
> We need to make sure that we put a semi-colon at the end to ensure our output is a [[Unit(Rust)|unit]].



---

Rust has rules about how we can use references based off of preventing errors.
> Rust has rules on references to prevent errors.

 One such error that rust is trying to prevent is called a data race error.
> The error that we will focus on preventing is called the data race error.

 This occurs when one variable is being rewritten in two places.
> This occurs where we are trying to write on one piece of data from more than one place. 

 This leads to unexpected bugs as they can interfere with each other.
> This leads to unexpected bugs as they can interfere with each other. 

 Therefore, Rust places restrictions on mutable variables to prevent this but as we are unable to write over immutable variables, Rust does not place restrictions on immutable variables.
> Therefore Rust makes restrictions on variables that we can write on. As mutable variables are variables we can change, we have restrictions on them. As immutable variables are not changeable, we don't have restrictions on them.

 So what are the restrictions? Mutable variables can only have one variable assigned to them in a function.
> The restriction on mutable variables is designed to prevent two or more variables accessing the same mutable data. A method of doing this is to have mutable data only accessible by one variable.

 We cannot have two references competing if only one exists.
> 

 For immutable variables, data racing can't occur so there are no restrictions.
> For immutable variables, data racing cannot occur. There is no benefit to placing a restriction on the number of variables that can access the data. So we don't.

 We can assign as many variables as we want as data racing is prevented by the immutable nature of the data.
> 

 Here is a summary of the different approached immutable versus mutable data types take to prevent data racing.
> Here is a summary table of how Rust prevents data racing.


## Complete Second Draft

We still want to use our variables without changing them. Therefore we need a method of passing the value of our variable into functions without losing ownership. A technique called borrowing solves this. Borrowing is passing the reference for a variable into the function instead of the ownership. I will use yellow boxes to show ownership and blue boxes for references. Let's show this through an example..

Sometimes we wish for our functions to change our variables. Therefore we wish the value of the variable that we put into our function to be valuable. Therefore we add mut before our variable and then also put the ampersand before the mut keyword. This allows us to alter the variable within the function. Note that this does not become an output for our function. Let's make a function that increases an integer by one. We will name it add_one. We have fn followed by add_one. Next, within the parentheses, we have & mut followed by the variable. As there is no output, we have no arrow followed by a type of output. Then inside our function we simply take our variable and add one to it. The ampersand means that only the reference enters the function and not the ownership. We need to make sure that we put a semi-colon at the end to ensure our output is a [[Unit(Rust)|unit]]..

Rust has rules on references to prevent errors. The error that we will focus on preventing is called the data race error. This occurs where we are trying to write on one piece of data from more than one place. This leads to unexpected bugs as they can interfere with each other. Therefore Rust makes restrictions on variables that we can write on. As mutable variables are variables we can change, we have restrictions on them. As immutable variables are not changeable, we don't have restrictions on them. The restriction on mutable variables is designed to prevent two or more variables accessing the same mutable data. A method of doing this is to have mutable data only accessible by one variable. For immutable variables, data racing cannot occur. There is no benefit to placing a restriction on the number of variables that can access the data. So we don't. Here is a summary table of how Rust prevents data racing.

# Third Draft

We still want to use our variables without changing them.
> We want to use our variables without changing them.

 Therefore we need a method of passing the value of our variable into functions without losing ownership.
> So we need a process to use our variables in our function without losing ownership.

 A technique called borrowing solves this.
> Borrowing is a technique to solve this.

 Borrowing is passing the reference for a variable into the function instead of the ownership.
> This refers to passing the reference of a variable into the function.

 I will use yellow boxes to show ownership and blue boxes for references.
>  I will use yellow boxes to show ownership and blue boxes for references.

 Let's show this through an example.
> Let's show this through an example.

---

> Our example will be to take a number and print it out. We will call our function print_num.  So we have fn followed by print_num. Then we add our parenthesises. To add our variable into the function without ownership, we add the ampersand before the variable. Then we use the variable as we would like within the function. This leaves the ownership outside of where the function.



---

Sometimes we wish for our functions to change our variables.
> Let's examine functions where the variables can change.

 Therefore we wish the value of the variable that we put into our function to be valuable.
> So we wish for our variable to be mutable.

 Therefore we add mut before our variable and then also put the ampersand before the mut keyword.
> We put mut before our variable and the ampersand **before** the mut keyword.

 This allows us to alter the variable within the function.
> This makes the data mutable.

 Note that this does not become an output for our function.
> Note that this does not become an output for our function.

 Let's make a function that increases an integer by one.
> Let's test this idea out. We will make a function that increases the value of an integer by one.

 We will name it add_one.
> We will call it add_one.

 We have fn followed by add_one.
> We have fn followed by add_one.


 Next, within the parentheses, we have & mut followed by the variable.
> Next, within the parentheses, we have & mut followed by the variable.

 As there is no output, we have no arrow followed by a type of output.
> As we have no output, our function notation is complete.

 Then inside our function we simply take our variable and add one to it.
> Then we take variable and add one to it.

 The ampersand means that only the reference enters the function and not the ownership.
> The ampersand means that only the reference enters the function and not the ownership.

 We need to make sure that we put a semi-colon at the end to ensure our output is a [[Unit(Rust)|unit]].
>  We need to make sure that we put a semi-colon at the end to ensure our output is a [[Unit(Rust)|unit]].




---

Rust has rules on references to prevent errors.
> Rust has rules on references to prevent errors.

 The error that we will focus on preventing is called the data race error.
> We will focus on how Rust prevents the data race error.

 This occurs where we are trying to write on one piece of data from more than one place.
> This occurs where we are trying to write on one piece of data from more than one place.

 This leads to unexpected bugs as they can interfere with each other.
> This leads to bugs when both are trying to alter the data simultaneously. 

 Therefore Rust makes restrictions on variables that we can write on.
> To prevent this, Rust makes restrictions on variables where we can mutate the data.

 As mutable variables are variables we can change, we have restrictions on them.
> Therefore mutable data have restrictions on them.

 As immutable variables are not changeable, we don't have restrictions on them.
> Immutable variables don't.

 The restriction on mutable variables is designed to prevent two or more variables accessing the same mutable data.
> The restriction on mutable variables is designed to prevent two or more variables accessing the same mutable data.

 A method of doing this is to have mutable data only accessible by one variable.
> Rust prevents this by having mutable data having one owner.

 For immutable variables, data racing cannot occur.
>  For immutable variables, data racing cannot occur.

 There is no benefit to placing a restriction on the number of variables that can access the data.
>  There is no benefit to placing a restriction on the number of variables that can access the data.

 So we don't.
>  So we don't.

 Here is a summary table of how Rust prevents data racing.
>  Here is a summary table of how Rust prevents data racing.



---



# Final Draft

We want to use our variables without changing them. So we need a process to use our variables in our function without losing ownership. Borrowing is a technique to solve this. This refers to passing the reference of a variable into the function. I will use yellow boxes to show ownership and blue boxes for references. Let's show this through an example.

Our example will be to take a number and print it out. We will call our function print_num.  So we have fn followed by print_num. Then we add our parenthesises. To add our variable into the function without ownership, we add the ampersand before the variable. Then we use the variable as we would like within the function. This leaves the ownership outside of where the function.

Let's examine functions where the variables can change. So we wish for our variable to be mutable. We put mut before our variable and the ampersand **before** the mut keyword. This makes the data mutable. Note that this does not become an output for our function. Let's test this idea out. We will make a function that increases the value of an integer by one. We will call it add_one. We have fn followed by add_one. Next, within the parentheses, we have & mut followed by the variable. As we have no output, our function notation is complete. Then we take variable and add one to it. The ampersand means that only the reference enters the function and not the ownership. We need to make sure that we put a semi-colon at the end to ensure our output is a [[Unit(Rust)|unit]].

Rust has rules on references to prevent errors. We will focus on how Rust prevents the data race error. This occurs where we are trying to write on one piece of data from more than one place. This leads to bugs when both are trying to alter the data simultaneously. To prevent this, Rust makes restrictions on variables where we can mutate the data. Therefore mutable data have restrictions on them. Immutable variables don't. The restriction on mutable variables is designed to prevent two or more variables accessing the same mutable data. Rust prevents this by having mutable data having one owner. For immutable variables, data racing cannot occur. There is no benefit to placing a restriction on the number of variables that can access the data. So we don't. Here is a summary table of how Rust prevents data racing.
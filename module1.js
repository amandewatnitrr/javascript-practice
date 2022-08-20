/*
Let's start with declaration of variables in javascript
*/

var variable_name = "value"; /* For assigning string value directly*/
var variable_name =  5; /* For assigning integer value directly*/
var variable_name = 5.5; /* For assigning float value directly*/

/* 
- Similar kind of variable declaration can be done using "let" instead of "var".
- But there's a ddifference b/w 2 - var allows varable redeclaration, while let doesn't allow.
- Also, let is block scoped, while var is function scoped.
- var allows hoisting while let doesn't.
*/

/* Prints the statement within console.log() on console. */
console.log("This is a the value of variable = " + variable_name);

/*
* Below is the structure for a general function declaration.
* The below function is just an example function.
*/
function function_name(parameter1, parameter2)
    {
        if(parameter1>10)
            {
                /* On conditions within if() staement being satisfied this statement will be executed. */
            }
        else if(parameter2>10)
            {
                /* The else if condition statement will be executed, if the criteria/condition for if() is not met. */
            }
        else
            {
                /* If none of the conditions are met, the else block will be executed.*/
            }
        /*
            code 
        */
    }

/* 
Like all other programming languages we have switch statement in Javascript as well. 
But there are other ways as well to write a function in javascript, let's test it with them.
*/

var fucntion_nama = function(parameter1)
    {
        switch(parameter1)
            {
                case value1: 
                    /* Value1 associated statement. */
                    break;
                case value2: 
                    /* Value2 associated statement. */
                    break;
            }
    }

/* 
Javascript has also supports Coercion and  Falsy Values. 
In Javascript, undefined, NaN, null, 0 and   is treated as falsy values.
*/
    
/* 
Also in JavaScript, 
2==2 is not same as 2 === 2 
== is used for comparison b/w two variables irrespective of there datatyes.
=== is used for comparison b/w two variables but this will check strict datatype.
*/

/*
* We also have ternary operator in the JavaScript, the syntax for which goes as follows:
condition ? exprIfTrue : exprIfFalse
*/

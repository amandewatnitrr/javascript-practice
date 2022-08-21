/*
* Till now we discussed about some of the common basics of the JavaScript, 
* in this module we will further continue ahead learning about other functions and features of the JavaScript.
* In all the languages we know of there are mainly 3 types of loops, but that's not the case for JavaScript.
* In JavaScript we have 5 types of loops:
> For
> For/in
> For/each
> For/of
> while
> Do/while

* The structure for "for","while" and "do while" is similar, but changes for the following loops:
> for/in
> for/each
> for/of

Let's look at them through the below given generalised syntax.
*/

/*
* for/in
* here in the example below n represents the key of the key:value pair of the object.
*/

for(const n in object_name)
    {
        console.log(n + " " + object_name[n]);
    }

/*
* for/each
* implements the given set of statment through a callback function on each element of the array.
*/

array_name.forEach((parameter) => {
        /* Statements */
    });

/*
* for/of
* special type of loop specially meant for array traversal, to iterate through each element.
* n in the below generalised syntax denotes each element of the array, intially at the 0th index of array.
*/

for (const n of array_name)
    {
        /* Statements */
    }

/* 
* Let's learn about a new function in the JavaScript now:
* typeof(variablename)
* typeof returs the type of the variable name give as parameter to this function.
* let's understand this through an example below.
* The statement within the below example will be executed if and only if the type of the given variable is same as the expected once mentioned.
*/

if(typeof(variable_name) == 'string')
    {
        /* Statements */
    }

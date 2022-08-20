/*
    This are all the learnings from my previous Javascript notes in the reposittory link mentioned below:
    Link: https://github.com/amandewatnitrr/JavaScript-Tutorial
*/

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

/*
* Arrays in JavScript are similar to what we all have been learning yet.
* Below is an example of Array definiation in Javascript.
*/
var empty_array = []; // Empty array
var name = ["Aman","Aditya","Smruti","Harshit","Rishi"];
var data = ["Aman Kumar Dewangan",21,"GE Healtchare",14.5];

/*
* We can also access a specific index in the array using the index number.
*/

console.log(array_name[index]); // This displays the data stored at that secific index in the array.

/*
* we can also pop values from the array using the pop function, as mentioned below.
*/

array_name.pop(); // It completely knocks off the last element in the array, that is element at the (n-1)th index of array, assuming array size is n.

/*
* In order to insert any element from the LHS of the array, i.e. inserting a new element at the 0th index use unshift() function.
* Below is a quick demonstration of use of unshift function in Javascript.
*/

array_name.unshift(value); // Insert a new element at the 0th index of array

/*
* In a very similar fashion, we can even delete elements from the LHS of the array using the shift() function.
* below is a quick demonstration of use of shift function in Javascript.
*/

array_name.shift(); // this will delete the current first element in the array

/*
Thers is something called Callback and Arrow Function in Javascript as well.
Let's understand it with a simple example syntax given below.

Callback or Arrow Functions are different from ordinary Javascript functions in the way that, it must always return something.
*/

var fucntion_name = (paraameter) =>
    {
        /*
            Statements
        */
       return something;
    }

/*
* We have a fill() function in javascript for arrays. What it odes is,
it fills the array from a given starting index to ending index -1 with the given value.
*/

array_name.fill(value,start_index,end_index);

/*
* We have a every() and filter() function in javascript for arrays.
* every() function checks if the every element in the array meets the condition specified or not.
* every() function returns a boolean value.
*/

var variable_name =  array_name.every((value) => condition)

/*
* filter() function filters are all those elements from the array that doesn't meet the conditions specified.
* returns an array with elements removed from array that donot meet the required condition.
*/

var variable_name = array_name.filter((value) => condition)

/*
* slice() and splice() function
* slice() function crops a portion of the array and returns elements in the given range.
*/

array_name.slice(start_index,end_index); // returns the elements in the range from start_index to end_index-1

/*
* splice() function
* splice() function crops the slic portion and inserts a single value in place of that
*/

array_name.splice(start_index,end_index,value); // removes the elements in the range from start_index to end_index-1 and replaces them with the value specified.

/*
* Like other programming languages we have objects in Javascript as well.
* The Below is simple example of a JavaScript object.
*/

var object_name = {
                key1: value1,
                key2: value2,
            };

/*
* A single key and value pair of the JavaScript object can be extracted by using the following syntax:
object_name.key_name
*/

/*
* The JavaScript objects can also contain functions as well that directly asign values to it's respective associated keys.
Let's understand this with an exmaple mentioned below.
*/

var employee = {
                name:"",
                age:0,
                id:0,
                courselist:[],
                courses:0,
                inputname: function ()
                    {
                        this.name=prompt("Enter Employee Name: ");
                    },
                inputage: function () 
                    {
                        this.age=parseInt(prompt("Enter Age: "));
                    },
                inputid: function () 
                    {
                        this.id=parseInt(prompt("Enter ID: "));
                    },
                inputcourses: function ()
                    {
                        this.courses = parseInt(prompt("Enter Number of Courses: "));
                        for(var i=0;i<this.courses;i++){
                            this.courselist.push(prompt("Enter couse name: "));
                        }
                    }
            };

employee.inputname();
employee.inputage();
employee.inputid();
employee.inputcourses();

console.log(employee);
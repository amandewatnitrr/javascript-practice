# Getting Started with JavaScript

- Before going through this section, you are recommended to go through the notes given in module1.js and module2.js.
- Don't worry about test.js file, it's just for testing purpose.

## Including JavaScript on your webpage

- Method 1:
```javascript
<script src="./js/script.js"></script>
```

- Method 2 (can be added in hea as well as the body section of the html):
```javascript
<script>
    /*
        Statements
    */
</script>
```

## async and defer keywords

- The default behaviour of browsers is that it stops rendering as soon as JavaScript is encountered. JavaScript is executed before rendering continues. Often reffered to as content blocking.
- If you just reference to the script  and point to the file, the floowing things happen:
  - the browser will start parsing the html documnet up untill the point it finds the reference.
  - It than stops parsing the html documnet, goes and downloads the js file
  - than executes whatever is in there in the js file, and then picks up the html parsing.
  - This is called content or render blocking, because it literally blocks the rendering of the content in the page.
  - It causes the page to load slower and it's not a great solution.

- Async and defer should be the standard way of loading JavaScript today.
- Only use render blocking when you have a specific reason. Loading the JavaScript in the footer is now an anti-pattern.

### async keyword
- async keyword changes the behaviour completely, it tells the browser "Hey browser, if you encounter any html file, keep parsing the HTML file, while you download and only stop the parsing when you actually have the file, execute whatever is inside of it and then continue HTML parsing."

### defer keyword
- defer keyword makes the browser execute JavaScript only after the documnet is complete.
- The derfer keyword tells the browser "Parse your HTML document and if you encounter JavaScript, jsut download it alongside your HTML parsing, then when the HTML document is fully parsed, execute whatever JavaScript you have."

## JavaScript Modules
- As we work with JavaScript, the file tend to get large and kind of hard to work with.
- JavaScript modules allows us to break pieces out of JavaScript file and place them in a seprate file and then import them back into orignal file again.
- So, let's say you have an object with the name object_name, and you want to export it to another js file, this is done as follows:
```javascript
    // In JavaScript file from where object is exported
    export default object_name;
```
```javascript
    // In JavaScript file where object is imported
    import object_name from '../js/exporting_js_filename.js';
```
```html
    <script type="module" src="../js/exporting_js_filename.js"></script>
    <script type="module" src="../js/importing_js_filename.js"></script>
```
- The object sent from the exporting_js_file to importing_js_file can't be accessed as it's out of the scope of the importing_js_file.

# Objects: A Practical Introduction
- JavaScript is a prototype based Object Oriented Programming Language.
- That means, at it's cores, when we work with JavaScript, we're working with objects that are based on prototypes.
- Each object is a unique instance of an object prototype.
- The particular combination and configuration of these properties define each individual object.
- These properties describe the prototype of an object.
- Objects have features that allow us to change there property values.
- The property changing features inside an object are called methods.

- JavaScript objects are collection of data and functionality stored as properties and methods that describe the object and what it can do.

## Object Containers
- Objects are typically constants, we can change the properties of the object inside the container. We can't remove or replace the object from the container.

## Object Properties
- Properties are the properties of object.
- They describe different aspects of the object.
- Obejct properties are defined using solon seprated name value pair.

## Object Blueprints or Templates (using classes)
- Let's see how to create a class in JavaScript. The below is just a generalised version of a class with an example.
```javascript
    class class_name{
        constructor(
            // Define parameters
            parameter1,
            parameter2,
            paramater3,
            .
            .
            .
            parametern,
        )
        {
            // Define Properties
            this.parameter1 = parameter1;
            this.parameter2 = parameter2;
            .
            .
            .
            this.paramatern = parametern;
            this.miniobject = {
                miniobj_parameter1: parameter4,
                miniobj_parameter2: parameter5,
            };
        }
        // Add methods like normal functions
        insertvalue(parametern)
            {
                this.parametern = parametern;
            }
    }

    // Example:
    class employee{
        constructor(
            // Define parameters
            name,
            age,
            company,
            ssoid,
            password
        )
        {
            // Define Properties
            this.name = name;
            this.age = age;
            this.company = company;
            this.credentials = {
                id: ssoid,
                pass: password
            };
        }
        // Add methods like normal functions
        insertvalue()
            {
                this.name = prompt("Enter your name:");
                this.age = parseInt(prompt("Enter age:"));
                this.company= prompt("Enter Company name");
                this.ssoid= prompt("Enter SSO ID");
            }
        showvalue()
            {
                console.log("USERNAME: "+this.name+ssoid+companyname);
                console.log
            }
    }
```
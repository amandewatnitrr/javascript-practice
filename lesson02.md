# DOM: Document Object Model

<p align="justify">
<strong>

## querySelector Methods

- For anything you want to do with the DOM manipulation, we have 2 methods for this:
  - `document.querySelector(element);`
  - `document.querySelectorAll(element);`
- They both apply to the document object.
- These methods use standard CSS queries to climb through the DOM tree and find the specified elements.
- So, if youu know how to target things with CSS, you also know how to target nthings with JavaScript.
- The querySelector and querySelectorAll method both take a CSS query as there parameter, and it's put inside quotation marks, so we can put in a proper string.
- In querySelector all CSS Selectors and all CSS Selectors Combination work just like they do in CSS. This is basically using CSS in JavaScript.
- The querySelector method returns the first element that matches the query we are passing. So, we get 1 element and 1 DOM object in return.
- The querySelectorALl returns a node list which looks like an array that has all the objects.

```javascript
querySelector(main element_name);
// Gives only one element as output that first matches the given criteria.
querySelectorAll(main element_name);
// Gives all the elements that match the given criteria as a node list or as an array.
```

## Older methods of Accessing Elements

- There are also 2 other methods of acccessing the elements from the document, which are relatively older methods.
  - `getElementById`
  - `getElementsByClassName`

- `getElementById`
  - returns an element object representing the element whose ID property matches the specified string. Element IDs need to be unique if specified, they are a useful way to get access to specific element quickly.
  - ```javascript
        // returns the element with the specified ID property whoever is found first.
        var ele =  document.getElementById(id); 
    ```
  
- `getElementsByClassName`
  - returns a live `HTMLCollection` which contains every descendant element which has the specified class names.
  - returns an array like object of all the nodes or child elements matching the query.
  - The query is a string of space seprated class names 
  - ```javascript
        // returns all the elements of the specified class name as an array or node list
        var ele =  document.getElementsByClassName(names); 
    ```
- The querySelector and querySelectorAll method overcome the shortcomings of the older methods.

## Modifying Element Classes
- A Common task in JavaScript is to modify the classes of an element in someway.
- This is a simple way of changing the appearance or behaviour of an element without having to inject CSS into HTML itself.
- Instead we just add a class or remove a class to make something happen. Exaples:
  - Hiding and showing a panel
  - highlighting a button when something happens.
- Class manipulation is common enough that we have 2 specialized properties for it.
  - `className`
    - returns a string variable representing the class or space-centred classes of the current-element.
    - Let's say if we want to get the class of an `h1` tag of the HTML document, so it goes like:
    - ```javascript
          // This function returns the class name of the given tag we are looking for.
          var h1_class_name = document.querySelector("h1").className;
          // We can also reset or reassign the element a different class name using this as follows:
          document.querySelector("h1").className = "heading-1-class";
      ```
    - There are 2 challanges associated with using `className`:
      - if we have an element with several classes, we can't just replace the classes with a new class, because that way we are wiping out all of the classes, we are exchanging all the content within the property for someother content. i.e. if we want to change only a particular class, we have to somehow go in and parse out which classes you want to keep and which ones you want to change and it gets really clunky and requires a lot of code.
      - In React and other JavaScript frameworks the term className is used in place of class in markup to avoid collisions with the JavaScript class keyword which is used to setup classes. This means if you are trying to target a className propertybut you are inside a javascript framework, you are doing something else which can cause unexpected behaviour and will not result in what you want.
      - As, a result we shouldn't really be using className property in frameworks, and we should eb careful about using the className property anywhere elsewhere as well.
  - `classList`
    - In order to counter the problems associated with `className` we can use the `classList` property.
    - The `classList` property is a read-only property that returns a live `DOMTokenList` collection of the class attributes of the element.
    - The property becomes even more powerful, as it comes with it's own set of methods to manipulate the individual classes.
    - For example, to add a new class to an exsisting element:
      - ```javascript
            // Adds the mentioned className to the element class attribute at end.
            document.querySelector(main element).classList.add("new-class-name");
            // Removes the mentioned className to the element class attribute
            document.querySelector(main element).classList.remove("new-class-name");
            // Toggle Adds and removes the mentioned className to the element class attribute, adds if it doesn't already exist and removes if it already exists.
            document.querySelector(main element).classList.toggle("new-class-name");
            // Replaces the element associated with a certain class with a different class.
            document.querySelector(main element).classList.toggle("old-class-name","new-class-name");
        ```
    - Always prefer using `classList` instead of using `className`.

</strong>
</p>
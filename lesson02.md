# DOM: Document Object Model

## querySelector Methods
- For anything you want to do with the DOM manipulation, we have 2 methods for this:
  - document.querySelector(element, selector, options);
  - document.querySelectorAll(element, selector, options);
- They both apply to the document object.
- These methods use standard CSS queries to climb through the DOM tree and find the specified elements.
- So, if youu know how to target things with CSS, you also know how to target nthings with JavaScript.
- The querySelector and querySelectorAll method both take a CSS query as there parameter, and it's put inside quotation marks, so we can put in a proper string.
- In querySelector all CSS Selectors and all CSS Selectors Combination work just like they do in CSS. This is basically using CSS in JavaScript.
- The querySelector method returns the first element that matches the query we are passing. So, we get 1 element and 1 DOM object in return.
- The querySelectorALl returns a node list which looks like an array that has all the objects.
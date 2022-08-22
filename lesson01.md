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
- The object sent from the exporting_js_file to importing_js_file can't be accessed as it's out of the scope of the importing_js_file
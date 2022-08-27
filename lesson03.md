# Function, Method and Events

<p align="justify">
<strong>

## Functions and Methods

- Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

```javascript
    // This is a function declaration in JavaScript.
    function function_name(parameters)
        {
            /*
                Statements
            */        
        }
    
    // Another way to write function in JavaScript is as Function Expression:
    var function_name = function(parameters) 
        { 
            // Statements
        }
```

- Let's understand using functions through an example:
```javascript

    class bag
    {
        constructor(bag_size,cost,pockets)
        {
            this.bag_size = bag_size;
            this.cost = cost;
            this.pockets = pockets;
        }

        showbag()
            {
                const newarticle = document.createElement('article');
                newarticle.innerHTML = `
                    <h1>Bag Details</h1>
                    <ul>
                        <li>Bag Size : ${this.bag_size}</li>
                        <li>Cost : ${this.cost}</li>
                        <li>Pockets : ${this.pockets}</li>
                    </ul>
                `;
                return newarticle;
            }
    }

    function showbag(bag)
            {
                const newarticle = document.createElement('article');
                newarticle.innerHTML = `
                    <h1>Bag Details</h1>
                    <ul>
                        <li>Bag Size : ${bag.bag_size}</li>
                        <li>Cost : ${bag.cost}</li>
                        <li>Pockets : ${bag.pockets}</li>
                    </ul>
                `;
                return newarticle;
            }

    new_bag_001 = new bag("small",500,5);
    const content = showbag(new_bag_001);
    console.log(content);
    const main = document.querySelector("body");
    main.append(content);

```

```html
    <html>
        <head>
            <title>Webpage</title>
        </head>
        <body>
        </body>
    </html>
```

- Let's try implementing callback functions:
```javascript
    class bag
    {
        constructor(bag_size,cost,pockets)
        {
            this.bag_size = bag_size;
            this.cost = cost;
            this.pockets = pockets;
        }
    }

    function printHTML(bag)
        {
            const content = document.createElement('article');
            content.innerHTML = `
                    <h1>Bag Details</h1>
                    <ul>
                        <li>Bag Size : ${bag.bag_size}</li>
                        <li>Cost : ${bag.cost}</li>
                        <li>Pockets : ${bag.pockets}</li>
                    </ul>
            `;
            console.log(content);
            var main = document.querySelector("body");
            main.appendChild(content);
        }

    function modifications(bag,callback)
        {
            if(bag.pockets>10)
                {
                    bag.cost = bag.cost + 200;
                }
            callback(bag);
        }
    
    new_bag = new bag("large",500,15);
    modifications(new_bag,printHTML);
```

## Looping through the content

- Let's now see ghow can we practically implement loops while working with `DOM` Elements.
```javascript

    const main = document.querySelector("body");
    list = document.createElement("ul");

    for(var i=0; i<5;i++)
        {
            var list_element = document.createElement("li");
            list_element.innerHTML = i;
            list.append(list_element);
        }
    main.append(list);

```

## Events in JavaScript

- Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them.
- Let's learn how to detect an event and trigeer a response to that event using javascript.

```javascript
    const target_element = document.querySelector("element");

    target_element.eventListener("activity",(e) => {
        /*
            Statements. This is a function.
        */
    }, options);
    /* 
        There's a option object for more control. It's a rarely used advanced feature that' rarely used.
    */
```

</strong>
</p>
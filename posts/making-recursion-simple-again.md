---
title: Making recursion simple again
description: Recursion be a cruel mistress
date: '2020-10-05'
updated: '2020-12-07'
cover: uQMyw1VFKqI
---

⚡ Disclaimer: This article itself is a recursive function.

```js
function readThisArticle() {
    if ("you read this article" && "you understood recursion") {
    return "Switch to something else."
    }
```

As I’m switching careers and learning programming, I stumbled upon this whole recursion thing.

Understanding it through the available resources I was able to find resulted in a lot of frustration and headaches, and I felt some people were making it sound more complicated than it actually is…

Now that I got the hang of it, here is my attempt to explain recursion and make it beginner-friendly (and me-friendly).

All code examples are written in JavaScript, but bare in mind that recursion is a programming concept and is in no way language dependent.


### To understand recursion, one must first understand recursion

The first thing to understand is that recursion is nothing but a convenient syntax that allows for less verbose code in order to perform a given operation.

Recursion is in no way more performant, nor is it something you can’t live without… Until you understand it 😁

Now a quick test to check if you can or cannot understand recursion: If you can solve `5 + 5 * 5`, then congratulations, you already understand recursion (it’s 30 btw).

Why? Because all recursion does is taking advantage of operation priority, just like in math. It’s called **operator precedence**, but it’s exactly the same principle.

To cut a short story even shorter, functions have (almost) the highest priority when it comes to processing code.

Let’s consider the following example:

```js
function myFunction() {
    return 5 * 5
}
    
var total = 5 + myFunction()

console.log(total)
```

Can you guess what is the value of `total`?

Once again, we get `30`. Nothing breathtaking, I’ll give you that.

Now can you guess what happens when we run the following code?

```js
myFunction()

function myFunction() {
    return 5 + 5
}
    
var total = 5 * myFunction()
    
console.log(total)
```

That’s right, `total` is now `50`.

It seems logical, but this is the key to understand recursion: **Functions have one of the highest operator precedence and get replaced by their return value before anything else happens.** Even though * operations have a higher priority in math, in programming it’s functions first, which is why we get 50 instead of 30.

Now that you understand recursion, let’s try to understand recursion.


### In the loop

So recursion is merely a way of taking advantage of functions’ operator precedence.

But enough talking, let's look at a recursive function already:

```js
let i = 0

function myFunction() {
    i++
    console.log(i)
    myFunction()
}

myFunction()
```

If you didn’t include the `console.log(i)` statement, chances are you got an error like `“Maximum call stack size exceeded”`. If you did, the program stopped after a while (I was able to print values up to `12267` on my end).

What happens is that this little piece of code creates a loop: That’s right, recursion is nothing but a loop.

Things happen in the following order:

1. You call `myFunction()`
2. It does the first thing inside of `myFunction()`, which is incrementing `i`
3. It does the second thing inside of `myFunction()`, which is printing `i`
4. It does the third thing inside of `myFunction()`, which is calling `myFunction()`
5. It does the first thing inside of `myFunction()`, which is incrementing `i`
6. It does the second thing inside of `myFunction()`, which is printing `i`
7. ...

And now the program is stuck in an "infinite" loop, because the function keeps calling itself, never hitting a limit or a return value.


### The call stack

What happens behind the scenes is that all JavaScript operations are redirected towards a buffer (“The call stack”), which is nothing but a pile of operations to be executed.

Just as you can only take the highest book in a pile of books, only the latest operation added onto the pile can be executed.

Let's just agree it looks something like this:

```js
5*5
5+5
5-5
...
```

Or, in our case, somewhat like this:

```js
myFunction()
myFunction()
myFunction()
myFunction()
...
```

So, nothing but a big pile of operations.

Each time our function `myFunction()` calls itself, it adds a call onto the pile, and we can never take something of the pile since `myFunction()` doesn’t have a return value.

So, it’s an infinite loop of sorts, and it would keep printing forever, if it wasn’t for the call stack limit… Which is why the program stopped after printing 12267 on my end: The pile is deemed “full”, which is a safeguard to avoid overloading computers, which still have limited resources.

### Base cases

But, most of the time, we don’t want to tell our computer to just run the program while it can. We need the program to run until it hits a limit fixed by us.

Using recursion, this is as simple as using an if statement at the very beginning of the function, to check if the function should run or not.

This is what is called the base case.
Getting back to out example, it would look something like this:

```js
var i = 0
function myFunction() {
    if (i > 10) {
        return
    }
i++
console.log(i)
myFunction()
}

myFunction()
```

Now the first thing that will happen in our function is that i’s value will be checked. If it is greater than 10, the function just returns without any value, and therefore stops printing numbers.

You could also check for the base case somewhere else, like so:

```js
var i = 0
function myFunction() {
    i++
    console.log(i)
    if (i > 10) {
        return
    }
myFunction()
}

myFunction()
```

But then, as you probably can guess by now, you’re checking `i`’s value after incrementing and printing it, which is why the program will only stop after printing `11`.

**The thing you can't do on the other hand, is place the base case after the recursive call.**

Actually, you can, but you might as well delete the base case, because it will be forever beyond reach.

Again, this has to do with operator precedence: If you do so, the function will keep calling itself before checking the base case, ending up in a semi-infinite loop which will only end when the call stack is full.

In practice, the base case is almost always placed at the beginning of the function, checking for the condition before doing anything, or in other words, thinking before acting (unlike me).

### Use cases

As you hopefully now understand, recursion is nothing but some handy syntax, that could easily be replaced with something else, like a for loop for instance. But in some cases, this syntax is so much less verbose that it’s the way to go.

It might seem like a whole lot of headaches in exchange for a few lines of code saved at first, but once you get used to it you can’t understand anymore how you lived without it.

For instance, let’s take a look at the famous factorial problem, where you take a number n and multiplicate it by n – 1, n – 2, n – 3, etc. until you reach 1.

Here’s the non-recursive approach:

```js
function factorial(n) {
    if (n === 1) {
        return n
    }

    let result = n

    for (let i = n - 1; i > 0; i--) {
        result = result * i
    }

    return result
}

factorial(4)
```

And here’s the recursive approach:

```js
const recursiveFactorial = (n) => n === 1 ? n : n * factorial(n - 1)
```

Obviously, I could have trimmed the non-recursive approach a bit more, plus I threw some ternary operator syntax into the mix with the recursive example, but you get the point. That’s just one function, and your project might have thousands of them… You just write a recursive function and do the math 😅

With time, recursion even begins to feel more natural. It actually took me a few moments before I was able to formulate the non-recursive example while it took me around 15 secs to write the recursive one.

I feel it’s a nice little addition to the developer’s toolbox, but you obviously can choose whatever you’re more comfortable with.

Hopefully you were able to understand recursion by now, and if not, before switching to something else...

```js
    readThisArticle()
}
```

P.S.: If you want to know more about operator precedence, [here's the MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence). For a more technical-in-depth look at how recursion works, you can also take a look at [this post on freeCodeCamp(🔥)](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-recursion-to-create-a-countdown/305925).
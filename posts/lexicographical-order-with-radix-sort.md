---
title: Lexicographical order with radix sort
description: Because why not?
date: '2021-03-15'
updated: '2021-03-15'
cover: r6mBXuHnxBk
---

As I finally took upon myself to publish the **[French-Turkish dictionnary](https://dictionnaire-turc-francais.vercel.app/)** I wrote back when I was living in Turkey, I was pondering data structures that would allow for various functions such as sorting in lexicographical order, fuzzy text search, text autocompletion and all the good stuff we're used to on pretty much any website nowadays.

The usual candidate for this kind of functionnality is a good old trie. But this wouldn't cover all the use cases I had in mind, so I started to think about some other custom data structure.

### What are strings anyway?

Our computers only knows about 1s and 0s. Strings are a nice abstraction for developers, but on a low level they're much more complicated than it looks, mostly because **different alphabets require different encoding**, which can occasionally lead to a lot of confusion. This is why [Rust doesn't let you index into a String](https://doc.rust-lang.org/book/ch08-02-strings.html?highlight=capital#bytes-and-scalar-values-and-grapheme-clusters-oh-my), for instance.

But my use case requiring only to work with latin-based alphabets, I thought it would be fun to try something new **using the ASCII character codes** to sort arrays of strings.

An alternative I also explored was to use a hash table instead of the ASCII decimal representations, which allows to include any character we need and to eventually remap it to its rightful lexicographical position (for instance, the letter "é" in French has the same position as "e" or "ê"). Also, all letters must be regarded as if they were lower case, since it doesn't have anything to do with lexicographical order.

However, for the sake of simplicity I chose to stick with ASCII character codes in this demonstration, which in JavaScript is as simple as

```js
"hello world".charCodeAt(0) // 68
```

Now that we have a way to map characters to numbers, it's all about sorting them!

### Sorting without comparing

The nice thing about numbers is that you can sort them quite efficiently using [radix sort](https://en.wikipedia.org/wiki/Radix_sort), which really just takes advantage of number properties to order them without comparing them, since *ordering* is at the very core of the idea of a number system.

**Radix sort basically just shakes around numbers** until they're all in the right order: To do so, it first looks at the last digit (the least important) and puts all numbers into "boxes" corresponding to that digit. Then it does the exact same thing for the second to last digits and for all the remaining digits and *voilà*, you end up with a sorted array of numbers that you never compared together. If a number is one or a few digits short in comparison to others, it defaults to the "0" box.

To do that for strings, however, we need to reverse the process and start with the first character as opposed to the last number since "a" comes before "ab" (as opposed to ascending numerical order where "10" comes after "1").

The second things is that we want more than just 10 boxes: We need one for each and every letter of the alphabet.

To know how many times we need to "shake" the string array for it to end up sorted, we first need to determine the length of the longest word in the array. Doing so is quite trivial, and we can define an helper function `getLongest` to perform the task:

```js
 const getLongest = arr => {
        let max = 0
        for (const el of arr) {
            max = max * (max > el.length) + el.length * (max < el.length)
        }
        return max
    }
```

Note that in order to update the `max` variable, I use boolean values as 1s and 0s, which can be done implicitly in JavaScript. In other languages, such as Rust, you would have to cast the resulting boolean to an integer by writing something along the lines of `as u32` after the comparison in order for it to work. This is a technique called **branchless programming**, which can avoid a lot of jumping around instructions in a program, but that's another topic.

Now all what's left is to implement the sorting logic.

### The actual function

From here on things are actually rather simple:
1. First we create a "box" (conventionally referred to as buckets in the context of radix sort) for each and every letter of the alphabet. To do so we just make a two dimensional array (a fancy word for an array of arrays).
2. We then look at an ASCII character code at a given index for all the strings in order to decide where they should go, starting from the beginning.
3. Once we've repeated this process as many times as the length of the longest word, we can just concatenate back the subarrays together and return their contents as a one dimensional array.

```js
const radixSortStrings = strA => {
    let sorted = []

    const size = getLongest(strA)

    for (let i = size - 1; i >= 0; i--) {
        const buckets = Array(26).fill().map(() => [])

        for (let str of strA) {
            const target = (str.toLowerCase().charCodeAt(i) - 97) || 0
            buckets[target].push(str)
        }

        sorted = [].concat(...buckets)
    }

    return sorted
}

radixSortStrings(["strings","soRt","rAdix","helLo"]) // ["helLo", "rAdix", "soRt", "strings"]
```

And, just like that, our strings are now sorted 🥳

### Disclaimer

As stated earlier, this more a *proof of concept* kind of thing. For it to be a really efficient way of sorting strings, we would probably want to avoid converting them to lower case times and times again, and we would need to implement a way to deal with accents and special characters.

But the meat of the logic is here: You can sort strings with radix sort!

As for my dictionnary, I decided not to sort anything in lexicographical order in the end. While that's a perfectly valid approach for dictionnaries in dead-tree form, I decided to implement fuzzy search logic on the backend, which sorts results by pertinence instead of lexicographical order and returns an array of the 8 most pertinent matches it found, making for a much nicer user experience in my opinion.
---
title: Sorting strings with radix sort
description: Because why not?
date: '2021-03-15'
updated: '2021-03-15'
cover: r6mBXuHnxBk
---

As I finally took upon myself to publish the [French-Turkish dictionnary](https://dictionnaire-turc-francais.vercel.app/) I wrote back when I was living in Turkey, I was pondering data structures that would allow for various functions such as sorting in alphabetical order, fuzzy text search, text autocompletion and all the good stuff we're used to on pretty much any website nowadays.

The usual choice for this sort (#punintended) of functionnality is to turn to a trie. But this wouldn't cover all the use cases I had in mind, so I started to think about some other custom data structure.

## What are strings anyway

Your computer only knows about 0s and 1s. Strings are a nice API for programmer, but on a low level they don't actually exist. Thinking about that, I thought it would be rather funny to re-encode strings using integers using a simple custom table.

The table looks like this, and we're now storing array of integers instead of charachters, which means that in order to search for a pattern you encode it, find a match and then decypher it on the way out. Fun on a bun.

```js:notQuiteATrie.js
class NotQuiteATrie {
    constructor() {
        this.hashTable = { '-': 10, 'a': 11, 'b': 12, 'c': 13, 'd': 14, 'e': 15, 'f': 16, 'g': 17, 'h': 18, 'i': 19, 'j': 20, 'k': 21, 'l': 22, 'm': 23, 'n': 24, 'o': 25, 'p': 26, 'q': 27, 'r': 28, 's': 29, 't': 30, 'u': 31, 'v': 32, 'w': 33, 'x': 34, 'y': 35, 'z': 36, 'é': 37, 'è': 38, 'ë': 39, 'à': 40, 'ç': 41, 'ö': 42, 'ü': 43, 'ş': 44, 'ğ': 45 }
        this.decryptTable = { 10: '-', 11: 'a', 12: 'b', 13: 'c', 14: 'd', 15: 'e', 16: 'f', 17: 'g', 18: 'h', 19: 'i', 20: 'j', 21: 'k', 22: 'l', 23: 'm', 24: 'n', 25: 'o', 26: 'p', 27: 'q', 28: 'r', 29: 's', 30: 't', 31: 'u', 32: 'v', 33: 'w', 34: 'x', 35: 'y', 36: 'z', 37: 'é', 38: 'è', 39: 'ë', 40: 'à', 41: 'ç', 42: 'ö', 43: 'ü', 44: 'ş', 45: 'ğ' }
        this.dictionary = []
    }
}
```

Now it's quite obvious we need a way of inserting our data (in my case words in a dictionnary), which is quite straightforward except for one thing: Sorting.

## Sorting without comparing

Sorting is easy when you use the nice API javascript has for you. But the whole point of this was to tinker with the idea of sorting strings the way numbers can be sorted, with [radix sort](https://en.wikipedia.org/wiki/Radix_sort).

This has two implications:

0. Just a reminder, but all the characters need to be normalize (two charachters having the same graphical representation must have the same UTF8 encoding) if we don't want things to go south.
1. All the integers **must** have the same number of digits. So if you only need the ASCII characters, working below a hundred is fine, which allows for 89 characters at most. If you need more, start at 100 and you have until 999.
2. Numbers usually get bigger as they get longer, which is not true for alphabetical order: We have to write a custom radix sort that works for alphabetical order **and** with arrays.

The way radix sort works is that you basically use the last digits of all the numbers you've got and put it in a bucket with that number. Then you repeat the process with the previous to last number, and so on. If a number has less digits than others then you act as if it had 0s in front of it until the end.

Bottom line: You never compare numbers between them and it's supposed to be a bit faster than other methods like merge sort, although this is a disputed subject and there isn't much of a difference in practice... for numbers! But for strings it's way faster than comparing them one by one by looping over them times and times again.

So, how are we going to do that?

The first thing is that we have to reverse the "radix process" and start at the beginning instead of the end. Then you want strings with less charachters to be end up before the ones with the same prefix but more charachters.

After breaking my head at it for a while, I finally came up with a working solution. An image is worth a thousand words, and that works for code as well:

```js:notQuiteATrie.js
class NotQuiteATrie {
    constructor() {
        // ...Same stuff as above
    }
    sortDictionary(dictionary) {
        const getLongest = (d) => {
            let max = 0
            for (let hashA of d) {
                let n = hashA.length
                max = Math.max(n, max)
            }
            return max
        }
        // We look for the longest word in the dictionnary
        const size = getLongest(dictionary)

        for (let i = size - 1; i >= 0; i--) {
            let buckets = Array(50).fill().map(() => [])

            for (let hashA of dictionary) {
                const target = hashA[i] || 0
                buckets[target].push(hashA)
            }
            dictionary = [].concat(...buckets)
        }
        return this.dictionary = dictionary
    }
}
```
This code needs some clean up, but the main working functionality is here. Dictionnary-like sorting with no character comparisons.

## Utility functions

That's all nice and good, but without expanding on those functionalities it's rather pointless.

So below is a more developped version of this class: You'll notice I've added autocompletion and suggestion of similar results (think dropdowns like on airbnb or google suggesting you similar search terms). I'm pretty sure there's room for improvement for the search part, with something along the lines of binary search. Also, there's no `remove` function at the moment.

```js:notQuiteATrie.js
class NotQuiteATrie {
    constructor() {
        this.hashTable = { '-': 10, 'a': 11, 'b': 12, 'c': 13, 'd': 14, 'e': 15, 'f': 16, 'g': 17, 'h': 18, 'i': 19, 'j': 20, 'k': 21, 'l': 22, 'm': 23, 'n': 24, 'o': 25, 'p': 26, 'q': 27, 'r': 28, 's': 29, 't': 30, 'u': 31, 'v': 32, 'w': 33, 'x': 34, 'y': 35, 'z': 36, 'é': 37, 'è': 38, 'ë': 39, 'à': 40, 'ç': 41, 'ö': 42, 'ü': 43, 'ş': 44, 'ğ': 45 }
        this.decryptTable = { 10: '-', 11: 'a', 12: 'b', 13: 'c', 14: 'd', 15: 'e', 16: 'f', 17: 'g', 18: 'h', 19: 'i', 20: 'j', 21: 'k', 22: 'l', 23: 'm', 24: 'n', 25: 'o', 26: 'p', 27: 'q', 28: 'r', 29: 's', 30: 't', 31: 'u', 32: 'v', 33: 'w', 34: 'x', 35: 'y', 36: 'z', 37: 'é', 38: 'è', 39: 'ë', 40: 'à', 41: 'ç', 42: 'ö', 43: 'ü', 44: 'ş', 45: 'ğ' }
        this.dictionary = []
    }
    hash(str) {
        let hashA = []
        for (const char of str) {
            hashA.push(this.hashTable[char])
        }
        return hashA
    }
    hashChar(char) {
        return this.hashTable[char]
    }
    insert(str) {
        // add check to avoid adding duplicates
        str = str.toLowerCase().normalize()
        const hashA = this.hash(str)
        this.dictionary.push(hashA)
        this.sortDictionary(this.dictionary)
        return this.dictionary.length
    }
    // "reversed" radix sort, keeps similar values close together
    sortDictionary(dictionary) {
        const getLongest = (d) => {
            let max = 0
            for (let hashA of d) {
                let n = hashA.length
                max = Math.max(n, max)
            }
            return max
        }
        const size = getLongest(dictionary)

        for (let i = size - 1; i >= 0; i--) {
            let buckets = Array(50).fill().map(() => [])

            for (let hashA of dictionary) {
                const target = hashA[i] || 0
                buckets[target].push(hashA)
            }
            dictionary = [].concat(...buckets)
        }
        return this.dictionary = dictionary
    }
    findOne(str) {
        // Maybe diver and conquer approach by storing highest and lowest first char somewhere
        str = str.toLowerCase().normalize()
        const hash0 = this.hashChar(str[0])

        for (let i = 0; i < this.dictionary.length; i++) {
            if (hash0 === this.dictionary[i][0]) {
                for (let j = 1; j < str.length; j++) {
                    if (this.hashChar(str[j]) !== this.dictionary[i][j]) break
                    if (str.length === this.dictionary[i].length) return i
                }
            }
        }

        return undefined
    }
    suggestSimilar(str) {
        str = str.toLowerCase().normalize()
        const hash0 = this.hashChar(str[0])

        let start, end

        for (let i = 0; i < this.dictionary.length; i++) {
            if (hash0 === this.dictionary[i][0]) {
                for (let j = 1; j < str.length; j++) {
                    if (this.hashChar(str[j]) !== this.dictionary[i][j]) break
                    if (str.length === this.dictionary[i].length) start = end = i
                }
            }
        }

        const hashEnd = this.hashChar(str[str.length - 1])

        while (this.dictionary[end] && end - start < 6 &&
            this.dictionary[end][str.length - 1] === hashEnd && end < this.dictionary.length) {
            end += 1
        }

        const suggestions = []

        for (let k = start + 1; k < end; k++) {
            let word = ''

            for (const char of this.dictionary[k]) {
                word += this.decryptTable[char]
            }

            suggestions.push(word)
        }

        return suggestions
    }
    suggestEnding(str) {
        str = str.toLowerCase().normalize()
        const hash0 = this.hashChar(str[0])

        let start, end

        for (let i = 0; i < this.dictionary.length; i++) {
            if (hash0 === this.dictionary[i][0]) {
                for (let j = 1; j < str.length; j++) {
                    if (this.hashChar(str[j]) !== this.dictionary[i][j]) break
                    if (str.length === this.dictionary[i].length) start = end = i
                }
            }
        }

        const hashEnd = this.hashChar(str[str.length - 1])

        let ending = ''

        if (this.dictionary[end + 1] && this.dictionary[end + 1][str.length - 1] === hashEnd) {
            for (let m = str.length; m < this.dictionary[end + 1].length; m++) {
                ending += this.decryptTable[this.dictionary[end + 1][m]]
            }
        }

        return ending
    }
}
```

The reason this I haven't perfected it yet is that in order to be able to extend the search functionnality of the dictionnary to the definition of the words rather than limiting it to the defined word itself, I switched horses and went for some good old json in the end and implemented fuzzy search on top of that.

But I really look forward to recycle this code for another project and improve upon it!

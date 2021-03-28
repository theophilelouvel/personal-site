---
title: Removing Unnecessary Complexity from Substring Search
description: KMP, Rabin-Karp & Boyer-Moore vs 3S
date: '2021-02-16'
updated: '2021-03-29'
cover: cvBBO4PzWPg
---

Lately I've been sharpening my algorithm writing skills, and one of the "challenges" I came across had to do with **substring search**.

As I like to take a shot at things before being fed an answer, I was surprised with the level of complexity some of the solutions I stumbled upon after my attempt present, among which *rolling hashes* (Rabin-Karp) and *prefixes that are also suffixes* (KMP). 

Before diving into these solutions, let's take a look at what might be regarded as the brute-force or non-optimized approach to substring search.

*P.S.: All code examples are written in JavaScript, yet the concepts they illustrate remain cross-language.*

## The Problem with Substring Search

As a start, let's write a function that returns the number of times a pattern (aka text search) is found in a given string (usually called `long`).

```js:index.js
const substringSearch = (long, pattern) => {
    if (long.length < pattern.length) return 0

    let counter = 0

    for (let i = 0; i < long.length; i++) {
        if (long[i].toLowerCase() === pattern[0].toLowerCase()) {
            for (let j = i; j < i + pattern.length; j++) {
                if (long[j].toLowerCase() !== pattern[j - i].toLowerCase()) {
                    continue
                }
                if ((j - i) === pattern.length - 1) {
                    counter++
                }
            }
        }
    }

    return counter
}

const text = "The quick brown fox jumps over the lazy dog"

const search = "the"

console.log(
    substringSearch(text, search) // 2
)
```

The general idea is that every time you find a character matching the first character from the pattern string, you start another loop to try and find out if the following characters match your pattern string.

In our example, that means every time we meet a `"t"` in the long string we "pause" the main loop and start a new **nested loop**.

As all nested loops, this isn't great: This algorithm's **time complexity is O(m * n)**.

At first glance, it looks like there's little we can do about it: **The input can't be sorted**, so we have little choice but to stick with **linear search**.

## The KMP approach

Even though the input can't be sorted, there are still ways to make substring search more efficient. One approach is to take advantage of repetitions that happen inside of the pattern: For instance, let's say we're looking for the pattern "abracadabra" inside of the long string.

The [KMP approach](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) is to create a table for the pattern where you mark repeating patterns. This table is all about finding repeating patterns inside the pattern, or, as it is sometimes described, finding *prefixes that are also suffixes*.

Computing this table looks like this:

```js:pattern_table.js
const computePatternTable = (pattern) => {
    const table = new Array(pattern.length)
    table[0] = 0
    let i = 1
    let j = 0

    while (i < table.length) {
        // Are the values at i and j equal inside the pattern?
        if (pattern[i] === pattern[j]) {
            // Yes, they are equal.
            table[i] = j + 1 // Set table value at position i to the index of j + 1.
            i++ // Increment i and j;
            j++
        } else {
            // No, they are not equal.
            if (j - 1 >= 0) { // Can we look at the table at index j - 1?
                // Yes we can.
                const valAtjminus1 = table[j - 1]; // Get the value at j - 1
                j = valAtjminus1; // Jump j to the position stored in the table at j - 1.
            } else {
                // No we cannot.
                table[i] = j // Set table value at position i to the index of j.
                i++ // Increment i;
            }
        }
    }
    return table
}

console.log(
    computePatternTable('acacabacacabacacac')
    // Output: [0, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 4]
)
```

This computed table allows us to **skip a few checks** here and there whenever the algorithm finds partial matches that also happen to correspond to those "suffixes that are also prefixes" (or is it the other way around?) in the pattern.

The KMP search algorithm looks like this:

```js:kmp_search.js
function kmpSearch(str, pattern) {
    const patternTable = computePatternTable(pattern)
    let i = 0 // A pointer into our str
    let j = 0 // A pointer into our patternTable

    while (i < str.length) {
        // Are the values at indexes i and j a match?
        if (str[i] === pattern[j]) {
            // Yes, they match.
            // Has j reached the end of our pattern table?
            if (j === pattern.length - 1) return i - j // Yes, so we found a match starting at i - j            
            i++ // Increment i and j.
            j++
        } else {
            // No, they do not match.
            // Can we look at the patternTable at index j - 1?
            if (j - 1 >= 0) {
                // Yes we can
                const valAtjminus1 = patternTable[j - 1] // Get the value at j - 1 in the patternTable
                j = valAtjminus1 // Jump j to the position stored in the table at j - 1
            } else {
                // No we cannot
                i++ // Increment i
            }
        }
    }
    return -1 // No match found.
}

console.log(
    kmpSearch('aaabbbccc', 'bbb')
// Output: 3
)
```

Overall, the KMP algorithm is a relatively simple solution that does save us a few checks here and there.

However, it's difficult to say that this approach represents a major improvement over the "naive" one.

Indeed, **the KMP algorithm postulates that words often have repeating patterns** (suffixes that are also prefixes), which is a valid approach for [run-length encoding](https://en.wikipedia.org/wiki/Run-length_encoding) but have little to do with actual words in human languages.

In fact, if you take a look at examples demonstrating the KMP algorithm, patterns presented are almost never real english words (if you don't count *abracadabra*, but how often do you get to use that one in a sentence?), because there aren't so many words displaying the properties it's expecting.

At the same time, this approach tends to increase the number of checks the algorithm has to perform on each iteration, which might just eliminate all the benefit from building this table depending on the text being searched, resulting in a worst-case scenario of O(m * n).

## The Rabin-Karp way

Shifting away from nested loops, the [Rabin-Karp algorithm](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm) implements a **sliding window** constituted by the sum of character hashes compared to the sum of the pattern's character hashes, a technique also known as rolling hash function.

The first issue with this approach is that the same letters in a different order would produce the same value. To tackle this issue, once **matching hashes sums** are found, you still have to compare characters the good old loopy way. In other words, the worst case scenario is still O(m * n), the same as the brute force way we came up with in the first place.

To remove those **false positives** during the equality check, we can multiply each hash value by a different value based on its position in either the sliding window or the pattern.

But this now introduces a lot more operations in a single loop iteration, not mentioning that when multiplying by powers of 10, if you're looking for a pattern that is 100 characters long, you end up with **numbers bigger than the number of atoms in the observable universe**. If you water down those hashes using modular arithmetics, you end up with more false positives and therefore more time spent in looping over non matching strings.

Make of that what you will, but I doubt this represents a major improvement - if any - over our initial approach.

If you're curious what it looks like, you can find [a JavaScript implementation of the Rabin-Karp algorithm here.](https://github.com/djktno/rabin-karp-js/blob/master/rk.js) 

## The Boyer–Moore string-search algorithm

A way more successful and now widely used attempt to bring back things closer to O(n) time is [Boyer-Moore version of substring search](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm).

Just as KMP and the brute force approach, it relies on nested strings to perform the search, but with a very interesting set of rules:
- alignements are tested *left to right*
- character comparison happens *right to left*
- the bad character rule
- the good suffix rule

The **bad character rule** states that upon character mismatch (remember, we're checking right to left), we skip alignments until the mismatch becomes a match or until the pattern p moves past the mismatched character.

A more visual way of representing the way this works is as follows ([borrowed from this video](https://www.youtube.com/watch?v=4Xyhb72LCX4), if you want to dig deeper into this):

```js
const long = "GCTTCTGCTACCTTTTGC"
const search = "CCTTTTGC"

bmSearch(long, search)

// STEP 1
// "GCTTCTGCTACCTTTTGC"
// "CCTTTTGC"
// the last 3 characters match, we move forward until we can match
// the text character where the mistmatch happened with something from the string

// STEP 2
// "GCTTCTGCTACCTTTTGC"
//    "CCTTTTGC"
// the last character match, but not the second to last
// unable to match the "A", we move the pattern past the mismatch

// STEP 3
// "GCTTCTGCTACCTTTTGC"
//           "CCTTTTGC"
// we now found a match and can do something meaningful with that
```

On the other hand, **the good suffix rule** states that for `t` representing the substring matched by the inner loop, we can skip forward until there are no mismatches between the pattern and `t` or until the pattern moves past `t`, essentially preventing us to move the pattern too far and missing matches by doing so.

In essence, **the good suffix rule is an adaptation of the KMP algorithm**, but combining it with the bad character rule allows the algorithm to reach **O(n) time complexity**.

Here's a full [JavaScript implementation of the Boyer-Moore algorithm](https://gist.github.com/Kamilczak020/f8382eef9777e8f07d47be29a4efc04b) for those interested.

If you'd like to see it in action (algorithm POV, is that a thing?), go check out this [live demo](https://personal.utdallas.edu/~besp/demo/John2010/boyer-moore.htm).

## 3S (Simple Substring Search)

Having looked at all these complex alternatives, allow me to introduce the solution I came up with before looking at any of those.

Moving away from nested loops and sliding windows it actually involves **one pointer and a single loop**. Its time complexity is much more predictable: O(n), no matter what.

The general idea is quite simple really: We check every character against the first character of the pattern to then update the pointer (and whatever we want to return) accordingly. Since there are *no nested loops* (can I stress this enough?) and we're keeping equality checks down to their bare minimum, we end up with **less operations for a roughly equivalent number of loop iterations** compared to the Boyer-Moore algorithm.

```js:3s.js
const simpleSubstringSearch = (long, pattern) => {
    if (long.length < pattern.length) return 0

    let occurences = 0
    let pointer = 0

    for (let i = 0; i < long.length; i++) {
        if (pointer !== 0 && str[i] === pattern[0]) {
            pointer = 1
            continue
        }
        if (long[i].toLowerCase() !== pattern[pointer].toLowerCase()) {
            pointer = 0
            continue
        }

        pointer += 1

        if (pattern.length === pointer) {
            // Here we can return either the number of matches, their index...
            occurences += 1
            pointer = 0
        }
    }

    return occurences
}

const text = "The quick brown fox jumps over the lazy dog"

const search = "the"

console.log(
    simpleSubstringSearch(text, search)
)
```

While I didn't benchmark all those solutions against each other, I think the Big(O) speaks for itself. My point is not that my approach is "better", just that it might be simpler to reason about while being just as efficient as the Boyer-Moore algorithm in terms of speed. **I don't pretend to be reinventing the wheel, just to try making it simpler**.

Now I realize that I may have missed something or not have thought through all edge cases, so feel free to reach me on twitter if you'd like to point something out, I'd be grateful!

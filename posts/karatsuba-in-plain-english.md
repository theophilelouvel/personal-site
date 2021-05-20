---
title: Karatsuba in plain English
description: Headaches are comming
date: '2021-05-19'
updated: '2021-05-19'
cover: 5mZ_M06Fc9g
---

*Note: The only prerequisite for reading this article is to understand recursion. If you don't, [this other article I wrote on recursion](/blog/making-recursion-simple-again) might just be what you need!*

As I'm learning more and more about algorithms, I came across Karatsuba's multiplication. The explanations I found here and there felt somewhat incomplete to me, as they usually assume a lot about the reader's background. As I finally wrapped my head around it, I thought I'd take the time to make it more accessible to others. It's actually surprisingly simple once you find the right explanations and / or visualizations!

**If the algorithm in itself is quite simple and elegant, its implementation, on the other hand, can be rather tricky.** In this article, we'll work our way towards a working JavaScript implementation and see some of the JavaScript's limitations. In a later article we'll implement the full-blown Karatsuba multiplication in Rust.

### Time complexity: Is it worth it?

Let's start at the beginning: We all learned multiplication at school with the so called "grade school algorithm", where you multiply each and every number with one another. Obviously, none of us questioned that approach and its time complexity when we were kids (definitely not me, at least).

Time complexity is obviously of the essence when applying an algorithm to computer science, as it can be the difference between taking a month or a second to compute something.

However, time complexity doesn't *always* matter: As it is the case for most algorithms, **Karatsuba's algorithm vastly improves multiplication's time complexity... after a certain point.**

The Karatsuba way is less simple than the grade school algorithm and require overall more *operations* for a single multiplication. **Where it really shines is when multiplying large numbers**, allowing to make a lot less multiplications than the grade school algorithm and break down big multiplications into small and manageable ones.

It would be *suboptimal* to always use it for multiplications (the algorithm at its core actually uses regular multiplications when hitting its base case, single digit numbers).

This is why many libraries and languages - [notably Python](https://www.python.org/download/releases/2.3.5/notes/) - use it (even though faster algorithms have been discovered since) based on internal thresholds, [like the C GMP library](https://gmplib.org/manual/Multiplication-Algorithms).

Karatsuba's algorithm boils down multiplication time complexity to a mere `O(n**1.58)` runtime, while grade school multiplication runs in quadratic time `O(n**2)`. This is therefore a vast improvement! Many cryptographic applications rely heavily on multiplying huge numbers together, and doing that using an algorithm running in quadratic time would be virtually impossible. The same goes for matrix multiplications.

### Magic time

Let's first look at how the algorithm works, then we'll discuss what it does.

Say we have to numbers we want to multiply together, for instance `1234` and `5678`. Let's look at the Karatsuba's algorithm in action:

1. `12 * 56 = 672`
2. `34 * 67 = 2652`
3. `(12 + 34) * (56 + 78) = 6164`
4. `5152 - 2278 - 540 = 2840`
5. `672 * 10**4 + 2840 * 10**2 + 2652 = 7.006.652`

Try to compute `1234 * 5678` on your phone and see for yourself. `7.006.652` is in fact the right result!

### Wait what?

Let's talk about what just happened.

Any number can be decomposed in the following way:

```js
x = a * 10**(n/2) + b
```

`a` represents the first half of the number, shifted by the appropriate number of `0`s (namely `n`, the number's length divided by two), while `b` represent its second half. For instance, `4822` can be decomposed as `48 * 10**(4/2) + 22`. Dealing with odd length numbers is actually not as complicated as it might seem, but let's save that for later, where the answer will actually solve two problems at once.

Therefore having the multiplication `x = 1234 * 5678` can read as:

```js
x = (12 * 10**2 + 34) * (56 * 10**2 + 78)
```

We now can simplify the expression like this:

```js
(12 * 56 * 10**4) + ((12 * 78) + (34 * 56) * 10**2) + (34 * 78)
```

And we now are able to generalize the formula like follows:

1. We decompose the first number `y` into two parts, namely `a` and `b`
2. We decompose the second number `z` into `c` and `d`
3. `n` represents the numbers' length (more on that later)

Computing the result of multiplying those two numbers by each other `x` is the result of the following operation:

```js
x = ac *10**n + (ad + bc) * 10**(n/2) + bd
```

So, in order to multiply those two numbers, we need to multiply smaller versions of those numbers together... Sounds a lot like recursion, right? **We already have our reduction step**: We decompose numbers larger than ten into smaller components.

**Incidentally, this will also be our base case** (we don't want to end up in an infinite loop): As mentioned earlier, we can switch back to the grade school algorithm when hitting numbers less than ten and return the result, those operations being almost "free" in terms of CPU time.

As you can see, we end up with four multiplications (not counting the zero-shifting operations, which are not part of the recursive calls), meaning four recursive call. Can we do better?

As you can see, we need to compute `(ad+bc)`, which makes up for two recursive calls. We don't really need them individually though, we just want their sum. Could we simplify that to get away with only three recursive calls?

Yes we can! Instead of computing `(ad+bc)`, we can compute `(a+b) * (c+d)` and subtract `ac` then `bd` from it, which we already computed! Indeed, computing `(a+b) * (c+d)` is exactly the same as computing `ac+ad+bc+bd`. We're now left with `(ad+bc)` but with a single recursive call and two subtractions, which are much faster operations to execute for a total of three recursive calls per step instead of four!

The multiplication algorithm can therefore be rewritten as:

```js
x = ac * 10**n + bd + ((a+b) * (c+d) - bd - ac) * 10**(n/2)
```

Now take a minute and look back at the cryptic way we multiplied those two numbers together earlier! That's exactly the Karatsuba multiplication! Hopefully, things are not so cryptic anymore.

[The credit for eliminating one recursive call by using one multiplication and two subtractions actually goes to Gauss](http://www.mathnet.ru/links/70149b5747101bcf41da3add5be00fe1/mp941.pdf), a German mathematician from the early 19th century. Knowing about this, Karatsuba was able to formalize it into the efficient algorithm we just described.

*Note: I just learned a math joke: -“How many mathematicians do you need to change a bulb?” -“None, Gauss did it already!”*

### What about odd numbers? Or numbers with different lengths?

That was the hardest part for me to wrap my head around, probably because the answer is in fact so simple: For Karatsuba's algorithm to work, we need `n` to be an even number. But not all numbers are even and we're not working in base two (yet). Also, decomposing numbers will eventually leave you with number lengths that are not powers of two. What to do then?

The answer is as trivial as it is elegant: We **round up** `n` **to the nearest even integer**, and treat the numbers as if they were prepended with `0`s. For instance, for a number like `123`, `n = 4`. We first decompose the number as `a = 1, b = 23`. When we further decompose A in the recursive calls. we decompose it as `a = 0, b = 1`. Nothing more, nothing less!

We obviously also want to multiply numbers together that are not the same length, so what about them? The answer is actually the same here! We use the longest of the two numbers to compute `n`'s value, and we treat the shortest one as if it was prepended with `0`s.

Translating things into a programming language, however, can be a bit tricky (#punintended), so to really wrap your head around Karatsuba's algorithm and make sure you're comfortable with its logic before diving into its implementation, I recommend that you practice a few times doing it by hand. Being more of a visual thinker (but aren't we all? 🤔), a resource that really unlocked my understanding was [this flowchart on wikipedia](https://upload.wikimedia.org/wikipedia/commons/0/03/Karatsuba_multiplication.svg). It looks like a mess the first time you see it, but spend five minutes looking at it and I guarantee you'll understand the algorithm way better.

### Implementation: First draft

My first implementation revolved around the exact same steps we discussed. I decided to use JavaScript BigInt, hoping it would solve the overflow problem, as JavaScript natively supports only integers up to `9.007.199.254.740.991`, which you can find out by running the following command: `console.log(Number.MAX_SAFE_INTEGER)`. `BigInt`s are a relatively recent JavaScript construct that aims to remove this limitation. You can use them either by specifying `BigInt(123456789)` or by appending an `n` to the number, like so: `123456789n`.

```js:index.js
const multiply = (x, y, n) => {
    if (x < 10n && y < 10n) return x * y

    if (n % 2n != 0n) n += 1n

    const halfN = n / 2n

    const den2 = 10n ** halfN

    const a = x / den2
    const b = x % den2
    const c = y / den2
    const d = y % den2

    const ac = multiply(a, c, halfN)
    const bd = multiply(b, d, halfN)
    const abcd = multiply(a + b, c + d, halfN)

    return ac * 10n ** n + (abcd - bd - ac) * den2 + bd
}

console.log(
    multiply(
    59342232343423423252n,
    76345345344353543553427n,
    24n
))
```

Nothing earth-shattering there, just the translation of how we described the algorithm earlier. We compute `a, b, c, d` by using divisions (which automatically floors the numbers when working with `BigInt`s, which is exactly what we want to decompose the numbers) and modulo operations for the second halves of numbers.

The numbers chosen in the `console.log` call at the bottom are only half random: Those were the highest numbers for which I would get a result almost instantly. After that, it takes for ages! Let alone the fact that we have to manually pass `n` each time we call our function, this sort of defeats the whole point of the algorithm, right?

Well, let's look at our implementation again: We do only ever use three multiplications, but how do we decompose the numbers? **Modulo operations and divisions can be quite slow**, especially when working with `BigInt`'s. Worst still, this algorithm runs slower than computing numbers with the native JavaScript multiplication algorithm (probably because it calls into C's implementation of the Karatsuba's algorithm or one of its concurrent behind the scenes, though).

However, as numbers grow bigger and bigger, the results become less precise and diverge from the exact result by a significant amount using the native multiplication. We can't rely on `BigInt` 's entirely to multiply our numbers then, and will have to find a workaround! 

### Implementation: Second draft

So how can we make things work?

One solution is actually to just use strings! We should be able to save ourselves a lot of meaningless and expensive operations, such as splitting numbers the way we were doing it. We don't have access to pointers for the memory where numbers are stored in in JavaScript, but working with string slices should make our lives much easier, and `BigInt` works well enough with strings!

```js:index.js
const multiply = (x, y) => {
    if (BigInt(x) < 10n && BigInt(y) < 10n) {
        return BigInt(x) * BigInt(y)
    }

    const n = BigInt(Math.max(x.length, y.length))
    const halfN = n / 2n;

    const xHalf = Math.ceil(x.length / 2)
    const yHalf = Math.ceil(y.length / 2)

    const a = x.substring(0, xHalf)
    const b = x.substring(xHalf)
    const c = y.substring(0, yHalf)
    const d = y.substring(yHalf)

    const ac = multiply(a, c)
    const bd = multiply(b, d)
    const ad = multiply(a, d)
    const bc = multiply(b, c)

    return (ac * 10n ** n) + ((ad + bc) * 10n ** halfN) + bd
}

console.log(
    multiply(
        '3141592653589793238462643383279502884197169399375105820974944592',
        '2718281828459045235360287471352662497757247093699959574966967627'
    )
)
//8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184n
```

We've done it! This yields the right result, and in a matter of seconds! 🥳

There's a caveat, though: Because we're working with strings and that the `.substring()` method only accepts regular integers, not `BigInt`, we can't really perform the "Gauss step" without running into various issues such as `RangeError: Maximum call stack size exceeded` or losing precision when adding up the numbers.

For the algorithm to be complete and an accurate implementation, **we will need to implement custom add, multiply and subtract functions that work with Strings or Vectors** (depending on what we choose), allowing us to work without loosing any precision.

Also, this is something that would be probably better done in base that's a power of 2, which would allow us to use bit shift operations instead of powers, allowing for much faster execution.

### Refactoring

🚧 Coming soon 🚧
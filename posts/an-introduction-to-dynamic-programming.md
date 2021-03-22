---
title: An Introduction to Dynamic Programming
description: 
date: "2021-04-15"
updated: "2020-04-15"
cover: 
---

As it is a matter I have already started to explore prior to this course, I feel obliged to rectify a few inaccuracies I've heard in the recursion lectures. 

At some point, the lecturer refers to a dynamic programming approach to the fibonacci computation as "recursive". Then recursion and dynamic programming are presented as being somewhat complementary concurrents.

The explanations being quite confusing, allow me to give my two cents on the matter.

Recursion is a function calling itself with a base case and a reduction step. So far so good.

BUT dynamic programming is an approach that allows to save a lot of computational power, that can be implemented in two different ways: Through memoization using recursion OR through tabulation using iteration (good old loops).

It is as "trivial" as it sounds: Memoization is the act of storing the results of computations on top of recursion and passing this array of results to each recursive call that will first check if there is no result already computed and memoized (just a fancy word for stored) for this value.

Tabulation, on the other hand, is the act of tabulating the results, using a... table. Basically instead of storing all the fibonacci numbers you computed, you only keep what you need, in this case the last two computed numbers that are all is required to find the next number.

So dynamic programming can take advantage of recursion or use tabulation. In fact, memoization goes often in pair with memoization since there are many things we wouldn't be able to compute without them.

On the other hand, recursion can be used sometimes on its own (for example for graph traversal algorithms where it makes no sense to store any results since every node in the graph is unique).

Reality being made of shades of gray, you'll also find many use cases in which you can mix all approaches altogether... But that's another topic :)

Obviously, while the concepts are simple but require a lot of practice to really master and understand (I haven't). Hopefully this will be useful for people having a hard time getting a hard time getting a good grasp of dynamic programming and recursion. 

P.S.: I know this course is meant as a very general overview of programming and is really interesting as a topology of programming or a way to pick up missing pieces of the puzzle for self-taught people like me, but I'm guessing some people might want to know more about the topic. :)
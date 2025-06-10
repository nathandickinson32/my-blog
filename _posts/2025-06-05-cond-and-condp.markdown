---
layout: post
title:  "cond and condp"
date:   2025-06-05 16:40:00 -0400
categories: apprenticeship update
---

Today I made my video presentation for the FizzBuzz kata. I practiced
applying feedback from my mentor, especially around writing proper 
degenerate tests for building a range and printing it. I realized I
wasn’t following solid TDD practices there, but after our pairing the 
process feels much more fluid.

He also introduced me to condp, which helped simplify my code. Before,
I was sending both constant and non-constant parameters for different 
outputs like n, fizz, buzz and fizzBuzz. With condp, I could write less
code and make it way more readable.

```clojure
(defn fizzbuzz [n]
      (condp divisible? n
             15 "fizzbuzz"
             5 "buzz"
             3 "fizz"
             n))
```

I’ve been using a lot of keyboard shortcuts my mentor showed me. Not just for
refactoring but for quickly fixing typos and jumping between test and source 
files. It’s making my workflow smoother.

On the Tic Tac Toe side, I refactored to eliminate trailing whitespace errors
with user input. I want users to feel smart, so if they enter "1 " instead of
just "1", it still works. Spaces before or after input are common, so
trimming them cuts down on invalid input errors.

Finally, I wrote tests that expect nil using Speclj’s should-be-nil, based
on feedback. It made the tests clearer and more precise.

Another productive day!
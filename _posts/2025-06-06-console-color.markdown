---
layout: post
title:  "Console Color"
date:   2025-06-06 16:25:00 -0400
categories: apprenticeship update
---

Today I did a couple of different kinds of work.

First, I kept working through Euler Problem 12. I have a working solution that generates triangle
numbers and counts their divisors up to a target, but when I set the target to 500 divisors, the
program crashes. It looks like I need to optimize some functions, so I plan to talk through it
with a coworker this week.

I did get to use this nice formula to generate triangle numbers:
```clojure
(defn ->triangle-number [n]
  (/ (* n (inc n)) 2))

```
This comes from a bit of number theory: the n-th triangle number is the sum of the first n natural
numbers. So instead of summing 1 + 2 + 3 + ... + n, which takes time and memory, we can use the formula.
It works because every pair of numbers in the sequence from 1 to n adds up to (n + 1). For example,
1 + 4, 2 + 3 when n = 4. You have n/2 such pairs, which gives the formula. 

Later on I worked on my Tic Tac Toe game: colorizing the "X" and "O" characters in the terminal.

I hadn’t realized before that you could style console output using ANSI escape codes! I was able
to print "X" in green and "O" in red. Here’s how I handled it:
```clojure
(def green "\u001b[32m")
(def red "\u001b[31m")
(def reset "\u001b[0m")

(defn colorize-token [token]
  (cond
    (= token \X) (str green token reset)
    (= token \O) (str red token reset)
    :else token))

(defn colorize-board [board]
  (map #(map colorize-token %) board))

```
Now I can color individual tokens or the whole board. It gives the game a nice visual touch, even
in a basic terminal window.

ANSI escape codes don’t know when to stop applying that style unless you tell it explicitly. That’s
where the reset comes in.
```clojure
(def reset "\u001b[0m")
```
This ANSI code tells the terminal: “Stop using any styling or color. Go back to normal.” Without using
reset after each colored token, the terminal would keep applying that color to everything that follows.

So to prevent that, every time I color a token, I wrap it like this:
```clojure
(str green token reset)
```

It’s a good reminder that even small changes can have side effects, so you always have to be careful when
using new tools.
---
layout: post
title:  "Long Road Ahead"
date:   2025-05-21 15:20:00 -0400
categories: apprenticeship update
---

Today I wrapped up Euler 11. It took
some time and patience, but I'm feeling
much more confident in my approach and
in explaining how everything fits together.

To solve for diagonals slanting down and
to the right, I wrote this function:

```clojure
(defn ->max-down-right-diagonal-product [grid n]
  (apply max
         (for [start-row (->diagonal-range grid n)
               start-column (->diagonal-range grid n)]
           (apply * (for [i (range n)]
                      (get-in grid [(+ start-row i) (+ start-column i)]))))))

```
Here’s what’s happening:
I’m sliding through starting points in the
grid using ->diagonal-range, which gives me
valid positions to begin a diagonal of length
n. Then, for each starting position, I
calculate the product of n elements going
down and to the right by walking through the
grid using (+ start-row i) and
(+ start-column i) to track the diagonal path.
get-in lets me grab each value at that path,
and apply * multiplies them together. Finally,
I use apply max to get the largest product
from all those diagonals.

Alongside that, I watched Uncle Bob’s talk on
the three principles of component cohesion.
Starting more how cohesion ties into software
structure, thinking about why things belong
together and how to keep systems focused
and maintainable.

I also had IPM today, and it went better than
last week. I’ve been intentionally working
through each Euler problem in the REPL:
breaking things, adjusting parameters,
testing small changes, and really digging
into why something works. It’s helping me 
communicate my code more clearly, and today
I could explain my solution without getting
lost in the weeds.

Long road ahead, but I'm happy to be on it.
---
layout: post
title:  "Remember to start small"
date:   2025-05-120 16:35:00 -0400
categories: apprenticeship update
---
Today I tackled Euler Problem 11.

I was provided a 20x20 grid of numbers and asked
for the largest product of four adjacent numbers
in any direction.

A coworker helped me simplify the approach early
on by suggesting I break the problem down into a
smaller 2x2 grid first. That made it more
approachable and let me focus on building the
logic for individual directions.

I started with rows, and here’s my current
function for finding the largest product in
a row:
```clojure
(defn ->largest-row-product [grid]
  (apply max (for [row (range (count grid))]
    (apply * (get-in grid [row])))))

```
It still needs more logic to slide across sequences
of four, but the structure’s beginning to take shape.

I also watched Uncle Bob’s SOLID case study today,
which gave more concrete insight into how the
principles can play out in a real system.

Outside of Euler, I’ve been steadily practicing
in the REPL, rewriting FizzBuzz with both maps
and for loops to build fluency. Today I even
wrote a long, inner-to-outer function live in
the REPL and pulled it into my code. Felt
like a small but meaningful step in thinking
more fluidly with Clojure.
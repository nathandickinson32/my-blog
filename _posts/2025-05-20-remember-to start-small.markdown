---
layout: post
title:  "Remember to start small"
date:   2025-05-20 16:35:00 -0400
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
This function is still early, but here’s what’s
going on:
get-in is a Clojure function used to access nested
data structures. Since my grid is a vector of
vectors (a 2D matrix), get-in takes the outer
vector and a path, in this case [row], and returns
the inner vector at that row index. So if row is 2,
get-in grid [2] returns the entire third row. I
then multiply all the numbers in that row using
apply *.

Eventually, I’ll want to refine this to slide
through each row four numbers at a time
(rather than multiplying the whole row), but
this setup helped me start reasoning about
how to loop through the grid cleanly.

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
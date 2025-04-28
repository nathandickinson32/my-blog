---
layout: post
title:  "Loops and Conditionals"
date:   2025-04-28 16:45:30 -0400
categories: apprenticeship update
---
Today I worked on Euler Problem 2. I am continuing to
focus hard on learning the process of TDD. One thing
that is starting to click is that early on, it is totally
fine for my code to feel very manual and hardcoded. It is
actually part of the process. But as I start to notice patterns
in the tests and the outputs, that is when the logic needs
to start becoming more general.

For this problem, my early solution used cond to cover
just the small test cases:
```clojure
(defn get-fibonacci-numbers-to-n [n]
  (cond
    (<= n 1) nil
    (= n 2) [1 2]
    (= n 3) [1 2 3]))

```
As I wrote more tests and started to see the real pattern,
I refactored to use a loop:
```clojure
(defn get-fibonacci-to-n [n]
  (when (> n 1)
    (loop [sequence [1 2]]
      (let [next-number-in-sequence (apply + (take-last 2 sequence))]
        (if (> next-number-in-sequence n)
          sequence
          (recur
            (conj sequence next-number-in-sequence)))))))

```
It felt good to catch myself at the point where hardcoding was
no longer enough, and then move toward a more real solution.
Little by little, TDD is starting to make more sense.
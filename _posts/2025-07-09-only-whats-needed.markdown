---
layout: post
title: "Only What's Needed"
date: 2025-06-09 14:55:00 -0400
categories: apprenticeship update
---

Today I worked on optimizing my solution for Euler Problem 12. I already had a
working solution for smaller inputs, but when trying to find the first triangle
number with over 500 divisors it would crash or keep hanging.

So I started thinking of ways to make it faster. I remembered some logic I used
in an earlier problem. I don’t actually need to check all the divisors. I just
need the ones up to the square root, since every divisor has a pair. I also had
to check for perfect squares so that I didn’t accidentally double count them.

Here’s the core of what I came up with:

```clojure
(defn perfect-square? [n divisor]
      (= divisor (core/square n)))

(defn ->divisor-type [tri-num divisor]
      (cond
        (not (core/divisible-by? tri-num divisor)) 0
        (perfect-square? tri-num divisor) 1
        :else 2))

(defn ->divisor-count [divisor-range tri-num]
      (map #(->divisor-type tri-num %) divisor-range))

(defn count-divisors [tri-num]
      (let [sqrt-tri-num (->sqrt-n tri-num)
            divisor-range (->divisor-range sqrt-tri-num)
            divisor-count (->divisor-count divisor-range tri-num)]
           (apply + divisor-count)))
```

The best part about today was that I felt the real flow of TDD. I followed the
rhythm and didn’t write any extra code. Just what was needed, when it was
needed. That’s something I’ve struggled with before, I’d get ahead of myself
trying to solve things at a high level before it was really necessary.

This time, I waited for the problem to ask for optimization. Definitely a
lesson I want to carry into future problems.
---
layout: post
title:  "Building Up Speed"
date:   2025-05-12 14:05:00 -0400
categories: apprenticeship update
---

Today I wrapped up my presentation work on the
Open/Closed Principle, and then jumped into solving
Euler Problem 6. I felt pretty confident approaching
this one using TDD, writing simple tests early
helped guide my thinking as I built out the logic.

I reused the structure of a tail-recursive function
I wrote for Euler 5, and it worked great. Execution time
stayed fast, and the logic felt clear. Here’s what
I ended up with:
```clojure
(defn square-of-sums [amount-of-natural-numbers sum]
      (if (zero? amount-of-natural-numbers)
        (* sum sum)
        (recur (dec amount-of-natural-numbers) (+ amount-of-natural-numbers sum))))

(defn sum-of-squares [amount-of-natural-numbers sum]
      (if (zero? amount-of-natural-numbers)
        sum
        (recur (dec amount-of-natural-numbers) (+ (* amount-of-natural-numbers amount-of-natural-numbers) sum))))

(defn euler-4 [amount-of-natural-numbers]
      (if (or (not (number? amount-of-natural-numbers)) (< amount-of-natural-numbers 0))
        nil
        (- (square-of-sums amount-of-natural-numbers 0) (sum-of-squares amount-of-natural-numbers 0))))
```
I’m noticing how much more natural recursion feels
now compared to when I first started. Still
learning, but I’m definitely building up speed.
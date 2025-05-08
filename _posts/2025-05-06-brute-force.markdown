---
layout: post
title:  "Brute Force"
date:   2025-05-06 16:10:00 -0400
categories: apprenticeship update
---

Today I worked through Euler Problem 6. The goal
is to find the smallest number that’s evenly
divisible by all numbers in a given range 
(in this case, 1 through 20). I started with a
brute-force solution that technically worked—but
it was extremely slow and inefficient:

```clojure
(defn divisible-by-all? [number-to-check range-of-nums]
  (every? #(zero? (mod number-to-check %)) range-of-nums))

(defn smallest-divisible [max-divisor]
  (loop [number-to-check max-divisor]
    (if (divisible-by-all? number-to-check (range 1 (inc max-divisor)))
      number-to-check
      (recur (+ number-to-check max-divisor)))))

```

That version checked one number at a time, incrementing
by the max divisor and testing if it was divisible by
everything in the range. It got the job done for small
ranges, but anything bigger just took too long.

After that, I looked into number theory and realized
the real key to this problem is the least common
multiple (LCM). If you find the LCM of all the numbers
in the range, you’ve found the smallest number 
divisible by all of them. That took me down a rabbit
hole into the Euclidean algorithm, which is used to
calculate the greatest common denominator (GCD), 
a crucial step in finding the LCM.

Here’s the final version of the solution:

```clojure
(defn greatest-common-denominator [first-number second-number]
  (if (zero? second-number)
    first-number
    (recur second-number (mod first-number second-number))))

(defn least-common-multiple
  ([first-number second-number]
   (/ (* first-number second-number)
      (greatest-common-denominator first-number second-number)))
  ([range-of-numbers]
   (reduce least-common-multiple 1 range-of-numbers)))

```

The formula for LCM is:

```clojure
lcm(a, b) = (a * b) / gcd(a, b)
```

Using reduce, I applied this over the entire
range, combining two numbers at a time to
find the cumulative LCM.

Pretty satisfying to go from a messy brute-force
loop to something elegant that leans on math.



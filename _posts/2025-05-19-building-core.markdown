---
layout: post
title:  "Building Core"
date:   2025-05-19 17:35:00 -0400
categories: apprenticeship update
---

Today I solved Euler Problem 10, and it felt good to reuse some code from previous problems.
Here's my solution:
```clojure
(defn maybe-add-to-primes [cursor primes]
  (if (core/is-prime? cursor primes)
    (conj primes cursor)
    primes))

(defn sum-up-primes [primes cursor target]
  (if (= cursor target)
    (apply + primes)
    (recur
      (maybe-add-to-primes cursor primes)
      (inc cursor) target)))

(defn euler-10 [target]
  (sum-up-primes [] 2 target))

```

I reused logic from my Euler 3 and 7 solutions
and refined it further. One function that really
clicked today was:

```clojure
(defn filtered-primes [cursor primes]
  (take-while #(<= (square %) cursor) primes))

```

This narrows down the list of primes to check against
by stopping once a prime’s square exceeds the current
number. Since a number doesn’t have any prime factors
larger than its square root, this makes is-prime? run
much more efficiently.

I also paired with a coworker who gave great feedback
on renaming functions and helped me get more comfortable
with Clojure’s -> (thread-first) and ->> (thread-last)
macros,  especially when and why to reach for each. On
top of that, they walked me through how to extract logic
into a core file and require it across namespaces,
which is already helping keep my project more organized.

Felt like a well-rounded day of progress,
some learning, some cleanup, and a bit more confidence.
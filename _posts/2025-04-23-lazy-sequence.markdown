---
layout: post
title:  "Lazy Sequence"
date:   2025-04-23 16:09:10 -0400
categories: apprenticeship update
---

Today I kept practicing the Bowling Game Kata, focusing on refining structure
and applying what I’ve learned from the Clean Coders series. One part of the
code that stood out was how lazy-seq and flatten work together:

```clojure
(defn ->frames [rolls]
  (if (empty? rolls)
    []
    (cons
      (->first-frame rolls)
      (lazy-seq (->frames (->rest-rolls rolls))))))

(defn score [rolls]
  (reduce + (flatten (take 10 (->frames rolls)))))

```

Using lazy-seq keeps the recursive sequence efficient by evaluating only
what's needed. Combined with flatten, which cleans up the nested structure,
it makes the scoring logic clean and efficient.

I also wrapped up the final video in Uncle Bob’s Fundamentals series,
which explored Architecture, Use Cases, and High-Level Design. The 
biggest takeaway for me was that architecture should support the business
logic first, not the tools or frameworks. That mindset feels really
valuable as I continue learning how to design maintainable systems.

Each day the bigger picture becomes a little clearer.
---
layout: post
title:  "Threading"
date:   2025-04-24 17:45:10 -0400
categories: apprenticeship update
---
Today I spent more time practicing the Bowling Game Kata,
focusing on refining the structure of my solution. Yesterday,
I had the opportunity to present my progress to my two mentors.
Their feedback was really helpful, and I spent some time today 
digging into what they shared.

The biggest takeaway was around using the thread-last macro (->>)
to make my code more idiomatic and readable. Originally, I had this:
```clojure
(defn score [rolls]
  (reduce + (flatten (take 10 (->frames rolls)))))

```
They suggested refactoring it like this:
```clojure
(defn score [rolls]
  (->> rolls
       ->frames
       (take 10)
       flatten
       (reduce +)))

```
This version reads more clearly as a series of transformations,
and I can see how it improves readability and emphasizes the flow of data.

I also started the SOLID Principles video series by Uncle Bob.
The first principle, Single Responsibility, was a strong reminder
of how important it is to keep functions focused and cohesive.
It ties in really well with what I’m learning through TDD and
the kata practice, keeping things small, clear, and purpose-driven.

Looking forward to applying more of these principles as I continue
building and refactoring.
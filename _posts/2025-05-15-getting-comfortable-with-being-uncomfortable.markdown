---
layout: post
title:  "Getting Comfortable With Being Uncomfortable"
date:   2025-05-15 16:25:00 -0400
categories: apprenticeship update
---

Today I worked extensively on Euler Problem 9.
I paired with someone new and learned a lot.
This is my working nested for loop:
```clojure
(defn find-triplets [target]
  (for [a (range 1 target)
        b (range (inc a) target)
        :let [c (- target a b)]
        :when (and (< b c)
                   (maybe-pythagorean? a b c))]
    [a b c]))
```
Pairing today was a good reminder of how valuable
it is to talk through logic out loud. Having
someone to bounce ideas off helped me break down
the problem into clearer, smaller parts. It also
helped surface what I thought I understood but
didn’t fully grasp yet.

I also spent some time just practicing map functions
in the REPL. I’ll continue to do that to build
confidence in my typing. I spent time looking at
number theory for solving Euler 9. There are some 
interesting concepts around generating Pythagorean 
triples and using the GCD. I also looked through
the Clojure docs for methods I was using in my
functions, trying to fully understand the mechanics
of things like for and what it means for a sequence
to be lazy.

In Clojure, lazy sequences are sequences that don’t
compute all their values at once. They calculate
each value only when it’s needed. For example, if
I write (take 5 (range)), Clojure doesn't generate 
all natural numbers, it only gives me the first 5.
That’s lazy evaluation. If I’m not aware of it, it
can lead to unexpected behaviors, especially when
combining it with other sequence operations like
map, filter, or for.

During our IPM, someone shared a story about
cargo cult programming, where someone mimics
the form of working code without understanding
the purpose behind it, like copying rituals in
hopes of summoning success. It really resonated 
with how I’ve been feeling. I'm trying hard, but
also aware that sometimes I’m just doing what
looks right without fully grasping why. I don’t
want to fall into that trap, I want to understand.
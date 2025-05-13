---
layout: post
title:  "Prime Focus"
date:   2025-05-13 15:55:00 -0400
categories: apprenticeship update
---

Today I worked on Euler Problem 7
and started digging into the
Dependency Inversion Principle 
with another Uncle Bob video.

For Euler 7, I leaned on what I’ve
learned from earlier problems about
prime factorization. My solution keeps
a running list of known primes and checks
whether the next number is divisible by
any of them. If it isn’t, it gets added
to the list. I loop through this process
until I’ve found the nth prime.

It felt like a good step toward optimizing
my thinking. Instead of brute force, I’m
starting to look for smarter and cleaner
ways to solve problems, ones that reuse
logic I’ve already worked hard to understand.

The design idea in the Dependency Inversion
Principle is that high-level modules shouldn’t
depend on low-level ones, but both should
depend on abstractions. Watching Uncle Bob
explain it helped me realize how this principle
can keep code flexible and easier to
test, especially as things scale. I’m starting
to see how these SOLID principles build off each
other.

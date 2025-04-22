---
layout: post
title:  "Let's Go Bowling"
date:   2025-04-21 16:13:30 -0400
categories: apprenticeship update
---

Kicking off the second week with a deeper dive into writing clean, expressive code.
I started the day by watching another video in the Clean Coders Fundamentals
series, this one focused on form. The big takeaway? Code should look as good as it 
functions. Clear formatting, intentional structure, and spacing all contribute to 
readability, and readability leads to maintainability. It’s the kind of thing that 
seems small at first, but becomes really obvious once you see well-structured code 
next to something messy.

With that in mind, I began practicing the Bowling Game Kata, a popular code
kata designed to reinforce test-driven development (TDD) principles. It was 
my first time writing code using TDD, and it quickly became a fun challenge.

What really helped me understand the process was watching a few internal videos
where some of the Clean Coders craftspeople walked through the kata themselves.
Seeing how experienced developers approached the problem step by step,
test by test, was incredibly helpful. They emphasized clarity and confidence in each decision,
and watching them reinforced everything I’d just learned about form.

Here's an example of one of the very first tests I wrote:

(it "gutter game is zero"
(should= 0 (score (repeat 0))))

In bowling, a gutter game means every roll knocks down zero pins, so the total score is zero.
That’s the simplest possible test case to start with, and writing a passing implementation
for it looks like this:

(defn score [_] 0)

This small step might not seem like much, but it sets the tone for the entire development flow.
The test leads the code. You write the minimal code to make the test pass, then move
to the next case, refactor, and repeat.

Practicing this way has helped me slow down and focus on one behavior at a time.
It's reinforcing habits like naming things well, only writing what you need, and constantly asking:
what’s the simplest thing that works?

It’s only day one of the second week, but I’m already seeing how these small practices can
compound into better, cleaner code. Looking forward to continuing the kata and growing my
comfort with test-driven development.
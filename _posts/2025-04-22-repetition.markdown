---
layout: post
title:  "Repetition"
date:   2025-04-22 18:13:30 -0400
categories: apprenticeship update
---
Today was all about repetition and rhythm.

I spent the day practicing the Bowling Game Kata multiple times. Each pass helped 
me internalize the flow of Test Driven Development (TDD). Early attempts felt a bit
clumsy, but as I kept going, the structure and purpose behind each test started making
more sense. I was not just writing tests to verify code, I was learning to write tests
that shape the code.

One of the biggest wins was realizing how satisfying refactoring can be. In the past,
changing working code made me nervous. But today, with the safety net of tests in place,
I felt more confident simplifying logic and restructuring pieces. Seeing all the tests still
pass afterward confirmed that the behavior was still correct.

Here’s a small example of that in action. After getting the initial scoring logic to work,
I refactored the frame evaluation to make it clearer and more reusable. This version separates
the spare and strike checks into named functions and uses them to determine how many rolls should
be included in the score for a given frame:

(defn spare? [rolls]
(= 10 (reduce + (take 2 rolls))))

(defn strike? [rolls]
(= 10 (first rolls)))

(if (or (spare? rolls) (strike? rolls))
(take 3 rolls)
(take 2 rolls))

This refactor makes the logic easier to read, test, and change. It also keeps the frame-scoring
logic focused on intent, rather than implementation details.

To support the hands-on learning, I also watched TDD Parts 1 and 2 from the Clean Code
Fundamentals series. Uncle Bob explained the deeper purpose of TDD, not just to verify code,
but to drive design. He emphasized writing the simplest code to pass a test, then using
refactoring to improve clarity and structure without changing behavior.

There’s still a lot I have to learn, but today things started to click. The feedback
loop of writing a failing test, making it pass, and then improving the code is starting 
to feel natural, and even fun.

Looking forward to building on this momentum in the days ahead.
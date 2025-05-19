---
layout: post
title:  "Groundwork For Liskov"
date:   2025-05-16 15:35:00 -0400
categories: apprenticeship update
---

Today I got started on my slideshow
presentation for the Liskov Substitution
Principle, the “L” in SOLID. As an apprentice,
this is all still very much a learning
exercise for me, and I’m focusing on breaking
these ideas down in a way that I can truly
understand and explain clearly.

Liskov is about ensuring that if code works
with a base type, it should continue to work
correctly when a subtype is substituted in, 
without unexpected behavior or broken functionality.
To help ground the concept, I’m building my example
around credit cards. A general-purpose credit card
and a store card might both offer a makePurchase
method, but store cards often come with different
rules or limitations. That kind of behavioral inconsistency
can lead to subtle bugs, and it's a strong signal
that we might need to rethink our abstractions.

In this case, defining a proper interface can help
reinforce expectations and ensure consistency.
If the store card can’t behave like a regular credit
card, it might not belong in the same hierarchy, 
or it might need a more specific contract.

Still working through it all, but the principles are
starting to really tie together now.
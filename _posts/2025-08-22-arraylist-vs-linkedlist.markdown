---
layout: post
title: "ArrayList vs LinkedList"
date: 2025-08-22 16:10:00 -0400
categories: apprenticeship update
---

Today I worked on a presentation to explain the difference between ArrayList and
LinkedList in Java. Both are implementations of the List interface, but they
have different tradeoffs.

# ArrayList

- Backed by a dynamic array.
- Fast random access (O(1) to get by index).
- Slower insertions/removals in the middle because elements need to be shifted (O(n)).
- Great choice when you read more than you modify.

# LinkedList

- Made up of nodes linked together.
- Fast insertions/removals anywhere once you have a reference (O(1)).
- Slower access by index (O(n) because it must traverse nodes).
- Better when modifications are frequent and access patterns are sequential.

Neither is “better” universally, it depends on the problem.

- Use ArrayList for quick lookups and iterating.
- Use LinkedList when you’ll be inserting/removing frequently in the middle.

Knowing which structure to reach for is an important step in writing efficient
Java code.
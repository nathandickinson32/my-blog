---
layout: post
title: "Test Doubles"
date: 2025-09-23 16:18:00 -0400
categories: apprenticeship update
---

Today I focused on understanding mocking and test doubles. These are tools in
test-driven development that let us isolate parts of the system and verify
behavior without relying on the full production environment.

A true mock is more than a placeholder, it checks what it spied. This allows us
to see if the right functions are called in the correct order. Along with spies,
mocks give us insight into the production code, letting us observe interactions
without affecting real logic.

There are a few key types of test doubles:

- Dummy: the simplest, used when neither the test nor the function cares about its value.
- Stub: returns fixed values useful to the test; often, its methods do nothing.
- Fake: can mimic production behavior but may become large and complicated over time.
- Spy: records how it’s used, helping verify call order and interactions.

Mocking is closely tied to the dependency-inversion principle, which emphasizes
designing components around abstractions rather than concrete implementations.
This design makes tests easier and safer because the system can be exercised in
isolation.

Two primary schools of TDD thought exist: Mockism and Statism. Mockism focuses
on verifying interactions between objects, while Statism emphasizes testing
state changes. Learning both perspectives helps balance when to check behavior
versus when to check results.

In practice, using mocks, stubs, spies, and dummies together allows us to write
tests that are fast, clear, and reliable, while keeping production code clean.
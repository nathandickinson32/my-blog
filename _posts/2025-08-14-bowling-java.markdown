---
layout: post
title: "Bowling Java"
date: 2025-08-14 16:10:00 -0400
categories: apprenticeship update
---

Today I worked on the Bowling Game Kata, this time in Java. Java was the first
language I ever learned but this time I approached it with Test-Driven
Development (TDD).

I’ve done the kata before in Clojure, which felt very different because of its
functional style. Doing it in Java highlights how object-oriented TDD works,
building small, clear tests that guide the design of the Game class.

Here are the first couple of tests I wrote:

```java

@Test
public void testGutterGame() {
    rollMany(20, 0);
    assertEquals(0, game.score());
}

@Test
public void testOnePin() {
    game.roll(1);
    assertEquals(1, game.score());
}

@Test
public void testAllOnes() {
    rollMany(20, 1);
    assertEquals(20, game.score());
}

```

Each test builds on the last, teaching the rules of the game to the program
step by step. That’s TDD: write a failing test, make it pass,
then refactor.
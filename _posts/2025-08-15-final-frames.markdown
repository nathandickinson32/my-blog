---
layout: post
title: "Final Frames"
date: 2025-08-15 16:10:00 -0400
categories: apprenticeship update
---

Today I continued practicing the Bowling Game Kata in Java. The big focus was
on how the game scores in the final frames, which is different from the earlier
ones.

```java

@Test
public void testAlmostPerfectGame() {
    rollMany(9, 10);
    assertEquals(240, game.score());
}

```

At first glance, bowling scoring feels simple. Strikes and spares give you
bonus rolls. But the 10th frame has special rules:
- If you roll a strike, you get two extra rolls.
- If you roll a spare, you get one extra roll.

This means the scoring logic can’t just treat all frames the same. Without a
test like testAlmostPerfectGame, it’s easy to accidentally miscalculate the
bonuses from strikes in the last frame.

In this test, nine consecutive strikes followed by a “normal” 10th frame should
total 240 points. That’s less than a perfect 300, but it checks if the
end-of-game logic is solid.

Here’s how I approached it in my BowlingGame class:
- A loop calculates scores for the first 9 frames.
- When it reaches the 10th frame, it calls a helper:

```java

private int scoreLastFrames(int i, int frame) {
    int score = 0;
    for (; i < rolls.size(); i++) {
        if (isStrike(i) && frame < 9 && i < rolls.size() - 1)
            score += rolls.get(i + 1);
        score += rolls.get(i);
    }
    return score;
}

```
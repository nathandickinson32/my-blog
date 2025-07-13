---
layout: post
title: "Top To Bottom"
date: 2025-07-09 16:20:00 -0400
categories: apprenticeship update
---

Today I focused on shortening the presentation time for my Langton’s Ant kata
before IPM. I’ve gotten it down to about 15–20 minutes but the target is more 
like 10. So some more work to do.

One piece of feedback that really stuck with me today: I need to work from top 
to bottom, not bottom to top.

I had been writing tests for small pieces like rotation-map or move, the things
I already knew I’d need. But that was kind of backwards. Instead, I should
write tests that reflect the behavior of the ant itself, and let those drive
the abstractions.

For example, instead of saying “I need a turn map, so let me test the rotation
logic,” I should start with:

```clojure

(it "turns east on white"
    (let [ant (create-ant)
          ant (set-color ant (:position ant) :white)
          next-ant (step ant)]
         (should= :black (color-at next-ant (:position ant)))
         (should= :east (:orientation next-ant))
         (should= [1 0] (:position next-ant))))


```

This test doesn’t care how the ant turns. This test just cares that it turns,
that it flips the tile color, and that it moves in the right direction. That’s
what Langton’s Ant does.

Then as more of these behavior-driven tests come in, I can start extracting 
helper functions like rotate, move, and color-complement. These functions can be
pulled out of real behavior and not pushed in from assumptions.

The lesson here is one I’ve seen a few times now: Test for behavior, not for
implementation. If you get the behavior right, the structure tends to follow
naturally.

Hopefully this change in testing will improve my Kata presentation time closer 
to 10 minutes.
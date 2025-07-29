---
layout: post
title: "Debugging Depth"
date: 2025-07-22 16:40:00 -0400
categories: apprenticeship update
---

Today I paired with my mentor to debug a problem in my expert AI for the 3x3x3
version of Tic Tac Toe. The game would crash after just a few moves, and I
couldn’t figure out why on my own.

Watching my mentor debug was a great learning moment. He started at the top 
level function (take-turn) and added print statements. From there he followed
the flow of functions, dropping deeper into code until we reached a point where
the println output either stopped or gave unexpected results. This led us right
to the problem which was where I was checking to end the minimax.

```clojure

(defn end-minimax? [board board-size depth]
      (cond
        (= board-size :3x3) (end-game? board board-size)
        (= board-size :4x4) (or (end-game? board board-size)
                                (=> depth 7))
        (= board-size :3x3x3) (or (end-game? board board-size)
                                  (=> depth 3))))
```

I originally had it ending when the depth would equal 3. (end-game) would be
receiving a starting depth of 3+ and crash my game because the depth limit
would never be reached. We changed the depth check to include greater than 3.
That fixed the crashing, but I now needed to fix the bigger issue.

I was tracking depth in the game state and passing that into minimax. So when
minimax was called, it was starting from depth already over the limit. The
final fix was to start minimax at depth 0 and remove depth from the game state 
entirely now that it was unneeded. Now the AI plays smoothly in all board
formats.

Some great lessons today!
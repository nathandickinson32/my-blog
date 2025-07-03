---
layout: post
title: "Depth Check"
date: 2025-06-30 16:35:00 -0400
categories: apprenticeship update
---

Today I finished working on the 4x4 board feature in my Tic Tac Toe game, and
the biggest learning moment came from how much deeper the game tree gets with
just one extra row and column.

The early parts of the work went pretty smooth. I updated the human namespace
to support 4x4 input by creating a new digit-to-coordinate map. This map needed 
to be in strings being that the grid is larger than 9, the limit for characters.

```clojure

(def single-digit-positions-4x4
  {"1"  [0 0] "2"  [0 1] "3"  [0 2] "4"  [0 3]
   "5"  [1 0] "6"  [1 1] "7"  [1 2] "8"  [1 3]
   "9"  [2 0] "10" [2 1] "11" [2 2] "12" [2 3]
   "13" [3 0] "14" [3 1] "15" [3 2] "16" [3 3]})

```

I then placed it into a function that returns the correct grid map based on
board size. Everything else followed that pattern of checking the board size 
and choosing the right path. The easy AI didn’t need any updates since 
available-moves was already set up to work with both board sizes in the
board namespace.

But where things got interesting was with the expert AI.

On a 3x3 board, full minimax works just fine because there are only so many
possibilities. But on a 4x4, the branching becomes unfathomable. My game would
not run and I realized I needed to add a depth check to avoid going down every
single possible path.

Here’s what I ended up with:

```clojure

(defn end-minimax? [board board-size depth]
      (cond
        (= board-size :3x3) (end-game? board board-size)
        (= board-size :4x4) (or (end-game? board board-size)
                                (= depth 4))))

```

This fixed that up. It allows the AI to explore without trying to finish out 
a full 16 space game tree. That is just too much. I’m still letting the AI play
at a pretty strong level, but with a realistic cutoff that keeps the game
playable.

Overall, I moved smoothly through the codebase, got a little help when I needed
it, and ended up with something that feels good.

Next up: something totally new to me. I'll be building a GUI with Quil and
practicing a kata with it. I’m excited to see what this new challenge brings.
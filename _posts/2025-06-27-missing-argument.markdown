---
layout: post
title: "Missing Argument"
date: 2025-06-27 15:55:00 -0400
categories: apprenticeship update
---

Today I worked on making my board namespace work with a 3x3 board and a
4x4 board.

Luckily, a lot of my existing functions still worked just fine. The main work
was about checking for correct diagonals and passing around the board-size as
an argument through all the functions. I started by building a function to
return the correct list of board positions depending on the size:

```clojure

(defn ->positions-by-board-size [board-size]
      (cond
        (= :3x3 board-size) all-positions-3x3
        (= :4x4 board-size) all-positions-4x4))

```

Then I moved on to the game namespace. I had the user select the board size at
the start, added that to the game state, and passed it around where needed.
Once I could determine which board to print and start with based on that value,
things felt pretty smooth:

```clojure

(defn determine-starting-board [board-size]
      (cond
        (= :3x3 board-size) output/starting-board-3x3
        (= :4x4 board-size) output/starting-board-4x4))

(defn determine-board-to-print [board-size board]
      (if (= :3x3 board-size)
        (print-board-3x3 board)
        (print-board-4x4 board)))

```

Today was another good reminder that solid foundations make adding new features
much more manageable. I love the payoff of early structure and TDD in how 
reusable my code has been across these changes.
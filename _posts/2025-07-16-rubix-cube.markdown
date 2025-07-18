---
layout: post
title: "Rubix-Cube"
date: 2025-07-16 15:25:00 -0400
categories: apprenticeship update
---

Made some solid progress today on the 3x3x3 version of my Tic Tac Toe game.
Finished up checking for all win conditions.

I pulled out a Rubik’s Cube to help visualize the board in 3D and started
mapping out every win condition I could find. As I did, I noticed a pattern:
some win paths are when the x-coordinate is fixed, others when y is fixed.

That led me to define functions like ->diagonals-from-x and ->diagonals-from-y
to generate the right coordinates. Here’s a peek at what that looks like:

```clojure

(defn ->diagonals-from-x [x]
      [[[0 x 0] [1 x 1] [2 x 2]]
       [[2 x 0] [1 x 1] [0 x 2]]])

(defn ->diagonals-from-y [y]
      [[[0 0 y] [1 1 y] [2 2 y]]
       [[2 0 y] [1 1 y] [0 2 y]]])

(defn ->x-plane-diags []
      (for [x (range 3)
            diagonals (->diagonals-from-x x)]
           diagonals))

(defn ->y-plane-diags []
      (for [y (range 3)
            diagonals (->diagonals-from-y y)]
           diagonals))

```

It’s cool to see how a physical object like a Rubik’s Cube can help break down
the logic of a 3D board. Next I'll be making the expert AI available to play
against.
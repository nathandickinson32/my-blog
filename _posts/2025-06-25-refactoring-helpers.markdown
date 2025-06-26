---
layout: post
title: "Refactoring Helpers"
date: 2025-06-25 15:10:00 -0400
categories: apprenticeship update
---

Today I spent some time refactoring my helper functions for simulating every
possible AI game of Tic Tac Toe. I think I understand the game on a very deep
level now.

A lot of what I wrote today was about making the code cleaner and reusable.
Before I had a bunch of separate functions doing the right thing. Now I’ve got
functions where I can simulate both the AI and opponent moves, track the board
state and depth, and collect all the finished outcomes in a loop.

Here’s a look at one of the helper functions:

```clojure

(defn opponent-moves [[board depth] token]
      (let [available-moves (board/available-moves board)]
           (map #(vector (board/make-move board % token)
                         (inc depth))
                available-moves)))

```

By passing through the depth and game state together it makes the recursion
much easier to follow. I also set things up so that it’s easy to swap who goes
first. Now I can simulate games where the AI plays first or second and make
sure it never loses.

I had IPM today and it went well. It felt good to walk through the game I’ve
built. My mentor mentioned it wasn’t exactly how he would’ve done it, but we
would have gotten to the same results. I like seeing how different paths can
still lead to good results.

Now I’m onto my next feature, a 4x4 board version of Tic Tac Toe! This one’s
going to be interesting. More complexity and more moves. I feel more prepared
for it thanks to the foundation I’ve built. Early investments hopefully paying
off again.
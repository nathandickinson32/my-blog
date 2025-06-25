---
layout: post
title: "Every Possibility"
date: 2025-06-24 16:50:00 -0400
categories: apprenticeship update
---

Today I worked on a test that simulates every possible outcome of a
Tic Tac Toe game. This was to prove that my expert AI is truly unbeatable.

I felt a little stuck getting started, so I paired with a craftsman to help
me shape the approach. He suggested testing whether the AI could
win or tie as player one (X) in every single possible scenario.

The was my strategy:

- Let the AI make its first move on an empty board.
- From there, generate all possible boards that player O (the opponent) could respond with.
- Then have the AI respond to those.
- Keep this loop going until every game is finished.
- And finally, check that every outcome is either a win or draw for the AI.

That last part is what I wrote this test for:

```clojure

(it "AI never loses as X playing first"
    (let [all-finished-games (->all-finished-games-as-X)]
         (should (x-win-every-game all-finished-games))))

```

And here’s the function that checks the final boards:

```clojure

(defn x-win-every-game [all-finished-games]
      (every? #(cond
                 (board/win? % :X) true
                 (board/full-board? %) true
                 :else false)
              all-finished-games))

```

The AI never loses!

I couldn't have gotten here without help from the craftsmen and is a reminder
of how powerful pairing can be. And also how important it is to write smart
tests. Instead of trying to brute force solutions, I let the test prove it.
This was one of those stories that felt a little intimidating at first, but I
asked for help, trusted my team, and got it to a good place.

Still a lot to learn. It's nice knowing I've got people who have been through
this same thing here to help me through it. 
---
layout: post
title: "Are You Confident?"
date: 2025-06-10 15:30:00 -0400
categories: apprenticeship update
---

Today I worked on the next feature for my Tic Tac Toe game: computer vs.
computer. This one felt smooth, and again I think that’s because of the
early investments I made in the project. Those early stories took more time,
but I write clean code and good tests, and now I get to reuse all of that work.
I didn’t have to second guess much today. I trust the code and that’s
a great feeling!

The main change was refactoring how I build the game state. Instead of
hardcoding player one I now ask the user to select both player types. That
allowed for the computer vs. computer matchup to play out using the same
take-turns function I’ve already been building.

```clojure

(defn build-game-state []
      (let [player-1 (ask-for-player)
            player-1-token (ask-for-token)
            player-2 (ask-for-player)
            first-token (ask-for-first-player)
            player-2-token (board/switch-player player-1-token)
            players {player-1-token player-1
                     player-2-token player-2}
            state {:X             (players :X)
                   :O             (players :O)
                   :board         output/starting-board
                   :current-token first-token
                   :depth         0}]
           (take-turns state)
           (output/play-again?)
           (play-again? build-game-state)))

```

My other story tied into something that came up during IPM. I was asked how
confident I was that my expert AI is unbeatable. I hesitated, gave a few
different answers, not my best moment. The takeaway was if I’m going to say
my AI is unbeatable, I need to back that up with a test that proves it.

So I started looking into memoization. It's a way to store the results of
function calls so I don’t repeat calculations that will take a lot of time.
It’s great for recursive problems like minimax and Fibonacci. One of the
craftsmen recommended practicing with a simpler example first, so I’m looking
at Euler Problem 2 to get a feel for how it works before trying to optimize
the AI with it.

The project’s growing and so am I!
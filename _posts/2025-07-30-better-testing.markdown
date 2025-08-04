---
layout: post
title: "Better Testing"
date: 2025-07-30 17:00:00 -0400
categories: apprenticeship update
---

Today I paired up with my mentor to refactor and write better tests for a
feature I recently added to my Tic Tac Toe project: running a game replay from
the command line.

When I first wrote this feature, I sandboxed different solutions and then
applied TDD. I was writing tests for all the little pieces, but I’m trying to
practice top-down testing. This means testing the behavior of the main function
that kicks everything off, rather than each small helper.

Here’s the function I focused on:

```clojure

(defn replay? [[replay game-id]]
      (when (= "--replay" replay)
            (if-let [game-states (seq (->game-states game-id))]
                    (replay-record game-states game-id)
                    (output/invalid-game-id))
            true))

```

What I wanted to test was the full chain of behavior which is:
Did the replay happen correctly when a valid game ID was passed?

```clojure

(it "X wins returns true when replay and game ID are valid"
    (should-be sut/replay? ["--replay" "123-X"])
    (should-have-invoked :replay-data {:with ["123-X" (str (output/color-green "X") " Wins") (last game-states-3x3-X)]})
    (should-not-have-invoked :invalid-response)
    (let [board (last game-states-3x3-X)]
         (should-have-invoked :determine-board-to-print {:time 1})
         (should-have-invoked :determine-board-to-print {:with [:3x3 (:board board)]})))

```

This kind of thinking will definitely help when the code changes on a deeper
level because the test still ensures the full behavior works as expected.

Next time I write a new feature, I’ll try to start from the top-down
perspective right away.
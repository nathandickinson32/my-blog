---
layout: post
title: "Command Line Arguments"
date: 2025-07-25 15:30:00 -0400
categories: apprenticeship update
---

Today I worked on a feature that lets users start my Tic Tac Toe program with
a replay option from the command line:

```clojure

lein run --replay "game-id"

```

This was a fun and valuable story because I haven’t done much with command-line
arguments in Clojure before. It felt like a new door opening. I started by
test-driving edge cases of receiving no arguments, some of the right arguments
and both "--replay" and "valid-game-id". I then sandboxed the rest of the
solution, mocking up what I expected to happen step by step.

The goal was simple. If the user passes in a valid game ID with "--replay", we
should read from our .edn file, find all the states associated with that game,
and print the necessary info from the state and a turn-by-turn replay. Here's
the start of the function I built:

```clojure

(defn replay? [[replay game-id]]
      (let [lines (->content-lines)
            game-states (->game-states lines game-id)
            last-state (last game-states)]
           (cond
             (replay-and-valid-id? replay game-states game-id)
             ;TODO need to test
             #_(do
                 (let [outcome (cond
                                 (board/win? (:board last-state) :X (:board-size last-state)) "X Wins"
                                 (board/win? (:board last-state) :O (:board-size last-state)) "O Wins"
                                 (board/full-board? (:board last-state) (:board-size last-state)) "Draw"
                                 :else "Unfinished")]
                      (println (str "Replay Of Game: " game-id))
                      (println (str "Outcome: " outcome))
                      (println (str "Player X: " (name (:X last-state))))
                      (println (str "Player O: " (name (:O last-state))))
                      (println (str "Board Size: " (name (:board-size last-state))))
                      (println))
                 (print-each-move game-states)
                 true)

             ; Future conditions to handle
             #_(str-replay? replay) (invalid-game-id)
             :else false)))

```

Parsing CLI args: This was my first time handling arguments passed to a Clojure
app with lein run, and the destructuring of the vector at the start of the
function ([[replay game-id]]) is a cool trick to practice.

Replay logic: Once the game ID is matched, I search through the saved states
and determine the final outcome. Whether it's a win, draw, or unfinished game,
the output is dynamic.

The function currently has some commented-out logic and TODO comments. This is
done on purpose. I sandboxed the solution first, but now I want to test every
path before uncommenting for real. I’m using TDD to be confident about what
goes into production.

I still need to clean up and extract some of the messy logic. But overall, I
like where this is headed.

If you’re building CLIs in Clojure, don’t forget: you can test-drive even lein
run args just like anything else. Start with the interface you want and drive
your way toward it.
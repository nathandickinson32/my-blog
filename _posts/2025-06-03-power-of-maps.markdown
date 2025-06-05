layout: post
title:  "Power of Maps"
date:   2025-06-03 16:55:00 -0400
categories: apprenticeship update
---

Today I focused on extending my Tic Tac Toe project by giving players the choice
to go first or second and the option to play against a human or an AI. This meant
changing how the game starts from just jumping into turns to prompting the user to choose a game mode.

To make this more manageable, I built a state map that holds the game’s parameters:player types, board,
and current token. This change made it much easier to move about the game and pass around all the
necessary information in a single structure.

Here’s what that part of the code looks like:
```clojure
(def game-modes
  {"1" {\X :human \O :human :board output/starting-board :current-token \X}
   "2" {\X :human \O :ai    :board output/starting-board :current-token \X}
   "3" {\X :ai    \O :human :board output/starting-board :current-token \X}})

(defn choose-game-mode []
  (output/game-mode-prompt)
  (let [input (read-line)
        state (maybe-valid-game-mode input)]
    (if state
      (take-turns state)
      (do
        (output/invalid-response)
        (recur)))))

```
I also realized how powerful maps can be for handling edge cases cleanly. By putting my game modes into a map
I could easily check for valid keys. This made handling invalid input seem easy, something that felt a little difficult
when using conditional logic alone.

If you're ever finding yourself tangled in conditionals, try using a map. It's been a game-changer for me in this project.
The map has helped clean up logic, make the code easier to reason about, and has giving me a single source of truth to build from.
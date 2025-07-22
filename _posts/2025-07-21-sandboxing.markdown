---
layout: post
title: "Sandboxing"
date: 2025-07-21 16:40:00 -0400
categories: apprenticeship update
---

Today I worked on adding a Resume Last Game feature to my Tac-Tic-Toe project.
The idea was to read the last line of game-history.edn, check if the game was
unfinished, and then rebuild the state to drop back into take-turns.

To test this out, I sandboxed a solution that works! Here's a key part of that
early draft:

```clojure

(defn build-game-state []
      (let [last-state (records/read-last-record)
            unfinished? (and last-state
                             (not (board/game-over? (:board last-state)
                                                    (switch-player (:current-token last-state))
                                                    (:board-size last-state))))]
           (if unfinished?
             (let [state {:board-size    (:board-size last-state)
                          :X             (:X last-state)
                          :O             (:O last-state)
                          :board         (:board last-state)
                          :current-token (:current-token last-state)
                          :depth         (:depth last-state)
                          :game-id       (:game-id last-state)}]
                  (if (= (prompt-continue-unfinished) "Y")
                    (do
                      (take-turns state)
                      (output/play-again?)
                      (play-again? build-game-state))
                    (start-new-game)))
             (do
               (start-new-game)
               (output/play-again?)
               (play-again? build-game-state)))))

```

Now that I’ve confirmed this works I’m commenting it out to TDD my way back to
it. I’m planning to test each helper involved in build-game-state, then
refactor and extract responsibilities until it’s as clean as I can make it. The
game has come a long way in just a couple of months!
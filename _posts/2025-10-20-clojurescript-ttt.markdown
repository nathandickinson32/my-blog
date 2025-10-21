---
layout: post
title: "ClojureScript TTT"
date: 2025-10-20 16:18:00 -0400
categories: apprenticeship update
---

Today I focused on getting my ClojureScript Tic-Tac-Toe game to render a 3x3
board and respond to player moves. This was the first step toward getting the
game playable in the browser using Reagent.

I set up an app-state atom that holds all the game information: the board, which
player’s turn it is, and other state data. Having this wrapped in a Reagent atom
makes the UI automatically update whenever the state changes.

```clojure

(defonce app-state
         (r/atom {:board         (empty-board :3x3)
                  :board-size    :3x3
                  :current-token :X
                  :X             :human
                  :O             :human
                  :turn-count    0}))

```

To handle gameplay, I added logic to check for valid moves and update the board
accordingly. Each square on the board is represented by a button component, and
clicking it triggers a move if the space is available.

```clojure

(defn handle-move [row col]
      (let [state @app-state
            move [row col]]
           (when (valid-move? state move)
                 (let [new-state (gamec/->new-state state move)
                       new-board (:board new-state)
                       size (:board-size new-state)
                       winner (cond
                                (board/win? new-board :X size) :X
                                (board/win? new-board :O size) :O)
                       draw (board/full-board? new-board size)]
                      (swap! app-state merge new-state {:winner winner :draw draw})))))

```

Each square button uses that logic in its on-click handler:

```clojure

(defn board-grid []
      (let [size (count (:board @app-state))]
           [:div.board {:data-size size}
            (for [row (range size)
                  col (range size)]
                 ^{:key (str row "-" col)}
                 [button-square row col])]))

```

Once everything was wired up, I could render the full grid using board-grid,
looping through each row and column and assigning a button:

```clojure

(defn board-grid []
      (let [size (count (:board @app-state))]
           [:div.board {:data-size size}
            (for [row (range size)
                  col (range size)]
                 ^{:key (str row "-" col)}
                 [button-square row col])]))

```

Everything’s now rendering smoothly, and I can click around the board to play
moves turn by turn. Next, I’ll be working on adding player type selections and
allowing the game flow logic to handle different types of players like AIs.
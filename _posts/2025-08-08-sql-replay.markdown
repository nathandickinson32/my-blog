---
layout: post
title: "SQL Replay"
date: 2025-08-08 15:15:00 -0400
categories: apprenticeship update
---

Today I implemented a replay feature for my Tic Tac Toe game, pulling the moves
straight from my Postgres database. The function isn’t cleaned up yet, but the
main teaching point is this:

- How to take a list of moves and reconstruct every board state from start to
  finish.

```clojure

(defn replay-sql-record [game-data move-data game-id]
      (let [game (first game-data)
            board-size (keyword (:games/board_size game))
            starting-board (board/determine-starting-board board-size)
            board-states (reduce
                           (fn [{:keys [boards current-board]} move]
                               (let [new-board (board/make-move
                                                 current-board
                                                 (board/->grid-coordinates (:moves/move move) board-size)
                                                 (keyword (:moves/token move)))]
                                    {:boards        (conj boards {:board-size board-size :board new-board})
                                     :current-board new-board}))
                           {:boards [] :current-board starting-board}
                           move-data)
            boards (:boards board-states)
            last-board-state (last boards)
            last-state {:X          (:games/player_x game)
                        :O          (:games/player_o game)
                        :board-size (:games/board_size game)
                        :board      (:board last-board-state)}
            outcome (->replay-outcome (:board last-board-state) board-size)]
           (output/replay-data game-id outcome last-state)
           (print-moves boards)))

```

When we store a game in Postgres, we don’t save the entire board for each move,
that would be redundant. Instead, we store:

- game_id => Which game the move belongs to
- moves/move => The position played
- moves/token => Who played it (:X or :O)

Loop through each move in order converting the stored move position (e.g., "5")
into grid coordinates:

```clojure

(board/->grid-coordinates (:moves/move move) board-size)

```

- Apply the move to the current board to produce a new board
- Keep track of both the new board and the current one for the next loop

This gives a full history of board states that you can print, analyze, or feed
into a replay display.

Next step is to clean this function up into smaller more focused functions.
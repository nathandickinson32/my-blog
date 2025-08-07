---
layout: post
title: "SQL Redundancy"
date: 2025-08-05 15:55:00 -0400
categories: apprenticeship update
---

Today I spent time cleaning up my SQL database design for saving game state.

Originally, I had everything lumped into one table and each save included
the game_id, player types, current token, and the entire board state. Every
move meant saving a complete history of the game. This is redundant, bloated,
and hard to query efficiently.

So I refactored. Now the structure separates what stays constant from what
changes:

```clojure

(def create-tables-sql
  "CREATE TABLE IF NOT EXISTS games (
     game_id VARCHAR NOT NULL,
     finished BOOLEAN NOT NULL,
     player_x TEXT NOT NULL,
     player_o TEXT NOT NULL,
     board_size TEXT NOT NULL
   );
   CREATE TABLE IF NOT EXISTS moves (
     game_id VARCHAR NOT NULL,
     token VARCHAR NOT NULL,
     move TEXT NOT NULL
   )")

```

This not only simplifies the data model but makes it easier to reconstruct the
board at any point in time, replay a game, or analyze move history.

When a game is first created, I add an entry to the games table:

```clojure

(def initial-save-game-sql
  "INSERT INTO games (game_id, finished, player_x, player_o, board_size)
                        VALUES (?, ?, ?, ?, ?)")

```

Each new move goes into the moves table:

```clojure

(def save-move-sql
  "INSERT INTO moves (game_id, token, move)
                        VALUES (?, ?, ?)")

```

When the game is over, I flag it as finished in the games table:

```clojure

(def finished-game-sql
  "UPDATE games SET finished = true WHERE game_id = ?")

```

This keeps each piece of data in its rightful home. It also separates game
state from game events, which opens the door to things like:

- replay functionality
- analytics on player behavior
- better debugging tools

I think today will be one of those refactor days that makes future work easier.
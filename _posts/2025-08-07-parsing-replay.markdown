---
layout: post
title: "Parsing Replay"
date: 2025-08-07 16:45:00 -0400
categories: apprenticeship update
---

Today’s focus was taking the command-line arguments passed into my Tic Tac Toe
program and turning them into something my code can actually work with:

- Which database to use (:edn-file or :postgres)
- Whether the user wants to replay a previous game
- If there’s a valid game ID

Here’s the current function:

```clojure

(defn setup-game [args]
      (let [database (if (some #(= "--edn" %) args) :edn-file :postgres)
            replay? (some #(= "--replay" %) args)
            game-id (first (filter #(not (str/starts-with? % "--")) args))]
           (when-not (records/replay-game replay? game-id)
                     (output/greeting)
                     (game/start-game args))))

```

If the user runs:

```clojure

lein run --edn

```

the database will be :edn-file.
Otherwise, it defaults to :postgres.
If the user includes --replay, we know they’re asking to see a past game then
I grab the first argument that isn’t an option flag (--something). That’s
assumed to be the game ID.

This only works for --edn database games right now so next I'll be adding
function to replay games from the postgres database.
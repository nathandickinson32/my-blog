---
layout: post
title: "Mock"
date: 2025-07-08 16:32:00 -0400
categories: apprenticeship update
---

Today I added a feature to keep records of game history to an .edn file in my
Tic Tac Toe project. The goal was to have a record of the game after every
move. To get started I played around in the REPL with two Clojure functions
that were new to me: spit and slurp.

- spit is used to write to a file. You can overwrite or append, depending on
  what you need.
- slurp reads the contents of a file into a string, which is great for checking
  what you’ve saved.

Once I felt comfortable with those I focused on recording only the relevant
pieces of state. There’s no need to record everything, just the important parts
like players, board and token.

Here’s how I did it:

```clojure

(defn ->state-to-record [state]
      (select-keys state [:X :O :board :current-token]))

```

This grabs the keys I care about. Then I format it into a string for the file:

```clojure

(defn format-record [state]
      (str (->state-to-record state) "\n"))


```

Then I save the move:

```clojure

(defn record-move [state]
      (spit "game-history.edn" (format-record state) :append true))

```

The :append true is key here. Without it, you’d overwrite the file every time.
With it, each new move just adds a new line.

Now I’ve got a simple way to store and track game progress, which opens the
door to things like saving a game.

Another good reminder to explore first, build second. Playing around in the
REPL really helped me get a feel for the tools before diving into the feature.
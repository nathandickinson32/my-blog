---
layout: post
title: "Draw State"
date: 2025-08-19 16:10:00 -0400
categories: apprenticeship update
---

Today I refactored my Tic Tac Toe GUI so that drawing the state of the game is
handled with a multimethod. This makes it much easier to separate
responsibilities and even move rendering logic into different namespaces later.

Here’s what it looks like now:

```clojure

(defmulti -draw-state :page)

(defmethod -draw-state :choose-first-player []
           (choose-first-player-page))

(defmethod -draw-state :choose-player-X []
           (choose-player-X-page))

(defmethod -draw-state :choose-player-O []
           (choose-player-O-page))

(defmethod -draw-state :play-game [state]
           (play-game-page state))

```

Previously, I had a cond block that checked which part of the game setup or
play the user was in. It worked, but as the number of pages grew, the function
became harder to maintain.

By switching to a multimethod:

- Each page rendering function lives in its own defmethod.
- Adding a new page is just a matter of defining another method.
- I can group related pages into their own namespaces.

Now the GUI rendering logic feels like it can scale with the rest of the game.
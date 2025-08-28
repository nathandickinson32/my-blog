---
layout: post
title: "Multi-Methods"
date: 2025-08-28 16:40:00 -0400
categories: apprenticeship update
---

Today I finished my Tic Tac Toe GUI and refactored my mouse-clicking logic into
a multimethod. I’ve written a multimethod once before with a lot of help, but
this time I wanted to walk through the process more independently and make sure
I understand it.

I created a namespace (mouse-clicks) and declared the multimethod. The dispatch
function looks at the :page in the current state to decide which implementation
to call.

```clojure

(ns tic-tac-toe.gui.mouse-clicks)

(defmulti on-mouse-click (fn [state _click-position] (:page state)))

```

This means: whenever there is a click, call the on-mouse-click method that
corresponds to the current page.

For the Choose First Player page, I set up its own namespace. This namespace
defines the buttons for Player X and Player O, and provides the drawing
function for the page.

Then I extend the multimethod with a defmethod.

```clojure

(defmethod on-mouse-click :choose-first-player [state click-position]
           (cond
             (x-clicked? click-position)
             (assoc state :current-token :X :page :choose-board-size)

             (o-clicked? click-position)
             (assoc state :current-token :O :page :choose-board-size)

             :else state))

```

This tells Clojure: if the state’s page is :choose-first-player, handle clicks
here.

To make this work, I required the mouse-clicks namespace in both:

- the main namespace, so the program can route mouse events correctly.
- the choose-first-player-page namespace, so it can define its specialized behavior.

Multimethods give a clean way to separate logic for each GUI page. Instead of
stacking giant cond blocks for every page in one file, I can define each page’s
click behavior in its own namespace. This makes the code easier to extend when
I add more pages.
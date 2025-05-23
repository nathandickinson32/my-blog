---
layout: post
title:  "Getting Ahead Of Mistakes"
date:   2025-05-22 16:40:00 -0400
categories: apprenticeship update
---

Today I got started on my human vs. human
Tic Tac Toe project. Going into it, I
thought my previous work on a basic version
of the game and my experience with Euler 11
had laid a solid foundation. I expected to
reuse a lot and just layer on a few
enhancements. But once I got into it, I
realized I underestimated the scope, 
especially when it comes to interacting
with the console in Clojure.

This is my first time building a project
that runs directly through the command
line, and I haven’t written code that
expects or responds to input/output in
that way. I also haven’t worked with
test-driven development (TDD) or
applied clean code principles in a full
project yet. These are things I should
have considered in my original estimate.

That said, I plan to put in extra time
over the weekend, and I’ll be getting
ahead of this by being honest with my
mentor about where I stand. This is
still very much a learning experience,
and I’m doing my best to grow through it.

In terms of actual progress, I spent a
lot of time today exploring two Clojure
tools: mapv and doseq.

mapv is just like map, but it returns a
vector instead of a lazy sequence. It’s
great when you want the full structure
right away, like when creating a 2D board.

doseq is used for side effects, especially
when you want to print something. It’s
great for looping through sequences when
you’re not returning a value, but rather
doing something.

Here’s my current implementation of making
and printing the board:

```clojure
(def empty \space)

(defn make-board [size]
  (mapv (fn [_]
          (vec (repeat size empty)))
        (range size)))

(defn print-board [board]
  (let [divider (apply str (repeat (+ (* 4 (count board)) 1) "-"))]
    (println divider)
    (doseq [row board]
      (print "|")
      (doseq [cell row]
        (print (str " " cell " |")))
      (println)
      (println divider))))

(def board (make-board 3))

```
It first builds a divider line based
on the board size to separate the rows
visually.

Then, using doseq, it loops over each
row in the board.

For each row, it starts the line with 
"|" and loops through the cells.

Each cell gets printed with spacing
and a pipe: " X |" or " |" if it’s empty.

After printing a row, it prints the divider
again so the rows are clearly separated.

This approach gives a clean and readable
grid in the console, perfect for visualizing
moves in a text-based game. Next up:
learning how to test console input/output
and getting the first player moves wired in.
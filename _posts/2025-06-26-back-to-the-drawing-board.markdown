---
layout: post
title: "Back To The Drawing Board"
date: 2025-06-26 16:30:00 -0400
categories: apprenticeship update
---

Today I got started on the 4x4 feature for my Tic Tac Toe project. My thought
was since everything started with a 3x3 board, I should be able to follow the
path I laid out before. So I started back at the beginning and retraced my
steps through the project.

The first part was getting the 4x4 board to display correctly. I wrote tests to
check that the starting board looked right and printed properly and then this
code to get the correct result:

```clojure

(def starting-board-4x4
  [["1" "2" "3" "4"]
   ["5" "6" "7" "8"]
   ["9" "10" "11" "12"]
   ["13" "14" "15" "16"]])

(def board-format-4x4
  (str "-----------------------------\n"
       "| %3s  | %3s  | %3s  | %3s  |\n"
       "-----------------------------\n"
       "| %3s  | %3s  | %3s  | %3s  |\n"
       "-----------------------------\n"
       "| %3s  | %3s  | %3s  | %3s  |\n"
       "-----------------------------\n"
       "| %3s  | %3s  | %3s  | %3s  |\n"
       "-----------------------------\n"))

```

I used %3s to make sure both single-digit and double-digit numbers line up
nicely.

I also made sure colorizing still worked by updating the function to use the
padded tokens correctly:

```clojure

(defn colorize-4x4-token [token padded-token]
      (cond
        (= token :X) (str green padded-token reset)
        (= token :O) (str red padded-token reset)
        :else padded-token))

```

After that I updated all my output messages to work with different board size.
Things like prompts and messages about valid input ranges.

Next I’ll be looking into how the 4x4 board changes the win conditions and the
game state. Should be fun! Lots of refactors ahead!
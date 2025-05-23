---
layout: post
title:  "Start Smaller Than That"
date:   2025-05-23 17:25:00 -0400
categories: apprenticeship update
---

Today I made some solid progress on my
Tic Tac Toe project after pairing with
my mentor. I realized I was making things
a lot more complicated than they needed
to be. Trying to bring over too much
logic from Euler problems and my earlier
Tic Tac Toe version was slowing me down
more than helping.

We decided to simplify things and start
with a hardcoded board. That shift really
helped me focus on getting something
working without worrying about everything
at once. I also got to see how he
approaches writing tests early and using
simple tools to get fast feedback.

I learned a few new things today:

- format and %s for formatting strings cleanly.
- with-out-str and with-in-str for capturing or
  faking console input/output, super helpful for
  testing a command-line app.

Here's what we’re using to print the board for now:

```clojure
(def board-format
  (str "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"))

(defn print-board [board]
  (print (apply format board-format (flatten board))))

```
This lets me keep the board display readable, and
it’s something I can test or tweak easily as the
game grows. Feeling better about the direction
now, and looking forward to getting player moves
working next.
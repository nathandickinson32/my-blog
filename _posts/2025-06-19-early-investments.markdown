---
layout: post
title: "Early Investments"
date: 2025-06-19 16:45:00 -0400
categories: apprenticeship update
---

Today I built a medium AI player for my Tic Tac Toe game. The goal was to
make something tougher than the easy random move AI but not as difficult
as the unbeatable expert AI. I decided to reuse some code to make this work.
I use expert logic for the first few turns to block and try to win, then let
it finish the game with random moves. Just enough challenge to keep things
interesting without making it impossible.

Here’s my small medium-ai namespace:

```clojure

(defn make-move [board current-token depth]
      (if (< depth 6)
        (choose-best-move board current-token depth)
        (choose-random-move board)))

(defmethod ->player-move :medium-ai [{:keys [board current-token depth]}]
           (make-move board current-token depth))

```

The part I really enjoyed about this feature was how fast I was able to build
it. I had already laid the groundwork in earlier features. Writing that first 
AI took a while. I had to test everything from the ground up. Today I was able 
to reuse tested functions and trust that they work. All that earlier
investment paid off.

Writing clean, testable code early made today feel nice by plugging in a few
new pieces and testing just those. I didn’t have to worry about everything
falling apart.

Proving how early investments make everything else smoother.
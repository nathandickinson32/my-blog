---
layout: post
title: "Patience For Quality"
date: 2025-07-11 15:32:00 -0400
categories: apprenticeship update
---

Today I kept practicing my Langton’s Ant kata, trying to get it under 10
minutes for our lunch and learn presentation. I’m really happy with the way
I approach it. I write solid tests and have a clean flow, but it’s just not
fast enough for our meeting. I gave it everything I had and was still above the
time limit.

I called my mentor right before the lunch and learn to talk through it. I
explained that I liked the presentation, it’s just a bit too long. He looked
through the code and told me he liked it too, but we’ll just need to trim it
down a bit more. He even suggested we push the presentation to next Friday
if it means improving the quality and that meant a lot to me. The bar is
quality, not speed, and that’s a value I've always liked.

After the lunch and learn, I jumped back into my Tic Tac Toe game and wrapped
up my feature to record game moves and distinguish between different games in
the history file.

If a game ends early, there’s no unique game ID written to the file, so the
moves all blur together. To fix that, I added a random UUID to the game state
at the start of take-turns:

```clojure

(defn add-game-id-at-start [state]
      (if (nil? (:game-id state))
        (assoc state :game-id (str (random-uuid)))
        state))


```

Now every move printed includes a game ID, even if it ends on turn one. A clean
little fix.
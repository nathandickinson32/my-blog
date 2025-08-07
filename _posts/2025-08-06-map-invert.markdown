---
layout: post
title: "Map Invert"
date: 2025-08-06 16:15:00 -0400
categories: apprenticeship update
---

Today I continued integrating SQL into my Tic Tac Toe game and along the way, I
found a function that made things quite easy: set/map-invert.

I'm storing game moves in a moves table, and I needed a way to convert grid
coordinates like [0 2] back into readable strings like "3". I already had a map
going from strings to positions like this:

```clojure

(def str-positions-3x3
  {"1" [0 0] "2" [0 1] "3" [0 2]
   "4" [1 0] "5" [1 1] "6" [1 2]
   "7" [2 0] "8" [2 1] "9" [2 2]})

```

I used set/map-invert to reverse the keys and values, so I could map [1 2] to
"6" like this:

```clojure

(defn ->str-move [grid-move board-size]
      (let [positions (set/map-invert (human/determine-positions board-size))]
           (get positions grid-move)))

```

Here's what the inverted map looks like:

```clojure

{[0 0] "1", [0 1] "2", [0 2] "3",
 [1 0] "4", [1 1] "5", [1 2] "6",
 [2 0] "7", [2 1] "8", [2 2] "9"}

```

Now I can store moves as "5" instead of [1 1], making the DB easier to read and
interact with.

It’s always a good day when a macro like set/map-invert saves you from writing
clunky reverse logic.
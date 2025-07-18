---
layout: post
title: "Engage The Core"
date: 2025-07-15 15:52:00 -0400
categories: apprenticeship update
---

Today I paired with my mentor to find ways to shorten the time on my
Langton's Ant kata presentation. With my current setup, where I tested
everything from the step interface, my presentation was finishing at about
25 minutes... way too long!

He suggested extracting common functionality into a core namespace so both my
tests and the main logic could reuse it. This cut down the time drastically.
Now I can easily do things like create an ant, set its orientation, assign a
color, and check the color at any position. It's all with well-tested and ready
to use.

Here’s an example from the new core namespace:

```clojure

(defn color-at
      ([ant] (if (black-square? ant)
               :black
               :white))
      ([ant position]
       (if (contains? (:black-squares ant) position)
         :black
         :white)))

```

I wrapped up the day running through the kata using this refactored setup.
Feels great to practice with cleaner, tested code and shave down my time in
the process.
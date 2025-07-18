---
layout: post
title: "More Practice And Clean-Up"
date: 2025-07-17 16:45:00 -0400
categories: apprenticeship update
---

After reviewing notes from this week’s IPM, I did some cleanup work in my
Tic Tac Toe game. I had a few leftover characters floating around in tests
from before I fully refactored the board formatting to use strings. That’s all
cleaned up now.

I also realized I hadn’t properly tested my 3D win logic. I commented out the
implementation, wrote failing tests, then uncommented and refined until they
passed. TDD really is a discipline, but it pays off.

To finish off the day, I gave another run through of my Langton’s Ant kata for
my mentors at IPM, showing the refactor I worked on last week. They were happy
with the improvements and just recommended naming a couple of values to
highlight the cleanup a bit more. Here is what all my practice has led to:

```clojure

(defn step [ant]
      (let [white? (= :white (core/color-at ant))
            color (if white? :black :white)
            orientation (:orientation ant)
            next-orientation (->next-orientation ant orientation)
            position (move ant orientation)]
           (-> (core/set-color ant color)
               (core/set-orientation next-orientation)
               (core/set-position position))))

```

Keeping the momentum going one day at a time.
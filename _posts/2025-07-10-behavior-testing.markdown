---
layout: post
title: "Behavior Testing"
date: 2025-07-10 16:18:00 -0400
categories: apprenticeship update
---

Today I spent time refactoring my Langton’s Ant kata to test behavior rather
than testing for pieces I knew I’d need.

Before, I was writing tests like “does this direction map return the right
value” or “does this movement vector work,” but I was getting ahead of myself.
Now, I start with what the ant should do, and build out from there.

Here's what that looks like:

```clojure

(context "making steps when facing north"

         (it "turns east on white"
             (let [ant (create-ant)
                   ant (set-color ant (:position ant) :white)
                   next-ant (step ant)]
                  (should= :black (color-at next-ant (:position ant)))
                  (should= :east (:orientation next-ant))
                  (should= [1 0] (:position next-ant))))

         (it "turns west on black"
             (let [ant (create-ant)
                   ant (set-color ant (:position ant) :black)
                   next-ant (step ant)]
                  (should= :white (color-at next-ant (:position ant)))
                  (should= :west (:orientation next-ant))
                  (should= [-1 0] (:position next-ant)))))


```

I’m going through each cardinal direction, and then I’ll extend this for
movement outside the origin. That will lead to a final step function looking
like this:

```clojure

(defn step [{:keys [position] :as ant}]
      (-> (set-color ant position (color-complement ant position))
          (assoc :orientation (->next-orientation ant)
                 :position (->next-position ant))))

```

The idea is to build everything you need from inside the step function. Then
only when my tests pass should I refactor and extract functions. So
->next-position, ->next-orientation, color-complement all came after the
behavior was tested.

It definitely helped cut down on time. I went from writing tests I already
knew the answers to, to writing ones that actually drive my implementation.
Still not quite down to the 10-minute range for a presentation, but this
refactor was a big step in the right direction.

Lesson of the day: let the tests lead. The abstractions will follow.
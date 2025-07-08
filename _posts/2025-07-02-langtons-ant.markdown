---
layout: post
title: "Langton's Ant"
date: 2025-07-02 15:45:00 -0400
categories: apprenticeship update
---

Today I started building the ant to plug into my Langton’s Ant GUI. This has
been a nice TDD kata to work on. Each rule the ant follows can be broken down
into nice, small tests. I didn’t get everything presentation ready before IPM,
but I did get the kata to a place I liked it. Now I can practice it, understand
it on a deeper level and try to work in some clean refactors.

Here's how I started:

```clojure

(it "rotates right from each direction"
    (should= :right (sut/rotate :up :right)))

```

Which led me to making a map as I tested more and more moves. 

```clojure

(def rotation-map
  {[:up :right]    :right
   [:right :right] :down
   [:down :right]  :left
   [:left :right]  :up
   [:up :left]     :left
   [:left :left]   :down
   [:down :left]   :right
   [:right :left]  :up})

```

I’ll plug this into the ant logic so the direction and movement can respond to
the grid's color.

I also learned a good lesson on communication today. I knew earlier in the week
that I had underestimated the 4x4 board story, but I didn’t say anything until
the morning of IPM. In hindsight, I should’ve just made that concern known as
soon as it came up. It’s better to notify early than to try and play catch up.

IPM went well today! One of my mentors was back from vacation, so we had a lot
to go over. We ended up spending about three hours digging into code, talking
through my choices, and going through my progress. Got some great feedback and
had some really valuable discussions that will lead into some clean up work for tomorrow.

Another good week here at Clean Coders!
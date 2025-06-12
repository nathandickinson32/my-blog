---
layout: post
title: "Timely Refactors"
date: 2025-06-11 15:25:00 -0400
categories: apprenticeship update
---

Today I kept working on the minimax feature for my Tic Tac Toe game. I
ended up needing to refactor more than I expected, and it was a good reminder
of how quickly something small can turn into something big when you’re not
careful about separation of concerns.

The problem started when I realized I was breaking the Single Responsibility
Principle. I had too much logic jammed into one place for figuring out how to
get a player’s move. So I refactored it using Clojure’s defmulti and defmethod.
This let me cleanly separate behavior by player type. Now I just define
what to do for each kind.

This made the main turn-taking logic way easier to reason about. It also sets
me up well to add smarter AI players later without touching the core game loop.

Yesterday was also IPM, which made all of this even more of a learning moment.
I thought I had estimated my time well, but once the refactors started, I
drifted into the pessimistic side. I didn’t finish the story, but I was 
honest about it and asked for help when I needed it.

What I’m proud of is that I stuck to the plan. I didn’t try to “catch up” by
working nights or weekends. I kept a steady pace and still made real progress.
That’s the whole point of estimating honestly: to deliver consistently, not
just rush through things.

One of the biggest takeaways from IPM was about how to handle work that
doesn’t get done. I learned not to re-estimate points for a story just
because it rolls into the next week. If I already committed to delivering
that story, those points are already spoken for. I just need to finish it.
Any re-estimation should only be for additional work that’s truly new.

So yeah, I didn’t hit my mark again this week, but I feel like I handled it
better. I’ll be taking notes on where my time goes this iteration, so I
can tighten things up and keep growing in how I approach my work.

Always learning.
---
layout: post
title: "Langton's Ant"
date: 2025-07-01 16:55:00 -0400
categories: apprenticeship update
---

Today I started building a GUI for the Langton’s Ant kata using Quil. I had
never worked with graphics before, so this was all new territory for me. It was
definitely a challenge.

Langton’s Ant is a simple little system:

- The “ant” starts on a white square.
- If it’s on white, it rotates 90 degrees clockwise, flips the square to black,
- and moves forward.
- If it’s on black, it rotates 90 degrees clockwise, flips the square to white,
- and moves forward.

The cool part is that over time this simple set of rules creates messy pattern
that eventually goes into a repeating highway-like pattern. It’s one of those
things that’s cool to see after all the work I put into it.

Since I’ve mostly been working in the terminal, getting into Quil meant
thinking about some new concepts like frame-rate, screen size, pixel scaling,
and how to actually draw shapes based on grid data.

Here’s a function from my GUI:

```clojure

(defn ->pixel-location [grid-coordinate]
      (+ grid-center (* grid-coordinate cell-size)))

```

It helped me take a coordinate like [0 0] and turn it into the right pixel
to actually draw something on the screen. I made the ant green and put my it
in the center of the screen and let it move from there. I also added a gray
grid in the background using q/line for the layout.

Getting started with Quil wasn’t the easiest but once I got the grid drawing
and cell scaling figured out, things were looking up!
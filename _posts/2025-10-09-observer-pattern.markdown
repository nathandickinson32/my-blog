---
layout: post
title: "Observer Pattern"
date: 2025-10-09 16:18:00 -0400
categories: apprenticeship update
---

Today I spent some time digging into the Observer pattern. I wanted to
understand how it actually works in practice.

The idea is pretty simple once you see it in action. You’ve got one main
object, the subject, that keeps track of a bunch of observers. Whenever
something changes in the subject, all the observers get notified automatically.

It reminded me of how apps handle real-time updates. For example, when you
toggle dark mode or when new data shows up in a dashboard, you don’t have to
manually refresh every piece of the UI. The observers just react to the change.

The subject doesn’t need to know the details of its observers, it just sends
out updates.

After working through a few examples, the pattern made a lot more sense. It’s
one of those concepts that shows up everywhere once you recognize it, from event
listeners in JavaScript to state management in larger systems.
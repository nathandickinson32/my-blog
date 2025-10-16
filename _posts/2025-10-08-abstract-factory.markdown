---
layout: post
title: "Abstract Factory"
date: 2025-10-08 16:18:00 -0400
categories: apprenticeship update
---

Today I worked on a presentation on the Abstract Factory pattern. Most of my
research came from the Gang of Four’s Design Patterns book. It’s pretty dense,
but the visuals in the book made it pretty clear.

The intent of the Abstract Factory Pattern is to provide an interface for
creating families of related or dependent objects without specifying their
concrete classes.

I used light and dark mode as my example. Each mode has its own set of
components like buttons, backgrounds, text fields, and so on. The Light Mode
Factory would create all the light-themed pieces, while the Dark Mode Factory
handles the dark ones.

The neat part is that the rest of the app doesn’t need to know which factory
it’s using. It just asks for a button or a background, and the factory gives
back the right version for that theme.

After walking through that example, the pattern made a lot more sense. It’s all
about keeping your code flexible and consistent when you’re working with
different variations of related objects.
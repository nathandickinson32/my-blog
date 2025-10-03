---
layout: post
title: "Abstract Server"
date: 2025-09-26 16:18:00 -0400
categories: apprenticeship update
---

Today I made a slideshow presentation on the Abstract Server Pattern, a
core part of the architecture I’ve been building.

The presentation walks through:

- The structure of the pattern — separating the server framework from
  application-specific handlers
- How the server provides the skeleton, while handlers provide the behavior
- Applying SOLID principles, especially Dependency Inversion and Open/Closed,
  to make the server framework independent of concrete handlers
- Why this pattern makes extending and testing new features much easier

Putting the slides together helped me be able to understand and explain the 
pattern clearly, from the generic idea down to a concrete example.
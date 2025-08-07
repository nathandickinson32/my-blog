---
layout: post
title: "Component Design"
date: 2025-08-04 17:25:00 -0400
categories: apprenticeship update
---

Today I prepared a presentation on component design. If you've ever wondered how
to group classes into components, or why certain designs feel brittle or hard to
maintain, this is probably why.

This triangle diagram below shows the relationship between the cohesion
principals:

- Component Reuse Principle (CRP) — Classes that are reused together should be
- packaged together.
- Common Closure Principle (CCP) — Classes that change for the same reason
- should be packaged together.
- Reuse/Release Equivalence Principle (REP) — Components reused together should
- be released together.

![A useful diagram](/assets/images/cohesion-triangle.png)

# The Tradeoffs

At the beginning of a project, we lean heavily toward CCP and CRP.
We're still learning what will change, so we want to group things that might
evolve together (CCP).
We're trying to avoid overengineering or premature abstraction, so reuse is a
goal, but we accept that many components are not yet generalized (CRP).
This leads to components that are flexible, co-located, and cohesive — even if
not yet reusable.
As the project matures, and parts of the system become stable and
well-understood, we shift toward the REP corner:

Now we start releasing packages for reuse internally or externally.
Stability and versioning become important.
At this point, only the most stable components should be extracted and reused —
and they should be released in such a way that consumers can trust them.

The trick is to move along the triangle intentionally — start with flexibility
and adaptability (CCP + CRP), and graduate toward reuse and release (REP) as
stability sets in.
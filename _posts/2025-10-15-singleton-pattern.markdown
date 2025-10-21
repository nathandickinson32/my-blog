---
layout: post
title: "Singleton"
date: 2025-10-15 16:18:00 -0400
categories: apprenticeship update
---

Today I spent some time learning about the Singleton pattern. I watched a video 
from Uncle Bob where he broke down what the pattern is really about, and what it
isn’t.

The Singleton pattern ensures that only one instance of a class exists
throughout the program, and that there’s a global point of access to it. It’s
often used for things like configuration objects, loggers, or shared resources.

What I liked about Uncle Bob’s explanation is how he pointed out that a 
Singleton isn’t just a “global variable in disguise.” When used correctly, it’s
about controlling how and when an instance is created, not just making
everything accessible everywhere.

He also emphasized that overusing Singletons can lead to tight coupling and 
hidden dependencies, something to be careful about, especially as projects grow.
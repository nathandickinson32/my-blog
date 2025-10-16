---
layout: post
title: "Proper Seperation"
date: 2025-10-10 16:18:00 -0400
categories: apprenticeship update
---

Today I spent some time cleaning up my Tic Tac Toe server project after getting
some feedback during IPM. Most of the feedback came down to keeping things more
organized and making responsibilities clearer between Java and Clojure.

The main change I made was moving all of my request parsing logic into the
server layer. Instead of spreading parsing across different parts of the code,
I now handle everything in one place before passing it along.

I also grouped all the Java interop into a single namespace. This made it much
easier to see where Java classes are being used and keeps the rest of my Clojure
code focused purely on game logic and request handling.

Once a request comes in, I convert it into a Clojure map, things like :method,
:path, :params, and so on. That map gets passed into the rest of the system,
which means everything beyond that point can just work with regular Clojure
data.

It’s also a nice step toward separating concerns: the Java layer takes care of
HTTP details, and the Clojure side focuses on what the app actually does.
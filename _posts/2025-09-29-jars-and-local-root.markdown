---
layout: post
title: "JARS and Local Root"
date: 2025-09-29 16:18:00 -0400
categories: apprenticeship update
---

Today I began a new project with the goal of turning both my server code and
Tic Tac Toe game code into reusable libraries. The idea is to build new HTTP
handlers that make the game playable in the browser, powered entirely by my
own server framework.

The Tic Tac Toe logic was already in solid shape, but the server code needed
more refinement before it could be cleanly reused.

- I restructured the code so that all request parsing happens in the Request
  class, keeping handlers focused only on behavior.

- I separated the server code into its own clear directory structure.
- I went through the process of building a JAR to treat the server like a
  proper library:

````shell

rm -rf out server.jar
mkdir out
javac -d out src/server/*.java src/handlers/*.java
jar cf server.jar -C out .
````

From there, I was able to import the JAR locally in my deps.edn:

```clojure

:deps {server/server {:local/root "../../server-challenge/server.jar"}
       ttt/ttt       {:local/root "../../tic-tac-toe"}}

```

This setup is important because pointing to local roots makes iterating and
testing changes much easier during development.
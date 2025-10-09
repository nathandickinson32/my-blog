---
layout: post
title: "Atom Sessions"
date: 2025-10-07 16:18:00 -0400
categories: apprenticeship update
---

Today I worked on making my Tic Tac Toe server support multiple sessions across
different browsers, kind of like what I did with my guessing game.

# Sessions Are Just a Way to Track Players

At first, I thought sessions would be complicated. But really, a session is just
a way to remember who’s playing and what their game state is between requests.
Each browser can have its own session, each with its own board, turn, and player
info.

I used a global atom to store all sessions:

```clojure

(defonce sessions (atom {}))

```

It’s basically a map of session IDs to game states. Simple, flexible, and easy
to update.

# Creating and Finding Sessions

Each time a request comes in, I either grab the session ID from a cookie or
generate a new one:

```clojure

(defn find-or-create-session-id [^Request req]
      (or (parse-session-id req)
          (new-session-id)))

```

Then I look up the game associated with that session, or create a new game if
it doesn’t exist.

Because everything is just data, I can hand a game map into my existing Tic Tac
Toe logic, update it, and store it back in the atom. No need to change any of my
game functions. Everything stays isolated. Each browser has its own session,
and players can play independently without interfering with each other.
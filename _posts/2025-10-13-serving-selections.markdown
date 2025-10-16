---
layout: post
title: "Serving Selections"
date: 2025-10-13 16:18:00 -0400
categories: apprenticeship update
---

Today I worked on adding state selections to my Tic Tac Toe server game,
starting with the board size.

I wanted the game to let players choose between a 3x3 or 4x4 board before
starting. To handle that, I built a new handler that renders a simple selection
page using Hiccup for the HTML and Clojure for the logic.

When a player visits the page, they see a welcome message and two buttons, one
for each board size. Each button sends the selected size along with the request
so the game can store it in the session and use it when building the next
screen.

Here’s a quick look at the setup:

```clojure

(defn welcome-request-handler [request]
      (let [session-id (session/find-or-create-session-id request)]
           {:status  200
            :headers {"Set-Cookie" (str "sessionId=" session-id)}
            :body    (str (h/html @body))}))

```

This function makes sure every request has a valid session ID, sets it in a
cookie, and returns the HTML form.

It sets up the flow for players to make choices before the game starts. Next,
I’ll be expanding this to let users choose other options like player types or
who goes first.
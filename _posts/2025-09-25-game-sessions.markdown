---
layout: post
title: "Game Sessions"
date: 2025-09-25 16:18:00 -0400
categories: apprenticeship update
---

Today I worked on handling multiple guessing games across different browsers, 
while also preventing duplicate submissions on refresh.

Each browser session is tracked using a cookie-based sessionId. When a request 
comes in, the handler either retrieves the existing session or creates a new one
if it doesn’t exist:

```java

if (sessionId == null || sessionId.isEmpty()) {
    sessionId = UUID.randomUUID().toString();
    response.addHeader("Set-Cookie", "sessionId=" + sessionId);
}

```

Each session maps to its own GameState object, so multiple browsers can play
independently without interfering with each other.

To handle refresh behavior gracefully, POST requests are redirected with a 303
See Other after processing the guess. This ensures that reloading the page
performs a GET instead of resending the previous POST, avoiding duplicate
guesses.

```java

response.setStatusCode(303);
response.setStatusMessage("See Other");
response.addHeader("Location", "/guess");

```

A lastMessages map is used to remember the last response message per session.
When the browser refreshes, the GET request simply re-renders the page with the
existing message instead of making a new guess.

This story taught me two key things:
- Session management doesn’t need to be complicated to work well across browsers.
- Using POST/Redirect/GET is a clean way to avoid accidental form resubmissions.

Now, each player has their own game state, and refreshing doesn’t mess anything 
up.
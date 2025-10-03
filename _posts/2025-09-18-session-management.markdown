---
layout: post
title: "Session Management"
date: 2025-09-18 16:18:00 -0400
categories: apprenticeship update
---

Today I finished building a guessing game in my server. The interesting
challenge was keeping track of each player’s game in a stateless HTTP
environment.

I solved this by creating a sessionId for each user and storing their game state
in a Map<String, GameState>. When a request comes in, I check for a sessionId
cookie. If it’s missing, I generate a new one and send it back. This lets each
user play independently, even though HTTP itself doesn’t remember anything
between requests.

```java

private String handleSession(Request request, Response response) {
    String sessionId = getSessionId(request);

    if (sessionId == null || sessionId.isEmpty()) {
        sessionId = UUID.randomUUID().toString();
        response.addHeader("Set-Cookie", "sessionId=" + sessionId);
    }

    return sessionId;
}

```

With this in place, the rest of the game logic can safely assume the user has
their own state. It’s a simple game, but it unlocks building interactive web 
apps from scratch.
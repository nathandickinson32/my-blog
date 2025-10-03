---
layout: post
title: "Multithreading"
date: 2025-09-19 16:18:00 -0400
categories: apprenticeship update
---

Today I finished the /ping story for my server. The endpoint is simple: it
sleeps for a set number of seconds, then responds with the current time down
to milliseconds. The goal isn’t the sleep itself, but to test that the server
can handle multiple requests at the same time.

When I ping the server multiple times in quick succession, each request sleeps 
independently, and the responses show overlapping start and end times. This
confirms that my server is truly multithreaded.

```java

if (delaySeconds > 0) {
    try {
        Thread.sleep(delaySeconds * 1000L);
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
}

```

It’s a simple example, but it taught me a lot about designing servers that can
process requests concurrently. By observing the timestamps, I can see threads 
working in parallel rather than blocking each other, which is essential for
scalable web applications.
---
layout: post
title: "HTTP Response"
date: 2025-09-12 16:18:00 -0400
categories: apprenticeship update
---

# Anatomy of an HTTP Response

Just like requests, responses are plain text (with optional binary body).
They have 3 parts:

1. Status Line
   HTTP/1.1 200 OK
2. Headers
   Content-Type: text/html
   Content-Length: 106
   Server: NathanServer
3. Body

```html
<h1>Hello, World!</h1>

```

# My Java Response Builder

Here’s how I format and send a response:

```java
private void sendResponse(Response response, BufferedWriter out) throws IOException {
    StringBuilder outputBuilder = new StringBuilder();

    outputBuilder.append("HTTP/1.1 ")
            .append(response.getStatusCode()).append(" ")
            .append(response.getStatusMessage())
            .append("\r\n");

    for (Map.Entry<String, String> entry : response.getHeaders().entrySet()) {
        outputBuilder.append(entry.getKey())
                .append(": ")
                .append(entry.getValue())
                .append("\r\n");
    }

    outputBuilder.append("\r\n");

    outputBuilder.append(response.getBody());

    out.write(outputBuilder.toString());
    out.flush();
}

```

# Why This Matters

By structuring responses properly, the browser knows:

- Whether the request succeeded (200 OK) or failed (404 Not Found)
- How to interpret the body (Content-Type: text/html, image/png, etc.)
- How much data to expect (Content-Length)

Without this formatting, the browser won’t render anything correctly.

Here’s a real response my server produces when visiting /hello:

HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 106
Server: NathanServer

<h1>Hello, Welcome to Nathan's Server!</h1>
---
layout: post
title: "HTTP Server"
date: 2025-09-10 16:18:00 -0400
categories: apprenticeship update
---

Understanding how the web works at the lowest level makes you a better
developer. Every request your browser makes eventually boils down to a TCP
connection where text is sent back and forth.

# The Client-Server Model

When you type a URL in your browser:

1. The browser opens a TCP connection to the server’s IP and port (usually port 80 for HTTP).
2. It sends an HTTP request (just text):
   GET /hello HTTP/1.1
   Host: localhost
3. The server reads the request, figures out what to do, and sends back a response.
   That’s the foundation of the web.

# The Server Loop in Java

In my server, this looks like:

```java

ServerSocket serverSocket = new ServerSocket(port);

while (!serverSocket.isClosed()) {
Socket client = serverSocket.accept();
handleClient(client);
}

```

- ServerSocket listens for new connections.
- accept() blocks until a client connects.
- Then I hand that client socket off to handleClient.
- This is the heart of the server. Everything else (parsing requests, choosing routes, sending files) builds on top of this loop.
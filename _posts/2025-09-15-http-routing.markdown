---
layout: post
title: "HTTP Routing"
date: 2025-09-15 16:18:00 -0400
categories: apprenticeship update
---

# What is Routing?
Routing is the process of taking an HTTP method + path and deciding which
handler should generate the response.
For example:
- GET /hello → serve a hello page
- GET /listing → show a directory listing
- POST /form → process form submission

# My Routing System
I created a RoutePair class that represents the combination of method + path,
then mapped it to a RequestHandler:

```java

private HashMap<RoutePair, RequestHandler> handlers = new HashMap<>();

public void addHandlers() {
    handlers.put(new RoutePair("GET", "/hello"), new HelloHandler(root, "hello.html"));
    handlers.put(new RoutePair("GET", "/listing"), new ListingHandler(root));
    handlers.put(new RoutePair("GET", "/listing/img"), new ImageListingHandler(new File(root, "img")));
    handlers.put(new RoutePair("GET", "/form"), new FormHandler(root));
    handlers.put(new RoutePair("POST", "/form"), new FormHandler(root));
}

```

Each path is tied to a handler, an object responsible for building the Response.

When a request comes in, my server checks if a handler is registered:

```java

RoutePair key = new RoutePair(request.getMethod(), request.getPath().split("\\?")[0]);
RequestHandler handler = handlers.get(key);

if (handler == null) {
    handler = new NotFoundHandler(); // fallback
}
Response response = handler.handle(request);

```

This ensures:
- /hello goes to HelloHandler
- /form supports both GET and POST
- If no match → NotFoundHandler returns 404 Not Found

# Example: Hitting /hello
Request:
GET /hello HTTP/1.1
Response:
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 106

<h1>Hello, Welcome to Nathan's Server!</h1>

Routing gives structure to a server. Instead of dumping all logic into one
method, each route is modular, testable, and extensible. Adding a new route 
is as simple as registering a new handler.
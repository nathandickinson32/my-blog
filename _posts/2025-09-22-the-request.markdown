---
layout: post
title: "The Request"
date: 2025-09-22 16:18:00 -0400
categories: apprenticeship update
---

Today I finished centralizing all request parsing in my server. Instead of
making each handler figure out query parameters, form data, headers, or the
request body, the Request class now does all of that work upfront.

When a connection comes in, Request.requestParser() reads the raw input stream
and automatically:

- Splits the request line into method, path, and protocol
- Parses all headers into a map
- Extracts query parameters from the URL
- Reads and parses the request body for form-encoded data

```java

Request request = Request.requestParser(inputStream);
String guess = request.getParams().get("guess");

```

Handlers like /guess or /ping can now focus purely on business logic. They don’t
worry about decoding URL parameters, reading headers, or handling the raw body
bytes, it’s all done once in Request.

This makes the server cleaner, and each handler simpler and easier to reason
about. It also keeps parsing consistent across all endpoints, which is crucial
as the server grows.
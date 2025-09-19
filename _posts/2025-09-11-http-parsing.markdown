---
layout: post
title: "HTTP Parsing"
date: 2025-09-11 16:18:00 -0400
categories: apprenticeship update
---

Let’s look at the raw text of an HTTP request:

GET /hello HTTP/1.1
Host: localhost
User-Agent: Chrome/...
Accept: text/html

This is just plain text! To do anything useful, my server needs to parse this
into a structured Request object.

# Breaking Down the Request

1. Request Line → method, path, and protocol
   GET /hello HTTP/1.1
2. Headers → key/value pairs like Host, User-Agent, Content-Type
   Host: localhost
   Content-Type: text/html
3. Body (optional) → only present in POST, PUT, etc.

Here’s a simplified version of how I parse:

```java

BufferedReader reader = new BufferedReader(
    new InputStreamReader(client.getInputStream())
);

String requestLine = reader.readLine();
String[] parts = requestLine.split(" ");
String method = parts[0];
String path = parts[1];

Map<String, String> headers = new HashMap<>();
String line;
while (!(line = reader.readLine()).isEmpty()) {
    String[] header = line.split(": ");
    headers.put(header[0], header[1]);
}

StringBuilder body = new StringBuilder();
while (reader.ready()) {
    body.append((char) reader.read());
}

```

# Why This Matters

With a structured Request, the server can now:
- Check method (GET, POST, etc.)
- Route based on path (/hello, /listing, /form)
- Use headers to decide how to handle content
- Read body for form submissions or uploads
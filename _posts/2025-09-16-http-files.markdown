---
layout: post
title: "HTTP Files"
date: 2025-09-16 16:18:00 -0400
categories: apprenticeship update
---

# Serving Static Files

When the browser asks for /index.html or an image like /img/decepticon.png, the server needs to:
1. Check if the file exists in the root directory.
2. Guess the correct MIME type (HTML, JPEG, PNG, PDF, etc.).
3. Stream the file back in the response.

Here’s the key logic:

```java

if (handler == null) {
    File file = new File(root, path);
    if (file.exists() && file.isFile()) {
        handler = new FileHandler(root, path);
    }
}

```

If no handler was registered for the path, the server falls back to checking the
file system. If the file exists, FileHandler serves it; otherwise, 
NotFoundHandler kicks in with a 404.

Example:
GET /img/decepticon.png HTTP/1.1

Response:
HTTP/1.1 200 OK
Content-Type: image/png
Content-Length: 23456
(binary data…)
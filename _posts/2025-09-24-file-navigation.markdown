---
layout: post
title: "File Navigation"
date: 2025-09-24 16:18:00 -0400
categories: apprenticeship update
---

Today I finished the file navigation feature for my server. The goal was to make
it flexible: regardless of the server root, I should be able to navigate
directories and files, and any file with an unknown MIME type should be treated 
as text/plain.

I built a DirectoryHandler that checks whether a path is a directory or a file.
If it’s a directory, it either serves an index.html file (if present) or 
dynamically builds a listing of its contents. If it’s a file, the request is
passed to a FileHandler. Nonexistent paths return a 404 via NotFoundHandler.

```java

if (file.isDirectory()) {
    return getIndexOrListing(request, file, requestPath);
} else if (file.exists()) {
    return new FileHandler(file).handle(request);
}
return new NotFoundHandler().handle(request);

```

One key lesson was handling relative paths and special cases in routing. I 
normalize paths to the server root and build URL paths consistently, which
allows links to work even if the server root changes.

```java

Path relative = rootPath.relativize(filePath);
String urlPath = "/" + relative.toString().replace(File.separatorChar, '/');

```

Another lesson was graceful handling of unknown MIME types. Any file that
doesn’t match a known type can be safely served as plain text, ensuring users
always get readable content instead of an error.

Finally, this story reinforced the importance of fallbacks and flexible routing.
By using a fallbackHandler when no specific handler matches, the server can 
gracefully handle unexpected requests while still supporting core functionality.

With this finished, users can now browse directories, access files, and interact 
with the server fully, an important milestone in building a multipurpose HTTP 
server.
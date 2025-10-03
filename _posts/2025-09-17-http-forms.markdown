---
layout: post
title: "HTTP Forms"
date: 2025-09-17 16:18:00 -0400
categories: apprenticeship update
---

# Handling Forms in My Java HTTP Server

Two Main Ways Forms Send Data

GET Forms:  parameters are added directly into the URL.
   Example request:
   GET /form?foo=1&bar=2 HTTP/1.1

My server parses the query string into key–value pairs and renders them back:

```html

<h2>GET Form</h2>
<li>foo: 1</li>
<li>bar: 2</li>

```

 POST Forms: data is sent in the body of the request.

- If application/x-www-form-urlencoded, it looks just like the query string.
- If multipart/form-data, it can even include files.

Example file upload:
POST /form HTTP/1.1
Content-Type: multipart/form-data; boundary=XYZ

--XYZ
Content-Disposition: form-data; name="file"; filename="autobot.jpg"
Content-Type: image/jpeg

(binary jpeg data)
--XYZ--

My server extracts the fields and lists them in the response:

```html

<h2>POST Form</h2>
<li>file name: autobot.jpg</li>
<li>content type: image/jpeg</li>

```

# Handling forms means:

Handling forms means:

- Parsing query strings for GET.
- Reading and decoding the body for POST.
- Supporting multipart so users can upload files.

It’s one of the key steps in turning a server from just “serving files” into
something interactive.
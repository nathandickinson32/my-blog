---
layout: post
title: "Java + Clojure"
date: 2025-09-30 16:18:00 -0400
categories: apprenticeship update
---

Today I focused on wiring everything together, importing both Java classes and
Clojure namespaces, then spinning up the server for the Tic Tac Toe web project.

In Clojure, there are two main kinds of imports:

- :require — brings in other Clojure namespaces and lets you alias them.

```clojure

(:require [cheshire.core :as json]
  [hiccup2.core :as h]
  [tic-tac-toe.board :as board]
  [tic-tac-toe.game :as game])

```

- :import — pulls in Java classes so they can be used just like you would in
  Java.

```clojure

(:import (java.util UUID)
  [server HttpServer Request Response]
  [handlers RequestHandler])

```

This is what allows me to use my Java server library seamlessly inside a
Clojure project.

With everything imported, I started the server like this:

```clojure

(defn -main [& _]
      (let [fallback (->request-handler fallback-handler)
            server (HttpServer. 8081 10 fallback)]
           (register-routes server)
           (println "TTT server running on http://localhost:8081")
           (.start server)))

```

I also set up a few helper functions to translate between Java objects and
Clojure maps, so my route handlers can stay idiomatic in Clojure while the
server runs in Java:

```clojure

(defn Request->map [^Request req]
      {:method (.getMethod req)
       :params (.getParams req)
       :body   (when-let [b (.getRawBody req)]
                         (String. b "UTF-8"))})

(defn ->request-handler [handler-fn]
      (proxy [RequestHandler] []
             (handle [^Request req]
                     (-> req Request->map handler-fn ->Response))))

```

This bridge is a key part of the design: Java handles the low-level server
mechanics, while Clojure focuses on application behavior, a clean separation of
responsibilities.
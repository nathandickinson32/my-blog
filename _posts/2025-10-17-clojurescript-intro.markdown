---
layout: post
title: "ClojureScript Intro"
date: 2025-10-17 16:18:00 -0400
categories: apprenticeship update
---

Today I set up the environment for my ClojureScript version of my Tic Tac Toe
game. I’m going to reuse the same game logic I’ve written for the other
versions, but this time I’ll be working on the client side with ClojureScript.

I organized the project with separate directories for clj, cljc, and cljs files:

- clj for Clojure server-side code
- cljs for browser-side ClojureScript code
- cljc for code that can be shared between both

I followed the same process for the spec namespaces as well.

This setup makes it easier to reuse core logic while keeping things
clean and maintainable.

There are also some dependencies needed for ClojureScript.

- org.clojure/clojurescript – the core library for compiling and running
  ClojureScript.
- com.cleancoders.c3kit/wire – a small testing and simulation library that’s
  great for working with ClojureScript apps.
- speclj/speclj – for writing tests, keeping everything consistent across my
  versions.

After these steps, I connected the compiled ClojureScript output to my
index.html. This is the bridge between my ClojureScript logic and the browser’s
DOM.

Here’s the main entry point in my ClojureScript file:

```clojure

(defn app []
      [:div.container
       [:h1 "Tic Tac Toe"]
       [board-grid]
       [:div {:style {:margin "10px"}} [status-message]]
       [:button.reset {:on-click reset-game} "Reset"]])

(defn ^:export main []
      (rdom/render [app] (js/document.getElementById "root")))

```

The ^:export tag is important, it ensures that when ClojureScript compiles to
JavaScript, the main function is available for the browser to call.

In index.html, I load the compiled script and explicitly call that exported
function:

```clojure

<div id= "root" ></div>
<script type= "text/javascript" >
tic_tac_toe.main.main ()
</script>

```

That’s what triggers Reagent to render [app] into the div with the ID root. From
there, all updates to the app’s state automatically re-render in the DOM, thanks
to React’s virtual DOM under the hood.

This connection between ClojureScript and HTML is where everything comes
together: the functional logic, the UI components, and the reactive rendering
all working seamlessly in the browser.
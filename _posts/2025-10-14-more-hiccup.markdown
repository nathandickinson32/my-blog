---
layout: post
title: "More Hiccup"
date: 2025-10-14 16:18:00 -0400
categories: apprenticeship update
---

Today I added the rest of the state selections to my Tic Tac Toe server,
finishing up the flow that lets players pick their board size, player types,
and who goes first.

Here’s a look at my player selection code. This part handles choosing between
human and different levels of AI for each player:

```clojure

(defn select-player-x-handler [request]
      {:status 200
       :body
       (str
         (h/html
           [:html
            (core/head "Select Player X")
            [:body
             [:h1 "Select Player X Type"]
             [:form {:method "GET" :action "/select-player-o"}
              [:input {:type "hidden" :name "board-size" :value (-> request :params :board-size)}]
              (for [player-type ["human" "easy-ai" "medium-ai" "expert-ai"]]
                   [:button.selection-button
                    {:name "player-x-type" :type "submit" :value player-type}
                    player-type])]]]))})

```

One of the big benefits of using Hiccup is that it lets you use Clojure
functions and data structures directly inside your HTML. The
(for [player-type ...]) loop above builds all the buttons in just a few lines,
instead of writing each one by hand. It’s clean, flexible, and makes it easy to
adjust things later if I want to add or rename AI players.

I still need to clean up my Player O selection to take advantage of the same
approach. Right now, those buttons are still written out one by one, so
refactoring them to use a loop will help keep the code consistent and easier
to maintain.

Using Hiccup makes it easy to keep the structure clear while staying in the
Clojure mindset.
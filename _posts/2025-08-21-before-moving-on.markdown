---
layout: post
title: "Before Moving On"
date: 2025-08-21 16:10:00 -0400
categories: apprenticeship update
---

Today I went back to writing tests for my Tic Tac Toe GUI. I had rushed my
source code to get something demo-ready for IPM, but that meant my tests fell
behind. Now I’m working to bring my tests up to the same level as my
implementation.

Here’s an example test suite I wrote for verifying button clicks:

```clojure

(it "clicks on something other than a button"
    (should= @state (sut/on-mouse-click @state (->click 1 1))))

(it "clicks on the corner of X"
    (let [x-left (- (/ sut/grid-width 2)
                    sut/button-width
                    sut/button-padding)
          new-state (sut/on-mouse-click @state (->click x-left sut/row-top-1))]
         (should= (assoc @state :current-token :X
                         :page :choose-player-X) new-state)))

```

I’ve added variations that click:

- Outside the button (state should not change).
- On corners and edges (state should change if it’s inside).
- Dead center of the button.

For GUI code, tests aren’t just about correctness of logic. They’re about
boundaries, edges, and user interactions that don’t always follow the
“happy path.” By testing positions around and inside a button, I can feel
confident with all the click-handling.
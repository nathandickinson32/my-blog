---
layout: post
title: "Play Again"
date: 2025-06-18 15:55:00 -0400
categories: apprenticeship update
---

Today I added a “play again” feature to my Tic Tac Toe game. After the
game ends, the player is asked if they want to start a new one. Pretty
straightforward logic, but it felt good to implement. I’m starting to feel
more confident in both my Clojure skills and my approach to TDD.

Here’s the core of the logic:

```clojure

(defn play-again? [build-game-state]
      (let [input (board/->clean-user-input)]
           (when (= input "Y")
                 (build-game-state))))

```

It simply checks if the user enters "Y", and if so, starts a new game by
calling build-game-state. Keeping this logic isolated made it easy to test:

```clojure

(context "when user is asked to play again"
         (with-stubs)

         (it "calls build-game-state when the user inputs Y"
             (with-redefs [sut/build-game-state (stub :build-game-state)]
                          (with-in-str "Y\n"
                                       (sut/play-again? sut/build-game-state)
                                       (should-have-invoked :build-game-state))))

         (it "does not call build-game-state when the user inputs N"
             (with-redefs [sut/build-game-state (stub :build-game-state)]
                          (with-in-str "N\n"
                                       (sut/play-again? sut/build-game-state)
                                       (should-not-have-invoked :build-game-state))))
         )

```

Using with-in-str to simulate user input and with-redefs to stub the
build-game-state function helped keep the tests clear and focused. This is the
kind of thing I’d have overthought a few weeks ago, but now it feels
manageable.

We also had IPM today, and I felt like things went well. I’m continuing to lean
into making more pessimistic estimates, and that mindset is helping me stay
realistic about what I can deliver. It’s less about
“how fast can I finish this,” and more about “what could slow this down?” That
shift is helping me write better code and keep my week more balanced.

One small feature, but a big confidence boost.
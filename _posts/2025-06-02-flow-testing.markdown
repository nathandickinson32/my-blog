---
layout: post
title:  "Stub!"
date:   2025-06-02 16:55:00 -0400
categories: apprenticeship update
---

Today I focused on writing tests for larger, recursive functions
in my Tic Tac Toe project. My take-turns function, which handles
printing the board, getting a move, making that move, switching
players, and repeating the cycle until the game is over.

Here’s what the function looks like:

```clojure
(defn take-turns [board current-player]
  (output/print-board board)
  (let [move        (board/get-user-move board current-player)
        new-board   (board/make-move board move current-player)
        next-player (switch-player current-player)]
    (when-not (game-over? new-board current-player)
      (recur new-board next-player))))

```
Since this function is recursive and relies on multiple pieces of
state and input, testing it required simulating an actual game flow.
I used with-in-str to simulate user input and with-redefs to stub
the output/winner-message function. Then I could verify whether it
was called when the game ended.

Here’s what part of that test looked like:

```clojure
(it "ends the game"
  (with-redefs [output/winner-message (stub :output/winner-message)]
    (with-in-str "2\n" (sut/take-turns no-winners-board \X))
    (should-have-invoked :output/winner-message {:with [winning-row1 \X]})))

(it "repeats until game ends"
  (with-redefs [output/winner-message (stub :output/winner-message)]
    (with-in-str "7\n6\n" (sut/take-turns no-winners-board \X))
    (should-have-invoked :output/winner-message {:with [winning-row3 \O]})))

```
**Some New Things For Me**
- I had to simulate enough valid moves for the game loop to eventually hit a game-over state.
- I got hands-on experience with with-redefs vs redefs-around. with-redefs is great for quickly
stubbing a function during a test case, whereas redefs-around stubs a whole context block with multiple redefinitions.
- Testing this function also gave me insight into verifying side effects and checking that the
control flow behaves as expected, even across multiple turns.

Overall, this was a solid deep dive into testing complex behavior and
a reminder that testable code often benefits from clear boundaries.

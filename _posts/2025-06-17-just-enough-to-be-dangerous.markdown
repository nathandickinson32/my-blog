---
layout: post
title: "Just Enough To Be Dangerous"
date: 2025-06-17 16:05:00 -0400
categories: apprenticeship update
---

Today I added a new feature to my Tic Tac Toe game. The user can now choose
which token goes first. This meant changing how I build the game state
entirely. Instead of picking from a list of game modes, the user now goes
through a simple setup:

- choose their token
- pick their opponent
- decide who goes first

It felt like a much more natural flow. To make it clean, I broke it into 
three functions: ask-for-token, ask-for-opponent, and ask-for-first-player.
Each one prompts the user and handles their input. If the 
input’s invalid, I just call recur to ask again. This is a nice Clojure
way of looping without a loop.

For example:

```clojure

(def opponents {"1" :human "2" :easy-ai "3" :expert-ai})

```

This map lets me keep logic easily managed. The user presses
1, 2, or 3, and I just look it up.

Then:

```clojure

(defn ask-for-opponent []
      (output/choose-opponent)
      (let [input (board/->clean-user-input)
            opponent (get opponents input)]
           (if opponent
             opponent
             (do
               (output/invalid-opponent-response)
               (recur)))))

```

This kind of structure made each prompt self-contained. Once I gathered all
the user input, I used build-game-state to set everything up for take-turns.

There’s a line from my old landscaping job I thought about today. I had just
used the skid steer for the first time and felt great. I told my boss, and
he smiled and said:

**"Now you know just enough to be dangerous."**

I always think about that when something starts to feel too smooth. Today
felt smooth. I was in a groove with TDD. Writing a tiny test, solving the next
problem, repeat. But I also know I’m learning. It’s easy to feel overconfident
right after some growth and that’s where mistakes can happen.

So yeah, maybe I know just enough to be dangerous. But I’m slowing down,
trying to ask better questions, and learning how to build safely.
Today was one of those good days that leaves you smiling... but cautious.
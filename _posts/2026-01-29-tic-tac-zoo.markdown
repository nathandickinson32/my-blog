---
layout: post
title:  "Tic-Tac-Zoo: A Zoo-Themed Tic-Tac-Toe AI in the Browser"
date:   2026-01-29 12:00:00 -0400
categories: apprenticeship update
---

I built a zoo-themed Tic-Tac-Toe game that runs entirely in the browser — no server required. The game logic and AI are written in Python, compiled to WebAssembly via [Pyodide](https://pyodide.org/), and the whole thing lives in a single HTML file.

## The Zoo Theme

Instead of plain X's and O's, players pick an animal avatar from a roster of six: dog, cat, monkey, panda, frog, or penguin. Each difficulty level is represented by a zoo animal that matches the challenge:

- **Bunny** (Easy) — makes random moves
- **Fox** (Medium) — plays optimally 60% of the time
- **Lion** (Hard) — uses full minimax, completely unbeatable

The board is styled as a safari scene with earth-tone colours, parchment-coloured tiles, and a leafy green highlight for winning lines.

## How It Works

The AI uses the [minimax algorithm](https://en.wikipedia.org/wiki/Minimax) to evaluate every possible future game state. On a 3x3 board the game tree is small enough to search exhaustively, so the Lion difficulty guarantees perfect play.

The interesting part is how Python runs in the browser. Pyodide is CPython compiled to WebAssembly — when the page loads, the browser downloads the runtime and from that point on, every call to `pyodide.runPython()` executes real Python. JavaScript handles the UI and relays clicks to Python functions like `human_move()`, which returns a dict with the game state, the AI's move, and the emoji tokens to render.

Mixing difficulty levels is straightforward: the `ai_move()` function decides whether to consult minimax or pick randomly based on the current setting. The emoji token system is purely cosmetic — internally the game still uses "X" and "O", but the front-end swaps them for animal emojis.

## Try It

You can play the game here:

<iframe src="/my-blog/tic-tac-zoo.html" width="420" height="620" style="border:none; border-radius: 12px;"></iframe>

The full source is a single HTML file — no build step, no npm, no bundler.

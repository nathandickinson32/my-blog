---
layout: post
title: "Full Minimax"
date: 2025-06-12 16:15:00 -0400
categories: apprenticeship update
---

Today I finished implementing the minimax algorithm for my Tic Tac Toe game.
I now have an expert AI that will always make the best possible move!

At its core, minimax is about simulating every possible future game state
and scoring them to pick the best outcome. If it’s your turn, you want to 
maximize the score. If it’s your opponent’s turn, you assume they’ll try
to minimize it. The algorithm plays out the game in its head,
switching back and forth between maximizing and minimizing until it reaches
a win, loss, or draw.
 
After making this work, I broke the logic into smaller pieces:
```clojure

(defn score-end-game [board max-token depth]
      (- (score board max-token) depth))

```

This gives a score when the game ends. Wins are worth more if they
happen sooner, and losses are valued less the earlier they come.

```clojure

(defn ->score-one-move [next-board token max-token depth minimax]
      (minimax next-board (board/switchp-player token) max-token (inc depth)))

```
Here I simulate one move and recursively call minimax from the new board’s
perspective.

```clojure

(defn ->score-moves [board token max-token depth minimax moves]
      (map #(let [next-board (board/make-move board % token)
                  score (->score-one-move next-board token max-token depth minimax)]
                 score)
           moves))

```

This just gets the scores for all possible moves at a given turn.

```clojure

(defn ->best-score [scores maximizing?]
  (if maximizing?
    (apply max scores)
    (apply min scores)))

```

Then I choose the highest or lowest score depending on whose turn it is.

```clojure

(defn minimax [board token max-token depth]
      (if (end-game? board)
        (score-end-game board max-token depth)
        (let [moves       (available-moves board)
              scores      (->score-moves board token max-token depth minimax moves)
              maximizing? (= token max-token)]
             (->best-score scores maximizing?))))

```

This function is recursively evaluating all options until the board is
full or someone wins.

Then this function actually lets the AI choos the best move.

```clojure

(defn best-move [board token]
      (let [moves        (available-moves board)
            scored-moves (map (fn [move]
                                  (let [next-board (board/make-move board move token)
                                        score      (->score-one-move next-board token token 1 minimax)]
                                       {:move move :score score}))
                              moves)]
           (:move (apply max-key :score scored-moves))))


```

It scores each move and picks the one with the best outcome.

I still want to do a bit of refactoring, but getting this working felt good.
What I liked most is how clean minimax feels once it’s broken up into
manageable steps. Each part has a clear job.
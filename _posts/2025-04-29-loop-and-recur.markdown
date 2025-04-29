---
layout: post
title:  "Loop and Recur"
date:   2025-04-29 16:15:28 -0400
categories: apprenticeship update
---
Today I worked on Euler Problem 3. I felt pretty
confident writing my early tests and getting them
to pass. The TDD process is starting to feel more
natural. That said, I definitely hit some roadblocks
when it came to getting the full logic right for this one.

The big learning moment today was around naming and
managing multiple variables inside a loop. 
This function ended up being my final solution:
```clojure
(defn euler-3 [n]
  (loop [n n, factor 2]
    (cond
      (> (* factor factor) n) n
      (zero? (mod n factor)) (recur (/ n factor) factor)
      :else (recur n (inc factor)))))

```
Being able to track and update both n and factor within
the loop helped me wrap my head around the problem more
clearly.

I’m still building my confidence with recursion, but I can
feel it getting better every time I work through one of these
problems. Euler 3 was a challenge, but a good one.
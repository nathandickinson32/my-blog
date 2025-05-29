---
layout: post
title:  "Estimate Smaller Than That"
date:   2025-05-28 15:45:00 -0400
categories: apprenticeship update
---

Today I practiced the FizzBuzz kata. If you’re not familiar,
you write a program that prints numbers but for multiples of
3, print “Fizz,” for multiples of 5, print “Buzz,” and for
numbers divisible by both, print “FizzBuzz.”

I approached it using TDD, moving one number at a time and
writing a test before writing any implementation. It’s a
great kata for getting better at building solutions step by step.

I even used a small trick I brought in from working on Project
Euler. Instead of checking mod 3 and mod 5 separately, I used
mod 15 to catch both conditions. Since 15 is the least common
multiple of 3 and 5, it lets me simplify the logic.

```clojure
(defn fizzbuzz [n]
  (cond
    (zero? (mod n 15)) "fizzbuzz"
    (zero? (mod n 5)) "buzz"
    (zero? (mod n 3)) "fizz"
    :else n))
```

I also practiced writing tests for generating number ranges
and verifying console output. These are things I hadn't
really done much of before but testing
for what the user sees is just as important.

I also had IPM today, which gave me a chance to think more
deeply on the last iteration. I underestimated a story last
time and ended up falling behind. That created a domino
effect that hurt everything else.

I almost made the same mistake again but this time I caught
it. We broke the large story into a couple smaller, clearly
defined tasks, and that made all the difference.

Today's takeaway: 
**Big stories should always be broken down into smaller, well-defined tasks.**

No matter how confident I feel, it’s easy to overlook edge
cases, testing, or even just the mental load of
trying to do too much at once. Smaller tasks seem to make
me faster and more focused.

Some more things to think about when estimating:
- Can I break this down further?
- What's the simplest piece I can test or build first?
- How will I know when this story is truly done?

**Breaking stories down is the heart of good estimating.**
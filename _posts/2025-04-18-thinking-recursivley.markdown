---
layout: post
title:  "Thinking Recursively"
date:   2025-04-18 18:22:30 -0400
categories: apprenticeship update
---
Today was a bit of a different pace. I received my new work laptop, my first Mac,
so part of the day was spent getting everything set up and ready for the weeks ahead.
I installed my dev tools, cloned my GitHub repos, and customized my environment to feel
familiar. I even had to run out and grab an adapter so I could use my keyboard, mouse,
and headset. A few small hurdles, but everything is up and running now.

With the remaining time, I continued working through the Clojure koans. I didn’t get
through many pages, but one in particular from the macros folder stood out and really
got me thinking.

Here’s the macro that caught my attention:

(defmacro recursive-infix [form]

(cond (not (seq? form))

form

(= 1 (count form))

`(recursive-infix ~(first form))

:else

(let [operator (second form)

   first-arg (first form)

   others (drop 2 form)]

  `(~operator

(recursive-infix ~first-arg)

(recursive-infix ~others)))))

This macro is designed to handle arithmetic expressions written in infix notation 
(like we would on paper) and transform them into valid Clojure prefix expressions.
It uses recursion to evaluate each part of the expression, peeling it apart one level at
a time and restructuring it so Clojure can process it properly.

Here's an example:

(recursive-infix (10 + (2 * 3) + (4 * 5))) ; => 36

Under the hood, this becomes:

(+ (+ 10 (* 2 3)) (* 4 5))

Which evaluates step by step to:

(+ (+ 10 6) 20) ; => (+ 16 20) ; => 36

It’s a great example of how macros in Clojure can be used to reshape code itself.
And it deepened my understanding of both recursion and macro behavior. As the koan jokingly
(but accurately) points out:

"Really, you don't understand recursion until you understand recursion."

Even though today wasn’t about speed, it was definitely meaningful progress. And now that 
I’m fully set up on my new machine, I’m looking forward to picking up the pace again next week.
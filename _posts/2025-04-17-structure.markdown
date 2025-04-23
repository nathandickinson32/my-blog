---
layout: post
title:  "Structure"
date:   2025-04-17 15:43:30 -0400
categories: apprenticeship update
---
Today I worked through more of the Clojure koans and made solid progress. I'm getting
close to the end and feeling much more comfortable with the syntax and flow of the language.

One koan from the datatypes folder caught my attention, working with records and seeing how
Clojure handles custom data types. Defining a simple record with defrecord and then accessing
its fields using dot notation felt very different from how I’m used to handling data structures.
Here's a quick example from the koan:
```clojure
(def record Person [first-name last-name])

(def me (Person. "Nathan" "Dickinson"))

(.first-name me) ; => "Nathan"
```


It was a great reminder that while Clojure is dynamically typed, it still offers clean and
expressive ways to model structured data.

I also watched the Uncle Bob video on function structure from the Clean Code Fundamentals series.
It reinforced a lot of core principles like keeping functions small, focused, and doing one thing
well. He broke down how long functions often hide problems and how proper naming and
decomposition make code easier to read and maintain. Even though I’ve heard these ideas before,
seeing them explained so clearly with examples helped them click on a deeper level.

One thing I really appreciate is how kind and welcoming the team has been. Everyone has been
open to questions, and a few people have even taken the time to check in and see how things
are going. That support has definitely helped me stay focused and motivated.

Another productive day. Feeling like the pieces are continuing to fall into place one line
of code at a time.

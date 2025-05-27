---
layout: post
title:  "Backbone Of A Good Week"
date:   2025-05-27 16:35:00 -0400
categories: apprenticeship update
---

Today I paired with my mentor to refactor parts of my tic-tac-toe project. We
cleaned up a lot of code by removing passthrough functions. These are methods
that pass arguments away but don't do anything more than a function that already
exists in clojure. I was passing three args to a function just to check for some?
Much more efficient to just ask some? in my current function.

We also changed how I was testing conditions. I had been trying to use booleans
to make it more readable as in getting and receiving statements to be true and 
false. I should have been using clojure's when, when-not, when-let and if-let.
Found it very interesting to use when-let and if-let combining the power of 
let bindings with condition check.

There's actually quite a list growing of things I have not previously used 
in clojure:
- mapv
- format
- read-string
- should / should-not from speclj
- when-let / if-let

On my journey to becoming a craftsman, there are going to be failures.
This week is one of them. I estimated this project would take two days.
I’m now over three days past that estimate, even after working late on
Friday, through the weekend, and on Memorial Day. I stretched myself
thin. And honestly, the extra hours didn’t produce significantly more
progress. I would have been better off with more rest and focused work
during core hours. 

Things I'll be thinking more about nect time I estimate a story:
- Have I built something like this before?
- What are the unknowns?
- Can I break this down smaller?
- Do I have meetings, holidays or other appointments?
- How can I keep a steady pace?

Estimation is certainly the backbone of a good week.
---
layout: post
title:  "Another Look"
date:   2025-05-07 15:50:00 -0400
categories: apprenticeship update
---

Today I had my IPM. The presentation work
went well, especially considering I haven’t
done a slideshow presentation in years. One
thing I definitely need to focus on is not
just reading off the slides. I want to be able
to add more context and explain things in my
own words so it feels more natural and less scripted.

After that, I worked through more optimization
on Euler Problem 4 with my mentor. I refactored
the code we paired on to only keep products that
were palindromes, and then just returned the max.
I told him I wanted to go a little further and add 
checks for a lowest factor and a max palindrome
so we weren’t doing unnecessary work.

Here’s what we came up with:

```clojure
(defn ->sort-palindrome-list [lowest-factor highest-factor]
  (loop [a highest-factor
         b highest-factor
         max-palindrome -1
         lowest-factor lowest-factor]
    (cond
      (< a lowest-factor)
      max-palindrome

      (< b lowest-factor)
      (recur (dec a) (dec a) max-palindrome lowest-factor)

      :else
      (let [product (* a b)]
        (if (palindrome? product)
          (recur (dec a) (dec a) (max product max-palindrome) b)
          (recur a (dec b) max-palindrome lowest-factor))))))

```

I’m starting to get more confident in spotting
opportunities to refactor and add constraints
that make the logic cleaner and faster. It’s
cool seeing how small improvements can make a
big difference when you're working with loops
and conditionals.
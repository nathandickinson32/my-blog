---
layout: post
title: "Testing Smarter, Not Harder"
date: 2026-01-19 12:22:32 -0400
categories: apprenticeship update
---

# Testing Smarter, Not Harder: More Tests Doesn't Always Mean Safer Code

Imagine you're building a house, and you decide that to make it secure, you'll
install 100 locks on the front door. Sounds safe, right? But here's the problem:
all those locks open with the same key, and they're all attached to hinges on
the outside. You've got a lot of locks, but your house isn't any more secure
than it was before.

This is exactly what happens when we write tests without thinking about *what* 
we're testing. We end up with hundreds of tests, impressive code coverage
numbers, and a false sense of security, until someone makes a small refactor and
watches half the test suite explode in a sea of red.

I learned this lesson the hard way during my apprenticeship.

## My Wake-Up Call

A few months into my apprenticeship, I was feeling pretty good about myself. I
had just finished implementing a feature with what I thought was excellent test
coverage. Every function had tests. Every edge case was covered. My coverage
report showed 95%+. I was living the TDD dream.

Then, a senior developer reviewed my code and suggested a simple refactoring.
They extracted a private method, renamed a few variables for clarity, and 
restructured how the classes interacted, all without changing the actual 
behavior of the system. The feature still did exactly what it was supposed to
do.

But my tests? They failed. Epicly.

Watching test after test turn red, even though the *behavior* of the code
hadn't changed at all, was humbling. I had written dozens of tests that were
tightly coupled to the implementation details. I was testing *how* the code
worked, not *what* it did. And in doing so, I had created a brittle test suite
that would break every time someone tried to improve the code.

That's when I realized: more tests doesn't automatically mean safer code. It
matters *what* you test and *how* you test it.

## The Coverage Trap

Let's talk about code coverage for a moment. Code coverage is a metric that
tells you what percentage of your code is executed during your tests. Many
teams set coverage goals: "We must have 80% coverage!" or "We're aiming for 
90%!"

Here's the uncomfortable truth: **high coverage doesn't guarantee quality 
tests.**

You can have 100% code coverage and still have a fragile, useless test suite. Consider this example:

```clojure
;; Production code
(defn calculate-discount [customer order-total]
  (if (:premium? customer)
    (* order-total 0.20)
    (* order-total 0.10)))

;; Bad test - tests implementation
(describe "calculate-discount"
  (it "applies 20% discount for premium customers"
    (let [customer {:premium? true}
          order-total 100]
      ;; This test is coupled to the implementation detail (0.20)
      (should= 20.0 (calculate-discount customer order-total))
      (should= 20.0 (* order-total 0.20))))) ;; Literally testing the math

;; Good test - tests behavior
(describe "calculate-discount"
  (it "gives premium customers higher discount than regular customers"
    (let [premium-customer {:premium? true}
          regular-customer {:premium? false}
          order-total 100
          premium-discount (calculate-discount premium-customer order-total)
          regular-discount (calculate-discount regular-customer order-total)]
      (should< regular-discount premium-discount)
      (should= 20.0 premium-discount)))) ;; Verify the actual business rule
```

Both tests give you coverage. But the first test will break if you refactor how
the discount is calculated (maybe you move to a lookup table, or pull the
percentages from a config file). The second test focuses on the *behavior* that
matters to the business: premium customers get a better discount.

## What Makes a Test "Good"?

During my apprenticeship, I learned that good tests share several
characteristics:

### 1. They Test Behavior, Not Implementation

Good tests answer the question: "What should this code do?" not "How does this
code work?"

```clojure
;; Bad - Testing implementation
(describe "sorter"
  (it "uses quicksort algorithm"
    (let [numbers [3 1 4 1 5]
          sorter (->Sorter)]
      ;; This test cares HOW we sort
      (should-have-invoked :quicksort {:with [numbers]}))))

;; Good - Testing behavior
(describe "sorter"
  (it "returns numbers in ascending order"
    (let [numbers [3 1 4 1 5]
          result (sort-numbers numbers)]
      ;; This test cares WHAT we get
      (should= [1 1 3 4 5] result))))
```

The second test lets you change from quicksort to mergesort, or any other
algorithm, without breaking the test. It tests the contract, not the 
implementation.

### 2. Friendly to Refactoring

One of the main benefits of having tests is the freedom to refactor with 
confidence. But if your tests break every time you refactor, they're working
against you instead of for you.

Ask yourself: "If I renamed this method, moved this logic to another class, or
restructured these conditionals, would my tests still pass?"

If the answer is no, you might be testing implementation details.

### 3. They Communicate Intent

Good tests serve as documentation. When someone reads your test, they should
immediately understand what the code is supposed to do.

```clojure
;; Bad - Unclear intent
(describe "process-data"
  (it "processes data"
    (should= 42 (process {:a 1 :b 2 :c 3}))))

;; Good - Clear intent
(describe "calculate-total"
  (it "sums all numeric values in the map"
    (let [data {:apples 10 :oranges 15 :bananas 17}]
      (should= 42 (calculate-total data)))))
```

## Common Testing Patterns I Learned to Avoid

Through trial and error (mostly error), here are the patterns I learned
to watch out for:

### 1. The "Test Everything" Trap

Not every line of code needs a dedicated test. Getters and setters? Probably 
don't need tests. Simple data transformations that are covered by higher-level
tests? Skip them.

Focus on:
- Business logic
- Edge cases and error conditions
- Complex algorithms
- Code that's likely to break

### 2. Testing Private Methods

If you feel the need to test a private method directly, that's often a code
smell. Either:
- The private method has complex logic that should be extracted into its own namespace or function
- You're already testing it indirectly through the public API

```clojure
;; Bad - Testing implementation details
(ns order-processor)

(defn- apply-discount [order]
  (* (:total order) 0.9))

(defn- finalize [amount]
  {:amount amount :status "complete"})

(defn process-order [order]
  (-> order
      apply-discount
      finalize))

;; Bad test - accessing private functions
(describe "apply-discount"
  (it "applies 10% discount"
    (let [order {:total 100}]
      ;; This breaks encapsulation
      (should= 90.0 (#'order-processor/apply-discount order)))))

;; Better - Test the public behavior
(describe "process-order"
  (it "applies discount and returns completed order"
    (let [order {:total 100}
          result (process-order order)]
      (should= 90.0 (:amount result))
      (should= "complete" (:status result)))))
```

### 3. Mocking Everything

Mocks are powerful, but they can also create tests that pass even when the real
code is broken. I learned to ask: "Am I mocking because it's necessary, or
because it makes the test easier to write?"

Over-mocking often means you're testing implementation details. Test real
integrations when you can, and use mocks for external dependencies
like databases or API calls.

### 4. The "One Giant Test" Pattern

One massive test that tries to verify everything is hard to understand, hard to
debug, and hard to maintain.

```clojure
;; Bad - One massive test
(describe "user-registration-flow"
  (it "handles entire registration process"
    (with-stubs)
    ;; Tests validation
    (should-not (valid-email? "bad-email"))
    (should (valid-email? "good@email.com"))
    
    ;; Tests password hashing
    (should< 20 (count (hash-password "password")))
    
    ;; Tests database saving
    (let [user (save-user {:email "test@test.com" :password "hashed"})]
      (should-not-be-nil (:id user)))
    
    ;; Tests email sending
    (should-have-invoked :send-welcome-email {:with ["test@test.com"]})
    
    ;; Tests logging
    (should-have-invoked :log-info {:with ["User registered"]})))

;; Better - Separate, focused tests
(describe "email-validation"
  (it "rejects invalid email formats"
    (should-not (valid-email? "bad-email")))
  
  (it "accepts valid email formats"
    (should (valid-email? "good@email.com"))))

(describe "password-hashing"
  (it "hashes passwords before storage"
    (let [hashed (hash-password "password")]
      (should-not= "password" hashed)
      (should< 20 (count hashed)))))

(describe "user-registration"
  (it "sends welcome email after registration"
    (with-stubs)
    (register-user {:email "test@test.com" :password "password"})
    (should-have-invoked :send-welcome-email {:with ["test@test.com"]})))
```

## Smart Testing Strategies from TDD

Test-Driven Development taught me to think differently about testing. Here are 
the strategies that helped me write better tests:

### 1. Write Tests First

When you write tests first, you're forced to think about behavior before
implementation. You can't accidentally test implementation details because
there's no implementation yet!

```
Red → Green → Refactor
```

This cycle ensures your tests are focused on what the code should do, not how it
does it.

### 2. The "Arrange, Act, Assert" Pattern

Structure your tests clearly:

```clojure
(describe "shopping-cart"
  (it "calculates total with multiple items"
    ;; Arrange - Set up the test data
    (let [cart (create-cart)
          cart-with-items (-> cart
                              (add-item {:price 10.00})
                              (add-item {:price 15.00}))
          ;; Act - Perform the action
          total (calculate-total cart-with-items)]
      ;; Assert - Verify the result
      (should= 25.00 total))))
```

This pattern makes tests easy to read and understand.

### 3. Test the Contract, Not the Implementation

Think of your code as having a contract: "Given this input, I promise to produce
this output." Test that contract.

```clojure
;; The contract: "A user authenticator determines if credentials are valid"
(defprotocol UserAuthenticator
  (authenticate [this username password]))

;; Test the contract
(describe "user-authenticator"
  (it "returns true for valid credentials"
    (let [auth (create-authenticator)]
      (should (authenticate auth "validuser" "validpass"))))
  
  (it "returns false for invalid credentials"
    (let [auth (create-authenticator)]
      (should-not (authenticate auth "validuser" "wrongpass")))))
```

How authentication happens (database lookup, OAuth) is an implementation detail.
The tests don't care.

### 4. The SOLID Principles

SOLID principles don't just make your production code better, they make your
code more testable:

- **Single Responsibility**: Classes with one job are easier to test
- **Open/Closed**: You can extend behavior without modifying (and re-testing) existing code
- **Liskov Substitution**: You can test through interfaces, not concrete classes
- **Interface Segregation**: Smaller interfaces mean focused, simpler tests
- **Dependency Inversion**: You can inject test doubles easily

## When to Write More Tests, And When to Write Better Ones

Not all testing problems are solved by writing more tests. Sometimes you need to
write *different* tests.

**Write more tests when:**
- You find a bug that wasn't caught by existing tests
- You're adding new functionality
- You're working with edge cases that aren't covered

**Write better tests when:**
- Your tests break during refactoring, but the behavior hasn't changed
- You can't understand what a test is verifying
- Tests take a long time to run
- You're afraid to refactor because of brittle tests

## Confidence, Not Coverage

At the end of my apprenticeship, I realized that the goal of testing isn't to
hit a coverage number or to write as many tests as possible. The goal is
**confidence**.

Confidence that:
- Your code does what it's supposed to do
- You can refactor without breaking things
- Future developers (including future you) can understand the codebase
- Changes in one area won't unexpectedly break another

Good tests give you this confidence. Bad tests give you a false sense of
security and slow you down.

## Takeaways

Here's what I wish I had known when I started writing tests:

1. **Test behavior, not implementation.** Ask "what should this do?" not "how does this work?"

2. **Refactoring shouldn't break tests.** If it does, you're probably testing implementation details.

3. **Coverage is a tool, not a goal.** Use it to find untested code, not as a measure of quality.

4. **Write tests that communicate intent.** Your tests are documentation for future developers.

5. **Red-Green-Refactor cycle.** Writing tests first forces you to think about behavior.

6. **Prefer testing through the public API.** Private methods get tested indirectly.

7. **Mock Cautiously.** Over-mocking creates tests that pass when real code fails.

8. **Learn from brittle tests.** When a test breaks during refactoring, ask why and fix the test.

## Conclusion

Looking back at that moment when my tests failed after a simple refactoring, it
was a lesson learned. It taught me that writing tests is a skill that goes
far beyond just achieving code coverage.

Testing smarter means understanding the difference between implementation and 
behavior. It means writing tests that give you confidence to refactor, that
communicate intent clearly, and that serve as reliable safety nets when things 
go wrong.

So next time you sit down to write tests, ask yourself: "Am I testing what this
code does, or how it does it?" The answer will determine whether you're building
those 100 useless locks or creating real security for your code.

Stay intentional. Stay focused. Test smarter, not harder.

---
layout: post
title: "Bubble Sort"
date: 2025-08-29 15:50:00 -0400
categories: apprenticeship update
---

Today I implemented a Bubble Sort method that works for both my custom ArrayList
and LinkedList implementations.

Bubble Sort is one of the simplest sorting algorithms. The idea is to repeatedly
"bubble up" the largest element to the end of the list by swapping adjacent
elements if they’re out of order.

# Steps of Bubble Sort

1. Start at the beginning of the list.
2. Compare the current element with the next one.
3. If the current element is greater, swap them.
4. Continue through the list and the largest element will end up at the end.
5. Repeat until no swaps are needed.

# Key Points

- Best Case: O(n) when the list is already sorted (only one pass needed).
- Worst Case: O(n²) when the list is in reverse order.
- Space Complexity: O(1), since sorting is done in place.

```java

public class BubbleSort implements Sort {
    @Override
    public void sort(List list) {
        if (list.size() <= 1) return;

        int size = list.size();
        for (int i = 0; i < size - 1; i++) {
            boolean swapped = false;

            for (int current = 0; current < size - 1 - i; current++) {
                int next = list.get(current + 1);
                if (list.get(current) > next) {
                    int valueToMove = list.get(current);
                    list.set(current, next);
                    list.set(current + 1, valueToMove);
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
    }
}

```

While Bubble Sort isn’t efficient for large datasets, it’s a great starting
point for understanding sorting logic before moving on to faster algorithms
like Merge Sort or Quick Sort.
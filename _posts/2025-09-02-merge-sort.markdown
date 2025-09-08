---
layout: post
title: "Merge Sort"
date: 2025-09-02 16:50:00 -0400
categories: apprenticeship update
---

Today I implemented a Merge Sort method that works for both my custom ArrayList
and LinkedList implementations.
Merge Sort is a divide-and-conquer sorting algorithm. It works by repeatedly
splitting the list in half, sorting each half, and then merging the sorted
halves back together.

# Steps of Merge Sort

- Divide the list into two halves.
- Recursively sort each half.
- Merge the two sorted halves into a single sorted list.

# Key Points

- Always O(n log n) time complexity, making it much more efficient than Bubble Sort for big lists.
- Requires extra space proportional to the size of the list for merging.
- Great example of recursion and systematic problem-solving.

Merge Sort helps illustrate how breaking a problem into smaller pieces can lead
to faster, cleaner solutions compared to simpler iterative approaches.
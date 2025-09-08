---
layout: post
title: "Quick Sort"
date: 2025-09-03 15:20:00 -0400
categories: apprenticeship update
---

Today I implemented Quick Sort for my custom ArrayList and LinkedList.

Quick Sort is another divide-and-conquer algorithm. It works by selecting a
“pivot” element, partitioning the list so smaller elements are on the left and
larger on the right, and then recursively sorting the partitions.

# Steps of Quick Sort

- Pick a pivot element randomly.
- Partition the list so that elements less than the pivot go left, and elements
  greater go right.
- Recursively sort each side of the pivot.
- Combine the results into a sorted list.

# Key Points

- Average Case: O(n log n) — very efficient.
- Worst Case: O(n²) — rare, happens with poor pivot choices.
- Space Complexity: O(log n) due to recursion.
- Quick Sort often outperforms Merge Sort in practice because it sorts in place.

My implementation uses a random pivot and in-place swaps, showing how recursion
and partitioning can create a very efficient sorting process.
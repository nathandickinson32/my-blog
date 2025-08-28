---
layout: post
title: "ArrayList"
date: 2025-08-26 16:50:00 -0400
categories: apprenticeship update
---

Today I worked on building my own implementation of an ArrayList in Java. The
interesting part wasn’t just adding elements at the end, but handling what
happens when you insert or remove elements at a specific index.

When you add a value in the middle of the list, everything to the right of that
index must be shifted one position to the right to make space.

```java

public void add(int value, int index) throws IndexOutOfBoundsException {
    for (int i = length; i > index; i--)
        array[i] = array[i - 1];
    array[index] = value;
    length++;
}

```

Here the loop starts from the current end of the list and moves backwards,
copying each element into the next slot. Only after shifting is the new value
placed at the index.

When removing, the process is reversed. Everything to the right of the index
must be shifted one position to the left to close the gap.

```java

public void remove(int index) throws IndexOutOfBoundsException {
    length--;
    for (int i = index; i < length; i++)
        array[i] = array[i + 1];
}
```

- Efficiency tradeoff: Adding or removing at the end is constant time (O(1)),
  but adding or removing in the middle requires shifting, which is linear time (O(n)).
- Correctness: Without shifting, the list would either overwrite values or
  leave duplicate entries after a removal.
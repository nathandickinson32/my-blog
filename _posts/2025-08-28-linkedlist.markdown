---
layout: post
title: "LinkedList"
date: 2025-08-28 16:30:00 -0400
categories: apprenticeship update
---

Today I implemented a singly LinkedList from scratch in Java. Instead of
relying on the built-in LinkedList class, I created my own, so I could
understand what’s happening on a deeper level.

# My Node Class

```java

public class Node {
    int value;
    Node next;

    Node(int value) {
        this.value = value;
    }
}

```

Each node holds a value and a pointer to the next node.

# Adding

When adding, I either:

- Insert at the head (index 0), making the new node point to the old head.
- Traverse the list until the correct spot and link in the new node.

```java

public void add(int value, int index) {
    Node newNode = new Node(value);
    if (index == 0) {
        newNode.next = head;
        head = newNode;
    } else {
        Node current = head;
        for (int i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    length++;
}

```

# Removing an Element

Removing requires relinking:

- If removing the head, just point head to head.next.
- Otherwise, traverse to the node before the one we want to delete, then skip over
  it by adjusting the .next pointer.

```java

public void remove(int index) {
    if (index == 0) {
        head = head.next;
    } else {
        Node current = head;
        for (int i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
    }
    length--;
}

```

# Accessing Elements

Unlike an array (where you just index directly), you must walk the list until
you reach the right node:

```java

public int get(int index) {
    Node current = head;
    for (int i = 0; i < index; i++) {
        current = current.next;
    }
    return current.value;
}

```

# Trade-offs

- Efficient for insertions/removals at arbitrary positions.
- Slower for random access since you must traverse the list.
- Memory grows dynamically.
- Each node requires extra memory for the pointer to next.

By coding this from scratch, I gained a much deeper understanding of what’s
happening behind the scenes when we use Java’s LinkedList class.
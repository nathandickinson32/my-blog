---
layout: post
title: "Singly Or Doubly"
date: 2025-08-27 15:10:00 -0400
categories: apprenticeship update
---

Today I looked into the differences between singly linked lists and doubly
linked lists in Java. Both are built from nodes that hold data and references
(or "links") to other nodes, but they have different trade-offs.

# Singly Linked List

- Each node contains data and a reference to the next node.
- You can only traverse forward through the list.
- Insertion and deletion are efficient if you already have a reference to the
  right spot.
- Drawback: If you want to go backwards, you can’t. You have to start from the
  head again.

# Doubly Linked List

- Each node contains data, a reference to the next node, and a reference to the
  previous node.
- You can traverse forward and backward.
- Makes deletion and insertion easier in some cases since you have direct access
  to the previous node.
- Drawback: Takes up more memory (extra pointer) and slightly more complex to
  maintain.

Example Node Structure in Java:

```java

class SinglyNode {
    int data;
    SinglyNode next;

    SinglyNode(int data) {
        this.data = data;
        this.next = null;
    }
}

class DoublyNode {
    int data;
    DoublyNode prev;
    DoublyNode next;

    DoublyNode(int data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
```

Singly linked lists are lighter and simpler, while doubly linked lists give you
more flexibility at the cost of extra memory and complexity.
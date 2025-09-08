---
layout: post
title: "My Own HashMap"
date: 2025-09-05 16:18:00 -0400
categories: apprenticeship update
---

Today I started implementing my own HashMap in Java to better understand how
key-value storage works under the hood.

# How It Works

- Array Backing: Keys and values are stored in an underlying array.
- Hashing: Each key is hashed to determine its index.
- Chaining: Collisions are handled using linked lists at each array index.
- Resizing: The array grows when it fills up, and all keys are rehashed.

```java

public void put(K key, V value) {
    int index = hash(key) % capacity;
    if (buckets[index] == null) {
        buckets[index] = new LinkedList<>();
    }
    for (Node node : buckets[index]) {
        if (node.key.equals(key)) {
            node.value = value;
            return;
        }
    }
    buckets[index].add(new Node(key, value));
}

public V get(K key) {
    int index = hash(key) % capacity;
    if (buckets[index] != null) {
        for (Node node : buckets[index]) {
            if (node.key.equals(key)) {
                return node.value;
            }
        }
    }
    return null;
}

```

Implementing a Hash Map yourself makes you really appreciate the efficiency and
design decisions of the built-in Java HashMap, especially how it handles
collisions and resizing.
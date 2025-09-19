---
layout: post
title: "Collisions"
date: 2025-09-09 16:18:00 -0400
categories: apprenticeship update
---

After finishing resizing and rehashing in my custom HashMap, I turned my
attention to collisions.

# What’s a Collision?

A collision happens when two different keys produce the same bucket index
after hashing. For example:

- `"cat".hashCode() % 16 → 5`
- `"dog".hashCode() % 16 → 5`

Both map to bucket 5, but we need to store them separately.

# My Solution: Chaining

I chose separate chaining, which means each bucket holds a linked list
(or any list structure) of entries. When a collision happens, the new key-value
pair just gets added to the list.

```java

@Override
public void put(TKey key, TValue value) {
    assertKeyNotNull(key);
    expandMapIfNeeded();
    int bucketIdx = getBucketIdx(key);
    List<Entry<TKey, TValue>> bucket = buckets.get(bucketIdx);

    for (Entry<TKey, TValue> entry : bucket) {
        if (entry.key.equals(key)) {
            entry.value = value;
            return;
        }
    }
    bucket.add(new Entry<>(key, value));
    length++;
}

```

And when retrieving:

```java

@Override
public TValue get(TKey key) {
    assertKeyNotNull(key);
    int bucketIdx = getBucketIdx(key);
    List<Entry<TKey, TValue>> bucket = buckets.get(bucketIdx);

    for (Entry<TKey, TValue> entry : bucket) {
        if (entry.key.equals(key)) {
            return entry.value;
        }
    }
    throw new NullPointerException("Key does not exist: " + key);
}

```

# What I Learned

- Collisions are inevitable, no matter how good the hash function.
- With chaining, the average get and put operations are still very fast
  (O(1)), unless the load factor gets too high.
---
title: "JavaScript Array Methods Cheat Sheet"
description: "A practical reference for the most useful JavaScript array methods with real-world examples."
pubDate: "2026-02-15"
tags: ["javascript", "arrays"]
---

```javascript
const users = [
  { id: 1, name: 'Alice', age: 30, active: true },
  { id: 2, name: 'Bob',   age: 25, active: false },
  { id: 3, name: 'Carol', age: 35, active: true },
];

// filter - keep items matching condition
const activeUsers = users.filter(u => u.active);

// map - transform each item
const names = users.map(u => u.name); // ['Alice', 'Bob', 'Carol']

// find / findIndex
const alice      = users.find(u => u.name === 'Alice');
const aliceIndex = users.findIndex(u => u.name === 'Alice'); // 0

// reduce - fold array into single value
const totalAge = users.reduce((sum, u) => sum + u.age, 0); // 90

// some / every
const hasInactive = users.some(u => !u.active);  // true
const allActive   = users.every(u => u.active);  // false

// flatMap - map + flatten 1 level
const tags = [['js','ts'],['node','js']].flatMap(t => t);

// sort (creates new array with spread)
const sorted = [...users].sort((a, b) => a.age - b.age);

// Object.groupBy (ES2024)
const byStatus = Object.groupBy(users, u => u.active ? 'active' : 'inactive');

// Array.from with length trick
const range = Array.from({ length: 5 }, (_, i) => i + 1); // [1,2,3,4,5]
```

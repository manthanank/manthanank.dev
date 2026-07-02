---
title: "JavaScript Promise Patterns"
description: "Modern async/await patterns for parallel execution, error handling, and timeouts."
pubDate: "2026-03-20"
tags: ["javascript", "async", "typescript"]
---

```javascript
// 1. Basic async/await with error handling
async function fetchUser(id) {
  try {
    const res = await fetch(`/api/users/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('Failed:', error);
    throw error;
  }
}

// 2. Parallel execution
async function fetchAll() {
  const [users, posts] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
  ]);
  return { users, posts };
}

// 3. Promise.allSettled - don't fail on partial errors
const results = await Promise.allSettled([
  fetch('/api/fast').then(r => r.json()),
  fetch('/api/broken').then(r => r.json()), // might fail
]);
const successes = results.filter(r => r.status === 'fulfilled').map(r => r.value);

// 4. Race with timeout
function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error(`Timed out after ${ms}ms`)), ms)
  );
  return Promise.race([promise, timeout]);
}

// 5. Retry with exponential backoff
async function retry(fn, retries = 3, delay = 1000) {
  try { return await fn(); }
  catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
}
```

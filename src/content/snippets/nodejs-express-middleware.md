---
title: "Express.js Middleware Patterns"
description: "How to write, compose, and use Express.js middleware for auth, logging, and error handling."
pubDate: "2026-03-01"
tags: ["node.js", "express", "javascript"]
---

```javascript
const express = require('express');
const app = express();

// 1. Basic middleware (runs on every request)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

// 2. Route-specific middleware
function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    req.user = verifyToken(token);
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
}

app.get('/profile', requireAuth, (req, res) => res.json(req.user));

// 3. Error-handling middleware (4 params signature)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// 4. Async wrapper - auto-forwards errors to error middleware
const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

app.get('/data', asyncHandler(async (req, res) => {
  const data = await fetchData();
  res.json(data);
}));
```

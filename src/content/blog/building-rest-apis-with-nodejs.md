---
title: "Building REST APIs with Node.js and Express"
description: "A step-by-step guide to creating robust RESTful APIs using Node.js, Express, and MongoDB with best practices."
pubDate: 2025-12-10
tags: ["Node.js", "Express", "API", "MongoDB"]
---

Building RESTful APIs is a fundamental skill for any full-stack developer. In this guide, we'll walk through creating a production-ready API with Node.js and Express.

## Project Setup

Start by initializing a new Node.js project and installing dependencies:

```bash
mkdir my-api && cd my-api
npm init -y
npm install express mongoose dotenv cors helmet
npm install -D typescript @types/express @types/node
```

## Creating the Server

```typescript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## Defining Models

Using Mongoose for MongoDB integration:

```typescript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model('User', userSchema);
```

## Best Practices

- **Use proper HTTP status codes** — 200 for success, 201 for created, 404 for not found
- **Validate input** — Always validate request bodies and parameters
- **Handle errors gracefully** — Use error middleware for consistent error responses
- **Use environment variables** — Never hardcode sensitive configuration
- **Rate limiting** — Protect your API from abuse
- **Logging** — Use structured logging for debugging and monitoring

Following these practices ensures your API is robust, secure, and maintainable.

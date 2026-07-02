---
title: "Node.js File I/O with fs/promises"
description: "Modern Node.js file operations using async/await with the fs/promises API."
pubDate: "2026-04-20"
tags: ["node.js", "javascript"]
---

```javascript
import { readFile, writeFile, readdir, stat, mkdir, unlink, copyFile } from 'fs/promises';
import { join } from 'path';

// Read
const content = await readFile('config.json', 'utf-8');
const config  = JSON.parse(content);

// Write (creates or overwrites)
await writeFile('output.json', JSON.stringify(data, null, 2), 'utf-8');

// Append
import { appendFile } from 'fs/promises';
await appendFile('log.txt', `${new Date().toISOString()} - Event
`);

// List directory
const files   = await readdir('./src');
const jsFiles = files.filter(f => f.endsWith('.js'));

// File metadata
const info = await stat('./package.json');
console.log(info.size, info.mtime);

// Create directory (recursive)
await mkdir('./dist/assets/icons', { recursive: true });

// Copy / Delete
await copyFile('src.txt', 'dest.txt');
await unlink('./temp.txt');

// Walk directory recursively (async generator)
async function* walkDir(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walkDir(full);
    else yield full;
  }
}

for await (const file of walkDir('./src')) {
  console.log(file);
}
```

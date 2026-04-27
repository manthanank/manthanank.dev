---
title: "How to copy text to clipboard in modern JavaScript"
description: "A quick snippet to copy text using the modern Navigator API."
pubDate: "2026-04-27"
tags: ["javascript", "web-api"]
---

Using the modern `navigator.clipboard` API is the recommended way to copy text to the clipboard in modern browsers. It returns a Promise, making it easy to handle success and error cases.

```javascript
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

// Usage
copyToClipboard('Hello, World!');
```

Make sure that you only call this function as a result of a user action (like a click event), otherwise the browser might block it.

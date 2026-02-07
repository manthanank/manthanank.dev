---
title: "Creating npm Packages for Angular"
description: "Learn how to create, publish, and maintain npm packages specifically designed for Angular applications."
pubDate: 2025-08-01
tags: ["Angular", "npm", "TypeScript"]
---

Publishing npm packages is a great way to share reusable code with the Angular community. Here's a complete guide to creating your first Angular library.

## Generating a Library

Use the Angular CLI to scaffold a library project:

```bash
ng new my-workspace --no-create-application
cd my-workspace
ng generate library my-awesome-lib
```

This creates a proper library structure with its own `package.json`, `tsconfig`, and build configuration.

## Building the Library

```bash
ng build my-awesome-lib
```

The output goes to `dist/my-awesome-lib/` with proper ES module bundles and type definitions.

## Writing Components

```typescript
@Component({
  selector: 'lib-greeting',
  standalone: true,
  template: `<p class="greeting">Hello, {{ name }}!</p>`,
  styles: [`.greeting { color: #00d4ff; font-weight: bold; }`],
})
export class GreetingComponent {
  @Input() name = 'World';
}
```

## Publishing

```bash
cd dist/my-awesome-lib
npm publish
```

## Best Practices

- **Peer dependencies** — List Angular as a peer dependency, not a regular dependency
- **Tree-shaking** — Use `sideEffects: false` for better bundle sizes
- **Semantic versioning** — Follow semver for releases
- **Documentation** — Include a comprehensive README with examples
- **Testing** — Write unit tests for all public APIs
- **Changelog** — Maintain a changelog for each version

Creating well-maintained npm packages helps the community and establishes your expertise.

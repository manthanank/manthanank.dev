// One list of published npm packages, shared by /packages and /dashboard.
//
// They used to be two lists: /packages had all 16, /dashboard summed 9 of
// them, so the site showed two different weekly-download totals (61 and 48).
export type NpmPackage = {
  name: string;
  description: string;
  keywords: string[];
};

export const NPM_PACKAGES: NpmPackage[] = [
  { name: '@manthanankolekar/ng-icons', description: 'A collection of custom icons for Angular applications.', keywords: ['angular', 'icons', 'svg'] },
  { name: '@manthanankolekar/ng-loader', description: 'A lightweight and customizable loading spinner/loader component for Angular.', keywords: ['angular', 'loader', 'spinner', 'loading'] },
  { name: '@manthanankolekar/ng-markdown', description: 'Angular library to parse and render Markdown directly in templates.', keywords: ['angular', 'markdown', 'parser', 'marked'] },
  { name: '@manthanankolekar/ng-pagination', description: 'Custom pagination component for Angular with support for custom templates.', keywords: ['angular', 'pagination', 'paging'] },
  { name: '@manthanankolekar/custom-directives', description: 'A collection of helpful custom Angular directives for daily tasks.', keywords: ['angular', 'directives', 'utility'] },
  { name: 'learn-angular', description: 'Learn Angular from basic components to advanced signals.', keywords: ['angular', 'signals', 'typescript', 'tutorials'] },
  { name: 'learn-rxjs', description: 'Learn RxJS with interactive code examples and visual explanations.', keywords: ['rxjs', 'observables', 'reactive', 'javascript'] },
  { name: 'learn-mongodb', description: 'Learn MongoDB database operations and shell commands.', keywords: ['mongodb', 'database', 'nosql', 'backend'] },
  { name: 'learn-javascript', description: 'Learn JavaScript from basic syntax to advanced promises.', keywords: ['javascript', 'async', 'promises', 'es6'] },
  { name: 'learn-docker', description: 'Learn Docker containers and compose configuration.', keywords: ['docker', 'containers', 'devops', 'deployment'] },
  { name: 'learn-nestjs', description: 'Learn NestJS server-side framework and architecture.', keywords: ['nestjs', 'typescript', 'node.js', 'backend'] },
  { name: 'learn-mysql', description: 'Learn MySQL database operations, joins, and queries.', keywords: ['mysql', 'database', 'sql', 'backend'] },
  { name: 'learn-html', description: 'Learn HTML structures and semantical layout tags.', keywords: ['html', 'markup', 'seo', 'accessibility'] },
  { name: 'learn-css', description: 'Learn CSS layouts, flexbox, and grid.', keywords: ['css', 'layouts', 'flexbox', 'grid'] },
  { name: 'learn-scss', description: 'Learn SCSS variables, mixins, nesting, and functions.', keywords: ['scss', 'sass', 'css', 'styling'] },
  { name: 'manthanank', description: 'Official personal utility library of Manthan Ankolekar.', keywords: ['personal', 'utility', 'helper', 'manthanank'] },
];

export const NPM_PACKAGE_NAMES = NPM_PACKAGES.map((p) => p.name);

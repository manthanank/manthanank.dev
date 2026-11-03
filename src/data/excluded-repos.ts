// Repositories this site never shows, whatever GitHub returns.
//
// The projects pages are built from the GitHub API: pinned repos plus the
// most recent ones. Private repositories are filtered out in the queries
// themselves (privacy: PUBLIC / isPrivate). Any extra names to hide are read
// at build time from the EXCLUDED_REPOS environment variable, as a
// comma-separated list, so they never need to live in the source.
//
// Matching is on the repository name, lowercased, and covers the obvious
// variants so a rename does not quietly reintroduce one.
const EXCLUDED: string[] = String(import.meta.env.EXCLUDED_REPOS ?? '')
  .split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

export function isExcludedRepo(name: string | undefined | null): boolean {
  if (!name) return false;
  const n = name.toLowerCase();
  return EXCLUDED.some((e) => n === e || n.startsWith(`${e}-`) || n.startsWith(`${e}_`));
}

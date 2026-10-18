// Repositories this site never shows, whatever GitHub returns.
//
// The projects pages are built from the GitHub API — pinned repos plus the
// most recent ones — so anything public shows up on its own. These products
// are kept separate from the portfolio deliberately: no case study, no card,
// no mention. Pinning one on GitHub must not put it back on the site.
//
// Matching is on the repository name, lowercased, and covers the obvious
// variants so a rename does not quietly reintroduce one.
const EXCLUDED = [
  'reconos',
  'recon',
  'handoff',
  'carepulse',
];

export function isExcludedRepo(name: string | undefined | null): boolean {
  if (!name) return false;
  const n = name.toLowerCase();
  return EXCLUDED.some((e) => n === e || n.startsWith(`${e}-`) || n.startsWith(`${e}_`));
}

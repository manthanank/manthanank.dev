---
title: "ReconOS"
description: "Reconditioning software for used-car dealerships: the shop board, the clocks behind it, and a migration path off the incumbent."
pubDate: 2026-10-01
tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Docker", "AWS"]
featured: true
---

<!-- TODO (Manthan): add 2-3 screenshots — the board, the Inbound strip, the import preview — and drop them in /public/work/reconos/. Add real numbers once the pilot store reports them: days saved per car, cars per month. -->

## The problem

A used car earns nothing while it sits in reconditioning. Dealerships measure that wait as time-to-line, and the tools they use measure it from the moment the car reaches the shop floor — not from the day the store bought it. The gap between those two dates is where the cost hides.

## What I built

A full reconditioning platform: a board with per-step lanes the store names itself, SLA timers per step, an Inbound strip for cars the store owns but has not started, vendor portals, 22 reports, a public API with webhooks, and a Chrome extension that marks VINs on any page and tells a manager which cars are already in recon.

## The hard part

Getting a store to switch means taking its history with it. The migration reads the incumbent's inventory export, maps a store's 30 named steps onto the board's lanes, and rebuilds each car's three clocks — acquired date, days in recon, days in the current step — so nothing arrives looking like it showed up this morning.

That importer is pinned by tests against a dealership's real exports, because the synthetic fixtures passed while the importer quietly collapsed all 143 cars into one stage. The same tests caught the vendor changing its export format: columns renamed, and both signals for "this car has left" removed. Imported as-is, 29 sold cars would have landed back on the shop board.

## Result

A first store moved across in a single pass: 97 live cars from a 126-row export, each in the right lane with its clocks intact, and 29 cars correctly left out. The import surfaced what the old tool never showed — a median of 3.5 days, and one car of 140 days, spent waiting *before* recon started.

## Running it

Self-hosted on one EC2 box: Docker, self-hosted Supabase, Caddy for TLS. CI builds the image, pushes it to ECR, and the box pulls it within five minutes, applying migrations and rolling back if the health check fails. A memory leak that had the app at 350MB after a day now sits at 111MB after ten.

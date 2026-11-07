---
title: "Handoff"
description: "Test-drive and service-pickup damage proof for dealerships: mobile-first vehicle condition capture, loaner tracking, and dispute-proof claim packets."
pubDate: 2026-10-10
tags: ["TypeScript", "PostgreSQL", "Supabase", "Next.js", "Automotive"]
live: "https://handoff.3-130-85-220.sslip.io/"
company: "Tech Ventures Group"
featured: true
category: "work"
---

## The Problem

A vehicle changes hands multiple times a day at an automotive dealership: service drop-off to loaner car, loaner return back to service, trade-in intake, sold-vehicle pre-delivery inspection, and transit to sublet body shops.

Each transition is an implicit promise made by an advisor and a physical vehicle condition inherited by a customer or team member. In traditional dealership workflows, this is captured on crumpled paper walkaround slips or omitted entirely due to customer time pressure. When a dent, rim rash, or cracked windshield is discovered after pickup, the dispute is acrimonious, and the store inevitably pays out-of-pocket goodwill claims averaging thousands of dollars monthly due to zero photographic or timestamped proof.

## What I Built

- **Mobile-First Capture Workflow**: Optimized for service advisors standing beside a vehicle holding a phone in one hand. Walkaround condition checks complete in under 30 seconds with quick-tap damage tagging and high-resolution photo uploads.
- **Loaner Fleet & Fleet Custody Tracking**: Real-time log of who released the vehicle, who received the keys, exact fuel/mileage levels, and pre-existing blemishes.
- **Automated Dispute Claim Packets**: One-click generation of immutable PDF and web claim dossiers containing GPS-verified timestamps, high-res photos with focal annotations, signed customer terms, and condition delta comparisons.
- **Advisor Accountability & Bottleneck Analytics**: Executive dashboards surfacing department-wide handover velocities, missed inspection rates, and claim mitigation metrics.

## The Hard Part: Sub-30-Second Frictionless UX

In automotive retail, any software that delays an advisor or customer by more than 30 seconds gets bypassed. A half-used capture system is worse than none at all, because skipped records look like affirmative evidence that damage occurred on-site.

The architecture was built offline-first with immediate client-side image compression in Web Workers, background progressive upload sync via IndexedDB, and tap-optimized SVG body diagrams allowing advisors to pinpoint panels and hail damage without typing a word.

## Technology Stack

- **Frontend**: Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, HTML5 Canvas image markup.
- **Backend & Database**: PostgreSQL with fine-grained Row-Level Security (RLS) guaranteeing strict multi-tenant isolation between dealer groups.
- **Authentication & Storage**: Supabase Auth with custom role-based permissions (service advisors, sales reps, BDC agents, GM auditors) and S3-compatible asset pipelines with presigned URLs.
- **Infrastructure**: Deployed on production cloud infrastructure with automatic SSL, database connection pooling, and continuous migration rollback safety.

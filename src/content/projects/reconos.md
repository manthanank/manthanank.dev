---
title: "ReconOS"
description: "Reconditioning software for used-car dealerships: the shop Kanban board, stage SLA timers, legacy DMS migration engine, and self-hosted Docker/EC2 infrastructure."
pubDate: 2026-10-01
tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Docker", "AWS"]
company: "Tech Ventures Group"
featured: true
category: "work"
---

## The Problem

A used vehicle earns nothing while sitting idle in reconditioning. Automotive dealerships track this critical operational metric as **time-to-line** (or frontline turn velocity). Each day a car spends in recon costs an estimated \$30 to \$50 in holding costs and depreciating retail value.

Incumbent reconditioning software in the dealership sector measures time-to-line only from the moment a vehicle physically arrives at the shop floor — ignoring the days or weeks between when the store purchased the vehicle at auction or trade-in and when recon intake actually started. The true holding cost was completely hidden from general managers.

## What I Built at Tech Ventures Group

- **Real-Time Reconditioning Shop Board**: Full interactive Kanban board featuring customized stage lanes (Mechanical Inspection, Body & Paint, Detail, Photography, Frontline Ready) with per-step SLA countdown timers.
- **Inbound Staging Strip**: Dedicated visibility for vehicles purchased at auction or accepted as trade-ins that have not yet reached the service bay, eliminating the blind spot between acquisition and reconditioning.
- **Vendor & Sublet Portals**: External collaborator access allowing wheel repair specialists, paintless dent repair (PDR) technicians, and glass vendors to update vehicle status without exposing internal accounting.
- **DMS Migration Engine**: Automated migration pipeline that reads legacy incumbent data exports, reconstructs historical vehicle clocks (acquired date, total recon time, lane duration), and maps legacy steps onto ReconOS lanes without losing audit history.
- **Chrome Extension**: In-browser overlay that detects Vehicle Identification Numbers (VINs) across any dealership CRM, auction site, or DMS page, instantly alerting managers to recon status and pending roadblocks.

## The Hard Part: Legacy Migration Without Data Corruption

Convincing dealership groups to abandon decades-old incumbent software requires migrating their active pipeline seamlessly. When running tests with actual dealership inventory exports, synthetic fixtures had quietly masked that 143 vehicles were collapsing into a single stage due to unexpected column renames in vendor updates.

I built an automated end-to-end ingestion test suite against real-world dirty CSV and JSON exports. When a major competitor modified its export schema to strip terminal state flags, our parser caught the deviation, preventing 29 previously sold vehicles from erroneously reappearing on the active shop floor.

## Infrastructure & Self-Hosting

- **Hosting Architecture**: Self-hosted on AWS EC2 instances with Docker Compose, running containerized PostgreSQL, Supabase, and Caddy reverse proxy for zero-configuration TLS.
- **CI/CD & Zero-Downtime Releases**: GitHub Actions builds container images, pushes to Amazon ECR, and executes automated rolling deployment with health-check verified rollbacks.
- **Resource Optimization**: Profiled and resolved memory leaks in long-lived server processes, reducing steady-state RAM consumption from 350MB down to 111MB under active multi-tenant workloads.

---
title: "CarePulse"
description: "Remote patient monitoring for clinics: daily check-ins, an alert queue staff can actually work, and the billing evidence that pays for it."
pubDate: 2026-08-15
tags: ["TypeScript", "PostgreSQL", "Supabase", "Healthcare"]
github: "https://github.com/manthanank/carepulse"
featured: true
---

<!-- TODO (Manthan): add screenshots of the alert queue and the billing summary to /public/work/carepulse/, plus real numbers once a clinic is live: patients enrolled, alerts actioned per week, minutes billed. -->

## The problem

Remote patient monitoring pays clinics for two things: collecting readings, and spending time on them. Most clinics lose the second part. Readings arrive, nobody has a worklist, and at the end of the month there is no record of who reviewed what — so the billable time cannot be claimed.

## What I built

Daily check-ins patients can complete without training, an alert queue ordered by what needs attention first rather than by what arrived last, and time tracking that records review work as it happens instead of reconstructing it later.

## The hard part

Alert fatigue. A monitoring system that flags everything gets ignored within a week, and an ignored alert queue is worse than none because the clinic now believes someone is watching. Thresholds are per patient, repeated readings are grouped rather than stacked, and the queue is built so an empty one is normal.

## Stack

TypeScript end to end, Postgres with row-level security so one clinic can never read another's patients, and database functions for the aggregations that bill.

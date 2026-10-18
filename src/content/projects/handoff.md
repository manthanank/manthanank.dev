---
title: "Handoff"
description: "Service handover tooling for dealerships — the record of what was promised, what was done, and who has the car now."
pubDate: 2026-10-10
tags: ["TypeScript", "PostgreSQL", "Supabase", "Next.js"]
github: "https://github.com/manthanank/handoff"
featured: true
---

<!-- TODO (Manthan): add a screenshot of the handover record and one of the per-person report to /public/work/handoff/. Add the pilot numbers when they are in: handovers per week, disputes avoided. -->

## The problem

A car changes hands several times a day at a dealership — service to loaner, loaner back, sold car to delivery, vehicle to a body shop. Each handover is a promise someone made and a condition someone else inherits. Most stores record it on paper, or not at all, and the argument that follows a dent or a missed promise has no evidence behind it.

## What I built

A record for each handover: who released the car, who took it, the condition at that moment, and what was promised next. Loaner tracking, sold-car delivery, a claim packet that assembles the evidence for a dispute, and per-person reports so a manager can see where handovers stall.

## The hard part

It has to be faster than doing nothing. Anything that takes an advisor more than a few seconds at the car gets skipped, and a half-used system produces worse evidence than no system — the gaps look like proof that nothing happened. The capture flow is built for one hand on a phone, standing next to the vehicle.

## Status

Shipped and in production, with the feature queue driven by what the first users hit rather than by a roadmap.

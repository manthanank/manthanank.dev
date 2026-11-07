---
title: "CarePulse"
description: "20-second patient check-ins and remote patient monitoring for clinics: daily check-ins, alert triage queue, and automated CPT billing time tracking."
pubDate: 2026-08-15
tags: ["TypeScript", "PostgreSQL", "Supabase", "Healthcare", "Next.js"]
live: "https://carepulse.3-130-85-220.sslip.io/"
company: "Tech Ventures Group"
featured: true
category: "work"
---

## The Problem

Remote Patient Monitoring (RPM) programs provide vital ongoing care for patients with chronic conditions while allowing outpatient clinics to bill Medicare and private insurers under standardized CPT codes (such as CPT 99453, 99454, 99457, and 99458).

However, clinics consistently face two major operational breakdowns:
1. **Patient Non-Compliance**: Complex health apps overwhelm elderly patients, causing daily biometric check-in drop-offs within two weeks.
2. **Unclaimed Billable Time**: Insurance reimbursement requires clinical staff to spend a verified minimum of 20 minutes per patient per month reviewing data and managing care. Because clinicians constantly review vitals in informal fragments throughout the day, the time is rarely recorded concurrently — resulting in tens of thousands of dollars in lost monthly reimbursements per clinic.

## What I Built

- **20-Second Frictionless Patient Portal**: Lightweight, high-contrast, zero-training responsive interface where patients record daily blood pressure, glucose, pulse oximetry, and symptoms in under 20 seconds.
- **Intelligent Alert Triage Queue**: Dynamic clinical dashboard that prioritizes patients by clinical urgency rather than chronological arrival order. Critical biometric spikes immediately escalate to nurses.
- **Automated CPT Time & Activity Tracker**: Passive audit timer that automatically logs active physician and nurse review windows, note generation, and patient phone encounters, rolling them up directly into monthly CMS billing claims.
- **Clinic Management & Multi-Tenancy**: Complete staff onboarding, clinician assignment, and automated compliance reporting.

## The Hard Part: Alert Fatigue Mitigation

A healthcare monitoring system that generates false alarms or flags minor baseline deviations gets ignored within days. In clinical environments, an unworked alert queue is lethal because staff operate under the false assumption that someone else is monitoring the alerts.

To solve this, CarePulse incorporates adaptive patient baselines rather than rigid static thresholds. Biometric anomalies are dynamically grouped by trend slope rather than stacked as independent notifications. The interface is engineered so that an empty triage queue represents healthy calm rather than a backlog failure.

## Technology Stack

- **Frontend**: Next.js, React 19, TypeScript, Tailwind CSS, Lucide Icons, and accessible Radix UI primitives.
- **Backend & Database**: PostgreSQL with row-level security (RLS) guaranteeing strict HIPAA compliance and multi-tenant isolation between independent practices.
- **Business Logic & Billing**: Postgres stored procedures and transactional triggers calculating billable minute thresholds without floating point calculation errors.

# CLAUDE.md — ConSync Waitlist Landing Page

## 1. Overview

This document defines the technical implementation of the ConSync waitlist landing page.

The landing page is designed to:
- Capture high-intent diaspora users
- Qualify leads based on project context and pain
- Store structured data for follow-up and validation
- Serve as the first trust-building interface

---

## 2. Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form (form handling)
- Zod (schema validation)

### Backend (Lightweight)
- Next.js Server Actions OR API Routes

### Data Storage (Lean Setup)
- Airtable (better structure, easier querying)

---

## 3. Project Structure

```
/app
  /page.tsx              # Landing page
  /api/submit/route.ts   # API endpoint (if not using server actions)

 /components
  /Hero.tsx
  /FounderLetter.tsx
  /SystemExplanation.tsx
  /WaitlistForm.tsx

 /lib
  /validation.ts
  /submit.ts

 /styles
  globals.css
```

---

## 4. Form Architecture

### Multi-Step Form (Recommended)

Step 1: Identity  
Step 2: Project Context  
Step 3: Pain & Readiness  

---

## 5. Form Schema (Zod)

```ts
import { z } from "zod";

export const waitlistSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  location: z.string(),

  projectStatus: z.enum([
    "current",
    "soon",
    "exploring"
  ]),

  projectLocation: z.string(),
  projectType: z.enum([
    "personal",
    "rental",
    "commercial"
  ]),

  budget: z.enum([
    "5-20",
    "20-50",
    "50-100",
    "100+"
  ]),

  currentManagement: z.enum([
    "contractor",
    "contractor_relative",
    "supervisor",
    "none"
  ]),

  verificationMethod: z.string().optional(),

  lossExperience: z.enum([
    "yes",
    "no",
    "unsure"
  ]),

  controlGap: z.enum([
    "payments",
    "materials",
    "progress",
    "communication"
  ]),

  monthlyLoss: z.string().optional(),

  urgency: z.enum([
    "immediate",
    "1-3months",
    "later"
  ]),

  escrowWillingness: z.enum([
    "yes",
    "maybe",
    "no"
  ])
});
```

---

## 6. Form Implementation (React Hook Form)

```ts
const form = useForm<z.infer<typeof waitlistSchema>>({
  resolver: zodResolver(waitlistSchema),
});
```

---

## 7. Submission Flow

Airtable

Why Airtable is better:
- Structured data
- Easy filtering
- No script maintenance
- Cleaner UI for managing leads

Use:
- Airtable API
- Or tools like Make/Zapier

---

## 8. UX Considerations

### Critical Rules

- Max 6–8 visible inputs per step
- Use progress indicator
- Show real-time validation
- Auto-save form state (localStorage)

---

### Micro-Interactions

- Button loading state
- Success confirmation screen
- Error handling (network issues)

---

## 9. Conversion Enhancements

- Sticky CTA button
- Inline trust statements:
  - “Used by diaspora builders”
  - “Designed for Nigerian construction realities”

- Post-submit:
  - Show confirmation message

---

## 10. Security Considerations

- Validate inputs on both client and server
- Prevent spam:
  - Add honeypot field
  - Add reCAPTCHA

---

## 11. Deployment

- Vercel (recommended)
- Environment variables:
  - AIRTABLE_API_KEY
---

## 12. Analytics (Don’t Skip This)

Track:
- Form start rate
- Step drop-off rate
- Submission rate

Tools:
- PostHog (better for product insight)

---

## 13. Other

- Automated email follow-up

---

## 14. Future Enhancements

- CRM integration (HubSpot / Notion)
- Lead scoring system
- Direct onboarding pipeline

---

## 15. Final Principle

This page is not a brochure.

It is:
> A filtering system for serious users
> A data collection engine
> A psychological conversion funnel

If it looks “nice” but doesn’t convert → it failed.
If it feels direct and slightly uncomfortable → it’s working.
import { z } from 'zod';

export const waitlistSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits.'),
  location: z.string().min(2, 'Location is required.'),

  projectStatus: z.enum([
    "current",
    "soon",
    "exploring"
  ] as const, {
    message: "Please select a project status."
  }),

  projectLocation: z.string().min(2, 'Project location is required.'),
  projectType: z.enum([
    "personal",
    "rental",
    "commercial"
  ] as const, {
    message: "Please select a project type."
  }),

  budget: z.enum([
    "5m-20m",
    "20m-50m",
    "50m-100m",
    "100m+"
  ] as const, {
    message: "Please select a budget."
  }),

  currentManagement: z.enum([
    "contractor",
    "contractor_relative",
    "supervisor",
    "none"
  ] as const, {
    message: "Please select a management option."
  }),

  verificationMethod: z.string().optional(),

  lossExperience: z.enum([
    "yes",
    "no",
    "unsure"
  ] as const, {
    message: "Please select an option."
  }),

  controlGap: z.enum([
    "payments",
    "materials",
    "progress",
    "communication"
  ] as const, {
    message: "Please select a control gap."
  }),

  monthlyLoss: z.string().optional(),

  urgency: z.enum([
    "immediate",
    "1-3months",
    "later"
  ] as const, {
    message: "Please select an urgency level."
  }),

  escrowWillingness: z.enum([
    "yes",
    "maybe",
    "no"
  ] as const, {
    message: "Please select an option."
  })
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;

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
  ], {
    errorMap: () => ({ message: "Please select a project status." })
  }),

  projectLocation: z.string().min(2, 'Project location is required.'),
  projectType: z.enum([
    "personal",
    "rental",
    "commercial"
  ], {
    errorMap: () => ({ message: "Please select a project type." })
  }),

  budget: z.enum([
    "5-20",
    "20-50",
    "50-100",
    "100+"
  ], {
    errorMap: () => ({ message: "Please select a budget." })
  }),

  currentManagement: z.enum([
    "contractor",
    "contractor_relative",
    "supervisor",
    "none"
  ], {
    errorMap: () => ({ message: "Please select a management option." })
  }),
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;

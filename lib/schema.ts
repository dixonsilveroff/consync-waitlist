import { z } from "zod";

export const waitlistSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(2, "Please enter your current location"),

  projectStatus: z.enum(["current", "soon", "exploring"], {
    required_error: "Please select a project status",
  }),
  projectLocation: z.string().min(2, "Please enter the project location"),
  projectType: z.enum(["personal", "rental", "commercial"], {
    required_error: "Please select a project type",
  }),
  budget: z.enum(["5-20", "20-50", "50-100", "100+"], {
    required_error: "Please select an estimated budget",
  }),
  
  currentManagement: z.enum([
    "contractor",
    "contractor_relative",
    "supervisor",
    "none"
  ], {
    required_error: "Please specify how it is currently managed",
  }),
  
  verificationMethod: z.string().optional(),
  
  lossExperience: z.enum(["yes", "no", "unsure"], {
    required_error: "Please tell us if you've experienced losses",
  }),
  
  controlGap: z.enum([
    "payments",
    "materials",
    "progress",
    "communication"
  ], {
    required_error: "Please select the biggest control gap",
  }),
  
  monthlyLoss: z.string().optional(),
  
  urgency: z.enum(["immediate", "1-3months", "later"], {
    required_error: "Please tell us your timeline",
  }),
  
  escrowWillingness: z.enum(["yes", "maybe", "no"], {
    required_error: "Please tell us if you'd be willing to use escrow",
  }),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
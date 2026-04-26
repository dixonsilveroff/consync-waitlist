"use server";

import Airtable from "airtable";
import { waitlistSchema, type WaitlistFormData } from "./schema";

// Initialize Airtable. You will need to add these to your .env.local
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || "Waitlist";

export async function submitToWaitlist(data: WaitlistFormData) {
  try {
    // Validate the incoming data on the server
    const validatedData = waitlistSchema.parse(data);

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.warn("Airtable credentials missing. Logging submission instead:");
      console.log(validatedData);
      // We simulate a delay so the UI shows loading
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    }

    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

    // Map the validated data to Airtable fields
    // Ensure your Airtable columns exactly match these keys or modify them here
    await base(AIRTABLE_TABLE_NAME).create([
      {
        fields: {
          "Full Name": validatedData.fullName,
          "Email": validatedData.email,
          "Phone": validatedData.phone,
          "Location": validatedData.location,
          "Project Status": validatedData.projectStatus,
          "Project Location": validatedData.projectLocation,
          "Project Type": validatedData.projectType,
          "Budget": validatedData.budget,
          "Current Management": validatedData.currentManagement,
          "Verification Method": validatedData.verificationMethod || "",
          "Loss Experience": validatedData.lossExperience,
          "Control Gap": validatedData.controlGap,
          "Monthly Loss": validatedData.monthlyLoss || "",
          "Urgency": validatedData.urgency,
          "Escrow Willingness": validatedData.escrowWillingness,
          "Submission Date": new Date().toISOString(),
        },
      },
    ]);

    return { success: true };
  } catch (error) {
    console.error("Failed to submit to waitlist:", error);
    throw new Error("Failed to submit to waitlist. Please try again.");
  }
}
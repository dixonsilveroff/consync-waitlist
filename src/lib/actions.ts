"use server";

import { waitlistSchema, WaitlistFormValues } from './schema';
import Airtable from 'airtable';

export async function submitWaitlistForm(data: WaitlistFormValues) {
  const parsedData = waitlistSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      message: 'Invalid form data.',
    };
  }

  try {
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME || 'Waitlist';

    if (!apiKey || !baseId) {
      return {
        success: false,
        message: 'Server is not configured for submissions yet.',
      };
    }

    const base = new Airtable({ apiKey }).base(baseId);

    const submission = parsedData.data;
    const fields = {
      fullName: submission.fullName,
      email: submission.email,
      phone: submission.phone,
      location: submission.location,
      projectStatus: submission.projectStatus,
      projectLocation: submission.projectLocation,
      projectType: submission.projectType,
      budget: submission.budget,
      currentManagement: submission.currentManagement,
      lossExperience: submission.lossExperience,
      controlGap: submission.controlGap,
      urgency: submission.urgency,
      escrowWillingness: submission.escrowWillingness,
      verificationMethod: submission.verificationMethod?.trim() || undefined,
      monthlyLoss: submission.monthlyLoss?.trim() || undefined,
      source: 'website_waitlist',
      submittedAt: new Date().toISOString(),
    };

    const sanitizedFields = Object.fromEntries(
      Object.entries(fields).filter(([, value]) => value !== undefined && value !== '')
    );

    await base(tableName).create([
      {
        fields: sanitizedFields,
      },
    ]);

    return {
      success: true,
      message: 'Thank you for joining the waitlist!',
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    };
  }
}

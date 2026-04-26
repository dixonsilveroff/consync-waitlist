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
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!);
    
    await base('Waitlist').create([
      {
        fields: {
          ...parsedData.data,
        },
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

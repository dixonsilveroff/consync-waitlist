import { Resend } from 'resend';
import { render } from '@react-email/render';
import WelcomeEmail from '@/emails/WelcomeEmail';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

type ProjectType = 'personal' | 'rental' | 'commercial';
type Urgency = 'immediate' | '1-3months' | 'later';

export async function sendWelcomeEmail(data: {
  fullName: string;
  email: string;
  projectType: ProjectType;
  urgency: Urgency;
}) {
  const html = await render(
    React.createElement(WelcomeEmail, {
      fullName: data.fullName,
      projectType: data.projectType,
      urgency: data.urgency,
    })
  );

  const { error } = await resend.emails.send({
    from: 'ConSync <waitlist@consync.app>',
    to: data.email,
    subject: `You're in, ${data.fullName.split(' ')[0]} 🎉`,
    html,
  });

  if (error) {
    // Log but don't throw — Airtable save already succeeded, email is best-effort
    console.error('[Resend] Failed to send welcome email:', error);
  }
}

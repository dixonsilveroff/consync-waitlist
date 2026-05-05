import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

import * as React from 'react';

interface WelcomeEmailProps {
  fullName: string;
  projectType: 'personal' | 'rental' | 'commercial';
  urgency: 'immediate' | '1-3months' | 'later';
}

const projectTypeLabel: Record<WelcomeEmailProps['projectType'], string> = {
  personal: 'personal home build',
  rental: 'rental property',
  commercial: 'commercial project',
};

const urgencyLabel: Record<WelcomeEmailProps['urgency'], string> = {
  immediate: 'immediately',
  '1-3months': 'in the next 1–3 months',
  later: 'when the time is right',
};

const siteUrl = 'https://waitlist.consync.app';

const shareSubject = encodeURIComponent('Take control of your construction project — check this out');
const shareBody = encodeURIComponent(
  `Hey,\n\nI just joined the ConSync waitlist and thought you'd find it useful too.\n\nConSync gives you real-time visibility into your construction project — payments, materials, and progress — all in one place. No more wondering where your money went.\n\nJoin the waitlist here:\n${siteUrl}\n\nSee you there!`
);
const shareHref = `mailto:?subject=${shareSubject}&body=${shareBody}`;

// Feature items: icon + label (inline SVGs — lucide-react is client-only and cannot run in server actions)
const features: { icon: React.ReactNode; text: string }[] = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" />
      </svg>
    ),
    text: 'Real-time milestone tracking — know exactly what stage your project is at',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    text: 'Payment escrow — funds only release when work is verified',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.5 9.4l-9-5.19" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    text: 'Materials visibility — track what was ordered, delivered, and used',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: 'Contractor accountability — no more guessing games',
  },
];

export default function WelcomeEmail({ fullName, projectType, urgency }: WelcomeEmailProps) {
  const firstName = fullName.split(' ')[0];

  return (
    <Html>
      <Head />
      <Preview>You&apos;re on the ConSync waitlist — we&apos;ll be in touch soon.</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* Header */}
          <Section style={header}>
            <Text style={logo}>ConSync</Text>
            <Text style={tagline}>Construction, in your control.</Text>
          </Section>

          {/* Main Card */}
          <Section style={card}>
            <Heading style={heading}>
              You&apos;re on the list, {firstName}.{' '}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: 'inline', verticalAlign: 'middle' }}
              >
                <path d="M12 3l1.88 5.76a1 1 0 0 0 .95.69H21l-4.94 3.59a1 1 0 0 0-.36 1.12L17.58 20 12 16.41 6.42 20l1.88-5.84a1 1 0 0 0-.36-1.12L3 9.45h6.17a1 1 0 0 0 .95-.69L12 3z" />
              </svg>
            </Heading>

            <Text style={paragraph}>
              Thanks for joining ConSync. You&apos;re one of the first people building smarter — and
              we&apos;re glad you&apos;re here.
            </Text>

            <Text style={paragraph}>
              Based on what you shared, you&apos;re managing a{' '}
              <strong>{projectTypeLabel[projectType]}</strong> and you need a solution{' '}
              <strong>{urgencyLabel[urgency]}</strong>. We&apos;ve noted that — you&apos;ll hear
              from us first when access opens.
            </Text>

            {/* What's Coming */}
            <Section style={infoBox}>
              <Text style={infoHeading}>What ConSync gives you:</Text>
              {features.map((feature, i) => (
                <Row key={i} style={featureRow}>
                  <Column style={iconCell}>{feature.icon}</Column>
                  <Column style={textCell}>
                    <Text style={infoItem}>{feature.text}</Text>
                  </Column>
                </Row>
              ))}
            </Section>

            <Text style={paragraph}>
              In the meantime, if you know someone else dealing with the same headaches on their
              build — send them this link. The more people on the waitlist, the faster we move.
            </Text>

            {/* CTA */}
            <Section style={buttonSection}>
              <Button href={shareHref} style={button}>
                Share with Someone
              </Button>
            </Section>

            <Text style={smallText}>
              Clicking the button will open your email client with a pre-written message you can
              send to anyone managing a construction project.
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              You&apos;re receiving this because you signed up at{' '}
              <a href={siteUrl} style={footerLink}>
                {siteUrl}
              </a>
              .
            </Text>
            <Text style={footerText}>ConSync · Building trust into construction.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// ── Styles ───────────────────────────────────────────────────────────────────

const body: React.CSSProperties = {
  backgroundColor: '#f4f4f5',
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: '0',
  padding: '40px 0',
};

const container: React.CSSProperties = {
  maxWidth: '560px',
  margin: '0 auto',
};

const header: React.CSSProperties = {
  textAlign: 'center',
  padding: '0 0 24px 0',
};

const logo: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: '700',
  color: '#0f172a',
  margin: '0',
  letterSpacing: '-0.5px',
};

const tagline: React.CSSProperties = {
  fontSize: '13px',
  color: '#64748b',
  margin: '4px 0 0 0',
};

const card: React.CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  padding: '40px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
};

const heading: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: '700',
  color: '#0f172a',
  margin: '0 0 20px 0',
  lineHeight: '1.3',
};

const paragraph: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: '1.7',
  color: '#374151',
  margin: '0 0 16px 0',
};

const infoBox: React.CSSProperties = {
  backgroundColor: '#f8fafc',
  borderRadius: '10px',
  borderLeft: '3px solid #0ea5e9',
  padding: '20px 24px',
  margin: '24px 0',
};

const infoHeading: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: '600',
  color: '#0ea5e9',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  margin: '0 0 12px 0',
};

const featureRow: React.CSSProperties = {
  marginBottom: '8px',
};

const iconCell: React.CSSProperties = {
  width: '24px',
  verticalAlign: 'top',
  paddingTop: '2px',
};

const textCell: React.CSSProperties = {
  verticalAlign: 'top',
};

const infoItem: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#374151',
  margin: '0',
};

const buttonSection: React.CSSProperties = {
  textAlign: 'center',
  margin: '28px 0 12px 0',
};

const button: React.CSSProperties = {
  backgroundColor: '#0f172a',
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: '600',
  textDecoration: 'none',
  padding: '14px 32px',
  borderRadius: '8px',
  display: 'inline-block',
};

const smallText: React.CSSProperties = {
  fontSize: '12px',
  color: '#94a3b8',
  textAlign: 'center',
  margin: '0',
  lineHeight: '1.5',
};

const divider: React.CSSProperties = {
  borderColor: '#e2e8f0',
  margin: '24px 0 16px 0',
};

const footer: React.CSSProperties = {
  textAlign: 'center',
};

const footerText: React.CSSProperties = {
  fontSize: '12px',
  color: '#94a3b8',
  margin: '0 0 4px 0',
  lineHeight: '1.5',
};

const footerLink: React.CSSProperties = {
  color: '#94a3b8',
};

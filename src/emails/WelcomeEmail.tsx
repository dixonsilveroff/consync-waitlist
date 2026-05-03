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
import { ClipboardList, Package, Share2, ShieldCheck, Sparkles, Users } from 'lucide-react';
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

// Feature items: icon + label
const features: { icon: React.ReactNode; text: string }[] = [
  {
    icon: <ClipboardList size={16} color="#0ea5e9" strokeWidth={2} />,
    text: 'Real-time milestone tracking — know exactly what stage your project is at',
  },
  {
    icon: <ShieldCheck size={16} color="#0ea5e9" strokeWidth={2} />,
    text: 'Payment escrow — funds only release when work is verified',
  },
  {
    icon: <Package size={16} color="#0ea5e9" strokeWidth={2} />,
    text: 'Materials visibility — track what was ordered, delivered, and used',
  },
  {
    icon: <Users size={16} color="#0ea5e9" strokeWidth={2} />,
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
              <Sparkles
                size={22}
                color="#f59e0b"
                strokeWidth={2}
                style={{ display: 'inline', verticalAlign: 'middle' }}
              />
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
                <Row>
                  <Column style={{ paddingRight: '8px', verticalAlign: 'middle' }}>
                    <Share2 size={14} color="#ffffff" strokeWidth={2} style={{ display: 'block' }} />
                  </Column>
                  <Column style={{ verticalAlign: 'middle' }}>
                    Share with Someone
                  </Column>
                </Row>
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

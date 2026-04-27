import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import PostHogBootstrap from "@/components/PostHogBootstrap";
import AnalyticsConsentBanner from "@/components/AnalyticsConsentBanner";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "ConSync - The Future of Borderless Banking",
  description: "Join the waitlist for ConSync and get early access to foreign bank accounts, seamless payments, and competitive exchange rates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>
        <PostHogBootstrap />
        {children}
        <AnalyticsConsentBanner />
      </body>
    </html>
  );
}
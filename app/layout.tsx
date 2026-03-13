import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: {
    default: "L1 Coaching Center | JEE, NEET, SSC, Banking, Railways",
    template: "%s | L1 Coaching Center"
  },
  description:
    "Outcome-driven coaching for JEE, NEET, and Government exams in Varanasi with weekly analytics, mentor support, and test-based progress tracking.",
  keywords: [
    "JEE coaching Varanasi",
    "NEET coaching Varanasi",
    "SSC coaching",
    "Banking exam preparation",
    "Railways exam coaching",
    "test series",
    "coaching center Uttar Pradesh"
  ],
  applicationName: "L1 Coaching Center",
  creator: "L1 Coaching Center",
  publisher: "L1 Coaching Center",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    title: "L1 Coaching Center | Measurable Exam Preparation",
    description:
      "Structured preparation for JEE, NEET, SSC, Banking, and Railways with mentor-led plans and weekly progress analytics.",
    siteName: "L1 Coaching Center",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "L1 Coaching Center",
    description:
      "Mentor-led preparation for JEE, NEET, and Government exams with measurable weekly outcomes."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="page-bg" aria-hidden="true" />
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}

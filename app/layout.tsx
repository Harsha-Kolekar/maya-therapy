import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, California, offering warm, collaborative therapy for anxiety, panic, trauma, burnout, and perfectionism, with in-person and secure telehealth options.",
  keywords: [
    "therapy Santa Monica",
    "therapist Santa Monica",
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "burnout therapy Santa Monica",
    "EMDR Santa Monica",
    "clinical psychologist Santa Monica",
    "telehealth therapy California",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
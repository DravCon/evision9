import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Evision9 — Apps People Love",
    template: "%s | Evision9",
  },
  description:
    "Evision9 crafts thoughtful, beautiful apps for iPhone and Android: for giving things away, styling your wardrobe, keeping a diary you can talk to, and checking for early signs of oral cancer.",
  keywords: ["iOS apps", "Android apps", "mobile apps", "PassIt", "Me", "voice diary", "StyleMate", "AI stylist", "outfit ideas", "Sanket", "oral cancer screening", "Evision9", "indie developer"],
  authors: [{ name: "Evision9" }],
  openGraph: {
    title: "Evision9 — Apps People Love",
    description:
      "We craft thoughtful, beautiful apps that solve real problems.",
    url: "https://evision9.com",
    siteName: "Evision9",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evision9 — Apps People Love",
    description:
      "We craft thoughtful, beautiful apps that solve real problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-white text-brand-navy antialiased"
        style={{
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}

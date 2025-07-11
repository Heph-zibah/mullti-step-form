import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Multi Step Form",
  description: "Frontend Mentor Multi Step Form Challenge",
  keywords: [
    "multi step form",
    "frontend mentor",
    "frontendmentor",
    "shadcn",
    "reaact hook form",
    "typescript",
    "nextjs project",
  ],
  authors: [{ name: "Tosin Daramola", url: "https://oadaramola.vercel.app/" }],
  creator: "Tosin Daramola",
  openGraph: {
    title: "Multi Step Form",
    description: "Frontend Mentor Multi Step Form Challenge",
    url: "https://multi-step-frontendmentor-form.vercel.app/",
    siteName: "Multi Step Form",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Multi Step Form Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi Step Form",
    description: "Frontend Mentor Multi Step Form Challenge",
    creator: "@yourtwitterhandle",
    images: ["/preview.jpg"],
  },
  metadataBase: new URL("https://multi-step-frontendmentor-form.vercel.app/"),
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

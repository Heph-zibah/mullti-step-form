import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Multi Step Form",
  description: "Frontend Mentor Multi Step Form Challenge",
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

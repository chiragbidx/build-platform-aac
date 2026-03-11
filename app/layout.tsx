// Root server layout: applies global styles, mounts client-only ErrorReporter, and exposes user context for Mailvanta.
import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "../components/ErrorReporter";

export const metadata: Metadata = {
  title: "Mailvanta – Bulk Email Marketing SaaS",
  description: "Send, manage, and track high-volume email campaigns with ease. The fast, modern SaaS for deliverability at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}
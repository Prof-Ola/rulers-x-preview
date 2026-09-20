import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "RULERS-X Research Preview",
  description:
    "Evidence-based market and capital intelligence, launching first with digital assets.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

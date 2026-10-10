import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Merge Path",
  description: "Learn to evaluate open source repos before you contribute.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

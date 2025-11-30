import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkyeEd - Step Into Your AP Greatness",
  description: "Master your AP exam with our top-quality test-prep curriculum. Choose Skye Mentor for full-package or combine both for unbeatable results.",
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

import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const generalSans = localFont({
  src: [
    {
      path: "../public/fonts/GeneralSans/Fonts/WEB/fonts/GeneralSans-Variable.woff2",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans/Fonts/WEB/fonts/GeneralSans-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "neuralix.ai - Your entire data stack, simplified",
  description:
    "Unify your Engineering, Operations and Artificial Intelligence into a single, autonomous platform",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}

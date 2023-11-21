import { ReactNode } from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import { Nunito_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "ReKha",
  description: "An expense tracker for the modern age.",
};

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
  weight: "400",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${nunito_sans.variable} selection:bg-primary/75 selection:text-white-dark`}>
      <body>{children}</body>
    </html>
  );
}

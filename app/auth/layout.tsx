import { ReactNode } from "react";
import "@/app/globals.css";
import { Nunito_Sans } from "next/font/google";

export const metadata = {
  title: "Getting Started | ReKha",
  description: "Login or register as  a new user.",
};

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
  weight: "400",
});

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${nunito_sans.variable} selection:bg-primary/75 selection:text-white-dark`}
    >
      <body>{children}</body>
    </html>
  );
}

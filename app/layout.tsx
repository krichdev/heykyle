import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/content";

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
  weight: "400",
});

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased font-mono font-medium text-zinc-800`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/coffee-stain.png"
          alt=""
          className="absolute -top-20 -left-12 w-64 h-64 opacity-20 -rotate-45"
        />
        {children}
      </body>
    </html>
  );
}

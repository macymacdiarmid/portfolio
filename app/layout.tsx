import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Macy Macdiarmid — Designer",
  description: "Portfolio of Macy Macdiarmid — design, branding, and visual work.",
  openGraph: {
    title: "Macy Macdiarmid — Designer",
    description: "Portfolio of Macy Macdiarmid — design, branding, and visual work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderColor: "var(--border)", color: "var(--text-secondary)", fontSize: "0.8125rem" }}>
          <span>© {new Date().getFullYear()} Macy Macdiarmid</span>
          <span>Designed &amp; built with care</span>
        </footer>
      </body>
    </html>
  );
}

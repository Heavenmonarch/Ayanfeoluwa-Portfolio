import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adeogun Ayanfeoluwa Daniel — Fullstack Developer",
  description:
    "Fullstack developer building production-grade APIs and apps with Python, PHP and Laravel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth motion-reduce:scroll-auto">
      <body
        className={`${syne.className} bg-canvas p-[clamp(10px,3.6vw,52px)] text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
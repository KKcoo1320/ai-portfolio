import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bozhi Wang | AI Product Engineer",
  description: "Personal website for AI, Data Science, and Product Engineering"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark">
      <body className="font-[var(--font-body)]">
        {children}
      </body>
    </html>
  );
}

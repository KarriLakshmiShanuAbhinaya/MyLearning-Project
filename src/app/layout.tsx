import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "MyLearning Project | Strategic Digital Growth",
  description: "Helping modern brands scale with data-driven strategies and premium digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-white text-black min-h-screen flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

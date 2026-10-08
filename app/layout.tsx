import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sadino Technology",
    template: "%s | Sadino Technology",
  },
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Software house specializing in web development, UI/UX design, and scalable backend solutions.",
  keywords: [
    "Software House",
    "Web Development",
    "UI UX Design",
    "Backend API",
    "Mobile Apps",
  ],
  authors: [{ name: "Sadino Technology" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body
        className="min-h-screen flex flex-col bg-[#f7f9fb] text-gray-900 antialiased"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

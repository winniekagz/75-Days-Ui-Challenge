import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import Navbar from "@/layouts/Navbar";

// Global and external styles
import "@/assets/css/app.min.css";
import '@/assets/css/style.css'
import "@/assets/css/fontawesome.min.css";
import "./globals.css";

// FontAwesome configuration
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// Load custom local fonts
const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the app
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  // Add other metadata here if needed
  icons: {
    icon: "/favicon.ico", // Add a favicon if you have one
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main>{children}</main>

        {/* Lazy load external JavaScript files */}
        <Script src="/assets/js/vendor/jquery-3.7.1.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/app.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

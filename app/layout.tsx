import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyCMD – Java Command Prompt",
  description: "A custom command prompt implemented in Java with Windows-like commands and installers.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-50 w-full border-b border-black/5 dark:border-white/10 bg-background/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <a href="#home" className="text-lg font-semibold">MyCMD</a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#features" className="opacity-80 hover:opacity-100">Features</a>
              <a href="#structure" className="opacity-80 hover:opacity-100">Structure</a>
              <a href="#install" className="opacity-80 hover:opacity-100">Install</a>
              <a href="#usage" className="opacity-80 hover:opacity-100">Usage</a>
              <a href="#contributing" className="opacity-80 hover:opacity-100">Contributing</a>
              <a href="https://github.com/Drive-for-Java/MyCMD" target="_blank" className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs">GitHub</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-black/5 dark:border-white/10 mt-16">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm opacity-80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} MyCMD</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Drive-for-Java/MyCMD" target="_blank" className="hover:underline">Repository</a>
              <a href="#license" className="hover:underline">License</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

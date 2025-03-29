import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Testing Platform",
  description: "Modern and professional software testing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[var(--background)]`}
      >
        <header className="border-b border-[var(--border)] bg-[var(--card-bg)] shadow-sm">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-[var(--primary)]">
              TestPro
            </Link>
            <div className="flex gap-6">
              <Link
                href="/tests"
                className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
              >
                Tests
              </Link>
              <Link
                href="/reports"
                className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
              >
                Reports
              </Link>
              <Link
                href="/settings"
                className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
              >
                Settings
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

        <footer className="border-t border-[var(--border)] bg-[var(--card-bg)] py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-[var(--primary)]">
                  TestPro
                </h3>
                <p className="text-[var(--secondary)]">
                  Professional software testing platform
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-[var(--primary)]">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/tests"
                      className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                    >
                      Tests
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/reports"
                      className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                    >
                      Reports
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/settings"
                      className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-[var(--primary)]">
                  Contact
                </h3>
                <p className="text-[var(--secondary)]">support@testpro.com</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-[var(--secondary)]">
              © {new Date().getFullYear()} TestPro. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

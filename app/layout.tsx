import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kepolisian Negara Republik Indonesia",
  description: "Website resmi dokumentasi, divisi, dan kegiatan Kepolisian Negara Republik Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-blue-950 to-black text-white min-h-screen`}
      >
        {/* Navbar Global */}
        <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-5 bg-blue-950/90 backdrop-blur-md border-b border-blue-900">
          <div className="flex items-center gap-3">
            <Image
              src="/logo_polisi.png"
              alt="Logo Polisi"
              width={40}
              height={40}
              className="rounded-md"
            />
            <h1 className="text-lg font-bold tracking-wide">Kepolisian Negara</h1>
          </div>
          <div className="flex gap-6 text-sm font-semibold">
            <Link href="/" className="hover:text-blue-300 transition">
              Beranda
            </Link>
            <Link href="/dokumentasi" className="hover:text-blue-300 transition">
              Dokumentasi
            </Link>
            <Link href="/divisi" className="hover:text-blue-300 transition">
              Divisi
            </Link>
            <Link href="/tupoksi" className="hover:text-blue-300 transition">
              Tupoksi
            </Link>
            <Link href="/galeri" className="hover:text-blue-300 transition">
              Galeri
            </Link>
          </div>
        </nav>

        {/* Konten Halaman */}
        <main className="pt-10">{children}</main>

        {/* Footer Global */}
        <footer className="text-center py-8 text-blue-300 border-t border-blue-800 mt-20">
          © 2025 Kepolisian Negara Republik Indonesia — Semua Hak Dilindungi
        </footer>
      </body>
    </html>
  );
}

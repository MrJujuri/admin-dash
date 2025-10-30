"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-blue-950/90 backdrop-blur-md shadow-md">
        <div className="flex items-center gap-3">
          <Image src="/police-logo.png" alt="Logo Polisi" width={50} height={50} />
          <h1 className="text-xl font-bold tracking-wide">Kepolisian Negara</h1>
        </div>
        <div className="flex gap-8 text-sm font-semibold">
          <Link href="/" className="hover:text-blue-300 transition">Beranda</Link>
          <Link href="/dokumentasi" className="hover:text-blue-300 transition">Dokumentasi</Link>
          <Link href="/divisi" className="hover:text-blue-300 transition">Divisi & Tupoksi</Link>
          <Link href="/galeri" className="hover:text-blue-300 transition">Galeri</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center p-8">
        <h2 className="text-4xl sm:text-6xl font-bold mb-4">Selamat Datang di Website Resmi Polisi</h2>
        <p className="text-lg text-blue-200 max-w-2xl mb-8">
          Menegakkan hukum, menjaga keamanan, dan melindungi masyarakat dengan integritas dan profesionalisme.
        </p>
        <Link
          href="/dokumentasi"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Lihat Dokumentasi Pekerjaan
        </Link>
      </main>

      {/* Footer */}
      <footer className="text-center py-5 text-sm text-blue-300 border-t border-blue-800">
        © 2025 Kepolisian Negara Republik — Semua Hak Dilindungi
      </footer>
    </div>
  );
}

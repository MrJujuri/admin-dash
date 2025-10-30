"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page-bg bg-gradient-to-b from-blue-900/70 to-blue-950/90 text-white flex flex-col">
      <main className="flex flex-col items-center justify-center flex-1 text-center p-8">
        <h2 className="text-5xl font-bold mb-4">Selamat Datang di Website Polisi</h2>
        <p className="text-lg text-blue-200 max-w-2xl mb-8">
          Menegakkan hukum, menjaga keamanan, dan melindungi masyarakat dengan integritas dan profesionalisme.
        </p>
        <Link
          href="/dokumentasi"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Lihat Dokumentasi
        </Link>
      </main>
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Galeri() {
  const galeri = [
    { src: "/galeri1.jpg", caption: "Patroli Malam" },
    { src: "/galeri2.jpg", caption: "Upacara Bendera" },
    { src: "/galeri3.jpg", caption: "Operasi Lalu Lintas" },
    { src: "/galeri4.jpg", caption: "Pelatihan Anggota" },
    { src: "/galeri5.jpg", caption: "Pengamanan Event" },
    { src: "/galeri6.jpg", caption: "Apel Kesiapan" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black text-white">
      <div className="max-w-6xl mx-auto py-20 px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Galeri Dokumentasi</h1>
        <p className="text-blue-200 mb-10 text-center">
          Dokumentasi kegiatan dan momen penting yang dilakukan oleh personel kepolisian.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galeri.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden border border-blue-800 hover:scale-105 transition-transform"
            >
              <Image
                src={item.src}
                alt={item.caption}
                width={500}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="p-3 bg-blue-900/70 text-center text-sm">{item.caption}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300 font-semibold transition">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

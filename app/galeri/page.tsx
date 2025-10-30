"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Galeri() {
  const galeri = [
    { src: "/galeri6.png", caption: "Patroli Malam" },
    { src: "/galeri6.png", caption: "Upacara Bendera" },
    { src: "/galeri6.png", caption: "Operasi Lalu Lintas" },
    { src: "/galeri6.png", caption: "Pelatihan Anggota" },
    { src: "/galeri6.png", caption: "Pengamanan Event" },
    { src: "/galeri6.png", caption: "Apel Kesiapan" },
  ];

  const [selected, setSelected] = useState<{ src: string; caption: string } | null>(null);

  return (
    <div className="page-bg min-h-screen relative bg-gradient-to-b from-blue-950 to-black text-white">
      <div className="max-w-6xl mx-auto py-20 px-8 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Galeri Dokumentasi</h1>
        <p className="text-blue-200 mb-10 text-center">
          Dokumentasi kegiatan dan momen penting yang dilakukan oleh personel kepolisian.
        </p>

        {/* Grid galeri */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galeri.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden border border-blue-800 hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelected(item)}
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

      {/* Overlay zoom image */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl flex justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // biar klik gambar gak nutup overlay
            >
              <Image
                src={selected.src}
                alt={selected.caption}
                width={1000}
                height={600}
                className="rounded-xl object-contain w-full h-auto"
              />
              <p className="text-center text-blue-200 mt-3">{selected.caption}</p>

              {/* Tombol close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 bg-red-600 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

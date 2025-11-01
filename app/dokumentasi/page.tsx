"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Dokumentasi() {
  const kegiatan = [
    {
      title: "Operasi Malam",
      desc: "Patroli malam menjaga keamanan di wilayah perkotaan.",
    },
    {
      title: "Pengamanan Event",
      desc: "Menjaga ketertiban selama acara masyarakat berlangsung.",
    },
    {
      title: "Pelatihan Personel",
      desc: "Peningkatan kemampuan dan keterampilan anggota kepolisian.",
    },
    {
      title: "Apel Kesiapan",
      desc: "Koordinasi rutin untuk memastikan kesiapan personel dan peralatan.",
    },
    {
      title: "Penyuluhan Masyarakat",
      desc: "Kegiatan edukasi kepada masyarakat mengenai keamanan dan hukum.",
    },
    {
      title: "Bantuan Sosial",
      desc: "Menyalurkan bantuan kepada masyarakat yang membutuhkan.",
    },
  ];

  return (
    <div className="page-bg min-h-screen bg-gradient-to-b from-blue-950 to-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto py-20 px-8">
        {/* Judul dengan animasi masuk */}
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Dokumentasi Pekerjaan Polisi
        </motion.h1>

        {/* Deskripsi singkat */}
        <motion.p
          className="text-blue-200 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Berikut adalah catatan kegiatan dan tugas yang telah dilaksanakan oleh personel kepolisian.
        </motion.p>

        {/* Grid kegiatan dengan animasi tiap kartu */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {kegiatan.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-blue-900/40 border border-blue-700 rounded-xl p-6 hover:bg-blue-800/60 transition group"
            >
              {/* Efek highlight saat hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              <h2 className="text-xl font-semibold mb-2 relative z-10">
                {item.title}
              </h2>
              <p className="text-sm text-blue-200 relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tombol kembali */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 font-semibold transition"
          >
            ← Kembali ke Beranda
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

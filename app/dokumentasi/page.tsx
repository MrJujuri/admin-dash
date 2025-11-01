"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Dokumentasi() {
  const data = [
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
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Dokumentasi Pekerjaan Polisi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-blue-200 mb-10 text-center"
        >
          Berikut adalah catatan kegiatan dan tugas yang telah dilaksanakan oleh personel kepolisian.
        </motion.p>

        {/* Grid Card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.4)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-900/40 border border-blue-700 rounded-xl p-6 cursor-pointer hover:bg-blue-800/60 transition"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-blue-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
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
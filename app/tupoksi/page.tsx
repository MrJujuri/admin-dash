"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Tupoksi() {
  const tupoksi = [
    {
      title: "Menegakkan Hukum",
      desc: "Melaksanakan penegakan hukum secara adil, profesional, dan transparan.",
    },
    {
      title: "Pelindung dan Pengayom",
      desc: "Memberikan perlindungan, pengayoman, dan pelayanan kepada masyarakat.",
    },
    {
      title: "Menjaga Ketertiban Umum",
      desc: "Menjamin ketertiban sosial dan keamanan masyarakat di seluruh wilayah hukum.",
    },
    {
      title: "Penegakan Disiplin Internal",
      desc: "Menjaga profesionalitas dan integritas setiap anggota dalam menjalankan tugas.",
    },
  ];

  return (
    <div className="page-bg min-h-screen bg-gradient-to-b from-blue-950 to-black text-white overflow-hidden">
      <div className="max-w-5xl mx-auto py-20 px-8">
        {/* Animasi Judul */}
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tugas Pokok dan Fungsi (Tupoksi)
        </motion.h1>

        {/* Animasi Deskripsi */}
        <motion.p
          className="text-blue-200 mb-10 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sebagai aparat penegak hukum, Kepolisian Kisah Tanah Air memiliki tanggung jawab utama
          yang dijalankan dengan semangat Tribrata dan Catur Prasetya.
        </motion.p>

        {/* Grid dengan animasi tiap card */}
        <div className="grid sm:grid-cols-2 gap-8">
          {tupoksi.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-blue-900/40 border border-blue-700 rounded-xl p-6 hover:bg-blue-800/60 transition"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-blue-200">{item.desc}</p>
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

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
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black text-white">
      <div className="max-w-5xl mx-auto py-20 px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Tugas Pokok dan Fungsi (Tupoksi)</h1>
        <p className="text-blue-200 mb-10 text-center">
          Sebagai aparat penegak hukum, Kepolisian Kisah Tanah Air memiliki tanggung jawab utama yang dijalankan dengan semangat Tribrata dan Catur Prasetya.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {tupoksi.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-900/40 border border-blue-700 rounded-xl p-6 hover:bg-blue-800/60 transition"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-blue-200">{item.desc}</p>
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

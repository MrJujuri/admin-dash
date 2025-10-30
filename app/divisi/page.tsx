"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Divisi() {
  const divisiList = [
    {
      nama: "Satlantas",
      deskripsi: "Bertanggung jawab atas pengaturan, penjagaan, pengawalan, dan patroli lalu lintas.",
    },
    {
      nama: "Reskrim",
      deskripsi: "Menangani penyelidikan dan penyidikan tindak pidana untuk menegakkan hukum secara profesional.",
    },
    {
      nama: "Intelkam",
      deskripsi: "Melaksanakan kegiatan intelijen dan analisa situasi keamanan masyarakat.",
    },
    {
      nama: "Sabhara",
      deskripsi: "Menjaga keamanan umum dan membantu penanggulangan bencana serta tugas kemanusiaan.",
    },
    {
      nama: "Binmas",
      deskripsi: "Melaksanakan pembinaan masyarakat agar sadar hukum dan tertib sosial.",
    },
  ];

  return (
    <div className="page-bg min-h-screen bg-gradient-to-b from-blue-950 to-black text-white">
      <div className="max-w-6xl mx-auto py-20 px-8">
        <h1 className="text-4xl font-bold mb-10 text-center">Divisi & Tugas Pokok</h1>
        <p className="text-blue-200 mb-12 text-center">
          Berikut daftar divisi utama dalam struktur Kepolisian Kisah Tanah Air beserta tanggung jawab utamanya.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisiList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-900/40 border border-blue-700 rounded-xl p-6 hover:bg-blue-800/60 transition"
            >
              <h2 className="text-xl font-semibold mb-2">{item.nama}</h2>
              <p className="text-sm text-blue-200">{item.deskripsi}</p>
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

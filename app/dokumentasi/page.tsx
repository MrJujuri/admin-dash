import Link from "next/link";

export default function Dokumentasi() {
  return (
    <div className="page-bg min-h-screen bg-gradient-to-b from-blue-950 to-black text-white">
      <div className="max-w-6xl mx-auto py-20 px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Dokumentasi Pekerjaan Polisi</h1>
        <p className="text-blue-200 mb-10 text-center">
          Berikut adalah catatan kegiatan dan tugas yang telah dilaksanakan oleh personel kepolisian.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-900/40 border border-blue-700 rounded-xl p-6 hover:bg-blue-800/60 transition">
            <h2 className="text-xl font-semibold mb-2">Operasi Malam</h2>
            <p className="text-sm text-blue-200">Patroli malam menjaga keamanan di wilayah perkotaan.</p>
          </div>
          <div className="bg-blue-900/40 border border-blue-700 rounded-xl p-6 hover:bg-blue-800/60 transition">
            <h2 className="text-xl font-semibold mb-2">Pengamanan Event</h2>
            <p className="text-sm text-blue-200">Menjaga ketertiban selama acara masyarakat berlangsung.</p>
          </div>
          <div className="bg-blue-900/40 border border-blue-700 rounded-xl p-6 hover:bg-blue-800/60 transition">
            <h2 className="text-xl font-semibold mb-2">Pelatihan Personel</h2>
            <p className="text-sm text-blue-200">Peningkatan kemampuan dan keterampilan anggota kepolisian.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 font-semibold transition"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

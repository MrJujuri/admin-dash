"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Galeri() {
  const galeri = [
    { src: "/galeri6.png", caption: "Patroli Malam" },
    { src: "/galeri6.png", caption: "Upacara Bendera" },
    { src: "/galeri6.png", caption: "Operasi Lalu Lintas" },
    { src: "/galeri6.png", caption: "Pelatihan Anggota" },
    { src: "/galeri6.png", caption: "Pengamanan Event" },
    { src: "/galeri6.png", caption: "Apel Kesiapan" },
  ];

  const [index, setIndex] = useState<number | null>(null);

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
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-blue-800 hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setIndex(i)}
            >
              <Image
                src={item.src}
                alt={item.caption}
                width={500}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="p-3 bg-blue-900/70 text-center text-sm">{item.caption}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300 font-semibold transition">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>

      {/* Lightbox tampil ketika gambar diklik */}
      {index !== null && (
        <Lightbox
          open={index !== null}
          index={index}
          close={() => setIndex(null)}
          slides={galeri.map((item) => ({
            src: item.src,
            description: item.caption,
          }))}
          animation={{ fade: 300, swipe: 250 }}
          controller={{ closeOnBackdropClick: true }}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
            description: { color: "#a5b4fc", textAlign: "center", marginTop: "10px" },
          }}
        />
      )}
    </div>
  );
}

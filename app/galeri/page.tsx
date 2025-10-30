"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

// Styled-components untuk Pop-up
const ClickButton = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  background: rgba(255, 255, 255, 0.1);
  padding: 5px 10px;
  border-radius: 50%;
  cursor: pointer;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

const PopupCard = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  border-radius: 12px;
  overflow: hidden;
  background: transparent;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

  const togglePopup = () => setSelected(null);

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
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300 font-semibold transition">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>

      {/* Pop-up Overlay */}
      {selected && (
        <Overlay onClick={togglePopup}>
          <PopupCard onClick={(e) => e.stopPropagation()}>
            <Image
              src={selected.src}
              alt={selected.caption}
              width={1200}
              height={800}
              className="object-contain w-full h-auto rounded-xl"
            />
            <p className="text-center text-blue-200 mt-3">{selected.caption}</p>
            <ClickButton onClick={togglePopup}>×</ClickButton>
          </PopupCard>
        </Overlay>
      )}
    </div>
  );
}

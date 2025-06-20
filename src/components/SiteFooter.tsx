"use client";

import { Instagram, Mail, ArrowUp, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <div className="w-full flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="z-50 px-6 py-4 rounded-full bg-white/10 border border-white/30 backdrop-blur-lg text-white text-lg font-semibold hover:bg-white/20 transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            <div className="flex items-center gap-2">
              <ArrowUp size={24} />
              <span>Up up up</span>
            </div>
          </button>
        </div>
      )}

      <footer className="w-full border-t border-white/10 bg-black text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* 🗓 Año y autor */}
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Copyright Christopher Miranda. All rights reserved.
          </p>

          {/* 🔗 Redes sociales */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/christopher.mrnd/"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-white text-white/60 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:christopher.mrnd98@gmail.com"
              aria-label="Correo"
              className="hover:text-white text-white/60 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-miranda-0a75a426a/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-white text-white/60 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* 🖊 Firma de autor */}
          <a
            href="https://www.instagram.com/nate.html_" // Cambia si es otro perfil
            target="_blank"
            className="flex items-center gap-2 hover:text-white text-white/60 transition-colors"
          >
            <Image
              src="/images/Design by/nate.ico" // Asegúrate de tener esta imagen en /public
              alt="nate.exe icon"
              className="w-6 h-6 rounded-full object-cover"
              width={6}
              height={6}
            />
            <span>Design by nate.html</span>
          </a>
        </div>
      </footer>
    </>
  );
}

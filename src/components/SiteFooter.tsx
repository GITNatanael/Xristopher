"use client"

import { Instagram, Mail, ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

const VimeoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M476.2 154.6c-2.7 58.1-43.1 137.5-121.1 239.1-80.7 105.5-148.9 158.3-204.5 158.3-34.5 0-63.6-31.8-87.3-95.5-15.9-57.6-31.9-115.2-47.8-172.7-17.7-64.5-36.7-96.7-57.1-96.7-4.4 0-19.8 9.3-46.1 28L0 193.7c29.2-25.7 57.9-51.4 86.2-77.2 39-33.6 68.2-50.6 87.6-51.1 45.9-1.2 74.1 27.1 84.5 84.9 11.4 65.3 19.4 106.1 24 122.4 13.3 60.5 27.9 90.8 44 90.8 12.5 0 31.2-19.7 56-59.1 24.8-39.4 38-69.4 39.5-90 3.5-33.8-9.8-50.7-40-50.7-14.2 0-28.8 3.3-43.8 9.9 29.1-95.2 84.7-141.6 166.8-139.1 61.2 1.9 90.1 41.8 86.8 121.2z" />
  </svg>
)

export default function Footer() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

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
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Copyright Christopher Miranda. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/tuusuario" target="_blank" aria-label="Instagram" className="hover:text-white text-white/60 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:tuemail@ejemplo.com" aria-label="Correo" className="hover:text-white text-white/60 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://vimeo.com/tuusuario" target="_blank" aria-label="Vimeo" className="hover:text-white text-white/60 transition-colors">
              <VimeoIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

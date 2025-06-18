"use client"

import { motion, useTransform } from "framer-motion"
import type { SectionProps } from "../types"

export default function ContactSection({ scrollYProgress }: SectionProps) {
  // Animación para la sección de contacto
  const contactOpacity = useTransform(scrollYProgress, [0.725, 0.75, 0.85, 0.9], [0, 1, 1, 0])
  const contactY = useTransform(scrollYProgress, [0.725, 0.75, 0.85, 0.9], [50, 0, 0, -50])
  const contactScale = useTransform(scrollYProgress, [0.725, 0.75, 0.85, 0.9], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      className="sticky top-0 flex flex-col items-center justify-center min-h-[100dvh] w-full px-4"
      style={{
        opacity: contactOpacity,
        y: contactY,
        scale: contactScale,
      }}
    >
      {/* Contenedor principal que contiene los dos divs en columna */}
      <div className="flex flex-col items-center justify-center gap-16 z-10 w-full max-w-4xl">
        {/* Primer div: Video y botón Book a Call */}
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          {/* Video */}
          <div className="w-full max-w-md overflow-hidden rounded-2xl ">
            <video src="/videos/Kinectypo.mp4" autoPlay muted playsInline loop className="w-full h-full object-cover"></video>
          </div>

          {/* Botón Book a Call */}
          <motion.a
            href="TU_ENLACE_DE_GOOGLE_CALENDAR_AQUÍ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full px-8 py-3 text-lg font-semibold flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Icono de agenda */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            Book a call
          </motion.a>
        </div>

        {/* Segundo div: Botones de redes sociales en horizontal */}
        <div className="flex flex-row items-center justify-center gap-8">
          {/* Botón Instagram */}
          <motion.a
            href="https://www.instagram.com/christopher.mrnd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white p-3 rounded-full border border-white/20 hover:border-white/40 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </motion.a>

          {/* Botón LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/christopher-miranda-0a75a426a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white p-3 rounded-full border border-white/20 hover:border-white/40 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </motion.a>

          {/* Botón Gmail */}
          <motion.a
            href="mailto:christopher.mrnd98@gmail.com"
            className="text-white/80 hover:text-white p-3 rounded-full border border-white/20 hover:border-white/40 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

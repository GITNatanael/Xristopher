"use client"

import { motion, useTransform } from "framer-motion"
import { TextAnimate } from "@/components/ui/text-animate"
import type { SectionProps } from "../types"

export default function VfxSection({ scrollYProgress }: SectionProps) {
  // Animación para "VFX"
  const vfxOpacity = useTransform(scrollYProgress, [0.525, 0.55, 0.6, 0.625], [0, 1, 1, 0])
  const vfxY = useTransform(scrollYProgress, [0.525, 0.55, 0.6, 0.625], [50, 0, 0, -50])
  const vfxScale = useTransform(scrollYProgress, [0.525, 0.55, 0.6, 0.625], [0.8, 1, 1, 0.8])

  // Efecto paralaje para el video de VFX
  const vfxVideoY = useTransform(scrollYProgress, [0.525, 0.625], [100, -100])
  const vfxVideoScale = useTransform(scrollYProgress, [0.525, 0.55, 0.6, 0.625], [0.7, 0.8, 0.8, 0.7])
  const vfxVideoOpacity = useTransform(scrollYProgress, [0.525, 0.55, 0.6, 0.625], [0, 0.5, 0.5, 0])

  return (
    <motion.div
      className="sticky top-0 flex flex-col items-center justify-center h-screen w-full px-4"
      style={{
        opacity: vfxOpacity,
        y: vfxY,
        scale: vfxScale,
      }}
    >
      {/* Video de fondo con efecto paralaje */}
      <motion.div
        className="absolute z-0"
        style={{
          y: vfxVideoY,
          scale: vfxVideoScale,
          opacity: vfxVideoOpacity,
        }}
      >
        <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden media-glow">
          <video src="/images/34 PRACTICAAF.mp4" autoPlay muted loop className="w-full h-full object-cover"></video>
        </div>
      </motion.div>

      {/* Texto en primer plano */}
      <TextAnimate
        animation="blurIn"
        delay={0.2}
        duration={0.5}
        className="text-6xl sm:text-8xl font-bold text-white z-10 mix-blend-difference text-glow"
      >
        VFX
      </TextAnimate>
    </motion.div>
  )
}

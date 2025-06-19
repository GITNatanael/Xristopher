"use client"

import { motion, useTransform } from "framer-motion"
import { TextAnimate } from "@/components/ui/text-animate"
import type { SectionProps } from "../types"

export default function AnimationsSection({ scrollYProgress }: SectionProps) {
  // Animación para "2D Animations"
  const animationsOpacity = useTransform(scrollYProgress, [0.325, 0.35, 0.4, 0.425], [0, 1, 1, 0])
  const animationsY = useTransform(scrollYProgress, [0.325, 0.35, 0.4, 0.425], [50, 0, 0, -50])
  const animationsScale = useTransform(scrollYProgress, [0.325, 0.35, 0.4, 0.425], [0.8, 1, 1, 0.8])

  // Efecto paralaje para la imagen de 2D Animations
  const animationsImageY = useTransform(scrollYProgress, [0.325, 0.425], [100, -100])
  const animationsImageScale = useTransform(scrollYProgress, [0.325, 0.35, 0.4, 0.425], [0.7, 0.8, 0.8, 0.7])
  const animationsImageOpacity = useTransform(scrollYProgress, [0.325, 0.35, 0.4, 0.425], [0, 0.5, 0.5, 0])

  return (
    <motion.div
      className="sticky top-0 flex flex-col items-center justify-center min-h-screen w-full px-4"
      style={{
        opacity: animationsOpacity,
        y: animationsY,
        scale: animationsScale,
      }}
    >
      {/* Imagen de fondo con efecto paralaje */}
      <motion.div
        className="absolute z-0"
        style={{
          y: animationsImageY,
          scale: animationsImageScale,
          opacity: animationsImageOpacity,
        }}
      >
        <div className="w-[100vw] h-[100vw] sm:w-[100vh] sm:h-[100vh] rounded-full overflow-hidden media-glow">
          <video src="/videos/AnimationBW.mp4" autoPlay muted playsInline loop className="w-full h-full object-cover"></video>
        </div>
      </motion.div>

      {/* Texto en primer plano */}
      <TextAnimate
        animation="blurIn"
        delay={0.2}
        duration={0.5}
        className="text-6xl sm:text-8xl font-bold text-white z-10 mix-blend-difference text-glow"
      >
        2D Animations
      </TextAnimate>
    </motion.div>
  )
}

"use client"

import { motion, useTransform } from "framer-motion"
import { TextAnimate } from "@/components/ui/text-animate"
import type { SectionProps } from "../types"

export default function ServicesSection({ scrollYProgress }: SectionProps) {
  // Animación para el título "What can I do for you?"
  const servicesTitleOpacity = useTransform(scrollYProgress, [0.125, 0.15, 0.2, 0.225], [0, 1, 1, 0])
  const servicesTitleY = useTransform(scrollYProgress, [0.125, 0.15, 0.2, 0.225], [50, 0, 0, -50])
  const servicesTitleScale = useTransform(scrollYProgress, [0.125, 0.15, 0.2, 0.225], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      className="sticky top-0 flex flex-col items-center justify-center min-h-screen w-full px-4"
      style={{
        opacity: servicesTitleOpacity,
        y: servicesTitleY,
        scale: servicesTitleScale,
      }}
    >
      <TextAnimate
        animation="blurIn"
        delay={0.2}
        duration={0.5}
        className="text-5xl sm:text-7xl font-bold text-white mb-4 text-glow"
      >
        what can I do for you?
      </TextAnimate>
    </motion.div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface GrainEffectProps {
  intensity?: number // 0-100
  animated?: boolean
  className?: string
}

export function GrainEffect({ intensity = 15, animated = true, className = "" }: GrainEffectProps) {
  const [seed, setSeed] = useState(0)

  // Animar el grano si animated=true
  useEffect(() => {
    if (!animated) return

    const interval = setInterval(() => {
      setSeed(Math.floor(Math.random() * 100))
    }, 100) // Actualizar cada 100ms para un efecto sutil

    return () => clearInterval(interval)
  }, [animated])

  // Calcular la opacidad basada en la intensidad
  const opacity = intensity / 100

  return (
    <motion.div
      className={`fixed inset-0 w-full h-full pointer-events-none mix-blend-overlay z-50 ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch' seed='${seed}'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity,
      }}
    />
  )
}


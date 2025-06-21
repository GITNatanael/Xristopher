"use client"

import { motion, useTransform } from "framer-motion"
import { TextAnimate } from "@/components/ui/text-animate"
import type { SectionProps } from "../types"

export default function MotionDesignSection({ scrollYProgress }: SectionProps) {
  // Animación para "Motion Design"
  const motionDesignOpacity = useTransform(scrollYProgress, [0.425, 0.45, 0.5, 0.525], [0, 1, 1, 0])
  const motionDesignY = useTransform(scrollYProgress, [0.425, 0.45, 0.5, 0.525], [50, 0, 0, -50])
  const motionDesignScale = useTransform(scrollYProgress, [0.425, 0.45, 0.5, 0.525], [0.8, 1, 1, 0.8])

  // Efecto paralaje para el video de Motion Design
  const motionDesignVideoY = useTransform(scrollYProgress, [0.425, 0.525], [100, -100])
  const motionDesignVideoScale = useTransform(scrollYProgress, [0.425, 0.45, 0.5, 0.525], [0.7, 0.8, 0.8, 0.7])
  const motionDesignVideoOpacity = useTransform(scrollYProgress, [0.425, 0.45, 0.5, 0.525], [0, 0.5, 0.5, 0])

  return (
    <motion.div
      className="sticky top-0 flex flex-col items-center justify-center min-h-screen w-full px-4"
      style={{
        opacity: motionDesignOpacity,
        y: motionDesignY,
        scale: motionDesignScale,
      }}
    >
      {/* Video de fondo con efecto paralaje */}
      <motion.div
        className="absolute z-0"
        style={{
          y: motionDesignVideoY,
          scale: motionDesignVideoScale,
          opacity: motionDesignVideoOpacity,
        }}
      >
        <div className="w-[100%] h-[200px] sm:w-[100%] sm:h-[300px] rounded-full overflow-hidden media-glow">
          <video
            src="/images/Cinematic Motion Graphic Array.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>
      </motion.div>

      {/* Texto en primer plano */}
      <TextAnimate
        animation="blurIn"
        delay={0.2}
        duration={0.5}
        className="text-6xl sm:text-8xl font-bold text-white z-10 mix-blend-difference text-glow"
      >
        motion design
      </TextAnimate>
    </motion.div>
  )
}

"use client"

import Image from "next/image"
import { motion, useTransform } from "framer-motion"
import { TextAnimate } from "@/components/ui/text-animate"
import type { SectionProps } from "../types"

export default function IllustrationsSection({ scrollYProgress }: SectionProps) {
  // Animación para "Illustrations"
  const illustrationsOpacity = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [0, 1, 1, 0])
  const illustrationsY = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [50, 0, 0, -50])
  const illustrationsScale = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [0.8, 1, 1, 0.8])

  // Efecto paralaje para la imagen de Illustrations
  const illustrationsImageY = useTransform(scrollYProgress, [0.225, 0.325], [100, -100])
  const illustrationsImageScale = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [0.7, 0.8, 0.8, 0.7])
  const illustrationsImageOpacity = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [0, 0.5, 0.5, 0])

  return (
    <motion.div
      className="sticky top-0 flex flex-col items-center justify-center h-screen w-full px-4"
      style={{
        opacity: illustrationsOpacity,
        y: illustrationsY,
        scale: illustrationsScale,
      }}
    >
      {/* Imagen de fondo con efecto paralaje */}
      <motion.div
        className="absolute z-0 overflow-hidden media-glow"
        style={{
          y: illustrationsImageY,
          scale: illustrationsImageScale,
          opacity: illustrationsImageOpacity,
        }}
      >
        <div className="opacity-0 w-[100%] sm:w-[100vh] sm:h-[100vh] rounded-full overflow-hidden media-glow">
          <Image
            src="/images/Anilustrator.jpg"
            alt="Illustrations"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Capa 1 (más al fondo) */}
        <motion.div
          className="absolute inset-0 z--10 blur-[0.5px]"
          style={{
            y: useTransform(scrollYProgress, [0.225, 0.325], [300, -860]),
            scale: useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], [1.72, 1.77, 1.77, 1.72]),
            opacity: 1,
          }}
        >
          <Image src="/images/parallax/layer2.png" alt="Layer 2" fill className="object-contain" />
        </motion.div>

        {/* Capa 2 */}
        <motion.div
          className="absolute inset-0 z--10 blur-[0.6px]"
          style={{
            y: useTransform(scrollYProgress, [0.225, 0.325], [-100, -1000]),
            scale: useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], [1.74, 1.79, 1.79, 1.74]),
            opacity: 1,
          }}
        >
          <Image src="/images/parallax/layer3.png" alt="Layer 3" fill className="object-contain" />
        </motion.div>

        {/* Capa 3 */}
        <motion.div
          className="absolute inset-0 z--10 blur-[0.6px]"
          style={{
            y: useTransform(scrollYProgress, [0.225, 0.325], [-100, -870]),
            scale: useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], [1.74, 1.79, 1.79, 1.74]),
            opacity: 1,
          }}
        >
          <Image src="/images/parallax/layer1.png" alt="Layer 3" fill className="object-contain" />
        </motion.div>

        {/* Capa 4 */}
        <motion.div
          className="absolute inset-0 z--5 blur-[0.6px]"
          style={{
            y: useTransform(scrollYProgress, [0.225, 0.325], [-200, -700]),
            scale: useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], [1.76, 1.81, 1.81, 1.76]),
            opacity: 1,
          }}
        >
          <Image src="/images/parallax/layer4.png" alt="Layer 4" fill className="object-contain" />
        </motion.div>

        {/* Capa 5 (medio) */}
        <motion.div
          className="absolute inset-0 z--5 blur-[0.6px]"
          style={{
            y: useTransform(scrollYProgress, [0.225, 0.325], [0, -700]),
            scale: useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], [1.78, 1.83, 1.83, 1.78]),
            opacity: 1,
          }}
        >
          <Image src="/images/parallax/layer5.png" alt="Middle Layer" fill className="object-contain" />
        </motion.div>

        {/* Capa 6 */}
        <motion.div
          className="absolute inset-0 z-60 blur-[0.5px]"
          style={{
            y: useTransform(scrollYProgress, [0.225, 0.325], [-100, -650]),
            scale: useTransform(scrollYProgress, [1.425, 1.45, 1.5, 1.525], [2.0, 2.05, 2.05, 2.0]),
            opacity: 1,
          }}
        >
          <Image src="/images/parallax/layer6.png" alt="Layer 6" fill className="object-contain" />
        </motion.div>

        {/* Capa 7 */}
        <motion.div
          className="absolute inset-0 z-70"
          style={{
            y: useTransform(scrollYProgress, [0.225, 0.325], [0, -500]),
            scale: useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], [1.82, 1.87, 1.87, 1.82]),
            opacity: 1,
          }}
        >
          <Image src="/images/parallax/layer7.png" alt="Layer 7" fill className="object-contain" />
        </motion.div>

        {/* Capa 8 */}
        <motion.div
          className="absolute inset-0 z-80"
          style={{
            y: useTransform(scrollYProgress, [0.225, 0.325], [0, -400]),
            scale: useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], [1.84, 1.89, 1.89, 1.84]),
            opacity: 1,
          }}
        >
          <Image src="/images/parallax/layer8.png" alt="Layer 8" fill className="object-contain" />
        </motion.div>

        {/* Capa 9 (primer plano) */}
        <motion.div
          className="absolute inset-0 z-90"
          style={{
            y: useTransform(scrollYProgress, [0.225, 0.325], [1 - 30, -930]),
            scale: useTransform(scrollYProgress, [2.225, 2.25, 2.3, 2.325], [2.86, 2.91, 2.91, 2.86]),
            opacity: 1,
          }}
        >
          <Image src="/images/parallax/layer99.png" alt="Foreground Layer" fill className="object-contain" />
        </motion.div>
      </motion.div>

      {/* Texto en primer plano */}
      <TextAnimate
        animation="blurIn"
        delay={0.2}
        duration={0.5}
        processJsx={true}
        className="text-6xl sm:text-8xl font-bold text-white z-10 mix-blend-difference text-glow"
      >
        Illustrations
      </TextAnimate>
    </motion.div>
  )
}

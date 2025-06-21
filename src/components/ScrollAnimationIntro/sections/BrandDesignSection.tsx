"use client"

import Image from "next/image"
import { motion, useTransform } from "framer-motion"
import { TextAnimate } from "@/components/ui/text-animate"
import type { SectionProps } from "../types"

export default function BrandDesignSection({ scrollYProgress }: SectionProps) {
  // Animación para "Design for your brand"
  const shirtDesignOpacity = useTransform(scrollYProgress, [0.625, 0.65, 0.7, 0.725], [0, 1, 1, 0])
  const shirtDesignY = useTransform(scrollYProgress, [0.625, 0.65, 0.7, 0.725], [50, 0, 0, -50])
  const shirtDesignScale = useTransform(scrollYProgress, [0.625, 0.65, 0.7, 0.725], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      className="sticky top-0 flex flex-col items-center justify-center min-h-screen w-full px-4 mt-[-250] overflow-hidden"
      style={{
        opacity: shirtDesignOpacity,
        y: shirtDesignY,
        scale: shirtDesignScale,
      }}
    >
      {/* Contenedor principal para los globos flotantes */}
      <div className="absolute w-full h-full opacity-60">
        {/* Globo 1 - Esquina superior izquierda */}
        <motion.div
          className="absolute top-[10%] left-[15%] z-[200]"
          style={{
            y: useTransform(scrollYProgress, [0.625, 0.725], [-50, 50]),
            x: useTransform(scrollYProgress, [0.625, 0.725], [-20, 20]),
            rotate: useTransform(scrollYProgress, [0.625, 0.725], [0, 10]),
          }}
        >
          <div className="w-[100px] h-[100px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden">
            <Image
              src="/images/branding/BrandingSphere-1.webp"
              alt="Branding Sphere 1"
              width={150}
              height={150}
              quality={75}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Globo 2 - Parte superior central */}
        <motion.div
          className="absolute top-[5%] left-[45%] z-[210]"
          style={{
            y: useTransform(scrollYProgress, [0.625, 0.725], [-30, 60]),
            x: useTransform(scrollYProgress, [0.625, 0.725], [10, -10]),
            rotate: useTransform(scrollYProgress, [0.625, 0.725], [-5, 5]),
          }}
        >
          <div className="w-[120px] h-[120px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden">
            <Image
              src="/images/branding/BrandingSphere2.webp"
              alt="Branding Sphere 2"
              width={180}
              height={180}
              quality={75}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Globo 3 - Esquina superior derecha */}
        <motion.div
          className="absolute top-[15%] right-[10%] z-[190]"
          style={{
            y: useTransform(scrollYProgress, [0.625, 0.725], [-40, 40]),
            x: useTransform(scrollYProgress, [0.625, 0.725], [30, -30]),
            rotate: useTransform(scrollYProgress, [0.625, 0.725], [10, -10]),
          }}
        >
          <div className="w-[90px] h-[90px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden">
            <Image
              src="/images/branding/BrandingSphere3.webp"
              alt="Branding Sphere 3"
              width={140}
              height={140}
              quality={75}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Globo 4 - Lado izquierdo central */}
        <motion.div
          className="absolute top-[40%] left-[5%] z-[220]"
          style={{
            y: useTransform(scrollYProgress, [0.625, 0.725], [0, 0]),
            x: useTransform(scrollYProgress, [0.625, 0.725], [-40, 40]),
            rotate: useTransform(scrollYProgress, [0.625, 0.725], [-15, 15]),
          }}
        >
          <div className="w-[110px] h-[110px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden">
            <Image
              src="/images/branding/BrandingSphere4.webp"
              alt="Branding Sphere 4"
              width={170}
              height={170}
              quality={75}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Globo 5 - Lado derecho central */}
        <motion.div
          className="absolute top-[45%] right-[5%] z-[230]"
          style={{
            y: useTransform(scrollYProgress, [0.625, 0.725], [20, -20]),
            x: useTransform(scrollYProgress, [0.625, 0.725], [40, -40]),
            rotate: useTransform(scrollYProgress, [0.625, 0.725], [5, -5]),
          }}
        >
          <div className="w-[130px] h-[130px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden ">
            <Image
              src="/images/branding/BrandingSphere5.webp"
              alt="Branding Sphere 5"
              width={190}
              height={190}
              quality={75}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Globo 6 - Parte inferior izquierda */}
        <motion.div
          className="absolute bottom-[15%] left-[20%] z-[240]"
          style={{
            y: useTransform(scrollYProgress, [0.625, 0.725], [60, -60]),
            x: useTransform(scrollYProgress, [0.625, 0.725], [-15, 15]),
            rotate: useTransform(scrollYProgress, [0.625, 0.725], [-8, 8]),
          }}
        >
          <div className="w-[100px] h-[100px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden ">
            <Image
              src="/images/branding/BrandingSphere-6.webp"
              alt="Branding Sphere 6"
              width={160}
              height={160}
              quality={75}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Globo 7 - Parte inferior derecha */}
        <motion.div
          className="absolute bottom-[10%] right-[15%] z-[250]"
          style={{
            y: useTransform(scrollYProgress, [0.625, 0.725], [50, -50]),
            x: useTransform(scrollYProgress, [0.625, 0.725], [25, -25]),
            rotate: useTransform(scrollYProgress, [0.625, 0.725], [12, -12]),
          }}
        >
          <div className="w-[115px] h-[115px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden ">
            <Image
              src="/images/branding/BrandingSphere7.webp"
              alt="Branding Sphere 7"
              width={175}
              height={175}
              quality={75}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Texto en primer plano */}
      <TextAnimate
        animation="blurIn"
        delay={0.2}
        duration={0.5}
        className="text-6xl sm:text-8xl font-bold text-white z-[900] mix-blend-difference text-glow relative"
      >
        branding.
      </TextAnimate>
    </motion.div>
  )
}

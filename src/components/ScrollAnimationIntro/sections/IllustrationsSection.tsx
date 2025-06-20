"use client"

import Image from "next/image"
import { motion, useTransform } from "framer-motion"
import { TextAnimate } from "@/components/ui/text-animate"
import type { SectionProps } from "../types"
import { useEffect, useState } from "react"

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [breakpoint]);

  return isMobile;
}

export default function IllustrationsSection({ scrollYProgress }: SectionProps) {
  const isMobile = useIsMobile();

  const illustrationsOpacity = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [0, 1, 1, 0])
  const illustrationsY = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [50, 0, 0, -50])
  const illustrationsScale = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [0.8, 1, 1, 0.8])

  const illustrationsImageY = useTransform(scrollYProgress, [0.225, 0.325], isMobile ? [80, -80] : [100, -100])
  const illustrationsImageScale = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], isMobile ? [0.85, 0.95, 0.95, 0.85] : [0.7, 0.8, 0.8, 0.7])
  const illustrationsImageOpacity = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [0, 0.5, 0.5, 0])

  const layer1Y = useTransform(scrollYProgress, [0.225, 0.325], isMobile ? [-50, -400] : [-100, -870])
  const layer1Scale = useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], isMobile ? [1.4, 1.45, 1.45, 1.4] : [1.74, 1.79, 1.79, 1.74])

  const layer2Y = useTransform(scrollYProgress, [0.225, 0.325], isMobile ? [200, -600] : [300, -860])
  const layer2Scale = useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], isMobile ? [1.6, 1.65, 1.65, 1.6] : [1.72, 1.77, 1.77, 1.72])

  const layer3Y = useTransform(scrollYProgress, [0.225, 0.325], isMobile ? [-50, -500] : [-100, -1000])
  const layer3Scale = useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], isMobile ? [1.6, 1.65, 1.65, 1.6] : [1.74, 1.79, 1.79, 1.74])

  const layer4Y = useTransform(scrollYProgress, [0.225, 0.325], isMobile ? [-100, -450] : [-200, -700])
  const layer4Scale = useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], isMobile ? [1.62, 1.67, 1.67, 1.62] : [1.76, 1.81, 1.81, 1.76])

  const layer5Y = useTransform(scrollYProgress, [0.225, 0.325], isMobile ? [0, -400] : [0, -700])
  const layer5Scale = useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], isMobile ? [1.65, 1.7, 1.7, 1.65] : [1.78, 1.83, 1.83, 1.78])

  const layer6Y = useTransform(scrollYProgress, [0.225, 0.325], isMobile ? [-50, -350] : [-100, -650])
  const layer6Scale = useTransform(scrollYProgress, [1.425, 1.45, 1.5, 1.525], isMobile ? [1.9, 1.95, 1.95, 1.9] : [2.0, 2.05, 2.05, 2.0])

  const layer7Y = useTransform(scrollYProgress, [0.225, 0.325], isMobile ? [-50, -200] : [0, -500])
  const layer7Scale = useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], isMobile ? [1.7, 1.75, 1.75, 1.7] : [1.82, 1.87, 1.87, 1.82])

  const layer8Y = useTransform(scrollYProgress, [0.225, 0.325], isMobile ? [0, -150] : [0, -400])
  const layer8Scale = useTransform(scrollYProgress, [1.225, 1.25, 1.3, 1.325], isMobile ? [1.72, 1.77, 1.77, 1.72] : [1.84, 1.89, 1.89, 1.84])

  return (
    <motion.div
      className="sticky top-0 flex flex-col items-center justify-center min-h-screen w-full px-4"
      style={{
        opacity: illustrationsOpacity,
        y: illustrationsY,
        scale: illustrationsScale,
      }}
    >
      <motion.div
        className="absolute z-0 overflow-hidden media-glow w-[90vw] h-[90vw] sm:w-[100vh] sm:h-[100vh]"
        style={{
          y: illustrationsImageY,
          scale: illustrationsImageScale,
          opacity: illustrationsImageOpacity,
        }}
      >
        <motion.div className="absolute inset-0 z--10" style={{ y: layer2Y, opacity: 1 }}>
          <Image src="/images/parallax/layer2.webp" alt="Layer 2" fill className="object-contain" />
        </motion.div>
        <motion.div className="absolute inset-0 z--10" style={{ y: layer3Y, opacity: 1 }}>
          <Image src="/images/parallax/layer3.webp" alt="Layer 3" fill className="object-contain" />
        </motion.div>
        <motion.div className="absolute inset-0 z--10" style={{ y: layer1Y, opacity: 1 }}>
          <Image src="/images/parallax/layer1.webp" alt="Layer 1" fill className="object-contain" />
        </motion.div>
        <motion.div className="absolute inset-0 z--5" style={{ y: layer4Y, opacity: 1 }}>
          <Image src="/images/parallax/layer4.webp" alt="Layer 4" fill className="object-contain" />
        </motion.div>
        <motion.div className="absolute inset-0 z--5" style={{ y: layer5Y, opacity: 1 }}>
          <Image src="/images/parallax/layer5.webp" alt="Layer 5" fill className="object-contain" />
        </motion.div>
        <motion.div className="absolute inset-0 z-60" style={{ y: layer6Y, opacity: 1 }}>
          <Image src="/images/parallax/layer6.webp" alt="Layer 6" fill className="object-contain" />
        </motion.div>
        <motion.div className="absolute inset-0 z-70" style={{ y: layer7Y, opacity: 1 }}>
          <Image src="/images/parallax/layer7.webp" alt="Layer 7" fill className="object-contain" />
        </motion.div>
        <motion.div className="absolute inset-0 z-80" style={{ y: layer8Y, opacity: 1 }}>
          <Image src="/images/parallax/layer8.webp" alt="Layer 8" fill className="object-contain" />
        </motion.div>
      </motion.div>

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

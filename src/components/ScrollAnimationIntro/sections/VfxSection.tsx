"use client";

import { motion, useTransform } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import {
  MousePointer2,
  Move,
  Frame,
  PenTool,
  Timer,
  ChevronDown,
} from "lucide-react";
import type { SectionProps } from "../types";
import Image from "next/image";

export default function VfxSection({ scrollYProgress }: SectionProps) {
  // Animación para "VFX"
  const vfxOpacity = useTransform(
    scrollYProgress,
    [0.525, 0.55, 0.6, 0.625],
    [0, 1, 1, 0]
  );
  const vfxY = useTransform(
    scrollYProgress,
    [0.525, 0.55, 0.6, 0.625],
    [50, 0, 0, -50]
  );
  const vfxScale = useTransform(
    scrollYProgress,
    [0.525, 0.55, 0.6, 0.625],
    [0.8, 1, 1, 0.8]
  );

  // Efecto paralaje para el video de VFX
  const vfxVideoY = useTransform(scrollYProgress, [0.525, 0.625], [100, -100]);
  const vfxVideoScale = useTransform(
    scrollYProgress,
    [0.525, 0.55, 0.6, 0.625],
    [0.7, 0.8, 0.8, 0.7]
  );
  const vfxVideoOpacity = useTransform(
    scrollYProgress,
    [0.525, 0.55, 0.6, 0.625],
    [0, 0.5, 0.5, 0]
  );
  const vfxElementsOpacity = useTransform(
    scrollYProgress,
    [0.525, 0.55, 0.6, 0.625],
    [0, 0.7, 0.7, 0]
  );
  // Parallax para línea de tiempo y caja de herramientas
  const toolboxY = useTransform(scrollYProgress, [0.525, 0.625], [20, -20]);

  const icons = [
    { Icon: MousePointer2, label: "Pointer" },
    { Icon: Move, label: "Move" },
    { Icon: Frame, label: "Frame" },
    { Icon: PenTool, label: "Pen Tool" },
    { Icon: Timer, label: "Timer" },
  ];

  return (
    <motion.div
      className="sticky top-0 flex flex-col items-center justify-center min-h-screen w-full px-4"
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
        <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-md overflow-hidden media-glow  ">
          <video
            src="/videos/vfxVideoSample.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover filter grayscale"
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
        VFX
      </TextAnimate>
      {/* Elementos visuales flotantes */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity: vfxElementsOpacity }}
      >
        {/* Caja de herramientas */}
        <motion.div
          className="z-10 mt-20 p-2 border border-white/30 rounded-xl bg-white/5 backdrop-blur-md transition-all duration-300 text-white/80  w-fit max-w-xs sm:max-w-sm md:max-w-md"
          style={{ y: toolboxY }}
        >
          <div className="grid sm:flex  gap-3">
            {icons.map(({ Icon }, index) => (
              <div key={index} className="flex items-center justify-between   ">
                <div className="flex items-center gap-2 hover:bg-white hover:text-black px-3 py-2 transition-colors rounded-md">
                  <Icon size={20} />
                </div>
                <ChevronDown size={16} />
              </div>
            ))}
          </div>
        </motion.div>
        {/* Simulación de línea de tiempo con frames en slider infinito */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl overflow-hidden border-t border-b border-white/10 py-2 z-10"
          style={{ opacity: vfxElementsOpacity }}
        >
          <motion.div
            className="flex gap-2 sm:gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 5, // mantén rápido como antes
              ease: "linear",
            }}
          >
            {[...Array(19)].map((_, i) => {
              const frameNumber = i.toString().padStart(5, "0");
              return (
                <Image
                  key={i}
                  src={`/images/VfxSection/vfxVideoSample_${frameNumber}.png`}
                  alt={`Frame ${i}`}
                  className="w-20 h-14 sm:w-32 sm:h-20 object-cover rounded-md shadow-md"
                  width={80}
                  height={56}
                />
              );
            })}
            {[...Array(19)].map((_, i) => {
              const frameNumber = i.toString().padStart(5, "0");
              return (
                <Image
                  key={i + 19}
                  src={`/images/VfxSection/vfxVideoSample_${frameNumber}.png`}
                  alt={`Frame ${i + 19}`}
                  className="w-20 h-14 sm:w-32 sm:h-20 object-cover rounded-md shadow-md"
                  width={80}
                  height={56}
                />
              );
            })}
          </motion.div>

          {/* Fades laterales como los de InstagramTestimonials */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/40 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black via-black/40 to-transparent z-20" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

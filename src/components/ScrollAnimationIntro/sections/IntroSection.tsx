"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useTransform } from "framer-motion"
import { TextAnimate } from "@/components/ui/text-animate"
import type { SectionProps } from "../types"

export default function IntroSection({ scrollYProgress }: SectionProps) {
  // Refs para cada elemento de media
  const media1Ref = useRef<HTMLSpanElement>(null)
  const media2Ref = useRef<HTMLSpanElement>(null)
  const media3Ref = useRef<HTMLSpanElement>(null)
  const media4Ref = useRef<HTMLSpanElement>(null)

  // Transformar el progreso del scroll en valores de ancho para cada elemento
  const media1Width = useTransform(scrollYProgress, [0.05, 0.1], ["0%", "15rem"])
  const media2Width = useTransform(scrollYProgress, [0.05, 0.1], ["0%", "20rem"])
  const media3Width = useTransform(scrollYProgress, [0.05, 0.1], ["0%", "20rem"])
  const media4Width = useTransform(scrollYProgress, [0.05, 0.1], ["0%", "20rem"])

  // Animación para la primera sección (desaparición)
  const introSectionOpacity = useTransform(scrollYProgress, [0.1, 0.125], [1, 0])
  const introSectionY = useTransform(scrollYProgress, [0.1, 0.125], [0, -50])

  return (
    <motion.div
      className="sticky top-0 flex flex-col items-center justify-center min-h-[100dvh] w-full px-4"
      style={{
        opacity: introSectionOpacity,
        y: introSectionY,
      }}
    >
      <div className="block flex-wrap items-center text-left sm:text-center text-4xl sm:text-8xl font-semibold gap-4 leading-none text-white">
        <TextAnimate animation="blurIn" delay={0.2} duration={0.5} className="inline-block" processJsx={true}>
          Hi, I&apos;m Christopher
          <motion.span
            ref={media1Ref}
            style={{ width: media1Width }}
            className="max-w-[6rem] aspect-[4/1] sm:max-w-full sm:w-[15rem] sm:h-[4rem] sm:rounded-[5px] overflow-hidden rounded-full inline-block mx-[0.2em]"
          >
            <Image
              alt="Ownerpic"
              src="/images/Xristopher08.jpg"
              width={2}
              height={1}
              className="w-full h-full object-cover object-[50%_40%] scale-[2.0]"
            />
          </motion.span>
          a digital illustrator,
          <motion.span
            ref={media2Ref}
            style={{ width: media2Width }}
            className="max-w-[6rem] aspect-[4/1] sm:max-w-full sm:w-[20rem] sm:h-[4rem] sm:rounded-[5px] overflow-hidden rounded-full inline-block mx-[0.1em]"
          >
            <Image
              alt="Ownerpic"
              src="/images/Anilustrator.jpg"
              width={2}
              height={1}
              className="w-full h-full object-cover object-[50%_60%] scale-[2.0]"
            />
          </motion.span>
          motion graphics designer
          <motion.span
            ref={media3Ref}
            style={{ width: media3Width }}
            className="max-w-[6rem] aspect-[4/1] sm:max-w-full sm:w-[20rem] sm:h-[4rem] sm:rounded-[5px] overflow-hidden rounded-full inline-block mx-[0.1em]"
          >
            <video
              src="/images/34 PRACTICAAF.mp4"
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-cover object-[50%_50%] scale-[2.0]"
            ></video>
          </motion.span>{" "}
          and animator
          <motion.span
            ref={media4Ref}
            style={{ width: media4Width }}
            className="max-w-[6rem] aspect-[4/1] sm:max-w-full sm:w-[20rem] sm:h-[4rem] sm:rounded-[5px] overflow-hidden rounded-full inline-block mx-[0.1em]"
          >
            <video
              src="/images/33 MRND.mp4"
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-cover object-[50%_50%] scale-[2.0]"
            ></video>
          </motion.span>
          creating good characters and visual narratives.
        </TextAnimate>
      </div>
    </motion.div>
  )
}

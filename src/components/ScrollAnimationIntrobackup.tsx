

"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ScrollAnimationIntro() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  // Refs para cada elemento de media
  const media1Ref = useRef<HTMLSpanElement>(null)
  const media2Ref = useRef<HTMLSpanElement>(null)
  const media3Ref = useRef<HTMLSpanElement>(null)
  const media4Ref = useRef<HTMLSpanElement>(null)

  // Configurar el scroll y la animación
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Efecto fadeIn inicial para todo el contenido
  const initialOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  // Transformar el progreso del scroll en valores de ancho para cada elemento
  const media1Width = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "15rem"])
  const media2Width = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "20rem"])
  const media3Width = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "20rem"])
  const media4Width = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "20rem"])

  // Calcular la altura del contenedor para permitir suficiente espacio para el scroll
  useEffect(() => {
    if (containerRef.current) {
      // Volvemos a la altura original de 2 veces la altura de la ventana
      setContainerHeight(window.innerHeight * 2)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ height: `${containerHeight}px` }} className="relative w-full">
      <motion.div className="sticky top-0 flex flex-col items-center justify-center h-screen w-full px-4">
        {/* Contenido principal con efecto fadeIn inicial */}
        <motion.div
          className="flex flex-col items-center text-left sm:text-center text-4xl sm:text-8xl font-semibold gap-4"
          style={{ opacity: initialOpacity }}
        >
          <p className="leading-none flex-shrink-0 text-white">
            Hi, I&apos;m Christopher
            <motion.span
              ref={media1Ref}
              style={{ width: media1Width }}
              className="max-w-[6rem] aspect-[4/1] sm:max-w-full sm:w-[15rem] sm:h-[4rem] sm:rounded-[5px] overflow-hidden rounded-full inline-flex mx-[0.2em]"
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
              className="max-w-[6rem] aspect-[4/1] sm:max-w-full sm:w-[20rem] sm:h-[4rem] sm:rounded-[5px] overflow-hidden rounded-full inline-flex mx-[0.1em]"
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
              className="max-w-[6rem] aspect-[4/1] sm:max-w-full sm:w-[20rem] sm:h-[4rem] sm:rounded-[5px] overflow-hidden rounded-full inline-flex mx-[0.1em]"
            >
              <video
                src="/images/34 PRACTICAAF.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover object-[50%_50%] scale-[2.0]"
              ></video>
            </motion.span>
            and animator
            <motion.span
              ref={media4Ref}
              style={{ width: media4Width }}
              className="max-w-[6rem] aspect-[4/1] sm:max-w-full sm:w-[20rem] sm:h-[4rem] sm:rounded-[5px] overflow-hidden rounded-full inline-flex mx-[0.1em]"
            >
              <video
                src="/images/33 MRND.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover object-[50%_50%] scale-[2.0]"
              ></video>
            </motion.span>
            creating good characters and visual narratives.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}


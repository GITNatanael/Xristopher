"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { TextAnimate } from "@/components/ui/text-animate"

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

  // Transformar el progreso del scroll en valores de ancho para cada elemento
  const media1Width = useTransform(scrollYProgress, [0.05, 0.1], ["0%", "15rem"])
  const media2Width = useTransform(scrollYProgress, [0.05, 0.1], ["0%", "20rem"])
  const media3Width = useTransform(scrollYProgress, [0.05, 0.1], ["0%", "20rem"])
  const media4Width = useTransform(scrollYProgress, [0.05, 0.1], ["0%", "20rem"])

  // REDISTRIBUCIÓN DE RANGOS PARA 8 SECCIONES
  // Cada sección tiene aproximadamente 0.125 (1/8) del rango total

  // Animación para la primera sección (desaparición)
  const introSectionOpacity = useTransform(scrollYProgress, [0.1, 0.125], [1, 0])
  const introSectionY = useTransform(scrollYProgress, [0.1, 0.125], [0, -50])

  // Animación para el título "What can I do for you?"
  const servicesTitleOpacity = useTransform(scrollYProgress, [0.125, 0.15, 0.2, 0.225], [0, 1, 1, 0])
  const servicesTitleY = useTransform(scrollYProgress, [0.125, 0.15, 0.2, 0.225], [50, 0, 0, -50])
  const servicesTitleScale = useTransform(scrollYProgress, [0.125, 0.15, 0.2, 0.225], [0.8, 1, 1, 0.8])

  // Animación para "Illustrations"
  const illustrationsOpacity = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [0, 1, 1, 0])
  const illustrationsY = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [50, 0, 0, -50])
  const illustrationsScale = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [0.8, 1, 1, 0.8])

  // Efecto paralaje para la imagen de Illustrations
  const illustrationsImageY = useTransform(scrollYProgress, [0.225, 0.325], [100, -100])
  const illustrationsImageScale = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [0.7, 0.8, 0.8, 0.7])
  const illustrationsImageOpacity = useTransform(scrollYProgress, [0.225, 0.25, 0.3, 0.325], [0, 0.5, 0.5, 0])

  // Animación para "2D Animations"
  const animationsOpacity = useTransform(scrollYProgress, [0.325, 0.35, 0.4, 0.425], [0, 1, 1, 0])
  const animationsY = useTransform(scrollYProgress, [0.325, 0.35, 0.4, 0.425], [50, 0, 0, -50])
  const animationsScale = useTransform(scrollYProgress, [0.325, 0.35, 0.4, 0.425], [0.8, 1, 1, 0.8])

  // Efecto paralaje para la imagen de 2D Animations
  const animationsImageY = useTransform(scrollYProgress, [0.325, 0.425], [100, -100])
  const animationsImageScale = useTransform(scrollYProgress, [0.325, 0.35, 0.4, 0.425], [0.7, 0.8, 0.8, 0.7])
  const animationsImageOpacity = useTransform(scrollYProgress, [0.325, 0.35, 0.4, 0.425], [0, 0.5, 0.5, 0])

  // NUEVAS SECCIONES CON RANGOS AJUSTADOS

  // Animación para "Motion Design"
  const motionDesignOpacity = useTransform(scrollYProgress, [0.425, 0.45, 0.5, 0.525], [0, 1, 1, 0])
  const motionDesignY = useTransform(scrollYProgress, [0.425, 0.45, 0.5, 0.525], [50, 0, 0, -50])
  const motionDesignScale = useTransform(scrollYProgress, [0.425, 0.45, 0.5, 0.525], [0.8, 1, 1, 0.8])

  // Efecto paralaje para el video de Motion Design
  const motionDesignVideoY = useTransform(scrollYProgress, [0.425, 0.525], [100, -100])
  const motionDesignVideoScale = useTransform(scrollYProgress, [0.425, 0.45, 0.5, 0.525], [0.7, 0.8, 0.8, 0.7])
  const motionDesignVideoOpacity = useTransform(scrollYProgress, [0.425, 0.45, 0.5, 0.525], [0, 0.5, 0.5, 0])

  // Animación para "VFX"
  const vfxOpacity = useTransform(scrollYProgress, [0.525, 0.55, 0.6, 0.625], [0, 1, 1, 0])
  const vfxY = useTransform(scrollYProgress, [0.525, 0.55, 0.6, 0.625], [50, 0, 0, -50])
  const vfxScale = useTransform(scrollYProgress, [0.525, 0.55, 0.6, 0.625], [0.8, 1, 1, 0.8])

  // Efecto paralaje para el video de VFX
  const vfxVideoY = useTransform(scrollYProgress, [0.525, 0.625], [100, -100])
  const vfxVideoScale = useTransform(scrollYProgress, [0.525, 0.55, 0.6, 0.625], [0.7, 0.8, 0.8, 0.7])
  const vfxVideoOpacity = useTransform(scrollYProgress, [0.525, 0.55, 0.6, 0.625], [0, 0.5, 0.5, 0])

  // Animación para "Design for your shirt"
  const shirtDesignOpacity = useTransform(scrollYProgress, [0.625, 0.65, 0.7, 0.725], [0, 1, 1, 0])
  const shirtDesignY = useTransform(scrollYProgress, [0.625, 0.65, 0.7, 0.725], [50, 0, 0, -50])
  const shirtDesignScale = useTransform(scrollYProgress, [0.625, 0.65, 0.7, 0.725], [0.8, 1, 1, 0.8])

  // Efecto paralaje para la imagen de Design for your shirt
/*   const shirtDesignImageY = useTransform(scrollYProgress, [0.625, 0.725], [100, -100])
  const shirtDesignImageScale = useTransform(scrollYProgress, [0.625, 0.65, 0.7, 0.725], [0.7, 0.8, 0.8, 0.7])
  const shirtDesignImageOpacity = useTransform(scrollYProgress, [0.625, 0.65, 0.7, 0.725], [0, 0.5, 0.5, 0]) */

  // Animación para "Contact Me"
  const contactOpacity = useTransform(scrollYProgress, [0.725, 0.75, 0.85, 0.9], [0, 1, 1, 0])
  const contactY = useTransform(scrollYProgress, [0.725, 0.75, 0.85, 0.9], [50, 0, 0, -50])
  const contactScale = useTransform(scrollYProgress, [0.725, 0.75, 0.85, 0.9], [0.8, 1, 1, 0.8])

  // Efecto paralaje para el video de Contact Me
  const contactVideoY = useTransform(scrollYProgress, [0.725, 0.9], [100, -100])
  const contactVideoScale = useTransform(scrollYProgress, [0.725, 0.75, 0.85, 0.9], [0.7, 0.8, 0.8, 0.7])
  const contactVideoOpacity = useTransform(scrollYProgress, [0.725, 0.75, 0.85, 0.9], [0, 0.5, 0.5, 0])

  // Calcular la altura del contenedor para permitir suficiente espacio para el scroll
  useEffect(() => {
    if (containerRef.current) {
      // Aumentamos la altura para dar espacio a todas las secciones (ahora 8 secciones en total)
      setContainerHeight(window.innerHeight * 10)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ height: `${containerHeight}px` }} className="relative w-full">
      {/* Primera sección - Introducción */}
      <motion.div
        className="sticky top-0 flex flex-col items-center justify-center h-screen w-full px-4"
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
                loop
                className="w-full h-full object-cover object-[50%_50%] scale-[2.0]"
              ></video>
            </motion.span>
            creating good characters and visual narratives.
          </TextAnimate>
        </div>
      </motion.div>

      {/* Segunda sección - Título de Servicios */}
      <motion.div
        className="sticky top-0 flex flex-col items-center justify-center h-screen w-full px-4"
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
          What can I do for you?
        </TextAnimate>
      </motion.div>

      {/* Tercera sección - Illustrations */}
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
          <div className=" opacity-0 w-[100%] sm:w-[100vh] sm:h-[100vh] rounded-full overflow-hidden media-glow">
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
              y: useTransform(scrollYProgress, [0.225, 0.325], [1-30, -930]),
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
          className="text-6xl sm:text-8xl font-bold text-white z-10 mix-blend-difference text-glow"
        >
          Illustrations
        </TextAnimate>
      </motion.div>

      {/* Cuarta sección - 2D Animations */}
      <motion.div
        className="sticky top-0 flex flex-col items-center justify-center h-screen w-full px-4"
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
            <video src="/videos/AnimationBW.mp4" autoPlay muted loop className="w-full h-full object-cover"></video>
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

      {/* NUEVAS SECCIONES */}

      {/* Quinta sección - Motion Design */}
      <motion.div
        className="sticky top-0 flex flex-col items-center justify-center h-screen w-full px-4"
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
            <video src="/images/Cinematic Motion Graphic Array.mp4" autoPlay muted loop className="w-full h-full object-cover"></video>
          </div>
        </motion.div>

        {/* Texto en primer plano */}
        <TextAnimate
          animation="blurIn"
          delay={0.2}
          duration={0.5}
          className="text-6xl sm:text-8xl font-bold text-white z-10 mix-blend-difference text-glow"
        >
          Motion Design
        </TextAnimate>
      </motion.div>

      {/* Sexta sección - VFX */}
      <motion.div
        className="sticky top-0 flex flex-col items-center justify-center h-screen w-full px-4"
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
          <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden media-glow">
            <video src="/images/34 PRACTICAAF.mp4" autoPlay muted loop className="w-full h-full object-cover"></video>
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
      </motion.div>

      {/* Séptima sección - Design for your brand */}
      <motion.div
        className="sticky top-0 flex flex-col items-center justify-center h-screen w-full px-4 overflow-hidden"
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
                src="/images/branding/BrandingSphere-1.png"
                alt="Branding Sphere 1"
                width={150}
                height={150}
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
                src="/images/branding/BrandingSphere2.png"
                alt="Branding Sphere 2"
                width={180}
                height={180}
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
                src="/images/branding/BrandingSphere3.png"
                alt="Branding Sphere 3"
                width={140}
                height={140}
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
                src="/images/branding/BrandingSphere4.png"
                alt="Branding Sphere 4"
                width={170}
                height={170}
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
                src="/images/branding/BrandingSphere5.png"
                alt="Branding Sphere 5"
                width={190}
                height={190}
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
                src="/images/branding/BrandingSphere-6.png"
                alt="Branding Sphere 6"
                width={160}
                height={160}
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
                src="/images/branding/BrandingSphere7.png"
                alt="Branding Sphere 7"
                width={175}
                height={175}
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
          design for your brand
        </TextAnimate>
      </motion.div>

      {/* Octava sección - Contact Me */}
      <motion.div
        className="sticky top-0 flex flex-col items-center justify-center h-screen w-full px-4"
        style={{
          opacity: contactOpacity,
          y: contactY,
          scale: contactScale,
        }}
      >
        {/* Video de fondo con efecto paralaje */}
        <motion.div
          className="absolute z-0"
          style={{
            y: contactVideoY,
            scale: contactVideoScale,
            opacity: contactVideoOpacity,
          }}
        >
          <div className="w-[200px] h-[200px] sm:w-screen sm:h-screen overflow-hidden">
            <video src="/videos/Kinectypo.mp4" autoPlay muted loop className="w-full h-full object-full"></video>
          </div>
        </motion.div>

        {/* Texto en primer plano */}
        <TextAnimate
          animation="blurIn"
          delay={0.2}
          duration={0.5}
          className="text-6xl sm:text-8xl font-bold text-white z-10 mix-blend-difference text-glow"
        >
         christopher.mrnd98@gmail.com
        </TextAnimate>
      </motion.div>
    </div>
  )
}

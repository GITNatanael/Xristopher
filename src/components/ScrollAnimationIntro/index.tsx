"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import IntroSection from "@/components/ScrollAnimationIntro/sections/IntroSection";
import ServicesSection from "@/components/ScrollAnimationIntro/sections/ServicesSection";
import IllustrationsSection from "@/components/ScrollAnimationIntro/sections/IllustrationsSection";
import AnimationsSection from "@/components/ScrollAnimationIntro/sections/AnimationsSection";
import MotionDesignSection from "@/components/ScrollAnimationIntro/sections/MotionDesignSection";
import VfxSection from "@/components/ScrollAnimationIntro/sections/VfxSection";
import BrandDesignSection from "@/components/ScrollAnimationIntro/sections/BrandDesignSection";
import ContactSection from "@/components/ScrollAnimationIntro/sections/ContactSection";
import InstagramTestimonials from "@/components/InstagramTestimonials";

type ScrollAnimationIntroProps = {
  showPortfolio: () => void;
};

export default function ScrollAnimationIntro({
  showPortfolio,
}: ScrollAnimationIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Configurar el scroll y la animación
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calcular la altura del contenedor para permitir suficiente espacio para el scroll
  useEffect(() => {
    if (containerRef.current) {
      // Aumentamos la altura para dar espacio a todas las secciones (8 secciones en total)
      setContainerHeight(window.innerHeight * 9.5);
    }
  }, []);

  // Opacidad del botón "Watch Portfolio" (visible del 25% al 75% del scroll del componente)
  const watchBtnOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.7, 0.75],
    [0, 1, 1, 0]
  );

  return (
    <>
      <div
        ref={containerRef}
        style={{ height: `${containerHeight}px` }}
        className="relative w-full"
      >
        {/* Primera sección - Introducción */}
        <IntroSection scrollYProgress={scrollYProgress} />

        {/* Segunda sección - Título de Servicios */}
        <ServicesSection scrollYProgress={scrollYProgress} />

        <div className="relative h-fit w-full">
          {/* Botón fijo con transición de opacidad */}
          <motion.div
            style={{ opacity: watchBtnOpacity }}
            className="sticky top-1/2 z-30 w-full pointer-events-none"
          >
            {/* Desktop: botón al lado derecho centrado vertical */}
            <div className="hidden sm:flex justify-end pr-8 translate-y-[-50%]">
              <motion.button
                onClick={showPortfolio}
                className="pointer-events-auto border border-white/40 text-white/70  rounded-full transition-colors hover:bg-white hover:text-black px-5 py-2 text-sm font-medium  shadow-md hover:opacity-100 opacity-60"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch Portfolio
              </motion.button>
            </div>

            {/* Mobile: botón al fondo, sin usar fixed */}
            <div className="flex sm:hidden justify-center translate-y-[500%]">
              <motion.button
                onClick={showPortfolio}
                className="pointer-events-auto border border-white/40 text-white/70  rounded-full transition-colors hover:bg-white hover:text-black px-5 py-2 text-sm font-medium  shadow-md hover:opacity-100 opacity-60"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch Portfolio
              </motion.button>
            </div>
          </motion.div>

          {/* Tercera sección - Illustrations */}
          <IllustrationsSection scrollYProgress={scrollYProgress} />

          {/* Cuarta sección - 2D Animations */}
          <AnimationsSection scrollYProgress={scrollYProgress} />

          {/* Quinta sección - Motion Design */}
          <MotionDesignSection scrollYProgress={scrollYProgress} />

          {/* Sexta sección - VFX */}
          <VfxSection scrollYProgress={scrollYProgress} />

          {/* Séptima sección - Design for your brand */}
          <BrandDesignSection scrollYProgress={scrollYProgress} />
        </div>

        {/* Octava sección - Contact Me */}
        <ContactSection scrollYProgress={scrollYProgress} />

        {/* Testimonios de Instagram */}
        <InstagramTestimonials />
      </div>
    </>
  );
}

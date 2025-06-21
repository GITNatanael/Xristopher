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
import { ArrowUpRight } from 'lucide-react';

type ScrollAnimationIntroProps = {
  showPortfolio: () => void;
};

export default function ScrollAnimationIntro({
  showPortfolio,
}: ScrollAnimationIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const watchBtnOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.7, 0.75],
    [0, 1, 1, 0]
  );

  useEffect(() => {
    const updateContainerHeight = () => {
      if (containerRef.current) {
        const vh = window.innerHeight;
        // 9.5 para el número de secciones, ajusta si agregas más
        setContainerHeight(vh * 9.5);
      }
    };

    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);
    window.addEventListener("orientationchange", updateContainerHeight);

    return () => {
      window.removeEventListener("resize", updateContainerHeight);
      window.removeEventListener("orientationchange", updateContainerHeight);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: `${containerHeight}px` }}
      className="relative w-full"
    >
      <IntroSection scrollYProgress={scrollYProgress} />
      <ServicesSection scrollYProgress={scrollYProgress} />
      <div className="relative h-fit w-full">
        <motion.div
          style={{ opacity: watchBtnOpacity }}
          className="sticky top-1/2 z-30 w-full pointer-events-none"
        >
          <div className="hidden sm:flex justify-end pr-8 translate-y-[-50%]">
            <motion.button
              onClick={showPortfolio}
              className="pointer-events-auto border border-white/40 text-white/70 rounded-full transition-colors hover:bg-white hover:text-black px-5 py-2 text-sm font-medium shadow-md hover:opacity-100 opacity-60 flex gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            > <ArrowUpRight size={16}  />
              Watch Portfolio 
            </motion.button>
          </div>
          <div className="flex sm:hidden justify-center translate-y-[500%]">
            <motion.button
              onClick={showPortfolio}
              className="pointer-events-auto border border-white/40 text-white/70 rounded-full transition-colors hover:bg-white hover:text-black px-5 py-2 text-sm font-medium shadow-md hover:opacity-100 opacity-60 flex gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            ><ArrowUpRight size={16}  />
              Watch Portfolio  
              
            </motion.button>
          </div>
        </motion.div>
        <IllustrationsSection scrollYProgress={scrollYProgress} />
        <AnimationsSection scrollYProgress={scrollYProgress} />
        <MotionDesignSection scrollYProgress={scrollYProgress} />
        <VfxSection scrollYProgress={scrollYProgress} />
        <BrandDesignSection scrollYProgress={scrollYProgress} />
      </div>
      <ContactSection scrollYProgress={scrollYProgress} />
      <InstagramTestimonials />
    </div>
  );
}

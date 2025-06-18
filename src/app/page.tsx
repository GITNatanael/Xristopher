"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FirebaseStorageGallery } from "@/components/FirebaseStorageGallery";
import ScrollAnimationIntro from "@/components/ScrollAnimationIntro/index";
import {ArrowLeft, GalleryVerticalEnd,Smile,MessageSquare,} from "lucide-react";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import TeaserIntro from "@/components/TeaserIntro";
import LoadingScreen from "@/components/LoadingScreen";
import SiteFooter from "@/components/SiteFooter";
import { SparklesWrapper } from "@/components/SparklesWrapper"; //Hover de sparkles
import WatchReelButton from "@/components/WatchReelButton";
import SubTitle from "@/components/SubTitle";

export default function Home() {
  const [currentView, setCurrentView] = useState<
    "home" | "portfolio" | "about" | "contact"
  >("home");
  const [loading, setLoading] = useState(true);
  const [teaserFinished, setTeaserFinished] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // Nuevo estado para activar fade-bottom

  // Función para cambiar a la vista de portfolio
  const showPortfolio = () => {
    setCurrentView("portfolio");
  };

  // Función para cambiar a about
  const showAbout = () => {
    setCurrentView("about");
  };

  // Función para cambiar a contact
  const showContact = () => {
    setCurrentView("contact");
  };

  // Función para volver al home
  const showHome = () => {
    setCurrentView("home");
  };

  // Variantes de animación para las transiciones
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  useEffect(() => {
    if (teaserFinished) {
      const timeout = setTimeout(() => {
        setFadeIn(true);
      }, 400); // 400ms de delay, puedes ajustar

      return () => clearTimeout(timeout);
    }
  }, [teaserFinished]);


  useEffect(() => {
  const preloadResources = async () => {
    const assets = [
      "/videos/Showreel2023.mp4",
    ];

    const promises = assets.map((src) => {
      if (src.endsWith(".mp4")) {
        return new Promise((resolve) => {
          const video = document.createElement("video");
          video.src = src;
          video.onloadeddata = () => resolve(true);
          video.onerror = () => resolve(true);
          // Timeout individual (opcional)
          setTimeout(() => resolve(true), 3000);
        });
      } else {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true);
          setTimeout(() => resolve(true), 3000);
        });
      }
    });

    // Promise.race entre assets y timeout general
    await Promise.race([
      Promise.all(promises),
      new Promise((resolve) => setTimeout(resolve, 4000)) // Timeout máximo 4 segundos
    ]);

    setLoading(false);
  };

  preloadResources();
}, []);



  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-[100dvh]">
      
      <AnimatePresence mode="wait">
        {currentView === "home" && (
          <motion.div
            key="home"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {/* Nuevo teaser visual */}
            <div className="w-full overflow-hidden relative">
              <div
                className={`w-full transition-opacity duration-700 ${
                  fadeIn ? "fade-bottom opacity-[0.2]" : "opacity-100"
                }`}
              >
                <TeaserIntro onFinish={() => setTeaserFinished(true)} />
              </div>
              

              {/* Solo mostramos el contenido principal si el teaser terminó */}
              {teaserFinished && (
                <>
                
                  <div className="absolute inset-0 flex items-center justify-center flex-col mt-[20rem] cursor-default">
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mix-blend-difference tracking-tighter leading-[3.5rem]"
                    >
                      christopher{" "}
                    </motion.h1>
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                      className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mix-blend-difference tracking-tighter -mt-[2rem]"
                    >
                      miranda
                    </motion.h1>
                    <SubTitle/>
                  </div>
                   {/* Frase inspiracional */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="text-xl sm:text-2xl font-medium  text-center"
                  >
                    creativity in every frame.
                  </motion.p>
                </>
              )}
            </div>
            {/* Solo mostramos el contenido principal si el teaser terminó */}
            {teaserFinished && (
              <>
              <WatchReelButton teaserFinished={teaserFinished} />
                {/* Contenido Principal */}
                <div className="w-full max-w-7xl mx-auto px-4 text-center text-white">
                  {/* Botones de navegación con estilos mejorados */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="flex justify-center mt-10"
                  >
                    {" "}
                    <SparklesWrapper>
                      <motion.button
                        onClick={showPortfolio}
                        className="flex items-center gap-3 bg-white text-black rounded-full px-8 py-3 text-lg sm:text-xl font-bold shadow-xl hover:bg-gray-200 transition-all duration-300"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <GalleryVerticalEnd className="w-6 h-6" />
                        Watch Portfolio
                      </motion.button>{" "}
                    </SparklesWrapper>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 mt-6 w-full"
                  >
                    <motion.button
                      onClick={showAbout}
                      className="flex items-center gap-2 border-2 border-white text-white rounded-full px-6 py-2 text-base sm:text-lg font-medium hover:bg-white hover:text-black transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Smile className="w-5 h-5" />
                      About Me
                    </motion.button>
                    <motion.button
                      onClick={showContact}
                      className="flex items-center gap-2 border-2 border-white text-white rounded-full px-6 py-2 text-base sm:text-lg font-medium hover:bg-white hover:text-black transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageSquare className="w-5 h-5" />
                      Contact
                    </motion.button>
                  </motion.div>

                 

                  {/* Introducción con animación de scroll */}
                  <ScrollAnimationIntro showPortfolio={showPortfolio} />
                </div>

                {/* Testimonios de Instagram */}
                <SiteFooter />
              </>
            )}
          </motion.div>
        )}

        {currentView === "portfolio" && (
          <motion.div
            key="portfolio"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="min-h-screen bg-black"
          >
            {/* Botón de regreso en esquina superior izquierda */}
            <div className="fixed top-4 left-4 z-50">
              <motion.button
                onClick={showHome}
                className="bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft size={20} />
              </motion.button>
            </div>

            {/* Header del portfolio */}
            <div className="w-full px-4 py-4  text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Portfolio
              </h1>
            </div>

            {/* Contenido del portfolio */}
            <div className="px-4  mx-auto">
              <FirebaseStorageGallery />
            </div>
          </motion.div>
        )}

        {currentView === "about" && (
          <AboutSection onBackClick={showHome} onContactClick={showContact} />
        )}

        {currentView === "contact" && <ContactSection onBackClick={showHome} />}
      </AnimatePresence>
    </div>
  );
}

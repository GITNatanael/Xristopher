"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

interface WatchReelButtonProps {
  teaserFinished: boolean;
}

export default function WatchReelButton({
  teaserFinished,
}: WatchReelButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const current = targetRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Punto invisible para observar si seguimos en la parte superior */}
      <div ref={targetRef} className="absolute top-0 h-[80vh] w-full" />

      {/* Botón solo aparece si teaser terminó y sección está visible */}
      <AnimatePresence>
        {teaserFinished && isVisible && !isOpen && (
          <motion.div
            className="fixed right-4 top-[5vh] z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 border border-white/40 text-white/70  rounded-full transition-colors hover:bg-white hover:text-black  text-sm font-medium flex items-center gap-2 shadow-sm"
            >
              <Maximize2 size={16} />
              Watch Reel
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={backdropRef}
            onClick={(e) => {
              if (e.target === backdropRef.current) {
                setIsOpen(false);
              }
            }}
          >
            <motion.video
              key="video"
              src="/videos/Showreel2023.mp4"
              autoPlay
              loop
              controls
              className="max-w-full max-h-full rounded-xl shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            />

            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-white hover:text-black transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={20} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

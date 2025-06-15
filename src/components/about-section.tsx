"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

interface AboutSectionProps {
  onBackClick: () => void
  onContactClick: () => void
}

export default function AboutSection({ onBackClick, onContactClick }: AboutSectionProps) {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: "tween",
        ease: "anticipate",
        duration: 0.5,
      }}
      className="min-h-screen bg-black"
    >
      {/* Botón de regreso en esquina superior izquierda */}
      <div className="fixed top-4 left-4 z-50">
        <motion.button
          onClick={onBackClick}
          className="bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft size={20} />
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">About Me</h1>
            <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Hi, I'm Christopher Miranda, a passionate 2D animator and digital illustrator with over 5 years of
                experience bringing stories to life through motion and art.
              </p>
              <p>
                I specialize in character animation, motion graphics, and digital illustration, working with clients
                from around the world to create compelling visual narratives that engage and inspire audiences.
              </p>
              <p>
                My approach combines traditional animation principles with modern digital techniques, ensuring each
                project has both technical excellence and emotional resonance.
              </p>
            </div>
            <motion.button
              onClick={onContactClick}
              className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Work Together
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative overflow-hidden rounded-2xl max-w-md mx-auto">
              <Image src="/images/Anilustrator.jpg" alt="Christopher Miranda" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

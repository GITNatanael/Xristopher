"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Mail, Instagram, Linkedin } from "lucide-react"

interface ContactSectionProps {
  onBackClick: () => void
}

export default function ContactSection({ onBackClick }: ContactSectionProps) {
  return (
    <motion.div
      key="contact"
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
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Let's Create Together</h1>
          <p className="text-lg sm:text-xl text-gray-400">Ready to bring your ideas to life? Get in touch!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:contact@christophermiranda.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span>contact@christophermiranda.com</span>
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span>@christophermiranda</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span>Christopher Miranda</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 p-6 sm:p-8 rounded-2xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

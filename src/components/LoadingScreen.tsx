// components/LoadingScreen.tsx
"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl tracking-wider  sm:text-6xl font-bold text-white z-10 mix-blend-difference  ">loading...</h1>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-start bg-cover bg-center bg-no-repeat relative px-4 sm:px-6 md:px-8 lg:px-12"
      style={{ backgroundImage: 'url("/images/coffee cart placeholder.jpg")' }}
      aria-label="Hero section featuring Psalms Coffee mobile specialty coffee cart"
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/65 md:bg-black/50"></div>

      <motion.div
        className="relative z-10 w-full max-w-2xl md:max-w-none md:ml-8 lg:ml-16 xl:ml-24 text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-5 md:mb-6 leading-[1.15]"
          style={{ fontFamily: "var(--font-ivy-prosto)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <i className="block mb-1">Specialty coffee</i>
          <span
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl block mt-2"
          >
            for your event
          </span>
        </motion.h1>

        <motion.div
          className="space-y-4 md:space-y-6 mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed">
            Psalms Coffee brings people together through exceptional coffee
            experiences, creating moments of connection and joy at every event
            we serve
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-light">
            Serving the Salem Metro Area
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#book"
            className="inline-block px-10 sm:px-12 md:px-16 lg:px-20 py-3.5 sm:py-4 md:py-5 bg-white text-black hover:bg-white/90 transition-colors font-medium text-base sm:text-lg md:text-xl tracking-wide"
          >
            BOOK US!
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

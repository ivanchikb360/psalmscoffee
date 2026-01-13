"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-3">
        <div className="absolute top-20 left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-stone-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-stone-200 rounded-full blur-3xl"></div>
      </div>

      {/* Running Banner */}
      <motion.div
        className="bg-amber-900 text-white py-3 sm:py-4 md:py-5 overflow-hidden relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="animate-marquee whitespace-nowrap">
          <span className="inline-block mx-4 sm:mx-6 md:mx-8 text-sm sm:text-base md:text-lg font-light tracking-wider">
            SPECIALTY COFFEE FOR YOUR WEDDING DAY • PERFECT FOR CELEBRATIONS &
            EVENTS • MAKING MOMENTS UNFORGETTABLE • SPECIALTY COFFEE FOR YOUR
            WEDDING DAY • PERFECT FOR CELEBRATIONS & EVENTS • MAKING MOMENTS
            UNFORGETTABLE • SPECIALTY COFFEE FOR YOUR WEDDING DAY • PERFECT FOR
            CELEBRATIONS & EVENTS • MAKING MOMENTS UNFORGETTABLE •
          </span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 md:pt-20 pb-8 sm:pb-10 md:pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left Column - Image */}
          <motion.div
            className="hidden lg:flex justify-center lg:justify-start order-2 lg:order-1 mb-8 sm:mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-none">
              {/* Decorative circle behind image - hidden on mobile */}
              <div className="hidden md:block absolute -inset-3 lg:-inset-4 bg-stone-100 rounded-full blur-xl opacity-60"></div>
              <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:w-96 lg:h-96 mx-auto lg:mx-0 rounded-2xl sm:rounded-3xl md:rounded-full overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl ring-1 sm:ring-2 md:ring-4 ring-stone-50">
                <Image
                  src="/images/coffee cart placeholder.jpg"
                  alt="Elegant mobile coffee cart setup by Psalms Coffee at a wedding event, featuring specialty coffee service"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent - hidden on mobile */}
              <div className="hidden md:block absolute -bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full opacity-40 blur-2xl"></div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Section heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-3 sm:mb-4 md:mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                More than coffee
              </h2>
              <div className="w-14 sm:w-18 md:w-24 h-0.5 sm:h-1 bg-amber-900 mb-4 sm:mb-5 md:mb-8"></div>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-700 italic font-light leading-relaxed"
              style={{ fontFamily: "var(--font-playfair)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              At Psalms Coffee, we believe coffee is more than just a
              drink—it&apos;s an invitation to connect.
            </motion.p>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Rooted in a passion for community and creativity, we specialize in
              mobile specialty coffee catering that turns ordinary moments into
              memorable experiences. Our elegant cart setup is designed to
              complement your event&apos;s aesthetic while delivering fast,
              high-quality service with warmth and care.
            </motion.p>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Whether it&apos;s a wedding, corporate event, or intimate
              gathering, Psalms Coffee brings the energy, flavor, and beauty
              that make your guests feel truly seen and celebrated.
            </motion.p>

            <motion.div
              className="pt-2 sm:pt-3 md:pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="#book"
                className="inline-block px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 bg-amber-900 text-white hover:bg-amber-900/90 transition-all duration-300 font-medium text-sm sm:text-base md:text-lg tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                BOOK NOW
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

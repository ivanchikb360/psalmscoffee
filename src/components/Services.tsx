"use client";

import Image from "next/image";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-3 items-start lg:items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 lg:col-span-1 order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              An elegant experience, crafted with quality coffee
            </motion.h2>

            {/* CTA Button - Desktop only (under text) */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <a
                href="#book"
                className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 bg-amber-900 text-white hover:bg-amber-900/90 transition-colors font-medium text-base sm:text-lg tracking-wide"
              >
                BOOK US!
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Service Images */}
          <motion.div
            className="lg:col-span-2 lg:ml-8 xl:ml-20 order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8">
              {/* Service 1 */}
              <motion.div
                className="space-y-3 sm:space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-amber-100 rounded-xl sm:rounded-2xl h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                  <Image
                    src="/images/espresso drink.jpg"
                    alt="Premium espresso drinks served at weddings and events by Psalms Coffee mobile cart"
                    width={600}
                    height={420}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-700 text-center">
                  Espresso drinks
                </h3>
              </motion.div>

              {/* Service 2 */}
              <motion.div
                className="space-y-3 sm:space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-100 rounded-xl sm:rounded-2xl h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/specialty drink.jpg"
                    alt="Specialty coffee drinks including lattes, cappuccinos, and custom beverages from Psalms Coffee"
                    width={600}
                    height={420}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-700 text-center">
                  Specialty drinks
                </h3>
              </motion.div>

              {/* Service 3 */}
              <motion.div
                className="space-y-3 sm:space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 rounded-xl sm:rounded-2xl h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/fast service.jpg"
                    alt="Fast and high-quality coffee service at events with professional baristas from Psalms Coffee"
                    width={600}
                    height={420}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-700 text-center">
                  Fast & high quality service!
                </h3>
              </motion.div>
            </div>

            {/* CTA Button - Mobile/Tablet only (under images) */}
            <motion.div
              className="text-center lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <a
                href="#book"
                className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 bg-amber-900 text-white hover:bg-amber-900/90 transition-colors font-medium text-base sm:text-lg tracking-wide"
              >
                BOOK US!
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

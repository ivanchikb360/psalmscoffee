"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-950 to-stone-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-800 rounded-full blur-3xl"></div>
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          {/* Brand Section - Takes up more space */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-5 md:mb-6 text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Psalms Coffee
            </h3>
            <div className="w-12 sm:w-14 md:w-16 h-0.5 bg-amber-900 mb-4 sm:mb-5 md:mb-6"></div>
            <p className="text-stone-300 mb-6 sm:mb-7 md:mb-8 max-w-lg leading-relaxed text-sm sm:text-base">
              Bringing specialty coffee directly to your special moments. From
              weddings to corporate events, we create memorable coffee
              experiences that bring people together.
            </p>

            {/* CTA Button */}
            <motion.a
              href="#book"
              className="inline-block px-6 sm:px-7 md:px-8 py-2.5 sm:py-2.5 md:py-3 bg-amber-900 text-white hover:bg-amber-800 transition-all duration-300 font-medium text-xs sm:text-sm tracking-wide rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-6 sm:mb-7 md:mb-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Your Event
            </motion.a>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-stone-400 text-sm mr-2">Follow us:</span>
              <motion.a
                href="#"
                className="w-9 h-9 bg-stone-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-300 hover:bg-amber-900 hover:text-white transition-all duration-200 border border-stone-700/50 hover:border-amber-900"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="w-9 h-9 bg-stone-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-300 hover:bg-amber-900 hover:text-white transition-all duration-200 border border-stone-700/50 hover:border-amber-900"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-400 mb-4 sm:mb-5 md:mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="#services"
                  className="text-stone-300 hover:text-white transition-all duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-amber-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Services
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-stone-300 hover:text-white transition-all duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-amber-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    About Us
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#book"
                  className="text-stone-300 hover:text-white transition-all duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-amber-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Book Your Event
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#book"
                  className="text-stone-300 hover:text-white transition-all duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-amber-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-400 mb-4 sm:mb-5 md:mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 sm:gap-4 group text-stone-300 hover:text-white transition-colors"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-stone-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-amber-900 transition-all duration-200 border border-stone-700/50 group-hover:border-amber-900 flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-stone-400 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    (555) 123-4567
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@psalmscoffee.com"
                  className="flex items-center gap-3 sm:gap-4 group text-stone-300 hover:text-white transition-colors"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-stone-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-amber-900 transition-all duration-200 border border-stone-700/50 group-hover:border-amber-900 flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-stone-400 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-sm sm:text-base break-all">
                    hello@psalmscoffee.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 sm:gap-4 text-stone-300">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-stone-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-stone-700/50 flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-stone-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    Serving Salem Metro Area
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800/50 pt-6 sm:pt-7 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-stone-400 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Psalms Coffee. All rights reserved.
            </p>
            <p className="text-stone-400 text-xs sm:text-sm text-center md:text-left">
              Made by{" "}
              <a
                href="https://ivbdigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-white transition-colors hover:underline"
              >
                IVB Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

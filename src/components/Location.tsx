"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Location() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
        // Scroll to top of form to show success message
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="book"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden scroll-mt-20"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-3">
        <div className="absolute top-20 right-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-stone-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-stone-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-4 sm:mb-5 md:mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Book Your Event
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-amber-900 mx-auto mb-4 sm:mb-5 md:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to bring specialty coffee to your celebration? Let&apos;s make
            your event unforgettable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact & Service Info */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Service Area */}
            <motion.div
              className="bg-white rounded-xl p-6 sm:p-7 md:p-8 shadow-md border border-stone-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-900/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-amber-900"
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
                <h3
                  className="text-xl sm:text-2xl font-light text-stone-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Service Area
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We proudly serve the Salem Metro Area and surrounding regions.
                Whether your event is indoors or outdoors, we&apos;ll bring our
                mobile coffee cart directly to you.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="bg-white rounded-xl p-6 sm:p-7 md:p-8 shadow-md border border-stone-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-900/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-amber-900"
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
                <h3
                  className="text-xl sm:text-2xl font-light text-stone-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Get in Touch
                </h3>
              </div>
              <div className="space-y-4 sm:space-y-5">
                <motion.a
                  href="mailto:hello@psalmscoffee.com"
                  className="flex items-center gap-3 sm:gap-4 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-100 rounded-lg flex items-center justify-center group-hover:bg-amber-900/10 transition-colors flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-amber-900 transition-colors"
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
                  <div className="min-w-0">
                    <p className="text-gray-500 text-xs mb-0.5">Email</p>
                    <p className="text-sm sm:text-base text-gray-700 group-hover:text-amber-900 transition-colors font-medium break-all">
                      hello@psalmscoffee.com
                    </p>
                  </div>
                </motion.a>
                <motion.a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 sm:gap-4 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-100 rounded-lg flex items-center justify-center group-hover:bg-amber-900/10 transition-colors flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-amber-900 transition-colors"
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
                  <div className="min-w-0">
                    <p className="text-gray-500 text-xs mb-0.5">Phone</p>
                    <p className="text-sm sm:text-base text-gray-700 group-hover:text-amber-900 transition-colors font-medium">
                      (555) 123-4567
                    </p>
                  </div>
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-stone-200">
                <p className="text-xs sm:text-sm text-gray-500 mr-1 sm:mr-2">
                  Follow us:
                </p>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-amber-900 hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-amber-900 hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Booking CTA */}
          <motion.div
            className="bg-gradient-to-br from-stone-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl border border-stone-200 relative overflow-hidden order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-amber-900/5 rounded-full blur-3xl"></div>

            <motion.div
              className="space-y-6 sm:space-y-7 md:space-y-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <h3
                  className="text-2xl sm:text-2xl md:text-3xl font-light text-stone-900 mb-2 sm:mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Ready to Book?
                </h3>
                <div className="w-12 sm:w-14 md:w-16 h-0.5 bg-amber-900 mb-4 sm:mb-5 md:mb-6"></div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Tell us about your event and we&apos;ll get back to you within
                  24 hours to discuss details and create a custom coffee
                  experience for your special day.
                </p>
              </div>

              <form
                action="https://formsubmit.co/ivanchikb360@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
              >
                {/* FormSubmit Configuration */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Booking Request - Psalms Coffee"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_next" value="" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="eventType"
                      className="block text-sm font-medium text-stone-700 mb-2.5"
                    >
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="Event Type"
                      required
                      className="w-full px-4 py-3.5 bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-amber-900 transition-all duration-200 shadow-sm hover:border-stone-400"
                    >
                      <option value="">Select event type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Birthday Celebration">
                        Birthday Celebration
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="eventDate"
                      className="block text-sm font-medium text-stone-700 mb-2.5"
                    >
                      Event Date
                    </label>
                    <input
                      id="eventDate"
                      type="date"
                      name="Event Date"
                      required
                      className="w-full px-4 py-3.5 bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-amber-900 transition-all duration-200 shadow-sm hover:border-stone-400 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="guestCount"
                    className="block text-sm font-medium text-stone-700 mb-2.5"
                  >
                    Guest Count
                  </label>
                  <input
                    id="guestCount"
                    type="number"
                    name="Guest Count"
                    placeholder="Approximate number of guests"
                    required
                    min="1"
                    className="w-full px-4 py-3.5 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-amber-900 transition-all duration-200 shadow-sm hover:border-stone-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-stone-700 mb-2.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="Name"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3.5 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-amber-900 transition-all duration-200 shadow-sm hover:border-stone-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-700 mb-2.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="Email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3.5 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-amber-900 transition-all duration-200 shadow-sm hover:border-stone-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-stone-700 mb-2.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="Phone Number"
                    placeholder="(555) 123-4567"
                    required
                    className="w-full px-4 py-3.5 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-amber-900 transition-all duration-200 shadow-sm hover:border-stone-400"
                  />
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-sm text-green-800 font-medium text-center">
                      Thank you! We&apos;ve received your request and will get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-sm text-red-800 font-medium text-center">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 bg-amber-900 text-white hover:bg-amber-800 disabled:bg-amber-700 disabled:cursor-not-allowed transition-all duration-300 font-medium text-sm sm:text-base md:text-lg tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-lg"
                  whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                >
                  {isSubmitting ? "SUBMITTING..." : "REQUEST A QUOTE"}
                </motion.button>

                <p className="text-xs sm:text-sm text-gray-500 text-center pt-2">
                  Or call us directly at{" "}
                  <a
                    href="tel:+15551234567"
                    className="text-amber-900 hover:text-amber-800 font-medium transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="relative py-32 bg-[#0C0C0C] overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Logo with Glow Effect */}
        <motion.div 
          className="relative w-32 h-32 mx-auto mb-16"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-[#00FFB9] rounded-2xl blur-3xl opacity-30" />
          <Image
            src="logos/codeium1.svg"
            alt="Codeium Logo"
            width={128}
            height={128}
            className="relative z-10 drop-shadow-[0_0_30px_rgba(0,255,185,0.3)]"
          />
        </motion.div>

        {/* Title with Underline Effect */}
        <motion.div
          className="relative mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-4">
            Get Your Superpowers
          </h2>
          <motion.div
            className="absolute -bottom-2 left-1/2 h-1.5 bg-gradient-to-r from-transparent via-[#00FFB9] to-transparent"
            initial={{ width: "0%", x: "-50%" }}
            whileInView={{ width: "60%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            href="https://codeium.com" 
            target="_blank"
            className="inline-block"
          >
            <motion.button
              className="relative px-12 py-4 text-xl font-medium bg-[#00FFB9] text-black rounded-lg transition-transform hover:scale-105"
              whileHover={{ boxShadow: "0 0 30px rgba(0, 255, 185, 0.5)" }}
            >
              <div className="absolute inset-0 bg-[#00FFB9] rounded-lg blur-xl opacity-50" />
              <span className="relative z-10">Get Codeium</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const ENTERPRISE_LOGOS = [
  // Row 1
  {
    id: 'anduril',
    name: 'Anduril',
    logo: '/logos/anduril.svg'
  },
  {
    id: 'jpmorgan',
    name: 'JPMorgan Chase',
    logo: '/logos/jpmorgan.svg'
  },
  {
    id: 'vector',
    name: 'Vector',
    logo: '/logos/vector.svg'
  },
  {
    id: 'dell',
    name: 'Dell',
    logo: '/logos/dell.svg'
  },
  // Row 2
  {
    id: 'wwt',
    name: 'World Wide Technology',
    logo: '/logos/wwt.svg'
  },
  {
    id: 'clearwater',
    name: 'Clearwater Analytics',
    logo: '/logos/clearwater.svg'
  },
  {
    id: 'zillow',
    name: 'Zillow',
    logo: '/logos/zillow.svg'
  }
]

export function EnterpriseShowcase() {
  return (
    <section className="py-20 bg-[#0C0C0C] overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          Codeium lets the world's leading enterprises dream bigger
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 items-center max-w-6xl mx-auto">
          {ENTERPRISE_LOGOS.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-12 flex items-center justify-center group"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={160}
                height={48}
                className="object-contain filter invert opacity-60 group-hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MagicCard } from './ui/magic-card'
import { Mail, Twitter, MessageSquare, Linkedin, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  Product: [
    { name: 'Windsurf Editor', href: '#' },
    { name: 'Supercomplete', href: '#' },
    { name: 'Codeium Chat', href: '#' },
    { name: 'Live', href: '#' },
    { name: 'Forge', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Enterprise', href: '#' },
    { name: 'Offers', href: '#' },
  ],
  Extensions: [
    { name: 'Visual Studio Code', href: '#' },
    { name: 'JetBrains', href: '#' },
    { name: 'Neovim / Vim', href: '#' },
    { name: 'Chrome', href: '#' },
    { name: 'See All', href: '#' },
  ],
  Industry: [
    { name: 'Tech Leaders 2024', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  'Company & Support': [
    { name: 'About Us', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Media Kit', href: '#' },
    { name: 'University', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Email', icon: Mail, href: 'mailto:support@codeium.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/codeium' },
  { name: 'Discord', icon: MessageSquare, href: 'https://discord.gg/codeium' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/codeium' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@codeium' },
]

export function Footer() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-[#1C1C1C]">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Logo and Social Links */}
          <div className="lg:col-span-2">
            <MagicCard 
              className="p-6 bg-[#1C1C1C] rounded-xl"
              gradientColor="#00FFB9"
              gradientOpacity={0.1}
            >
              <div className="space-y-6">
                <Image
                  src="/logos/codeium.svg"
                  alt="Codeium"
                  width={120}
                  height={30}
                  className="h-8 w-auto"
                />
                <p className="text-gray-400">
                  Your modern coding superpowers.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="text-gray-400 hover:text-[#00FFB9] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </MagicCard>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#00FFB9] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#1C1C1C] text-center text-gray-400">
          <p> 2024 Exafunction, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MagicCard } from '../ui/magic-card'
import AnimatedGradientText from '../ui/animated-gradient-text'
import { Building2, FileCode2, GitCompare, HelpCircle, Lock, DollarSign } from 'lucide-react'

interface DiscoverCard {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  link: string
  linkText: string
}

const discoverCards: DiscoverCard[] = [
  {
    title: 'Enterprise Plan',
    description: 'High-quality, secure AI tools with flexible deployment and self-hosting options.',
    icon: Building2,
    link: '#',
    linkText: 'Learn More'
  },
  {
    title: 'Training Data',
    description: 'No unlicensed code used in training, protecting users from legal risks.',
    icon: FileCode2,
    link: '#',
    linkText: 'Read More'
  },
  {
    title: 'Compare',
    description: 'See how Codeium stacks up against other AI coding tools.',
    icon: GitCompare,
    link: '#',
    linkText: 'See Comparisons'
  },
  {
    title: 'How is this Free?',
    description: 'Codeium is free for individual users.',
    icon: DollarSign,
    link: '#',
    linkText: 'Read More'
  },
  {
    title: 'Security & Privacy',
    description: 'Delivering the best product while protecting your data.',
    icon: Lock,
    link: '#',
    linkText: 'Read More'
  },
  {
    title: 'FAQ',
    description: 'Find answers to commonly asked questions.',
    icon: HelpCircle,
    link: '#',
    linkText: 'Go to FAQ'
  }
]

export function DiscoverMore() {
  return (
    <section className="py-24 px-4">
      <div className="container">
        <div className="text-center mb-16">
          <AnimatedGradientText 
            className="text-4xl sm:text-5xl font-bold mb-6"
            colors={["#00FFB9", "#A07CFE"]}
          >
            Discover More
          </AnimatedGradientText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discoverCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MagicCard
                className="h-full p-6 bg-[#1C1C1C] rounded-xl hover:scale-[1.02] transition-transform duration-300"
                gradientColor="#00FFB9"
                gradientOpacity={0.1}
                aria-label={`Learn more about ${card.title}`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <card.icon className="w-6 h-6 text-[#00FFB9]" />
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6 flex-grow">{card.description}</p>
                  <Link 
                    href={card.link}
                    className="text-[#00FFB9] hover:underline inline-flex items-center gap-1"
                  >
                    {card.linkText}
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

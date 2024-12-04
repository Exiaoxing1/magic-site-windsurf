'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import { MagicCard } from '../ui/magic-card'

interface Testimonial {
  content: string
  author: string
  title?: string
  avatar?: string
  icon?: string
}

const testimonials: Testimonial[] = [
  {
    content: "I am loving it. Able to increase my productivity by 60-70%.",
    author: "Sumeet Nagar",
    icon: "/logos/vscode.svg"
  },
  {
    content: "Absolutely great. The answering time is very fast and the responses are spot on the majority of the time. I love it!",
    author: "Irian",
    icon: "/logos/vscode.svg"
  },
  {
    content: "This is so GOOD that it's SCARY!",
    author: "Rui Rei",
    icon: "/logos/codeium.svg"
  },
  {
    content: "Outstanding! I thoroughly tested Copilot, Replit, Tabnine, Cody and CodeWhisperer and none of them match the performance, accuracy, and intuitive operation of Codeium. I simply could not be happier with it.",
    author: "Andy Gee",
    icon: "/logos/vscode.svg"
  },
  {
    content: "Codeium has an incredible awareness which continually surprises you. Since installing this for my team, we have been more efficient and productive. Really really useful, and highly recommended.",
    author: "David Moxon",
    icon: "/logos/codeium.svg"
  },
  {
    content: "Using Github Copilot these days. But I've been more impressed with Codeium.",
    author: "Suzal SM",
    title: "@prameshbajra",
    icon: "/logos/twitter.svg"
  }
]

// 复制数组以实现无缝滚动效果
const infiniteTestimonials = [...testimonials, ...testimonials]

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    const startScrolling = async () => {
      if (!containerRef.current) return

      const scrollWidth = containerRef.current.scrollWidth
      const clientWidth = containerRef.current.clientWidth
      const distance = scrollWidth - clientWidth

      while (true) {
        await controls.start({
          x: [-clientWidth, -scrollWidth/2],
          transition: {
            duration: 20,
            ease: "linear",
          }
        })
        await controls.set({ x: 0 })
      }
    }

    startScrolling()
  }, [controls])

  return (
    <section className="py-20 bg-[#0C0C0C] overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="relative">
          <div ref={containerRef} className="overflow-hidden border-y border-white/10 py-8">
            <motion.div
              animate={controls}
              className="flex gap-4"
              style={{ width: "fit-content" }}
            >
              {infiniteTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[400px] flex-shrink-0"
                >
                  <MagicCard
                    className="h-full p-6 bg-[#1C1C1C] rounded-xl"
                    gradientColor="#00FFB9"
                    gradientOpacity={0.1}
                  >
                    <div className="flex flex-col h-full">
                      <p className="flex-grow text-lg mb-4">{testimonial.content}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          {testimonial.title && (
                            <p className="text-sm text-gray-400">{testimonial.title}</p>
                          )}
                        </div>
                        {testimonial.icon && (
                          <Image
                            src={testimonial.icon}
                            alt={`${testimonial.author}'s platform`}
                            width={24}
                            height={24}
                            className="opacity-60"
                          />
                        )}
                      </div>
                    </div>
                  </MagicCard>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

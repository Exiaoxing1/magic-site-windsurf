'use client'

import { BorderBeam } from "@/components/ui/border-beam"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const DEMO_VIDEOS = [
  {
    id: "autocomplete",
    url: "https://exafunction.github.io/public/demos/autocompleteAnimation.webp",
    title: "AI-Powered Autocomplete",
    description: "Get intelligent code suggestions as you type"
  },
  {
    id: "chat",
    url: "https://exafunction.github.io/public/demos/chatAnimation.webp",
    title: "Integrated AI Chat",
    description: "Chat with AI to get help with your code"
  },
  {
    id: "command",
    url: "https://exafunction.github.io/public/demos/commandAnimation.webp",
    title: "Command Palette",
    description: "Quick access to all editor features"
  },
  {
    id: "supercomplete",
    url: "https://exafunction.github.io/public/demos/superCompleteAnimation.webp",
    title: "Supercomplete",
    description: "Complete entire functions with AI"
  }
]

export function EditorShowcase() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return
    
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % DEMO_VIDEOS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoplay])

  const handlePrevVideo = () => {
    setIsAutoplay(false)
    setCurrentVideoIndex((prev) => (prev - 1 + DEMO_VIDEOS.length) % DEMO_VIDEOS.length)
  }

  const handleNextVideo = () => {
    setIsAutoplay(false)
    setCurrentVideoIndex((prev) => (prev + 1) % DEMO_VIDEOS.length)
  }

  return (
    <section className="container py-12 px-4">
      {/* Editor Interface */}
      <div className="space-y-8 mb-8">
        <div className="relative mx-auto max-w-6xl">
          <BorderBeam
            size={300}
            duration={15}
            colorFrom="#ffaa40"
            colorTo="#9c40ff"
          />
          <div className="group relative rounded-xl border border-border bg-card p-2 transition-transform duration-500 hover:scale-[1.01]">
            <Image
              src="https://exafunction.github.io/public/images/windsurf/windsurf-ide.png"
              alt="Windsurf Editor Interface"
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </div>
      </div>

      {/* Feature Demos */}
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute -inset-x-4 -inset-y-2 -z-10 rounded-xl bg-gradient-to-r from-[#ffaa40]/10 via-[#9c40ff]/10 to-[#ffaa40]/10" />
        
        <div className="relative overflow-hidden rounded-xl bg-card/50 p-6 backdrop-blur">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Feature Showcase</h3>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevVideo}
                className="rounded-full hover:bg-[#00FFB9]/10 hover:text-[#00FFB9]"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNextVideo}
                className="rounded-full hover:bg-[#00FFB9]/10 hover:text-[#00FFB9]"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-4">
            {DEMO_VIDEOS.map((video, index) => (
              <div
                key={video.id}
                className="transition-all duration-500"
                style={{
                  opacity: currentVideoIndex === index ? 1 : 0,
                  position: index === 0 ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateX(${(index - currentVideoIndex) * 100}%)`,
                }}
              >
                <Image
                  src={video.url}
                  alt={video.title}
                  width={800}
                  height={450}
                  className="w-full rounded-lg shadow-lg"
                  priority
                />
                <div className="mt-2 text-center">
                  <h4 className="text-lg font-medium">{video.title}</h4>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Navigation Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {DEMO_VIDEOS.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentVideoIndex === index
                    ? "w-6 bg-[#00FFB9]"
                    : "bg-muted hover:bg-[#00FFB9]/50"
                }`}
                onClick={() => {
                  setIsAutoplay(false)
                  setCurrentVideoIndex(index)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

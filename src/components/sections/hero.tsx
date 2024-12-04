'use client'

import SparklesText from "@/components/ui/sparkles-text"
import AnimatedGradientText from "@/components/ui/animated-gradient-text"
import ShimmerButton from "@/components/ui/shimmer-button"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-32 text-center">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#00FFB9] opacity-20 blur-[100px]" />
      </div>

      {/* Decorative Corners */}
      <div className="absolute left-4 top-4 h-24 w-24 bg-[radial-gradient(circle_at_center,#00FFB9_0%,transparent_100%)] opacity-20" />
      <div className="absolute right-4 bottom-4 h-24 w-24 bg-[radial-gradient(circle_at_center,#00FFB9_0%,transparent_100%)] opacity-20" />

      <SparklesText
        className="animate-fade-in mb-4 text-sm font-medium md:text-base"
        text="From the creators of Codeium, the best AI-powered code extension"
        sparklesCount={20}
        colors={{first: '#A07CFE', second: '#FE8FB5'}}
      />
      
      <AnimatedGradientText className="animate-fade-in-up mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Introducing the Windsurf Editor
      </AnimatedGradientText>

      <SparklesText
        className="animate-fade-in-up mb-12 max-w-[42rem] text-lg text-muted-foreground sm:text-xl"
        text="The new purpose-built IDE to harness magic"
        sparklesCount={15}
        colors={{first: '#00FFB9', second: '#00FFB9'}}
      />

      <div className="animate-fade-in-up flex flex-col gap-4 sm:flex-row">
        <ShimmerButton 
          className="bg-[#00FFB9] px-8 py-6 text-black hover:bg-[#00FFB9]/90"
          shimmerColor="rgba(255, 255, 255, 0.4)"
        >
          <span className="relative z-10">Explore Windsurf</span>
        </ShimmerButton>
        
        <Button 
          variant="outline" 
          size="lg"
          className="border-[#00FFB9]/20 px-8 py-6 hover:bg-[#00FFB9]/10 hover:text-[#00FFB9]"
        >
          Codeium Extensions
        </Button>
      </div>
    </section>
  )
}

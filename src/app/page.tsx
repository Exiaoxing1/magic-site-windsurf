import Image from "next/image";
import SparklesText from "@/components/ui/sparkles-text"
import AnimatedGradientText from "@/components/ui/animated-gradient-text"
import ShimmerButton from "@/components/ui/shimmer-button"
import { Navbar } from "@/components/sections/navbar"
import { EditorShowcase } from "@/components/sections/editor-showcase"
import { EnterpriseShowcase } from "@/components/sections/enterprise-showcase"
import { ProductComparison } from "@/components/sections/product-comparison"
import { Testimonials } from "@/components/sections/testimonials"
import { DiscoverMore } from "@/components/sections/discover-more"
import { Footer } from "@/components/footer"
import { CTASection } from '@/components/sections/cta-section'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
        <SparklesText 
          text="From the creators of Codeium, the best AI-powered code extension"
          className="text-sm mb-6"
          sparklesCount={20}
          colors={{first: '#A07CFE', second: '#FE8FB5'}}
        />
        
        <AnimatedGradientText className="text-5xl sm:text-6xl font-bold mb-6 max-w-4xl leading-tight">
          Introducing the Windsurf Editor
        </AnimatedGradientText>
        
        <SparklesText 
          text="The new purpose-built IDE to harness magic"
          className="text-lg sm:text-xl mb-12"
          sparklesCount={15}
          colors={{first: '#00FFB9', second: '#A07CFE'}}
        />
        
        <div className="flex gap-4 flex-col sm:flex-row">
          <ShimmerButton 
            className="px-8 py-3 rounded-full bg-[#00FFB9] text-black font-semibold hover:bg-[#00FFB9]/90 transition-colors"
          >
            Explore Windsurf
          </ShimmerButton>
          
          <button className="px-8 py-3 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors">
            Codeium Extensions
          </button>
        </div>
      </section>

      {/* Editor Showcase Section */}
      <div className="w-full space-y-12">
        <EditorShowcase />
        <Testimonials />
        <EnterpriseShowcase />
        <ProductComparison />
        <DiscoverMore />
        <CTASection />
      </div>

      <Footer />
    </main>
  )
}

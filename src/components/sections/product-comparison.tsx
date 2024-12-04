'use client'

import Image from "next/image"
import Link from "next/link"
import BoxReveal from "@/components/ui/box-reveal"
import AnimatedGradientText from "@/components/ui/animated-gradient-text"
import SparklesText from "@/components/ui/sparkles-text"
import { StarRating } from "@/components/ui/star-rating"
import { StatusIcon } from "@/components/ui/status-icon"
import { BorderCard } from "@/components/ui/border-card"

const COMPARISON_DATA = [
  {
    feature: "VSCode marketplace rating",
    link: true,
    codeium: { type: "rating", value: 5 },
    copilot: { type: "rating", value: 4.5 }
  },
  {
    feature: "JetBrains marketplace rating",
    link: true,
    codeium: { type: "rating", value: 5 },
    copilot: { type: "rating", value: 3 }
  },
  {
    feature: "Number of IDEs",
    codeium: { type: "text", value: "40+" },
    copilot: { type: "text", value: "~15" }
  },
  {
    feature: "Number of languages",
    codeium: { type: "text", value: "70+" },
    copilot: { type: "text", value: "~40" }
  },
  {
    feature: "AI autocomplete and chat",
    codeium: { type: "boolean", value: true },
    copilot: { type: "boolean", value: true }
  },
  {
    feature: "Full repo context awareness",
    codeium: { type: "boolean", value: true },
    copilot: { type: "boolean", value: false }
  },
  {
    feature: "Deployment methods",
    codeium: { type: "text", value: "SaaS, on-prem, in-VPC" },
    copilot: { type: "text", value: "SaaS only" }
  },
  {
    feature: "Completed audit for SaaS",
    codeium: { type: "text", value: "SOC 2 Type 2" },
    copilot: { type: "text", value: "SOC 2 Type 1" }
  }
]

export function ProductComparison() {
  return (
    <section className="container py-24 px-4">
      <BoxReveal className="text-center space-y-4 mb-16" width="100%">
        <AnimatedGradientText className="text-4xl sm:text-5xl font-bold mb-4">
          Codeium vs GitHub Copilot
        </AnimatedGradientText>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          The most intelligent AI code generation tool out there and we have the data to prove it.
        </p>
      </BoxReveal>

      <BoxReveal width="100%" className="mb-8">
        <BorderCard className="rounded-lg bg-[#1C1C1C] overflow-hidden">
          <div className="p-6">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-8 pb-6">
              <div></div>
              <div className="flex justify-center">
                <Image
                  src="/logos/codeium-logo.svg"
                  alt="Codeium"
                  width={120}
                  height={24}
                  className="h-6 w-auto"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/logos/github-copilot-logo.svg"
                  alt="GitHub Copilot"
                  width={120}
                  height={24}
                  className="h-6 w-auto"
                />
              </div>
            </div>

            {/* Table Body */}
            <div className="space-y-4">
              {COMPARISON_DATA.map((row, index) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3 gap-8 py-4 border-t border-[#2A2A2A] hover:bg-[#252525] transition-colors"
                >
                  <div className="flex items-center">
                    {row.link ? (
                      <Link href="#" className="text-[#00FFB9] hover:underline flex items-center gap-1">
                        {row.feature}
                        <span className="text-xs">→</span>
                      </Link>
                    ) : (
                      row.feature
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    {row.codeium.type === "rating" ? (
                      <StarRating rating={row.codeium.value} />
                    ) : row.codeium.type === "boolean" ? (
                      <StatusIcon status={row.codeium.value} />
                    ) : (
                      <span>{row.codeium.value}</span>
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    {row.copilot.type === "rating" ? (
                      <StarRating rating={row.copilot.value} />
                    ) : row.copilot.type === "boolean" ? (
                      <StatusIcon status={row.copilot.value} />
                    ) : (
                      <span>{row.copilot.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BorderCard>
      </BoxReveal>

      <BoxReveal className="text-center" width="100%">
        <Link href="#" className="inline-block">
          <SparklesText
            text="Read more about the performance quality comparison here >"
            className="text-lg text-[#00FFB9] hover:opacity-80 transition-opacity"
            sparklesCount={10}
            colors={{first: '#00FFB9', second: '#00FFB9'}}
          />
        </Link>
      </BoxReveal>
    </section>
  )
}

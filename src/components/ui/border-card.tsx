'use client'

import { cn } from "@/lib/utils"
import { BorderBeam } from "./border-beam"

interface BorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function BorderCard({ children, className, ...props }: BorderCardProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      <BorderBeam
        colorFrom="#00FFB9"
        colorTo="#00FFB9"
        size={300}
        duration={10}
      />
      {children}
    </div>
  )
}

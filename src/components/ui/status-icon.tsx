'use client'

import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatusIconProps {
  status: boolean
  size?: number
  className?: string
}

export function StatusIcon({ status, size = 24, className }: StatusIconProps) {
  if (status) {
    return (
      <Check
        size={size}
        className={cn("text-[#00FFB9]", className)}
      />
    )
  }

  return (
    <X
      size={size}
      className={cn("text-[#FF4040]", className)}
    />
  )
}

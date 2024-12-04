'use client'

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: number
  className?: string
}

export function StarRating({
  rating,
  maxRating = 5,
  size = 20,
  className
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {[...Array(maxRating)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            "transition-colors",
            i < rating
              ? "fill-[#00FFB9] text-[#00FFB9]"
              : "fill-gray-700 text-gray-700"
          )}
        />
      ))}
    </div>
  )
}

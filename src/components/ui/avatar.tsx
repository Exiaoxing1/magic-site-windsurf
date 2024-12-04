'use client'

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg'
  src: string
  alt?: string
  className?: string
  href?: string
}

const sizeMap = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-32 w-32'
}

export function Avatar({ size = 'md', src, alt = 'Avatar', className, href }: AvatarProps) {
  const Wrapper = href ? Link : 'div'
  
  return (
    <Wrapper 
      href={href || '#'} 
      className={cn(
        "relative rounded-full overflow-hidden border-2 border-white/10 hover:border-white/20 transition-colors",
        sizeMap[size],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </Wrapper>
  )
}

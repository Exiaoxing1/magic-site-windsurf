'use client'

import { useEffect, useRef } from 'react'

interface BorderBeamProps {
  size?: number
  duration?: number
  colorFrom?: string
  colorTo?: string
  className?: string
}

export function BorderBeam({
  size = 200,
  duration = 10,
  colorFrom = '#00FFB9',
  colorTo = '#A07CFE',
  className
}: BorderBeamProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrame: number
    let startTime: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = (currentTime - startTime) / 1000

      ctx.clearRect(0, 0, size, size)

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, size, size)
      gradient.addColorStop(0, colorFrom)
      gradient.addColorStop(1, colorTo)

      // Draw rotating gradient
      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(
        size / 2,
        size / 2,
        size / 2 - ctx.lineWidth,
        (elapsed * 2 * Math.PI) / duration,
        ((elapsed * 2 * Math.PI) / duration) + Math.PI
      )
      ctx.stroke()

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [size, duration, colorFrom, colorTo])

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  )
}

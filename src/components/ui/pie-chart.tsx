'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { Card } from '@/components/ui/card'

interface PieChartProps {
  data: {
    language: string
    percentage: number
    color: string
  }[]
}

export function PieChart({ data }: PieChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const width = 400
    const height = 400
    const radius = Math.min(width, height) / 2

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove()

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    // Create pie layout
    const pie = d3.pie<typeof data[0]>()
      .value(d => d.percentage)
      .sort(null)

    // Create arc generator
    const arc = d3.arc()
      .innerRadius(radius * 0.6) // Create donut chart
      .outerRadius(radius)

    // Create arcs
    const arcs = svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc')

    // Add paths
    arcs.append('path')
      .attr('d', arc as any)
      .attr('fill', d => d.data.color)
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .style('opacity', 0.8)
      .on('mouseover', function() {
        d3.select(this)
          .style('opacity', 1)
          .attr('transform', 'scale(1.05)')
      })
      .on('mouseout', function() {
        d3.select(this)
          .style('opacity', 0.8)
          .attr('transform', 'scale(1)')
      })

    // Add labels
    arcs.append('text')
      .attr('transform', d => {
        const [x, y] = (arc as any).centroid(d)
        return `translate(${x * 1.4}, ${y * 1.4})`
      })
      .attr('dy', '.35em')
      .style('text-anchor', 'middle')
      .style('font-size', '12px')
      .style('fill', 'currentColor')
      .text(d => `${d.data.language} (${d.data.percentage}%)`)

  }, [data])

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Language Distribution</h3>
      <div className="flex justify-center">
        <svg ref={svgRef}></svg>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item.language} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm">{item.language}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

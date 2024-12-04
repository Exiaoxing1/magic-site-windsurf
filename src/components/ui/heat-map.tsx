'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { Card } from '@/components/ui/card'
import { Tooltip } from '@/components/ui/tooltip'

interface HeatMapProps {
  data: {
    date: string
    count: number
  }[]
}

export function HeatMap({ data }: HeatMapProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const margin = { top: 20, right: 20, bottom: 30, left: 40 }
    const width = 800 - margin.left - margin.right
    const height = 120 - margin.top - margin.bottom

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove()

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    // Create color scale with gray colors
    const colorScale = d3.scaleSequential()
      .domain([0, d3.max(data, d => d.count) || 0])
      .interpolator(d3.interpolate('#f5f5f5', '#333333'))

    // Create time scale
    const timeScale = d3.scaleTime()
      .domain([new Date(data[0].date), new Date(data[data.length - 1].date)])
      .range([0, width])

    // Create cells
    const cellWidth = width / 52 // 52 weeks
    const cellHeight = height / 7 // 7 days

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => timeScale(new Date(d.date)))
      .attr('y', (d, i) => (i % 7) * cellHeight)
      .attr('width', cellWidth - 1)
      .attr('height', cellHeight - 1)
      .attr('fill', d => colorScale(d.count))
      .attr('rx', 2)
      .style('opacity', 0.8)
      .on('mouseover', (event, d) => {
        const tooltip = d3.select('#tooltip')
        tooltip
          .style('opacity', 1)
          .html(`${d.date}: ${d.count} contributions`)
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY - 10}px`)
      })
      .on('mouseout', () => {
        d3.select('#tooltip').style('opacity', 0)
      })

  }, [data])

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Activity</h3>
      <div className="relative">
        <svg ref={svgRef}></svg>
        <div
          id="tooltip"
          className="absolute opacity-0 bg-black/80 text-white px-2 py-1 rounded text-sm pointer-events-none transition-opacity"
          style={{ zIndex: 100 }}
        ></div>
      </div>
    </Card>
  )
}

'use client'

import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import { Tooltip } from 'react-tooltip'

interface ActivityData {
  date: string
  count: number
}

interface ActivityHeatmapProps {
  data: ActivityData[]
  startDate: Date
  endDate: Date
}

export function ActivityHeatmap({ data, startDate, endDate }: ActivityHeatmapProps) {
  const getTooltipDataAttrs = (value: any) => {
    if (!value || !value.date) {
      return null
    }
    return {
      'data-tooltip-id': 'activity-tooltip',
      'data-tooltip-content': `${value.count} activities on ${value.date}`,
    }
  }

  const getClassForValue = (value: any) => {
    if (!value || !value.count) {
      return 'color-empty'
    }
    if (value.count <= 2) return 'color-scale-1'
    if (value.count <= 4) return 'color-scale-2'
    if (value.count <= 6) return 'color-scale-3'
    return 'color-scale-4'
  }

  return (
    <div className="activity-heatmap">
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={data}
        classForValue={getClassForValue}
        tooltipDataAttrs={getTooltipDataAttrs}
        showWeekdayLabels
        gutterSize={4}
      />
      <Tooltip id="activity-tooltip" />
      
      <style jsx global>{`
        .activity-heatmap {
          font-size: 12px;
        }
        .react-calendar-heatmap {
          width: 100%;
        }
        .react-calendar-heatmap text {
          fill: var(--foreground);
          font-size: 0.7em;
        }
        .react-calendar-heatmap .color-empty {
          fill: var(--muted);
        }
        .react-calendar-heatmap .color-scale-1 {
          fill: #00FFB9;
          opacity: 0.25;
        }
        .react-calendar-heatmap .color-scale-2 {
          fill: #00FFB9;
          opacity: 0.5;
        }
        .react-calendar-heatmap .color-scale-3 {
          fill: #00FFB9;
          opacity: 0.75;
        }
        .react-calendar-heatmap .color-scale-4 {
          fill: #00FFB9;
        }
      `}</style>
    </div>
  )
}

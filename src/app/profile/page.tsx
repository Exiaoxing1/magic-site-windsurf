'use client'

import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/footer'
import { ProfileSidebar } from '@/components/sections/profile-sidebar'
import { StatCard } from '@/components/ui/stat-card'
import { ActivityHeatmap } from '@/components/ui/activity-heatmap'
import { PieChart } from '@/components/ui/pie-chart'
import { Button } from '@/components/ui/button'
import { Share2, ExternalLink } from 'lucide-react'

// 模拟数据
const languageData = [
  { language: 'TypeScript', percentage: 45, color: '#3178c6' },
  { language: 'JavaScript', percentage: 25, color: '#f7df1e' },
  { language: 'Python', percentage: 20, color: '#3776ab' },
  { language: 'Other', percentage: 10, color: '#6e7681' },
]

const activityData = Array.from({ length: 365 }, (_, i) => {
  const date = new Date()
  date.setDate(date.getDate() - i)
  return {
    date: date.toISOString().split('T')[0],
    count: Math.floor(Math.random() * 8)
  }
}).reverse()

const startDate = new Date()
startDate.setDate(startDate.getDate() - 365)
const endDate = new Date()

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block">
            <ProfileSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard
                title="7 Days Completion"
                value="24"
                description="+20% from last week"
              />
              <StatCard
                title="Total Completions"
                value="1,284"
                description="Since joining"
              />
              <StatCard
                title="Streak"
                value="12"
                description="Current streak"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button variant="outline" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                My Public Profile
              </Button>
              <Button variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Activity Heatmap */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Activity</h2>
              <div className="rounded-lg border bg-card p-6">
                <ActivityHeatmap
                  data={activityData}
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
            </div>

            {/* Language Distribution */}
            <PieChart data={languageData} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

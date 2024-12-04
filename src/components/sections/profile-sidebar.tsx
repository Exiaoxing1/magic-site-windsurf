'use client'

import Link from 'next/link'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Twitter, Linkedin, Edit2, Award, Settings, LogOut, Share2, Star } from 'lucide-react'
import { BorderBeam } from '@/components/ui/border-beam'

export function ProfileSidebar() {
  return (
    <Card className="w-80 p-6">
      <div className="flex flex-col items-center space-y-4">
        {/* Avatar with BorderBeam */}
        <div className="relative">
          <BorderBeam
            size={150}
            duration={10}
            colorFrom="#00FFB9"
            colorTo="#A07CFE"
          />
          <Avatar
            src="/avatar.jpg"
            alt="User Avatar"
            className="w-32 h-32 border-4 border-white/10"
          />
        </div>

        {/* User Info */}
        <div className="text-center">
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="text-sm text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              PRO
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Navigation */}
        <div className="w-full space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Edit2 className="h-4 w-4" />
            Edit Bio
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Award className="h-4 w-4" />
            Achievements
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Star className="h-4 w-4" />
            Upgrade to Pro
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-2 pt-4 border-t">
          <Button variant="outline" className="w-full gap-2">
            <Share2 className="h-4 w-4" />
            Share Profile
          </Button>
          <Button variant="ghost" className="w-full gap-2 text-destructive">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </Card>
  )
}

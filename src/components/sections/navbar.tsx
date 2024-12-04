'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Avatar } from '@/components/ui/avatar'
import ShimmerButton from '@/components/ui/shimmer-button'
import { ChevronDown } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/logos/codeium1.svg"
            alt="Codeium Logo"
            width={32}
            height={32}
          />
          <span className="hidden font-bold text-foreground sm:inline-block">Windsurf</span>
        </Link>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Products <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Capabilities <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Engines <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Pricing
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Enterprise
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Resources <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Company <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <Link href="/profile">
            <Avatar
              src="/avatar.jpg"
              alt="Profile"
              className="w-8 h-8 transition-transform hover:scale-105"
            />
          </Link>
          <ShimmerButton 
            className="px-8 py-3 rounded-full bg-[#00FFB9] text-black font-semibold hover:bg-[#00FFB9]/90 transition-colors relative z-10"
            background="#00FFB9"
            shimmerColor="rgba(255, 255, 255, 0.4)"
          >
            Download
          </ShimmerButton>
        </div>
      </div>
    </nav>
  )
}

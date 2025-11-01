"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 glow-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold tracking-tight text-primary glow-text">BEYOND DAFT PUNK</div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#thomas" className="text-sm font-medium hover:text-primary transition-colors">
              Thomas Bangalter
            </a>
            <a href="#guy-manuel" className="text-sm font-medium hover:text-secondary transition-colors">
              Guy-Manuel
            </a>
            <a href="#collaborative" className="text-sm font-medium hover:text-accent transition-colors">
              Collaborative
            </a>
            <a href="#productions" className="text-sm font-medium hover:text-primary transition-colors">
              Productions
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            <a
              href="#thomas"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Thomas Bangalter
            </a>
            <a
              href="#guy-manuel"
              className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Guy-Manuel
            </a>
            <a
              href="#collaborative"
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collaborative
            </a>
            <a
              href="#productions"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Productions
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

"use client"

import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm sm:text-base">H</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-xl blur-md opacity-30 -z-10"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                HackathonPro
              </h1>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                HP
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-6">
              <a
                href="#stats"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Analytics
              </a>
              <a
                href="#brands"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Brand Kits
              </a>
              <a
                href="#emissions"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Emissions
              </a>
              <a
                href="/index.html"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Ripple Effect             
               </a>
            </nav>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              disabled={!mounted}
              className="relative w-10 h-10 rounded-full border-2 border-border hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {mounted ? (
                <>
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
                </>
              ) : (
                <div className="h-4 w-4 rounded-full bg-muted animate-pulse" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full border-2 border-border hover:border-purple-500 transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#stats"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Analytics
              </a>
              <a
                href="#brands"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Brand Kits
              </a>
              <a
                href="#emissions"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Emissions
              </a>
              <a
                href="/index.html"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ripple Effect
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

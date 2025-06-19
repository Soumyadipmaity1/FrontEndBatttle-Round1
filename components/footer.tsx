"use client"

import { Github, Twitter, Linkedin, Mail, Heart, ExternalLink } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { name: "github", icon: Github, url: "#", color: "group-hover:text-purple-500" },
    { name: "twitter", icon: Twitter, url: "#", color: "group-hover:text-blue-500" },
    { name: "linkedin", icon: Linkedin, url: "#", color: "group-hover:text-blue-600" },
    { name: "mail", icon: Mail, url: "#", color: "group-hover:text-pink-500" },
  ]

  return (
    <footer className="relative mt-16 border-t border-border/40 bg-background/90 backdrop-blur-xl">
      {/* Gradient accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600" />
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-10 sm:py-16">
          {/* Main footer content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">H</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-xl blur-md opacity-30 -z-10" />
                </div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  HackathonPro
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Transforming portfolio management with innovative sustainability metrics and analytics
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Navigation
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a 
                    href="#stats" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                  >
                    <span className="inline-block w-0 group-hover:w-2 h-[2px] bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    Analytics
                  </a>
                </li>
                <li>
                  <a 
                    href="#brands" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                  >
                    <span className="inline-block w-0 group-hover:w-2 h-[2px] bg-pink-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    Brand Kits
                  </a>
                </li>
                <li>
                  <a 
                    href="#emissions" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                  >
                    <span className="inline-block w-0 group-hover:w-2 h-[2px] bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    Emissions
                  </a>
                </li>
                <li>
                  <a 
                    href="/index.html" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                  >
                    <span className="inline-block w-0 group-hover:w-2 h-[2px] bg-indigo-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    Ripple Effect
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Resources
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors group flex items-center"
                  >
                    <span>Documentation</span>
                    <ExternalLink className="ml-1.5 w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors group flex items-center"
                  >
                    <span>API Reference</span>
                    <ExternalLink className="ml-1.5 w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors group flex items-center"
                  >
                    <span>Support Center</span>
                    <ExternalLink className="ml-1.5 w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors group flex items-center"
                  >
                    <span>Privacy Policy</span>
                    <ExternalLink className="ml-1.5 w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="group relative"
                    onMouseEnter={() => setHoveredIcon(social.name)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 hover:bg-muted transition-colors duration-300 relative z-10">
                      <social.icon 
                        className={`w-4 h-4 text-muted-foreground transition-all duration-300 ${social.color}`} 
                      />
                    </div>
                    {hoveredIcon === social.name && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur opacity-70 animate-pulse" />
                    )}
                  </a>
                ))}
              </div>
              
              <div className="pt-4 space-y-2">
                <h4 className="text-xs font-medium">Newsletter</h4>
                <div className="flex items-center max-w-xs">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-muted/50 border border-border/40 rounded-l-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50"
                  />
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors text-white rounded-r-md h-[38px] px-3 text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-10 pt-6 border-t border-border/40 flex flex-row items-center justify-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} HackathonPro. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  )
}

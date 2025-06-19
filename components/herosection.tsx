"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChartLine, BarChart3, PieChart, Globe, Award, MousePointerClick } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeMetric, setActiveMetric] = useState(0)
  
  const metrics = [
    { label: "Revenue Growth", value: "+24%", icon: ChartLine, color: "from-purple-500 to-pink-500" },
    { label: "User Engagement", value: "+57%", icon: BarChart3, color: "from-blue-500 to-cyan-500" },
    { label: "Conversion Rate", value: "+18%", icon: PieChart, color: "from-pink-500 to-orange-500" }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden pb-8">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-[100px] animate-float" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-pink-600 rounded-full opacity-20 blur-[100px] animate-float-slow" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-[100px] animate-float-delay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content - Text and CTA */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-500 border border-purple-500/30">
                <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                <span>Now with AI-powered insights</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Create reports,
                </span>
                <br />
                <span>forecasts & dashboards</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Transform your business data into actionable insights with beautiful visualizations and intelligent analytics
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 rounded-lg group">
                Start 14-day free trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300 rounded-lg">
                See how it works
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-8">
              {[
                { icon: Globe, text: "Used by 2000+ companies" },
                { icon: Award, text: "4.8 average rating" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="h-4 w-4 text-purple-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Visual dashboard preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <Card className="overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                <CardContent className="p-1 sm:p-2">
                  {/* Dashboard mockup */}
                  <div className="rounded-lg overflow-hidden bg-muted/20 p-4 sm:p-6 border border-purple-500/10">
                    {/* Dashboard header */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-sm sm:text-base">Business Overview</h3>
                        <p className="text-xs text-muted-foreground">Updated just now</p>
                      </div>
                      <div className="flex gap-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Active metric card with animation */}
                    <motion.div 
                      key={activeMetric}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="mb-6"
                    >
                      <Card className={`bg-gradient-to-br ${metrics[activeMetric].color} text-white shadow-lg`}>
                        <CardContent className="p-4 sm:p-6 flex justify-between items-center">
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-white/80">{metrics[activeMetric].label}</p>
                            <p className="text-2xl sm:text-3xl font-bold">{metrics[activeMetric].value}</p>
                          </div>
                          {(() => {
                            const IconComponent = metrics[activeMetric].icon;
                            return <IconComponent className="w-8 h-8 text-white/80" />;
                          })()}
                        </CardContent>
                      </Card>
                    </motion.div>
                    
                    {/* Chart grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i} 
                          className="aspect-[3/2] rounded-lg bg-gradient-to-br from-muted/50 to-muted/20 p-3 flex flex-col justify-between border border-muted/50"
                        >
                          <div className="h-4 w-2/3 rounded-full bg-muted/50" />
                          <div className="flex items-end gap-1 h-12">
                            {[...Array(5)].map((_, j) => (
                              <div 
                                key={j} 
                                className="w-full bg-gradient-to-t from-purple-500/60 to-pink-500/60 rounded-sm"
                                style={{ height: `${20 + Math.random() * 60}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Interactive elements */}
              <motion.div 
                className="absolute -right-4 -bottom-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3 shadow-lg shadow-purple-500/30 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MousePointerClick className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

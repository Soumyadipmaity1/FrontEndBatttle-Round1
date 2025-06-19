"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Filter } from "lucide-react"

const filterOptions = {
  type: [
    { label: "Refurbishment", value: "refurbishment", active: true },
    { label: "New build", value: "new-build", active: true },
    { label: "All", value: "all", active: false },
  ],
  status: [
    { label: "Complete", value: "complete", active: true },
    { label: "Estimate", value: "estimate", active: false },
  ],
}

const chartData = [
  { label: "Project A", value: 549, type: "refurbishment", status: "complete" },
  { label: "Project B", value: 278, type: "new-build", status: "complete" },
  { label: "Project C", value: 875, type: "refurbishment", status: "complete" },
  { label: "Project D", value: 617, type: "new-build", status: "complete" },
  { label: "Project E", value: 506, type: "refurbishment", status: "complete" },
  { label: "Project F", value: 36, type: "new-build", status: "complete" },
  { label: "Project G", value: 185, type: "refurbishment", status: "estimate" },
  { label: "Project H", value: 191, type: "new-build", status: "estimate" },
  { label: "Project I", value: 122, type: "refurbishment", status: "complete" },
  { label: "Project J", value: 550, type: "new-build", status: "complete" },
  { label: "Project K", value: 881, type: "refurbishment", status: "complete" },
  { label: "Project L", value: 539, type: "new-build", status: "complete" },
  { label: "Project M", value: 269, type: "refurbishment", status: "complete" },
  { label: "Project N", value: 29, type: "new-build", status: "complete" },
  { label: "Project O", value: 82, type: "refurbishment", status: "estimate" },
  { label: "Project P", value: 44, type: "new-build", status: "estimate" },
  { label: "Project Q", value: 109, type: "refurbishment", status: "complete" },
  { label: "Project R", value: 106, type: "new-build", status: "complete" },
  { label: "Project S", value: 607, type: "refurbishment", status: "complete" },
  { label: "Project T", value: 528, type: "new-build", status: "complete" },
]

export function CarbonEmissionsSection() {
  const [filters, setFilters] = useState(filterOptions)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const maxValue = Math.max(...chartData.map((d) => d.value))

  const toggleFilter = (category: keyof typeof filterOptions, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].map((item) => (item.value === value ? { ...item, active: !item.active } : item)),
    }))
  }

  return (
    <section id="emissions" className="space-y-6 sm:space-y-8 lg:space-y-12">
      <div className="text-center space-y-3 sm:space-y-4 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Carbon Emissions Analysis
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Track and analyze embodied carbon emissions across your project portfolio
        </p>
      </div>

      <div className="px-4">
        <Card className="overflow-hidden border-0 bg-gradient-to-br from-background to-muted/20 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="w-full justify-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {showMobileFilters ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Filters */}
              <div className={`space-y-4 sm:space-y-6 ${showMobileFilters ? "block" : "hidden lg:block"}`}>
                <h3 className="text-base sm:text-lg font-semibold">Filter by</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Type</h4>
                    <div className="flex flex-wrap gap-2">
                      {filters.type.map((filter) => (
                        <Button
                          key={filter.value}
                          variant={filter.active ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleFilter("type", filter.value)}
                          className={`rounded-full transition-all duration-300 text-xs sm:text-sm ${
                            filter.active
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg"
                              : "hover:bg-muted hover:border-purple-500/50"
                          }`}
                        >
                          {filter.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Status</h4>
                    <div className="flex flex-wrap gap-2">
                      {filters.status.map((filter) => (
                        <Button
                          key={filter.value}
                          variant={filter.active ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleFilter("status", filter.value)}
                          className={`rounded-full transition-all duration-300 text-xs sm:text-sm ${
                            filter.active
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg"
                              : "hover:bg-muted hover:border-purple-500/50"
                          }`}
                        >
                          {filter.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Key</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-0.5 border-t-2 border-dashed border-muted-foreground" />
                      <span className="text-xs">500 kgCO₂e/m² - Target 2030</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-muted-foreground" />
                      <span className="text-xs">600 kgCO₂e/m² - Target 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="lg:col-span-3 space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">EMBODIED CARBON EMISSIONS</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">Intensity measured by kgCO₂e/m²</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2 self-start sm:self-auto">
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download the data</span>
                    <span className="sm:hidden">Download</span>
                  </Button>
                </div>

                <div className="relative overflow-x-auto">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 flex flex-col justify-between text-xs text-muted-foreground z-10">
                    <span>1200</span>
                    <span>1000</span>
                    <span>800</span>
                    <span>600</span>
                    <span>400</span>
                    <span>200</span>
                    <span>0</span>
                  </div>

                  {/* Chart container */}
                  <div className="ml-8 sm:ml-12 min-w-[600px] sm:min-w-0">
                    <div className="relative h-64 sm:h-80 bg-muted/10 rounded-lg overflow-hidden">
                      {/* Target lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        <div
                          className="absolute w-full border-t border-dashed border-muted-foreground/30"
                          style={{ top: "58.3%" }}
                        />
                        <div className="absolute w-full border-t border-muted-foreground/50" style={{ top: "50%" }} />
                      </div>

                      {/* Chart bars */}
                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-0.5 sm:gap-1 p-2 sm:p-4">
                        {chartData.slice(0, 20).map((item, index) => (
                          <div key={index} className="flex flex-col items-center group flex-1 max-w-[20px]">
                            <div className="relative w-full">
                              <div
                                className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-sm transition-all duration-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/30"
                                style={{
                                  height: `${(item.value / maxValue) * (window.innerWidth < 640 ? 200 : 280)}px`,
                                  minHeight: "2px",
                                }}
                              />
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-background border rounded px-2 py-1 shadow-lg whitespace-nowrap z-20">
                                {item.value}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Y-axis title */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-muted-foreground whitespace-nowrap">
                    Embodied carbon intensity (kgCO₂e/m²)
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Check } from "lucide-react"

const brandKits = [
  {
    id: 1,
    name: "ECorp",
    color: "from-emerald-400 to-emerald-600",
    bgColor: "bg-emerald-500",
    enabled: false,
  },
  {
    id: 2,
    name: "ICorp",
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-500",
    enabled: false,
  },
  {
    id: 3,
    name: "The Agency",
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-500",
    enabled: true,
  },
]

export function BrandKitsSection() {
  const [kits, setKits] = useState(brandKits)

  const toggleKit = (id: number) => {
    setKits(kits.map((kit) => (kit.id === id ? { ...kit, enabled: !kit.enabled } : kit)))
  }

  return (
    <section id="brands" className="space-y-6 sm:space-y-8 lg:space-y-12">
      <div className="text-center space-y-3 sm:space-y-4 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Brand Kits
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Manage and customize your brand identity across different corporate entities
        </p>
      </div>

      <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto px-4">
        <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 border-0 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
          <div className="absolute inset-[1px] bg-background rounded-lg" />

          <CardContent className="relative p-4 sm:p-6 space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Brand Kits
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {kits.map((kit) => (
                <div
                  key={kit.id}
                  className={`flex items-center justify-between p-3 sm:p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
                    kit.enabled
                      ? "bg-muted/50 border-purple-500/50 shadow-lg shadow-purple-500/10"
                      : "bg-muted/20 border-border/50 hover:bg-muted/30 hover:border-purple-500/30"
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="relative flex-shrink-0">
                      <button
                        onClick={() => toggleKit(kit.id)}
                        className={`w-5 h-5 rounded border-2 transition-all duration-300 flex items-center justify-center ${
                          kit.enabled
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500"
                            : "border-border/50 hover:border-purple-500/50"
                        }`}
                      >
                        {kit.enabled && <Check className="w-3 h-3 text-white" />}
                      </button>
                    </div>

                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${kit.bgColor} flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full opacity-90" />
                      </div>
                      <span className="font-medium text-foreground text-sm sm:text-base truncate">{kit.name}</span>
                    </div>
                  </div>

                  <button className="p-1 hover:bg-muted/50 rounded transition-colors flex-shrink-0">
                    <Settings className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

import { ArrowUp, ArrowDown, Download, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const statsData = [
  {
    title: "Managed portfolio carbon footprint",
    value: "45,048",
    unit: "tCO₂e",
    change: "+16%",
    isPositive: false,
    fromYear: "from 2019",
    yearlyData: [
      { year: "2022", value: "45,048", percentage: 100 },
      { year: "2021", value: "14,111", percentage: 31 },
      { year: "2020", value: "32,813", percentage: 73 },
      { year: "2019", value: "38,673", percentage: 86 },
    ],
    action: "See full breakdown of carbon footprint",
  },
  {
    title: "Managed portfolio energy intensity",
    value: "123",
    unit: "kWh/m²",
    change: "-22%",
    isPositive: true,
    fromYear: "from 2019",
    yearlyData: [
      { year: "2022", value: "123", percentage: 78 },
      { year: "2021", value: "128", percentage: 82 },
      { year: "2020", value: "135", percentage: 86 },
      { year: "2019", value: "157", percentage: 100 },
    ],
    action: "Download the data",
  },
  {
    title: "Managed portfolio energy consumption",
    value: "47,790,662",
    unit: "kWh",
    change: "-27%",
    isPositive: true,
    fromYear: "from 2019",
    yearlyData: [
      { year: "2022", value: "47,790,662", percentage: 73 },
      { year: "2021", value: "49,324,077", percentage: 76 },
      { year: "2020", value: "48,784,205", percentage: 75 },
      { year: "2019", value: "65,198,706", percentage: 100 },
    ],
    action: "Download the data",
  },
]

export function StatsSection() {
  return (
    <section id="stats" className="space-y-6 sm:space-y-8 lg:space-y-12">
      <div className="text-center space-y-3 sm:space-y-4 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Portfolio Analytics
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Comprehensive insights into your managed portfolio performance across key sustainability metrics
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-0 bg-gradient-to-br from-background via-background to-muted/20 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xs sm:text-sm font-medium text-muted-foreground leading-relaxed line-clamp-2">
                  {stat.title}
                </h3>

                <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                    {stat.value.toLocaleString()}
                  </span>
                  <span className="text-sm sm:text-base lg:text-lg text-muted-foreground">{stat.unit}</span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm flex-wrap">
                  <span className="text-muted-foreground">{stat.fromYear}</span>
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      stat.isPositive
                        ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                    }`}
                  >
                    {stat.isPositive ? <ArrowDown className="w-3 h-3" /> : <ArrowUp className="w-3 h-3" />}
                    <span>{stat.change}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {stat.yearlyData.map((data, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm gap-2">
                    <span className="text-muted-foreground font-medium min-w-[40px]">{data.year}</span>
                    <div className="flex items-center gap-2 sm:gap-3 flex-1">
                      <div className="flex-1 bg-muted/50 rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${data.percentage}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs min-w-[50px] sm:min-w-[60px] text-right">
                        {data.value.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                className="w-full justify-between group/btn hover:bg-muted/50 transition-all duration-300 text-xs sm:text-sm p-2 sm:p-3"
              >
                <span className="truncate pr-2">{stat.action}</span>
                {stat.action.includes("Download") ? (
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-y-0.5 transition-transform flex-shrink-0" />
                ) : (
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

import { Navbar } from "@/components/navbar"
import { StatsSection } from "@/components/stats-section"
import { BrandKitsSection } from "@/components/brand-kits-section"
import { CarbonEmissionsSection } from "@/components/carbon-emissions-section"
import CustomerSay from "@/components/CustomerSay"

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <StatsSection />
        <BrandKitsSection />
        <CarbonEmissionsSection />
        <CustomerSay/>
      </main>
    </div>
  )
}

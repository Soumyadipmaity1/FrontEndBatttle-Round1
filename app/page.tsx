import { Navbar } from "@/components/navbar"
import { StatsSection } from "@/components/stats-section"
import { BrandKitsSection } from "@/components/brand-kits-section"
import { CarbonEmissionsSection } from "@/components/carbon-emissions-section"
import CustomerSay from "@/components/CustomerSay"
import { HeroSection } from "@/components/herosection"
import ProductCarousel from "@/components/addCarasoul"

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-3 py-8 space-y-12">
        <HeroSection/>
        <StatsSection />
        <BrandKitsSection />
        <ProductCarousel/>
        <CarbonEmissionsSection />
        <CustomerSay/>
      </main>
    </div>
  )
}

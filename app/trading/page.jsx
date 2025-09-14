import { TradingHero } from "@/components/trading/trading-hero"
import { TradingFeatures } from "@/components/trading/trading-features"
import { TradingTools } from "@/components/trading/trading-tools"
import { TradingStats } from "@/components/trading/trading-stats"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TradingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <TradingHero />
      <TradingFeatures />
      <TradingTools />
      <TradingStats />
      <Footer />
    </div>
  )
}

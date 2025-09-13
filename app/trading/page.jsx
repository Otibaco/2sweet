import { TradingHero } from "@/components/trading/trading-hero"
import { TradingFeatures } from "@/components/trading/trading-features"
import { TradingTools } from "@/components/trading/trading-tools"
import { TradingStats } from "@/components/trading/trading-stats"

export default function TradingPage() {
  return (
    <div className="min-h-screen">
      <TradingHero />
      <TradingFeatures />
      <TradingTools />
      <TradingStats />
    </div>
  )
}

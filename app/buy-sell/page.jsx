import { BuySellHero } from "@/components/buy-sell/buy-sell-hero"
import { TradingProcess } from "@/components/buy-sell/trading-process"
import { PaymentMethods } from "@/components/buy-sell/payment-methods"
import { SecurityFeatures } from "@/components/buy-sell/security-features"
import { AppShowcase } from "@/components/buy-sell/app-showcase"

export default function BuySellPage() {
  return (
    <div className="min-h-screen">
      <BuySellHero />
      <TradingProcess />
      <PaymentMethods />
      <SecurityFeatures />
      <AppShowcase />
      
    </div>
  )
}

import { Card } from "@/components/ui/card"
import {
  LineChart,
  Shield,
  Zap,
  Target,
  BarChart3,
  TrendingUp,
  Activity,
  Lock,
  Smartphone,
  Globe,
  Users,
  Award,
} from "lucide-react"

const tradingFeatures = [
  {
    icon: LineChart,
    title: "Advanced Charting",
    description:
      "Professional TradingView charts with 100+ technical indicators, drawing tools, and multiple timeframes for comprehensive market analysis.",
  },
  {
    icon: Zap,
    title: "Lightning Execution",
    description:
      "Ultra-low latency trading engine processes orders in under 10ms. Never miss a market opportunity with our high-performance infrastructure.",
  },
  {
    icon: Target,
    title: "Smart Order Types",
    description:
      "Advanced order types including stop-loss, take-profit, OCO, and algorithmic orders to maximize your trading strategies.",
  },
  {
    icon: BarChart3,
    title: "Multi-Asset Trading",
    description:
      "Trade spot, futures, options, and margin across 500+ cryptocurrency pairs with deep liquidity and tight spreads.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Built-in risk management tools including position sizing, portfolio analysis, and automated stop-loss protection.",
  },
  {
    icon: Activity,
    title: "Real-Time Data",
    description:
      "Live market data feeds, order book depth, and trade history with millisecond precision for informed decision making.",
  },
]

const platformFeatures = [
  {
    icon: Smartphone,
    title: "Mobile Trading",
    description:
      "Full-featured mobile app with all desktop capabilities. Trade anywhere, anytime with our iOS and Android apps.",
  },
  {
    icon: Globe,
    title: "Global Markets",
    description:
      "Access to global cryptocurrency markets with 24/7 trading across all major exchanges and liquidity pools.",
  },
  {
    icon: Users,
    title: "Copy Trading",
    description: "Follow and copy successful traders automatically. Learn from the best while earning passive income.",
  },
  {
    icon: Award,
    title: "VIP Program",
    description:
      "Exclusive benefits for high-volume traders including reduced fees, priority support, and advanced features.",
  },
  {
    icon: Lock,
    title: "Institutional Grade",
    description: "Enterprise-level security and compliance with SOC 2, ISO 27001, and regulatory standards worldwide.",
  },
  {
    icon: TrendingUp,
    title: "Analytics Suite",
    description:
      "Comprehensive trading analytics, performance tracking, and detailed reports to optimize your strategies.",
  },
]

export function TradingFeatures() {
  return (
    <div className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trading Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Professional Trading Tools</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Everything you need to trade like a professional. Our platform combines cutting-edge technology with
            intuitive design to deliver the ultimate trading experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {tradingFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Platform Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Complete Trading Ecosystem</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Beyond just trading - access a complete ecosystem of tools, features, and services designed to support your
            cryptocurrency journey from beginner to expert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

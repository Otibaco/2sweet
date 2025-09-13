import { Card } from "@/components/ui/card"
import {
  Smartphone,
  Zap,
  Shield,
  BarChart3,
  Bell,
  Fingerprint,
  Globe,
  TrendingUp,
  Wallet,
  Settings,
  Eye,
  Award,
} from "lucide-react"

const mobileFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast Trading",
    description:
      "Execute trades in milliseconds with our optimized mobile trading engine. Never miss a market opportunity.",
  },
  {
    icon: BarChart3,
    title: "Advanced Charts",
    description:
      "Professional TradingView charts with 100+ indicators, drawing tools, and multiple timeframes on mobile.",
  },
  {
    icon: Shield,
    title: "Biometric Security",
    description: "Secure your account with Face ID, Touch ID, or fingerprint authentication for quick and safe access.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Customizable price alerts, news updates, and trading notifications to keep you informed 24/7.",
  },
  {
    icon: Wallet,
    title: "Multi-Wallet Support",
    description: "Manage multiple portfolios and wallets seamlessly with our intuitive mobile interface.",
  },
  {
    icon: Globe,
    title: "Global Markets",
    description: "Access global cryptocurrency markets and trade 500+ pairs from anywhere in the world.",
  },
]

const appCapabilities = [
  {
    icon: TrendingUp,
    title: "Portfolio Tracking",
    description: "Real-time portfolio performance with detailed analytics and profit/loss tracking",
  },
  {
    icon: Settings,
    title: "Customizable Interface",
    description: "Personalize your trading experience with customizable layouts and themes",
  },
  {
    icon: Eye,
    title: "Market Analysis",
    description: "In-depth market analysis tools and insights powered by AI and machine learning",
  },
  {
    icon: Award,
    title: "Rewards Program",
    description: "Earn rewards and cashback on trades with our exclusive mobile app loyalty program",
  },
  {
    icon: Fingerprint,
    title: "Privacy Controls",
    description: "Advanced privacy settings and data protection controls at your fingertips",
  },
  {
    icon: Smartphone,
    title: "Offline Mode",
    description: "View portfolio and market data even when offline with smart caching technology",
  },
]

export function AppFeatures() {
  return (
    <div className="py-20 bg-muted/30" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Mobile-First Trading Experience</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our mobile app is designed from the ground up to deliver a seamless trading experience. Every feature is
            optimized for mobile use without compromising on functionality or security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mobileFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* App Capabilities Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Everything You Need in One App</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beyond trading, our app offers a complete cryptocurrency ecosystem with advanced tools, analytics, and
            features to support your investment journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appCapabilities.map((capability, index) => (
            <Card
              key={capability.title}
              className="p-6 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                  <capability.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{capability.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

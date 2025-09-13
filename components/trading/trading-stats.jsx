import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  {
    value: "$2.5T+",
    label: "Total Trading Volume",
    description: "Cumulative trading volume across all markets",
  },
  {
    value: "1M+",
    label: "Daily Transactions",
    description: "Average daily transactions processed",
  },
  {
    value: "150+",
    label: "Countries Supported",
    description: "Global reach across all continents",
  },
  {
    value: "99.99%",
    label: "System Uptime",
    description: "Reliable platform availability",
  },
  {
    value: "<10ms",
    label: "Order Execution",
    description: "Lightning-fast trade execution",
  },
  {
    value: "24/7",
    label: "Customer Support",
    description: "Round-the-clock assistance",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Professional Trader",
    content:
      "2$weet has transformed my trading experience. The advanced charting tools and lightning-fast execution give me the edge I need in volatile markets.",
  },
  {
    name: "Michael Rodriguez",
    role: "Crypto Investor",
    content:
      "The platform's security features and user-friendly interface make it perfect for both beginners and experienced traders. Highly recommended!",
  },
  {
    name: "Emma Thompson",
    role: "Day Trader",
    content:
      "Low fees, high liquidity, and excellent mobile app. 2$weet is my go-to platform for all cryptocurrency trading needs.",
  },
]

export function TradingStats() {
  return (
    <div className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Trusted by Millions Worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join the millions of traders who trust 2$weet for their cryptocurrency trading needs. Our platform delivers
            exceptional performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-8 bg-card/70 backdrop-blur-sm border-border/50 text-center hover:bg-card/90 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-4">
                <div className="text-4xl lg:text-5xl font-bold text-primary">{stat.value}</div>
                <h3 className="text-xl font-semibold text-foreground">{stat.label}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">What Our Traders Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our community of traders has to say about their experience with
            2$weet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Start Trading?</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join millions of traders worldwide and experience the future of cryptocurrency trading with 2$weet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
                >
                  <Link href="/app">Download Mobile App</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg bg-transparent"
                >
                  <Link href="/demo">Try Demo Account</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

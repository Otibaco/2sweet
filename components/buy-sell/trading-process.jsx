import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { UserPlus, CreditCard, Smartphone, TrendingUp, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

const tradingSteps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Create Your Account",
    description:
      "Sign up in under 2 minutes with just your email and phone number. Complete identity verification for enhanced security and higher limits.",
    features: ["Email verification", "Phone verification", "Identity verification", "Enhanced security"],
    time: "2 minutes",
  },
  {
    step: 2,
    icon: CreditCard,
    title: "Add Payment Method",
    description:
      "Connect your bank account, debit card, or credit card. We support multiple payment methods for your convenience and security.",
    features: ["Bank transfers", "Debit/Credit cards", "Digital wallets", "Instant deposits"],
    time: "1 minute",
  },
  {
    step: 3,
    icon: TrendingUp,
    title: "Start Trading",
    description:
      "Buy, sell, and trade over 500 cryptocurrencies instantly. Use our advanced tools or simple buy/sell interface based on your experience level.",
    features: ["500+ cryptocurrencies", "Instant execution", "Advanced charts", "Portfolio tracking"],
    time: "Instant",
  },
]

const tradingFeatures = [
  {
    icon: Shield,
    title: "Secure & Regulated",
    description: "Licensed and regulated in 150+ countries with bank-level security",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Full trading capabilities on iOS and Android with biometric security",
  },
  {
    icon: CheckCircle,
    title: "Instant Settlement",
    description: "Trades settle instantly with real-time portfolio updates",
  },
]

export function TradingProcess() {
  return (
    <div className="py-20 bg-muted/30" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">How to Buy & Sell Crypto</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Getting started with cryptocurrency trading has never been easier. Follow these simple steps to begin your
            crypto journey with 2$weet.
          </p>
        </div>

        {/* Trading Steps */}
        <div className="space-y-12 mb-20">
          {tradingSteps.map((step, index) => (
            <Card
              key={step.step}
              className="p-8 lg:p-12 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-sm font-bold px-3 py-1 mb-2">
                        Step {step.step}
                      </Badge>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-xl text-muted-foreground leading-relaxed">{step.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20">Time: {step.time}</Badge>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                        <step.icon className="h-12 w-12 text-primary-foreground" />
                      </div>
                      <div className="text-6xl font-bold text-primary">{step.step}</div>
                      <div className="text-lg font-semibold text-foreground">{step.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trading Features */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Why Choose 2$weet?</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the most trusted and user-friendly cryptocurrency trading platform with industry-leading security
            and features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tradingFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-6 bg-card/70 backdrop-blur-sm border-border/50 text-center hover:bg-card/90 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="text-center space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Start Trading?</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join millions of users who trust 2$weet for their cryptocurrency trading needs. Download our app and start
              trading in minutes.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
            >
              <Link href="/app">Download App & Start Trading</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

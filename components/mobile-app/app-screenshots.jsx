"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const appScreens = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Overview of your portfolio, recent trades, and market highlights",
    image: "/Homepage-Crypto-Tax.png",
    features: ["Portfolio Overview", "Quick Actions", "Market Summary", "Recent Activity"],
  },
  {
    id: "trading",
    title: "Trading Interface",
    description: "Professional trading tools with advanced charting and order management",
    image: "/Homepage-Crypto-Tax.png",
    features: ["Advanced Charts", "Order Book", "Trade History", "Technical Indicators"],
  },
  {
    id: "portfolio",
    title: "Portfolio Management",
    description: "Detailed portfolio analytics with performance tracking and insights",
    image: "/Homepage-Crypto-Tax.png",
    features: ["Asset Allocation", "P&L Tracking", "Performance Analytics", "Tax Reports"],
  },
]

export function AppScreenshots() {
  const [activeScreen, setActiveScreen] = useState("dashboard")

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">App Interface Preview</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore the intuitive and powerful interface of our mobile app. Every screen is designed for optimal
            usability and professional trading efficiency.
          </p>
        </div>

        {/* Screen Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {appScreens.map((screen) => (
            <Button
              key={screen.id}
              variant={activeScreen === screen.id ? "default" : "outline"}
              onClick={() => setActiveScreen(screen.id)}
              className={`px-6 py-3 font-semibold ${
                activeScreen === screen.id
                  ? "bg-primary text-primary-foreground"
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {screen.title}
            </Button>
          ))}
        </div>

        {/* Active Screen Display */}
        {appScreens.map((screen) => (
          <div
            key={screen.id}
            className={`transition-all duration-500 ${activeScreen === screen.id ? "block" : "hidden"}`}
          >
            <Card className="p-8 lg:p-12 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Screen Info */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
                      {screen.title}
                    </Badge>
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground">{screen.title}</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">{screen.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {screen.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative flex justify-center">
                  <div className="relative">
                    <Image
                      src={screen.image || "/placeholder.svg"}
                      alt={`${screen.title} screenshot`}
                      width={350}
                      height={600}
                      className="rounded-3xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary">99.9%</div>
              <h3 className="text-xl font-semibold text-foreground">App Uptime</h3>
              <p className="text-muted-foreground">Reliable performance when you need it most</p>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary">4.8★</div>
              <h3 className="text-xl font-semibold text-foreground">User Rating</h3>
              <p className="text-muted-foreground">Highly rated by millions of users</p>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <h3 className="text-xl font-semibold text-foreground">Support</h3>
              <p className="text-muted-foreground">Round-the-clock customer assistance</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

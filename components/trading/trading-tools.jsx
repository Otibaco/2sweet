"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const tradingModes = [
  {
    id: "spot",
    name: "Spot Trading",
    description: "Buy and sell cryptocurrencies instantly at current market prices",
    features: ["Real-time execution", "500+ trading pairs", "Advanced order types", "Market & limit orders"],
    image: "/investors-image3.jpg",
  },
  {
    id: "futures",
    name: "Futures Trading",
    description: "Trade cryptocurrency futures with up to 100x leverage",
    features: ["Up to 100x leverage", "Perpetual contracts", "Cross & isolated margin", "Advanced risk management"],
    image: "/pc-image.jpg",
  },
  {
    id: "margin",
    name: "Margin Trading",
    description: "Amplify your trading power with borrowed funds",
    features: ["Up to 10x leverage", "Cross margin support", "Flexible borrowing", "Competitive interest rates"],
    image: "/investor-on-phone.jpg",
  },
]

export function TradingTools() {
  const [activeMode, setActiveMode] = useState("spot")

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Multiple Trading Modes</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Whether you're a beginner or professional trader, we have the right trading mode for your strategy and risk
            tolerance.
          </p>
        </div>

        <Tabs value={activeMode} onValueChange={setActiveMode} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-muted/50 p-2 rounded-xl">
            {tradingModes.map((mode) => (
              <TabsTrigger
                key={mode.id}
                value={mode.id}
                className="text-lg font-semibold py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {mode.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {tradingModes.map((mode) => (
            <TabsContent key={mode.id} value={mode.id} className="mt-0">
              <Card className="p-8 lg:p-12 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
                        {mode.name}
                      </Badge>
                      <h3 className="text-3xl lg:text-4xl font-bold text-foreground">{mode.name}</h3>
                      <p className="text-xl text-muted-foreground leading-relaxed">{mode.description}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-foreground">Key Features:</h4>
                      <ul className="space-y-3">
                        {mode.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4"
                    >
                      Start {mode.name}
                    </Button>
                  </div>

                  <div className="relative">
                    <Image
                      src={mode.image || "/placeholder.svg"}
                      alt={`${mode.name} illustration`}
                      width={600}
                      height={400}
                      className="rounded-xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl" />
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Smartphone, Shield, Zap } from "lucide-react"

const quickStats = [
  {
    icon: Zap,
    label: "Instant Trading",
    value: "< 1 minute",
    description: "From signup to first trade",
  },
  {
    icon: Shield,
    label: "Secure Transactions",
    value: "Bank-Level",
    description: "Military-grade encryption",
  },
  {
    icon: Smartphone,
    label: "Mobile First",
    value: "iOS & Android",
    description: "Trade anywhere, anytime",
  },
]

export function BuySellHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <Image
          src="/images/bitcoin-image2.jpg"
          alt="Buy and sell crypto background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                  Buy & Sell Crypto
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Trade Crypto in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    3 Simple Steps
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
                  Buy, sell, and trade over 500 cryptocurrencies with ease. Our intuitive mobile app makes crypto
                  trading accessible to everyone, from beginners to professionals.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {quickStats.map((stat, index) => (
                  <Card
                    key={stat.label}
                    className="p-4 bg-card/50 backdrop-blur-sm border-border/50 text-center"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="space-y-2">
                      <stat.icon className="h-6 w-6 text-primary mx-auto" />
                      <div className="text-sm font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                      <div className="text-xs text-muted-foreground">{stat.description}</div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg animate-glow"
                >
                  <Link href="/app">
                    Start Trading Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg bg-transparent"
                >
                  <Link href="#process">Learn How It Works</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - App Mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                <Image
                  src="/images/investor-on-phone.jpg"
                  alt="2$weet trading app interface"
                  width={400}
                  height={600}
                  className="rounded-3xl shadow-2xl animate-float"
                  priority
                />
                {/* Floating Trading Cards */}
                <Card className="absolute -top-8 -left-8 p-4 bg-card/90 backdrop-blur-sm border-border/50 shadow-lg">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">BTC/USD</div>
                    <div className="text-lg font-bold text-green-500">$67,234</div>
                    <div className="text-xs text-green-500">+2.4%</div>
                  </div>
                </Card>
                <Card className="absolute -bottom-8 -right-8 p-4 bg-card/90 backdrop-blur-sm border-border/50 shadow-lg">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">ETH/USD</div>
                    <div className="text-lg font-bold text-green-500">$3,456</div>
                    <div className="text-xs text-green-500">+1.8%</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

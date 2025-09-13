"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, Zap, Users } from "lucide-react"

const cryptoStats = [
  { name: "Bitcoin", symbol: "BTC", price: "$67,234", change: "+2.4%" },
  { name: "Ethereum", symbol: "ETH", price: "$3,456", change: "+1.8%" },
  { name: "Solana", symbol: "SOL", price: "$178", change: "+5.2%" },
  { name: "Cardano", symbol: "ADA", price: "$0.68", change: "-0.9%" },
]

const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description:
      "Your assets are protected with military-grade encryption and cold storage",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Execute trades in milliseconds with our advanced matching engine",
  },
  {
    icon: TrendingUp,
    title: "Advanced Trading",
    description: "Professional tools for spot, futures, and margin trading",
  },
  {
    icon: Users,
    title: "Trusted by Millions",
    description:
      "Join over 10 million users worldwide trading on our platform",
  },
]

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [smoothScrollY, setSmoothScrollY] = useState(0)

  // ✅ Attach scroll listener ONCE
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // ✅ Smooth animation independent of re-render loops
  useEffect(() => {
    let rafId
    const smooth = () => {
      setSmoothScrollY((prev) => prev + (scrollY - prev) * 0.08)
      rafId = requestAnimationFrame(smooth)
    }
    smooth()

    return () => cancelAnimationFrame(rafId)
  }, [scrollY])


  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with Smooth Parallax */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translateY(${smoothScrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="relative w-full h-full">
          <Image
            src="/bitcoin-image2.jpg"
            alt="Bitcoin trading technology background"
            fill
            priority
            sizes="100vw"
            className="
        object-cover 
        opacity-30 dark:opacity-20 
        sm:object-center 
        object-[center_top]    /* 👈 focus top on mobile */
      "
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 pt-20 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance tracking-tight">
                  Trade Crypto Like a{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-extrabold">
                    Professional
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
                  Join millions of traders on 2$weet - the most trusted
                  cryptocurrency exchange platform with advanced trading tools,
                  bank-level security, and lightning-fast execution.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gradient-primary hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-md animate-glow min-h-[44px]"
                >
                  <Link href="/app">
                    Download App <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 text-lg bg-transparent rounded-xl min-h-[44px]"
                >
                  <Link href="/trading">Start Trading</Link>
                </Button>
              </div>

              {/* Crypto Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {cryptoStats.map((crypto) => (
                  <Card
                    key={crypto.symbol}
                    className="p-4 bg-card/80 backdrop-blur-sm border-border/50 rounded-2xl dark:bg-card/60 dark:border-border/30 hover:bg-card/90 transition-all duration-300"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">
                          {crypto.symbol}
                        </span>
                        <span
                          className={`text-xs font-medium ${crypto.change.startsWith("+")
                            ? "text-green-500"
                            : "text-red-500"
                            }`}
                        >
                          {crypto.change}
                        </span>
                      </div>
                      <div className="text-lg font-bold">{crypto.price}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/mobileimage.png"
                  alt="Crypto trader analyzing charts"
                  width={600}
                  height={700}
                  className="animate-float" //rounded-2xl shadow-2xl
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 animate-pulse-slow" />
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-10 animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="relative z-10 py-16 bg-muted/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Why Choose 2$weet?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of cryptocurrency trading with our
              cutting-edge platform designed for both beginners and
              professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105 rounded-2xl dark:bg-card/60 dark:border-border/30"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-md">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-md">
                $50B+
              </div>
              <div className="text-muted-foreground">Trading Volume</div>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-md">
                10M+
              </div>
              <div className="text-muted-foreground">Active Users</div>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-md">
                99.9%
              </div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

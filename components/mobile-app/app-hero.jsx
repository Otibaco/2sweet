"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Users, Smartphone } from "lucide-react"

const appStats = [
  { icon: Users, label: "5M+ Downloads", value: "5,000,000+" },
  { icon: Star, label: "4.8 Rating", value: "4.8/5.0" },
  { icon: Smartphone, label: "iOS & Android", value: "Available" },
]

export function AppHero() {
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
          src="/Bitcoin-image2.jpg"
          alt="Mobile crypto trading background"
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
                  Mobile Trading App
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Trade Crypto{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Anywhere
                  </span>
                  , Anytime
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
                  Experience the full power of 2$weet in your pocket. Our award-winning mobile app brings professional
                  trading tools, real-time market data, and secure transactions to your smartphone.
                </p>
              </div>

              {/* App Stats */}
              <div className="grid grid-cols-3 gap-4">
                {appStats.map((stat, index) => (
                  <Card
                    key={stat.label}
                    className="p-4 bg-card/50 backdrop-blur-sm border-border/50 text-center"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="space-y-2">
                      <stat.icon className="h-6 w-6 text-primary mx-auto" />
                      <div className="text-sm font-bold text-foreground">{stat.label}</div>
                      <div className="text-xs text-muted-foreground">{stat.value}</div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg animate-glow"
                >
                  <Link href="#download">
                    <Download className="mr-2 h-5 w-5" />
                    Download Now
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg bg-transparent"
                >
                  <Link href="#features">View Features</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                <Image
                  src="/investor-on-phone.jpg"
                  alt="2$weet mobile app interface"
                  width={400}
                  height={600}
                  className="rounded-3xl shadow-2xl animate-float"
                  priority
                />
                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-10 animate-pulse delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

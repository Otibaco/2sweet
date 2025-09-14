"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const achievements = [
  { label: "Founded", value: "2019" },
  { label: "Global Users", value: "10M+" },
  { label: "Countries", value: "150+" },
  { label: "Trading Volume", value: "$2.5T+" },
]

export function AboutHero() {
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
          src="/business-image.jpg"
          alt="Professional business background"
          fill
          className="object-cover opacity-40"
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
                  About 2$weet
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Building the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Future of Finance
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
                  Since 2019, 2$weet has been at the forefront of cryptocurrency innovation, providing secure,
                  professional-grade trading solutions to millions of users worldwide. We're not just an exchange -
                  we're building the infrastructure for the future of digital finance.
                </p>
              </div>

              {/* Mission Statement */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize access to cryptocurrency trading by providing institutional-grade tools, security,
                    and support to traders of all levels, while maintaining the highest standards of transparency and
                    regulatory compliance.
                  </p>
                </div>
              </Card>
            </div>

            {/* Right Column - Achievements */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card
                    key={achievement.label}
                    className="p-6 bg-card/70 backdrop-blur-sm border-border/50 text-center hover:bg-card/90 transition-all duration-300 hover:scale-105"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">{achievement.value}</div>
                      <div className="text-muted-foreground font-medium">{achievement.label}</div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Company Values */}
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Our Values</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <div>
                        <div className="font-semibold text-foreground">Security First</div>
                        <div className="text-muted-foreground text-sm">
                          Your assets and data are protected with military-grade security
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <div>
                        <div className="font-semibold text-foreground">Transparency</div>
                        <div className="text-muted-foreground text-sm">
                          Clear fees, open communication, and honest business practices
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <div>
                        <div className="font-semibold text-foreground">Innovation</div>
                        <div className="text-muted-foreground text-sm">
                          Continuously improving and pioneering new trading technologies
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

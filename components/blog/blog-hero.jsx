"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

const featuredPost = {
  title: "Bitcoin Reaches New All-Time High: What This Means for Crypto Markets",
  excerpt:
    "Analyzing the factors behind Bitcoin's latest surge and its implications for the broader cryptocurrency ecosystem. Expert insights on market trends and trading strategies.",
  author: "Sarah Chen",
  date: "December 15, 2024",
  category: "Market Analysis",
  readTime: "8 min read",
  image: "/images/bitcoin-image.jpg",
}

const trendingTopics = [
  "Bitcoin ETF Approval",
  "DeFi Regulations",
  "Altcoin Season",
  "Institutional Adoption",
  "Web3 Innovation",
]

export function BlogHero() {
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
          src="/images/business-image.jpg"
          alt="Crypto news and analysis background"
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
                  Crypto Insights & Analysis
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Stay Ahead of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Crypto Markets
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
                  Get expert insights, market analysis, and educational content from our team of cryptocurrency
                  professionals. Stay informed with the latest trends, news, and trading strategies.
                </p>
              </div>

              {/* Trending Topics */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Trending Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="outline"
                      className="text-sm hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
                >
                  <Link href="#featured">
                    Read Latest Posts <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg bg-transparent"
                >
                  <Link href="#newsletter">Subscribe to Newsletter</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Featured Post */}
            <div className="relative">
              <Card className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105">
                <div className="space-y-6">
                  <div className="relative">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      width={500}
                      height={300}
                      className="rounded-lg object-cover w-full h-48"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {featuredPost.category}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground leading-tight">{featuredPost.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Read Full Article
                    </Button>
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

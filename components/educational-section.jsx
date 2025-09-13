"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, TrendingUp, Clock, Users } from "lucide-react"

const educationalContent = [
  {
    title: "How & What is Bitcoin?",
    description: "Complete beginner's guide to understanding Bitcoin and cryptocurrency fundamentals",
    image: "/images/oficer.jpg",
    category: "Beginner",
    readTime: "5 min read",
    href: "/blog/what-is-bitcoin",
  },
  {
    title: "Investment Timing Strategies",
    description: "Learn when to buy and sell crypto with proven timing strategies and market analysis",
    image: "/images/clock.jpg",
    category: "Strategy",
    readTime: "8 min read",
    href: "/blog/timing-strategies",
  },
  {
    title: "Professional Trading Setup",
    description: "Set up your workspace like a pro trader with the right tools and environment",
    image: "/images/coding.jpg",
    category: "Advanced",
    readTime: "12 min read",
    href: "/blog/trading-setup",
  },
]

const stats = [
  { icon: BookOpen, value: "500+", label: "Educational Articles" },
  { icon: TrendingUp, value: "95%", label: "Success Rate" },
  { icon: Clock, value: "24/7", label: "Market Analysis" },
  { icon: Users, value: "1M+", label: "Students Taught" },
]

export function EducationalSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">Master Crypto Trading</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From beginner basics to advanced strategies, learn everything you need to become a successful crypto trader
          </p>
        </div>

        {/* Educational Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {educationalContent.map((content, index) => (
            <Card
              key={content.title}
              className="overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105 rounded-2xl dark:bg-card/60 dark:border-border/30"
            >
              <div className="relative h-48">
                <Image src={content.image || "/placeholder.svg"} alt={content.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm font-medium rounded-full">
                    {content.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Clock className="h-4 w-4" />
                  {content.readTime}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{content.title}</h3>
                <p className="text-muted-foreground mb-4">{content.description}</p>
                <Button asChild variant="outline" className="w-full rounded-xl bg-transparent">
                  <Link href={content.href}>Read Article</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              {/* Icon box */}
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <stat.icon className="h-8 w-8 text-white" />
              </div>

              {/* Stat value with gradient */}
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>


        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="gradient-primary hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-md"
          >
            <Link href="/blog">Explore All Resources</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

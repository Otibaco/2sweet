import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock } from "lucide-react"

const featuredPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to DeFi Trading Strategies",
    excerpt:
      "Explore advanced DeFi trading techniques, yield farming strategies, and risk management approaches for maximizing returns in decentralized finance.",
    author: "Michael Rodriguez",
    date: "December 12, 2024",
    category: "DeFi",
    readTime: "12 min read",
    image: "/defi.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "Institutional Crypto Adoption: 2024 Market Report",
    excerpt:
      "Comprehensive analysis of institutional cryptocurrency adoption trends, including major corporate investments and regulatory developments.",
    author: "Emma Thompson",
    date: "December 10, 2024",
    category: "Market Analysis",
    readTime: "15 min read",
    image: "/Market-Analysis.jpeg",
    featured: true,
  },
  {
    id: 3,
    title: "Technical Analysis Masterclass: Reading Crypto Charts",
    excerpt:
      "Master the art of technical analysis with our comprehensive guide to chart patterns, indicators, and trading signals in cryptocurrency markets.",
    author: "David Chen",
    date: "December 8, 2024",
    category: "Education",
    readTime: "10 min read",
    image: "/investors-chilling.jpg",
    featured: true,
  },
]

export function FeaturedPosts() {
  return (
    <div className="py-20 bg-muted/30" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Featured Articles</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Dive deep into the world of cryptocurrency with our expertly crafted articles covering market analysis,
            trading strategies, and industry insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Card
              key={post.id}
              className="overflow-hidden bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105 group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{post.category}</Badge>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-block text-primary hover:text-primary/80 font-semibold text-sm transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

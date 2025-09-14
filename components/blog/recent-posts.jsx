import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"

const recentPosts = [
  {
    id: 4,
    title: "Crypto Tax Guide 2024: What Traders Need to Know",
    excerpt: "Navigate the complex world of cryptocurrency taxation with our comprehensive guide for 2024.",
    author: "Lisa Park",
    date: "December 14, 2024",
    category: "Education",
    readTime: "7 min read",
    image: "/investors-chilling.jpg",
  },
  {
    id: 5,
    title: "Altcoin Season Indicators: How to Spot the Next Big Move",
    excerpt: "Learn to identify the key indicators that signal the beginning of altcoin season.",
    author: "Alex Johnson",
    date: "December 13, 2024",
    category: "Market Analysis",
    readTime: "9 min read",
    image: "/Market-Analysis.jpeg",
  },
  {
    id: 6,
    title: "Risk Management Strategies for Crypto Traders",
    excerpt: "Essential risk management techniques to protect your capital in volatile crypto markets.",
    author: "Sarah Chen",
    date: "December 11, 2024",
    category: "Trading Tips",
    readTime: "11 min read",
    image: "/trade-risk.jpeg",
  },
  {
    id: 7,
    title: "The Rise of Layer 2 Solutions: Scaling Ethereum",
    excerpt: "Exploring the latest Layer 2 scaling solutions and their impact on Ethereum's ecosystem.",
    author: "Michael Rodriguez",
    date: "December 9, 2024",
    category: "Technology",
    readTime: "13 min read",
    image: "/office.jpg",
  },
  {
    id: 8,
    title: "NFT Market Recovery: Trends and Opportunities",
    excerpt: "Analyzing the NFT market recovery and identifying new opportunities for investors.",
    author: "Emma Thompson",
    date: "December 7, 2024",
    category: "Market Analysis",
    readTime: "8 min read",
    image: "/Market-Analysis.jpeg",
  },
  {
    id: 9,
    title: "Staking Rewards Comparison: Best Platforms 2024",
    excerpt: "Compare staking rewards across different platforms and find the best opportunities.",
    author: "David Chen",
    date: "December 5, 2024",
    category: "DeFi",
    readTime: "10 min read",
    image: "/defi.jpeg",
  },
]

export function RecentPosts() {
  return (
    <div className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Recent Articles</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay up to date with our latest insights, analysis, and educational content from the world of cryptocurrency
            trading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post, index) => (
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
                  height={200}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">
                  {post.category}
                </Badge>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
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

        {/* Load More Button */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg bg-transparent"
          >
            Load More Articles <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BookOpen, Shield, Coins, BarChart3, Globe, Lightbulb, Users } from "lucide-react"

const categories = [
  {
    icon: TrendingUp,
    name: "Market Analysis",
    description: "Expert insights on market trends, price movements, and trading opportunities",
    postCount: 45,
    color: "from-primary to-accent",
  },
  {
    icon: BookOpen,
    name: "Education",
    description: "Learn the fundamentals of cryptocurrency trading and blockchain technology",
    postCount: 38,
    color: "from-accent to-primary",
  },
  {
    icon: Shield,
    name: "Security",
    description: "Best practices for keeping your crypto assets safe and secure",
    postCount: 22,
    color: "from-primary to-accent",
  },
  {
    icon: Coins,
    name: "DeFi",
    description: "Decentralized finance protocols, yield farming, and DeFi trading strategies",
    postCount: 31,
    color: "from-accent to-primary",
  },
  {
    icon: BarChart3,
    name: "Technical Analysis",
    description: "Chart patterns, indicators, and technical trading strategies",
    postCount: 28,
    color: "from-primary to-accent",
  },
  {
    icon: Globe,
    name: "Industry News",
    description: "Latest developments in the cryptocurrency and blockchain industry",
    postCount: 52,
    color: "from-accent to-primary",
  },
  {
    icon: Lightbulb,
    name: "Trading Tips",
    description: "Practical advice and strategies from professional traders",
    postCount: 34,
    color: "from-primary to-accent",
  },
  {
    icon: Users,
    name: "Community",
    description: "Stories, interviews, and insights from our trading community",
    postCount: 19,
    color: "from-accent to-primary",
  },
]

export function BlogCategories() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Explore by Category</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find the content that matters most to you. Our articles are organized into categories to help you discover
            relevant insights and educational resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.name}
              className="p-6 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105 cursor-pointer group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {category.postCount}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

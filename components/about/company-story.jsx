import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const timeline = [
  {
    year: "2019",
    title: "Foundation",
    description:
      "2$weet was founded by a team of financial technology experts and blockchain pioneers with a vision to make cryptocurrency trading accessible to everyone.",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description:
      "Launched in 50 countries with multi-language support and local payment methods, serving over 1 million users in the first year.",
  },
  {
    year: "2021",
    title: "Advanced Features",
    description:
      "Introduced futures trading, margin trading, and advanced charting tools. Processed over $100B in trading volume.",
  },
  {
    year: "2022",
    title: "Institutional Services",
    description:
      "Launched institutional trading services and API solutions, attracting major financial institutions and hedge funds.",
  },
  {
    year: "2023",
    title: "Mobile Innovation",
    description:
      "Released award-winning mobile apps with full trading capabilities, reaching 5 million mobile users worldwide.",
  },
  {
    year: "2024",
    title: "AI Integration",
    description:
      "Integrated AI-powered trading insights and risk management tools, serving over 10 million users across 150+ countries.",
  },
]

export function CompanyStory() {
  return (
    <div className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From a small startup to a global cryptocurrency exchange, here's how we've grown to serve millions of
            traders worldwide while maintaining our commitment to security, innovation, and user experience.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-accent hidden lg:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <Card
                    className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105"
                    style={{
                      animationDelay: `${index * 200}ms`,
                    }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="text-sm font-bold px-3 py-1">
                          {item.year}
                        </Badge>
                        <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 hidden lg:block">
                  <div className="w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background shadow-lg" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

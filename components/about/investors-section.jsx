import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fundingRounds = [
  {
    round: "Series C",
    amount: "$150M",
    date: "2024",
    description: "Led by Andreessen Horowitz with participation from existing investors",
    valuation: "$2.5B",
  },
  {
    round: "Series B",
    amount: "$75M",
    date: "2022",
    description: "Sequoia Capital led round to expand global operations",
    valuation: "$1.2B",
  },
  {
    round: "Series A",
    amount: "$25M",
    date: "2020",
    description: "Initial institutional funding to build core platform",
    valuation: "$200M",
  },
]

const investors = [
  {
    name: "Andreessen Horowitz",
    type: "Lead Investor",
    description: "Leading venture capital firm focused on technology investments",
  },
  {
    name: "Sequoia Capital",
    type: "Strategic Investor",
    description: "Global venture capital firm backing innovative companies",
  },
  {
    name: "Coinbase Ventures",
    type: "Strategic Investor",
    description: "Investment arm of Coinbase, supporting crypto innovation",
  },
  {
    name: "Binance Labs",
    type: "Strategic Investor",
    description: "Venture capital arm of Binance ecosystem",
  },
  {
    name: "Digital Currency Group",
    type: "Strategic Investor",
    description: "Premier investment firm in the digital currency industry",
  },
  {
    name: "Pantera Capital",
    type: "Crypto Specialist",
    description: "Leading blockchain investment firm",
  },
]

export function InvestorsSection() {
  return (
    <div className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Backed by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're proud to be supported by world-class investors who share our vision of democratizing access to
            cryptocurrency trading and building the future of digital finance.
          </p>
        </div>

        {/* Funding History */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">Funding History</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fundingRounds.map((round, index) => (
              <Card
                key={round.round}
                className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <Badge variant="secondary" className="text-sm font-bold px-3 py-1">
                      {round.date}
                    </Badge>
                    <h4 className="text-2xl font-bold text-foreground">{round.round}</h4>
                    <div className="text-3xl font-bold text-primary">{round.amount}</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-center leading-relaxed">{round.description}</p>
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground">Valuation: </span>
                      <span className="font-semibold text-foreground">{round.valuation}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Investor Logos/Names */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">Our Investors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investors.map((investor, index) => (
              <Card
                key={investor.name}
                className="p-6 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-foreground">{investor.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {investor.type}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{investor.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment Highlights */}
        <div className="mt-20">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="text-center space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">Total Funding Raised</h3>
              <div className="text-6xl lg:text-7xl font-bold text-primary">$250M+</div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our strong financial backing enables us to continue innovating, expanding globally, and providing the
                most secure and advanced cryptocurrency trading platform in the industry.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

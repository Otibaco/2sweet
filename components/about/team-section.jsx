import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const leadership = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Former Goldman Sachs VP with 15+ years in financial technology. Led the development of trading systems handling $1T+ in daily volume.",
    expertise: ["Financial Technology", "Trading Systems", "Regulatory Compliance"],
  },
  {
    name: "Sarah Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer and blockchain pioneer. Built scalable systems serving billions of users. Expert in distributed systems and cryptography.",
    expertise: ["Blockchain Technology", "System Architecture", "Cybersecurity"],
  },
  {
    name: "Michael Thompson",
    role: "Chief Security Officer",
    bio: "Former NSA cybersecurity specialist with 20+ years protecting critical financial infrastructure. Leads our security and compliance initiatives.",
    expertise: ["Cybersecurity", "Risk Management", "Compliance"],
  },
  {
    name: "Emily Wang",
    role: "Head of Product",
    bio: "Product leader from Apple and Tesla. Designed user experiences for millions of users. Passionate about making complex technology accessible.",
    expertise: ["Product Strategy", "User Experience", "Mobile Development"],
  },
]

const advisors = [
  {
    name: "Dr. James Wilson",
    role: "Blockchain Advisor",
    company: "Former Ethereum Foundation",
  },
  {
    name: "Lisa Park",
    role: "Regulatory Advisor",
    company: "Former SEC Commissioner",
  },
  {
    name: "David Kumar",
    role: "Trading Advisor",
    company: "Former JPMorgan Managing Director",
  },
  {
    name: "Maria Santos",
    role: "Technology Advisor",
    company: "Former Microsoft Azure VP",
  },
]

export function TeamSection() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leadership Team */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our leadership team combines decades of experience in financial technology, blockchain innovation, and
            cybersecurity to deliver the most trusted cryptocurrency trading platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {leadership.map((member, index) => (
            <Card
              key={member.name}
              className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Advisory Board</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're guided by industry veterans and thought leaders who help us navigate the evolving cryptocurrency
            landscape and regulatory environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((advisor, index) => (
            <Card
              key={advisor.name}
              className="p-6 bg-card/70 backdrop-blur-sm border-border/50 text-center hover:bg-card/90 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">{advisor.name}</h4>
                <p className="text-primary font-medium text-sm">{advisor.role}</p>
                <p className="text-muted-foreground text-sm">{advisor.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

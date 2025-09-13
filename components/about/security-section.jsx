import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Award, FileCheck, Users } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "Military-Grade Encryption",
    description:
      "All data is encrypted using AES-256 encryption, the same standard used by banks and government agencies worldwide.",
  },
  {
    icon: Lock,
    title: "Cold Storage",
    description:
      "95% of user funds are stored in offline cold storage wallets, protected from online threats and unauthorized access.",
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description:
      "Our security team monitors all systems around the clock, with AI-powered threat detection and instant response protocols.",
  },
  {
    icon: Award,
    title: "SOC 2 Certified",
    description:
      "Independently audited and certified for security, availability, and confidentiality by leading cybersecurity firms.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description:
      "Fully compliant with financial regulations in 150+ countries, including KYC, AML, and data protection laws.",
  },
  {
    icon: Users,
    title: "Multi-Factor Authentication",
    description:
      "Advanced MFA options including SMS, email, authenticator apps, and hardware security keys for maximum protection.",
  },
]

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Security, Availability & Confidentiality",
    year: "2024",
  },
  {
    name: "ISO 27001",
    description: "Information Security Management",
    year: "2023",
  },
  {
    name: "PCI DSS Level 1",
    description: "Payment Card Industry Compliance",
    year: "2023",
  },
  {
    name: "GDPR Compliant",
    description: "European Data Protection Regulation",
    year: "2022",
  },
]

export function SecuritySection() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Security & Compliance</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Your security is our top priority. We employ industry-leading security measures and maintain the highest
            standards of regulatory compliance to protect your assets and personal information.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Certifications & Compliance</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We maintain the highest industry certifications and comply with global regulatory standards to ensure your
            trust and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={cert.name}
              className="p-6 bg-card/70 backdrop-blur-sm border-border/50 text-center hover:bg-card/90 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="text-xs font-bold px-3 py-1">
                  {cert.year}
                </Badge>
                <h4 className="text-lg font-bold text-foreground">{cert.name}</h4>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Security Stats */}
        <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">$0</div>
              <div className="text-muted-foreground">Security Incidents</div>
              <div className="text-sm text-muted-foreground">Zero breaches since launch</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">99.99%</div>
              <div className="text-muted-foreground">Uptime</div>
              <div className="text-sm text-muted-foreground">Industry-leading reliability</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">$500M+</div>
              <div className="text-muted-foreground">Insurance Coverage</div>
              <div className="text-sm text-muted-foreground">Digital asset protection</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

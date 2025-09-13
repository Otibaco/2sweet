import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Fingerprint, Key, AlertTriangle } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "Multi-Layer Security",
    description: "Advanced security protocols protect your account and funds at every level",
    features: ["End-to-end encryption", "Secure API endpoints", "Regular security audits", "Compliance monitoring"],
  },
  {
    icon: Lock,
    title: "Cold Storage Protection",
    description: "95% of user funds stored offline in secure, air-gapped cold storage systems",
    features: ["Offline storage", "Multi-signature wallets", "Geographic distribution", "Insurance coverage"],
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description: "Use Face ID, Touch ID, or fingerprint to secure your mobile trading experience",
    features: ["Face ID support", "Touch ID support", "Fingerprint login", "Device binding"],
  },
  {
    icon: Key,
    title: "Two-Factor Authentication",
    description: "Multiple 2FA options including SMS, email, and authenticator apps for enhanced security",
    features: ["SMS verification", "Email codes", "Google Authenticator", "Hardware keys"],
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "AI-powered systems monitor all activities 24/7 to detect and prevent suspicious behavior",
    features: ["Fraud detection", "Anomaly alerts", "Login monitoring", "Transaction analysis"],
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    description: "Advanced risk controls and position limits help protect your trading capital",
    features: ["Position limits", "Stop-loss orders", "Risk alerts", "Portfolio analysis"],
  },
]

const securityStats = [
  { label: "Security Incidents", value: "0", description: "Zero breaches since launch" },
  { label: "Uptime", value: "99.99%", description: "Industry-leading reliability" },
  { label: "Insurance Coverage", value: "$500M+", description: "Digital asset protection" },
  { label: "Countries Regulated", value: "150+", description: "Global compliance" },
]

export function SecurityFeatures() {
  return (
    <div className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Bank-Level Security</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Your security is our top priority. We employ military-grade encryption, multi-layer security protocols, and
            industry-leading practices to protect your assets and personal information.
          </p>
        </div>

        {/* Security Features Grid */}
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

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Security Features:</h4>
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Security Stats */}
        <div className="text-center mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">Security by the Numbers</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityStats.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-8 bg-card/70 backdrop-blur-sm border-border/50 text-center hover:bg-card/90 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <h4 className="text-lg font-semibold text-foreground">{stat.label}</h4>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">Industry Certifications</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We maintain the highest industry certifications and comply with global regulatory standards to ensure
                your trust and safety.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Badge className="bg-primary text-primary-foreground px-4 py-2">SOC 2 Type II</Badge>
                <p className="text-muted-foreground text-sm">Security & Availability</p>
              </div>
              <div className="space-y-2">
                <Badge className="bg-primary text-primary-foreground px-4 py-2">ISO 27001</Badge>
                <p className="text-muted-foreground text-sm">Information Security</p>
              </div>
              <div className="space-y-2">
                <Badge className="bg-primary text-primary-foreground px-4 py-2">PCI DSS Level 1</Badge>
                <p className="text-muted-foreground text-sm">Payment Security</p>
              </div>
              <div className="space-y-2">
                <Badge className="bg-primary text-primary-foreground px-4 py-2">GDPR Compliant</Badge>
                <p className="text-muted-foreground text-sm">Data Protection</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

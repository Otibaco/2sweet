import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Building, Smartphone, Globe, Clock, Shield } from "lucide-react"

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Credit & Debit Cards",
    description: "Instant purchases with Visa, Mastercard, and American Express",
    features: ["Instant deposits", "Global acceptance", "Secure processing", "Low fees"],
    processingTime: "Instant",
    fees: "2.9%",
  },
  {
    icon: Building,
    title: "Bank Transfers",
    description: "Direct bank transfers with ACH, SEPA, and wire transfer support",
    features: ["Lower fees", "Higher limits", "Secure transfers", "Multiple currencies"],
    processingTime: "1-3 days",
    fees: "0.5%",
  },
  {
    icon: Smartphone,
    title: "Digital Wallets",
    description: "Pay with Apple Pay, Google Pay, PayPal, and other digital wallets",
    features: ["One-click payments", "Biometric security", "Mobile optimized", "Quick setup"],
    processingTime: "Instant",
    fees: "1.9%",
  },
]

const supportedRegions = [
  { region: "North America", countries: "USA, Canada, Mexico" },
  { region: "Europe", countries: "UK, Germany, France, Italy, Spain, Netherlands" },
  { region: "Asia Pacific", countries: "Japan, Singapore, Australia, South Korea" },
  { region: "Latin America", countries: "Brazil, Argentina, Chile, Colombia" },
]

export function PaymentMethods() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Multiple Payment Options</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Choose from a variety of secure payment methods to fund your account and start trading. We support the most
            popular payment options worldwide.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {paymentMethods.map((method, index) => (
            <Card
              key={method.title}
              className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <method.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{method.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{method.description}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Features:</h4>
                  <div className="space-y-2">
                    {method.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Processing Time</div>
                    <Badge variant="secondary" className="text-xs">
                      {method.processingTime}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="text-xs text-muted-foreground">Fees</div>
                    <div className="text-sm font-semibold text-foreground">{method.fees}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Payment Logos */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Accepted Payment Methods</h3>
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-center justify-center">
              <Image
                src="/payment-image1.webp"
                alt="Accepted payment methods including Visa, Mastercard, American Express, PayPal, and Discover"
                width={400}
                height={80}
                className="h-16 w-auto opacity-80"
              />
            </div>
          </Card>
        </div>

        {/* Global Support */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Global Payment Support</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We support payment methods in over 150 countries worldwide, making it easy for users everywhere to access
            cryptocurrency trading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportedRegions.map((region, index) => (
            <Card
              key={region.region}
              className="p-6 bg-card/70 backdrop-blur-sm border-border/50 text-center hover:bg-card/90 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-4">
                <Globe className="h-8 w-8 text-primary mx-auto" />
                <h4 className="text-lg font-semibold text-foreground">{region.region}</h4>
                <p className="text-muted-foreground text-sm">{region.countries}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Security & Compliance */}
        <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <Shield className="h-12 w-12 text-primary mx-auto" />
              <h4 className="text-xl font-bold text-foreground">PCI DSS Compliant</h4>
              <p className="text-muted-foreground">
                Highest level of payment security certification for handling credit card information
              </p>
            </div>
            <div className="space-y-4">
              <Clock className="h-12 w-12 text-primary mx-auto" />
              <h4 className="text-xl font-bold text-foreground">24/7 Monitoring</h4>
              <p className="text-muted-foreground">
                Continuous fraud detection and prevention systems protect all transactions
              </p>
            </div>
            <div className="space-y-4">
              <CreditCard className="h-12 w-12 text-primary mx-auto" />
              <h4 className="text-xl font-bold text-foreground">Secure Processing</h4>
              <p className="text-muted-foreground">
                All payment data is encrypted and processed through secure, certified payment gateways
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

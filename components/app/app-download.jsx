import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Smartphone, Shield, Zap } from "lucide-react"

const downloadFeatures = [
  {
    icon: Smartphone,
    title: "Universal Compatibility",
    description: "Works seamlessly on iOS 14+ and Android 8+",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Biometric authentication and encrypted data storage",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for instant trading execution",
  },
]

export function AppDownload() {
  return (
    <div className="py-20 bg-background" id="download">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Download 2$weet Today</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join millions of traders who trust 2$weet for their cryptocurrency trading needs. Download our app and start
            trading in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Download Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                Free Download
              </Badge>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                Get Started in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  3 Simple Steps
                </span>
              </h3>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Download & Install</h4>
                  <p className="text-muted-foreground">Get the app from App Store or Google Play</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Create Account</h4>
                  <p className="text-muted-foreground">Quick verification process in under 5 minutes</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Start Trading</h4>
                  <p className="text-muted-foreground">Fund your account and begin trading immediately</p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#" className="block">
                  <Image
                    src="/images/play-store.webp"
                    alt="Download on App Store and Google Play"
                    width={300}
                    height={90}
                    className="h-14 w-auto hover:scale-105 transition-transform duration-200"
                  />
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Available for iOS 14+ and Android 8+. Free download with no hidden fees.
              </p>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              <Image
                src="/images/investor-on-phone.jpg"
                alt="2$weet mobile app download"
                width={400}
                height={600}
                className="rounded-3xl shadow-2xl animate-float"
              />
              {/* Download Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg animate-pulse">
                <Download className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {downloadFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-6 bg-card/70 backdrop-blur-sm border-border/50 text-center hover:bg-card/90 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="text-center space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Start Trading?</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Download the 2$weet app today and join millions of traders who trust us with their cryptocurrency
              investments.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg animate-glow"
            >
              <Link href="#download">
                <Download className="mr-2 h-5 w-5" />
                Download Free App
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

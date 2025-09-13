import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Users, Smartphone } from "lucide-react"

export function AppShowcase() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - App Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                  Mobile Trading App
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Download 2$weet and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Start Trading Today
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join millions of traders worldwide who trust 2$weet for their cryptocurrency trading needs. Our mobile
                  app brings the full power of professional trading to your smartphone.
                </p>
              </div>

              {/* App Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Why Choose Our App?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">500+ Cryptocurrencies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Advanced Security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Real-time Trading</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* App Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <Users className="h-6 w-6 text-primary mx-auto" />
                  <div className="text-2xl font-bold text-primary">5M+</div>
                  <div className="text-muted-foreground text-sm">Downloads</div>
                </div>
                <div className="text-center space-y-2">
                  <Star className="h-6 w-6 text-primary mx-auto" />
                  <div className="text-2xl font-bold text-primary">4.8★</div>
                  <div className="text-muted-foreground text-sm">App Rating</div>
                </div>
                <div className="text-center space-y-2">
                  <Smartphone className="h-6 w-6 text-primary mx-auto" />
                  <div className="text-2xl font-bold text-primary">iOS & Android</div>
                  <div className="text-muted-foreground text-sm">Available</div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
                  >
                    <Link href="#download">
                      <Download className="mr-2 h-5 w-5" />
                      Download Free App
                    </Link>
                  </Button>
                  <Link href="#" className="block">
                    <Image
                      src="/images/play-store.webp"
                      alt="Download on App Store and Google Play"
                      width={200}
                      height={60}
                      className="h-12 w-auto hover:scale-105 transition-transform duration-200"
                    />
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">Free download • No hidden fees • Available worldwide</p>
              </div>
            </div>

            {/* Right Column - Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                <Image
                  src="/images/investor-on-phone.jpg"
                  alt="2$weet mobile app trading interface"
                  width={400}
                  height={600}
                  className="rounded-3xl shadow-2xl animate-float"
                />
                {/* Download Badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg animate-pulse">
                  <Download className="h-6 w-6" />
                </div>
                {/* Rating Badge */}
                <Card className="absolute -bottom-4 -left-4 p-3 bg-card/90 backdrop-blur-sm border-border/50 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">4.8 Rating</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

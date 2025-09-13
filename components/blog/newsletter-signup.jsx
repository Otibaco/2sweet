"use client"

import React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, CheckCircle, TrendingUp, BookOpen, Bell } from "lucide-react"

const newsletterBenefits = [
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Weekly market analysis and trading opportunities",
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description: "Exclusive guides and tutorials for all skill levels",
  },
  {
    icon: Bell,
    title: "Breaking News",
    description: "First to know about major crypto developments",
  },
]

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <div className="py-20 bg-background" id="newsletter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Newsletter Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                  Weekly Newsletter
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Stay Informed with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Crypto Weekly
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Get the latest cryptocurrency news, market analysis, and trading insights delivered directly to your
                  inbox every week. Join over 100,000 traders who trust our newsletter.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                {newsletterBenefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className="flex items-start space-x-4"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100K+</div>
                  <div className="text-muted-foreground text-sm">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9★</div>
                  <div className="text-muted-foreground text-sm">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Weekly</div>
                  <div className="text-muted-foreground text-sm">Delivery</div>
                </div>
              </div>
            </div>

            {/* Right Column - Signup Form */}
            <div className="space-y-8">
              <Card className="p-8 bg-card/70 backdrop-blur-sm border-border/50">
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground text-center">Subscribe Now</h3>
                      <p className="text-muted-foreground text-center">Join our community of informed crypto traders</p>
                    </div>

                    <div className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 py-3 text-lg"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-lg"
                      >
                        Subscribe Free
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      No spam, unsubscribe at any time. We respect your privacy.
                    </p>
                  </form>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">Welcome Aboard!</h3>
                      <p className="text-muted-foreground">
                        Thank you for subscribing. You'll receive your first newsletter within 24 hours.
                      </p>
                    </div>
                    <Button
                      onClick={() => setIsSubscribed(false)}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Subscribe Another Email
                    </Button>
                  </div>
                )}
              </Card>

              {/* Additional Info */}
              <div className="text-center space-y-4">
                <p className="text-muted-foreground text-sm">Trusted by traders from over 150 countries worldwide</p>
                <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
                  <span>✓ No spam</span>
                  <span>✓ Unsubscribe anytime</span>
                  <span>✓ Privacy protected</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

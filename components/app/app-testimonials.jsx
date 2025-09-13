import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Day Trader",
    rating: 5,
    content:
      "The mobile app is incredible! I can execute complex trades on the go with the same precision as desktop. The interface is intuitive and the execution speed is unmatched.",
    location: "New York, USA",
  },
  {
    name: "Maria Garcia",
    role: "Crypto Investor",
    rating: 5,
    content:
      "Perfect for managing my portfolio. The real-time notifications and advanced charting tools help me make informed decisions wherever I am. Highly recommend!",
    location: "Barcelona, Spain",
  },
  {
    name: "David Chen",
    role: "Professional Trader",
    rating: 5,
    content:
      "As a professional trader, I need reliability and speed. This app delivers both. The biometric security and offline capabilities are game-changers for mobile trading.",
    location: "Singapore",
  },
  {
    name: "Sarah Williams",
    role: "Crypto Enthusiast",
    rating: 5,
    content:
      "Started as a beginner and the app guided me through every step. The educational content and user-friendly interface made learning crypto trading enjoyable and profitable.",
    location: "London, UK",
  },
  {
    name: "Michael Rodriguez",
    role: "Investment Manager",
    rating: 5,
    content:
      "Managing multiple client portfolios has never been easier. The app's multi-wallet support and detailed analytics save me hours of work every day.",
    location: "Toronto, Canada",
  },
  {
    name: "Emma Thompson",
    role: "Swing Trader",
    rating: 5,
    content:
      "The price alerts and smart notifications are incredibly accurate. I never miss important market movements, and the app's performance is consistently excellent.",
    location: "Sydney, Australia",
  },
]

export function AppTestimonials() {
  return (
    <div className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Loved by Traders Worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join millions of satisfied users who trust 2$weet for their mobile cryptocurrency trading needs. Here's what
            they have to say about our app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author Info */}
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.role}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="text-6xl font-bold text-primary">4.8</div>
              <div className="flex flex-col items-start">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-muted-foreground text-sm">out of 5 stars</div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Over 50,000 Reviews</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Consistently rated as one of the best cryptocurrency trading apps on both iOS and Android app stores.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

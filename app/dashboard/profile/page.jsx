"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Shield, Star, TrendingUp, Calendar, MapPin, Mail, Phone, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"

// Mock user profile data
const userProfile = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "New York, United States",
  joinDate: "January 2023",
  verified: true,
  kycLevel: "Level 3",
  tradingLevel: "Advanced",
  totalTrades: 1247,
  successRate: 78.5,
  totalVolume: 2450000,
  favoriteAssets: ["BTC", "ETH", "ADA"],
  achievements: [
    { name: "Early Adopter", description: "Joined in the first year", icon: "🚀" },
    { name: "High Volume Trader", description: "Traded over $1M", icon: "💎" },
    { name: "Consistent Trader", description: "Active for 6+ months", icon: "⭐" },
  ],
}

const tradingStats = [
  { label: "Total Trades", value: userProfile.totalTrades.toLocaleString(), change: "+12%" },
  { label: "Success Rate", value: `${userProfile.successRate}%`, change: "+3.2%" },
  { label: "Total Volume", value: `$${(userProfile.totalVolume / 1000000).toFixed(1)}M`, change: "+25%" },
  { label: "Active Days", value: "342", change: "+5%" },
]

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Profile</h1>
          <p className="text-muted-foreground">Your public profile and trading statistics</p>
        </div>

        {/* Profile Overview */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {userProfile.firstName} {userProfile.lastName}
                  </h2>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <Badge className="bg-green-500 text-white rounded-full">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                    <Badge variant="outline" className="rounded-full">
                      {userProfile.kycLevel}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{userProfile.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{userProfile.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{userProfile.location}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {userProfile.joinDate}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="xl:col-span-2 border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Trading Statistics
              </CardTitle>
              <CardDescription>Your trading performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                {tradingStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-muted/30"
                  >
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="text-xs text-green-500 mt-1">{stat.change} this month</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Achievements
            </CardTitle>
            <CardDescription>Your trading milestones and accomplishments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {userProfile.achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <div className="font-semibold">{achievement.name}</div>
                      <div className="text-sm text-muted-foreground">{achievement.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Favorite Assets */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Favorite Assets</CardTitle>
            <CardDescription>Cryptocurrencies you trade most frequently</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {userProfile.favoriteAssets.map((asset, index) => (
                <motion.div
                  key={asset}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Badge variant="outline" className="px-4 py-2 rounded-xl text-sm">
                    {asset}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Account Security */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Account Security
            </CardTitle>
            <CardDescription>Your account security status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-semibold">Email Verified</div>
                    <div className="text-sm text-muted-foreground">Your email is verified</div>
                  </div>
                </div>
                <Badge className="bg-green-500 text-white">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-semibold">2FA Enabled</div>
                    <div className="text-sm text-muted-foreground">Two-factor authentication active</div>
                  </div>
                </div>
                <Badge className="bg-green-500 text-white">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-semibold">KYC Verified</div>
                    <div className="text-sm text-muted-foreground">Identity verification complete</div>
                  </div>
                </div>
                <Badge className="bg-green-500 text-white">Level 3</Badge>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-semibold">Advanced Security</div>
                    <div className="text-sm text-muted-foreground">Enhanced protection enabled</div>
                  </div>
                </div>
                <Badge className="bg-blue-500 text-white">Premium</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

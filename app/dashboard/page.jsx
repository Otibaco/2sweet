"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Eye,
  EyeOff,
  Plus,
  Minus,
  MoreHorizontal,
  Bell,
  Settings,
  CreditCard,
  Activity,
  BarChart3,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"

// Mock data - in real app this would come from API
const portfolioData = {
  totalBalance: 45678.9,
  totalBalanceChange: 2.34,
  totalBalanceChangePercent: 5.67,
  availableBalance: 12345.67,
  assets: [
    { symbol: "BTC", name: "Bitcoin", amount: 0.5432, value: 23456.78, change: 3.45, icon: "₿" },
    { symbol: "ETH", name: "Ethereum", amount: 12.8765, value: 18765.43, change: -1.23, icon: "Ξ" },
    { symbol: "ADA", name: "Cardano", amount: 5000, value: 2345.67, change: 8.9, icon: "₳" },
    { symbol: "SOL", name: "Solana", amount: 45.67, value: 1111.02, change: -2.34, icon: "◎" },
  ],
}

const recentTransactions = [
  { id: 1, type: "buy", asset: "BTC", amount: 0.1234, value: 5432.1, time: "2 hours ago", status: "completed" },
  { id: 2, type: "sell", asset: "ETH", amount: 2.5, value: 3456.78, time: "5 hours ago", status: "completed" },
  { id: 3, type: "deposit", asset: "USD", amount: 10000, value: 10000, time: "1 day ago", status: "completed" },
  { id: 4, type: "buy", asset: "ADA", amount: 1000, value: 456.78, time: "2 days ago", status: "completed" },
]

const marketData = [
  { symbol: "BTC", price: 43210.5, change: 2.34, volume: "1.2B" },
  { symbol: "ETH", price: 2345.67, change: -1.45, volume: "890M" },
  { symbol: "ADA", price: 0.4567, change: 5.67, volume: "234M" },
  { symbol: "SOL", price: 98.76, change: -3.21, volume: "156M" },
]

export default function DashboardPage() {
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h")

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 py-8 pt-24">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h1>
              <p className="text-muted-foreground">Here's what's happening with your portfolio today.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Link href="/dashboard/settings">
                <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </Link>

            </div>
          </div>

          {/* Portfolio Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <Card className="lg:col-span-2 border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Total Portfolio Value</CardTitle>
                  <CardDescription>Your total crypto holdings</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="rounded-xl"
                >
                  {balanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-foreground">
                      {balanceVisible ? `$${portfolioData.totalBalance.toLocaleString()}` : "••••••"}
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge
                        variant={portfolioData.totalBalanceChange > 0 ? "default" : "destructive"}
                        className="rounded-full"
                      >
                        {portfolioData.totalBalanceChange > 0 ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {portfolioData.totalBalanceChangePercent}%
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        ${Math.abs(portfolioData.totalBalanceChange).toLocaleString()} today
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="flex-1 gradient-primary hover:opacity-90 text-white rounded-xl">
                      <Plus className="w-4 h-4 mr-2" />
                      Buy Crypto
                    </Button>
                    <Button variant="outline" className="flex-1 rounded-xl border-border/50 bg-transparent">
                      <Minus className="w-4 h-4 mr-2" />
                      Sell Crypto
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {balanceVisible ? `$${portfolioData.availableBalance.toLocaleString()}` : "••••••"}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Ready to trade</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">24h Volume</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$8,432</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">+12.5%</span> from yesterday
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Portfolio Assets */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Your Assets
                    <Button variant="ghost" size="sm" className="rounded-xl">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {portfolioData.assets.map((asset, index) => (
                      <motion.div
                        key={asset.symbol}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-bold text-primary">{asset.icon}</span>
                          </div>
                          <div>
                            <div className="font-semibold">{asset.symbol}</div>
                            <div className="text-sm text-muted-foreground">{asset.name}</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-semibold">
                            {balanceVisible ? `$${asset.value.toLocaleString()}` : "••••••"}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {asset.amount} {asset.symbol}
                          </div>
                        </div>

                        <div className="text-right">
                          <Badge variant={asset.change > 0 ? "default" : "destructive"} className="rounded-full">
                            {asset.change > 0 ? "+" : ""}
                            {asset.change}%
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Recent Transactions
                    <Button variant="ghost" size="sm" className="rounded-xl">
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTransactions.map((tx, index) => (
                      <motion.div
                        key={tx.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-xl bg-muted/30"
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === "buy"
                              ? "bg-green-500/10"
                              : tx.type === "sell"
                                ? "bg-red-500/10"
                                : "bg-blue-500/10"
                              }`}
                          >
                            {tx.type === "buy" ? (
                              <ArrowUpRight className="w-5 h-5 text-green-500" />
                            ) : tx.type === "sell" ? (
                              <ArrowDownLeft className="w-5 h-5 text-red-500" />
                            ) : (
                              <CreditCard className="w-5 h-5 text-blue-500" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold capitalize">
                              {tx.type} {tx.asset}
                            </div>
                            <div className="text-sm text-muted-foreground">{tx.time}</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-semibold">${tx.value.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">
                            {tx.amount} {tx.asset}
                          </div>
                        </div>

                        <Badge variant="outline" className="rounded-full">
                          {tx.status}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Market Overview */}
            <div>
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Market Overview</CardTitle>
                  <CardDescription>Top cryptocurrencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {marketData.map((coin, index) => (
                      <motion.div
                        key={coin.symbol}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div>
                          <div className="font-semibold">{coin.symbol}</div>
                          <div className="text-sm text-muted-foreground">Vol: {coin.volume}</div>
                        </div>

                        <div className="text-right">
                          <div className="font-semibold">${coin.price.toLocaleString()}</div>
                          <div className={`text-sm ${coin.change > 0 ? "text-green-500" : "text-red-500"}`}>
                            {coin.change > 0 ? "+" : ""}
                            {coin.change}%
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl mt-6">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="#">
                      <Button
                        variant="outline"
                        className="h-16 rounded-xl border-border/50 flex-col bg-transparent w-full"
                      >
                        <CreditCard className="w-5 h-5 mb-1" />
                        <span className="text-xs">Deposit</span>
                      </Button>
                    </Link>

                    <Link href="#">
                      <Button
                        variant="outline"
                        className="h-16 rounded-xl border-border/50 flex-col bg-transparent w-full"
                      >
                        <Wallet className="w-5 h-5 mb-1" />
                        <span className="text-xs">Withdraw</span>
                      </Button>
                    </Link>

                    <Link href="#">
                      <Button
                        variant="outline"
                        className="h-16 rounded-xl border-border/50 flex-col bg-transparent w-full"
                      >
                        <Activity className="w-5 h-5 mb-1" />
                        <span className="text-xs">Trade</span>
                      </Button>
                    </Link>

                    <Link href="#">
                      <Button
                        variant="outline"
                        className="h-16 rounded-xl border-border/50 flex-col bg-transparent w-full"
                      >
                        <BarChart3 className="w-5 h-5 mb-1" />
                        <span className="text-xs">Analytics</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>

  )
}

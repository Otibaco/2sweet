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


// ✅ Expanded mock market data
const marketData = [
  { symbol: "BTC", price: 43210.5, change: 2.34, volume: "1.2B" },
  { symbol: "ETH", price: 2345.67, change: -1.45, volume: "890M" },
  { symbol: "ADA", price: 0.4567, change: 5.67, volume: "234M" },
  { symbol: "SOL", price: 98.76, change: -3.21, volume: "156M" },
  { symbol: "BNB", price: 310.45, change: 1.78, volume: "450M" },
  { symbol: "XRP", price: 0.567, change: 0.89, volume: "678M" },
  { symbol: "DOGE", price: 0.098, change: 4.56, volume: "345M" },
  { symbol: "DOT", price: 7.45, change: -2.1, volume: "123M" },
  { symbol: "MATIC", price: 1.23, change: 3.45, volume: "256M" },
  { symbol: "LTC", price: 95.34, change: -0.9, volume: "89M" },
  { symbol: "AVAX", price: 35.67, change: 6.3, volume: "145M" },
  { symbol: "UNI", price: 6.78, change: 2.5, volume: "76M" },
  { symbol: "ATOM", price: 12.45, change: -1.2, volume: "98M" },
  { symbol: "NEAR", price: 4.56, change: 5.1, volume: "54M" },
  { symbol: "FIL", price: 5.34, change: 1.8, volume: "67M" },
  { symbol: "TRX", price: 0.123, change: -0.5, volume: "234M" },
  { symbol: "ETC", price: 28.9, change: 0.67, volume: "45M" },
  { symbol: "AAVE", price: 82.5, change: 3.2, volume: "34M" },
  { symbol: "ALGO", price: 0.234, change: -1.1, volume: "67M" },
  { symbol: "HBAR", price: 0.056, change: 2.7, volume: "23M" },
]

export default function DashboardPage() {
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h")
  const [showAll, setShowAll] = useState(false)

  const displayedData = showAll ? marketData : marketData.slice(0, 4)

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">Welcome back, John!</h1>
              <p className="text-sm text-muted-foreground">Here's what's happening with your portfolio today.</p>
            </div>
            <div className="flex items-center gap-2 mt-2 sm:mt-0">

              <Link href="/dashboard/settings" >
                <Button variant="outline" size="sm" className="rounded-xl bg-transparent px-3 py-2 flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  <span className="text-xs">Notifications</span>
                </Button>
              </Link>

              <Link href="/dashboard/settings" >

                <Button variant="outline" size="sm" className="rounded-xl bg-transparent px-3 py-2 flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  <span className="text-xs">Settings</span>
                </Button>

              </Link>
            </div>
          </div>

          {/* Portfolio Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
            <Card className="lg:col-span-2 border-0 shadow-md bg-card/80 backdrop-blur-xl">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-base sm:text-lg">Total Portfolio Value</CardTitle>
                  <CardDescription className="text-xs">Your total crypto holdings</CardDescription>
                </div>

              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-foreground">
                      {balanceVisible ? `$${portfolioData.totalBalance.toLocaleString()}` : "••••••"}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setBalanceVisible(!balanceVisible)}
                        className="rounded-xl"
                      >
                        {balanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </Button>
                    </div>


                    <div className="flex items-center gap-2 mt-2">
                      <Badge
                        variant={portfolioData.totalBalanceChange > 0 ? "default" : "destructive"}
                        className="rounded-full text-xs px-2 py-1 inline-flex items-center gap-1"
                      >
                        {portfolioData.totalBalanceChange > 0 ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        <span className="text-[11px]">{portfolioData.totalBalanceChangePercent}%</span>
                      </Badge>

                      <span className="text-xs text-muted-foreground">
                        ${Math.abs(portfolioData.totalBalanceChange).toLocaleString()} today
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button className="flex-1 gradient-primary hover:opacity-90 text-white rounded-xl px-3 py-2 text-sm inline-flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" />
                      Buy Crypto
                    </Button>
                    <Button variant="outline" className="flex-1 rounded-xl border-border/50 bg-transparent px-3 py-2 text-sm inline-flex items-center justify-center gap-2">
                      <Minus className="w-4 h-4" />
                      Sell Crypto
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-card/80 backdrop-blur-xl">
              <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">
                  {balanceVisible ? `$${portfolioData.availableBalance.toLocaleString()}` : "••••••"}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Ready to trade</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-card/80 backdrop-blur-xl">
              <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">24h Volume</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">$8,432</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">+12.5%</span> from yesterday
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Portfolio Assets */}
            <div className="lg:col-span-2 space-y-4">
              <Card className="border-0 shadow-md bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Your Assets
                    <Button variant="ghost" size="sm" className="rounded-xl">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {portfolioData.assets.map((asset, index) => (
                      <motion.div
                        key={asset.symbol}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center justify-between gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        {/* Asset Icon + Name */}
                        <div className="flex items-center gap-3 w-1/3 min-w-[100px]">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                            {asset.icon}
                          </div>
                          <div>
                            <div className="font-medium">{asset.symbol}</div>
                            <div className="text-xs text-muted-foreground">{asset.name}</div>
                          </div>
                        </div>

                        {/* Asset Value */}
                        <div className="w-1/3 text-center sm:text-right">
                          <div className="font-medium">
                            {balanceVisible ? `$${asset.value.toLocaleString()}` : "••••"}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {asset.amount} {asset.symbol}
                          </div>
                        </div>

                        {/* Asset Change Badge */}
                        <div className="w-1/3 text-right">
                          <Badge
                            variant={asset.change > 0 ? "default" : "destructive"}
                            className="rounded-full text-xs px-2 py-1"
                          >
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
              <Card className="border-0 shadow-md bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Recent Transactions
                    <Button variant="ghost" size="sm" className="rounded-xl">
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {recentTransactions.map((tx, index) => (
                      <motion.div
                        key={tx.id}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="p-3 rounded-lg bg-muted/30 flex flex-col"
                      >
                        {/* First Row: Transaction Type + Value aligned */}
                        <div className="flex items-center justify-between">
                          {/* Left: Icon + Buy BTC */}
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${tx.type === "buy"
                                  ? "bg-green-500/10"
                                  : tx.type === "sell"
                                    ? "bg-red-500/10"
                                    : "bg-blue-500/10"
                                }`}
                            >
                              {tx.type === "buy" ? (
                                <ArrowUpRight className="w-4 h-4 text-green-500" />
                              ) : tx.type === "sell" ? (
                                <ArrowDownLeft className="w-4 h-4 text-red-500" />
                              ) : (
                                <CreditCard className="w-4 h-4 text-blue-500" />
                              )}
                            </div>
                            <span className="font-medium capitalize">{tx.type} {tx.asset}</span>
                          </div>

                          {/* Right: Value + Amount */}
                          <div className="flex flex-col items-end leading-tight">
                            <span className="font-medium">${tx.value.toLocaleString()}</span>
                            <span className="text-xs text-muted-foreground">
                              {tx.amount} {tx.asset}
                            </span>
                          </div>
                        </div>

                        {/* Second Row: Time */}
                        <div className="text-xs text-muted-foreground mt-1">{tx.time}</div>

                        {/* Third Row: Status */}
                        <div className="mt-1">
                          <Badge variant="outline" className="rounded-full text-xs px-1 py-1">
                            {tx.status}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>



            </div>




            {/* Market Overview & Quick Actions */}
            <div className="space-y-4">
              {/* Market Overview */}
              <Card className="border-0 shadow-md bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Market Overview</CardTitle>
                  <CardDescription>Top cryptocurrencies</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2">
                    {displayedData.map((coin, index) => (
                      <motion.div
                        key={coin.symbol}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="flex items-center justify-between p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div>
                          <div className="font-medium">{coin.symbol}</div>
                          <div className="text-xs text-muted-foreground">Vol: {coin.volume}</div>
                        </div>

                        <div className="text-right">
                          <div className="font-medium">${coin.price.toLocaleString()}</div>
                          <div
                            className={`text-xs ${coin.change > 0 ? "text-green-500" : "text-red-500"
                              }`}
                          >
                            {coin.change > 0 ? "+" : ""}
                            {coin.change}%
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Toggle button */}
                  <div className="mt-4 flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-lg text-sm"
                      onClick={() => setShowAll(!showAll)}
                    >
                      {showAll ? "View Less" : "View More"}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-md bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/dashboard/wallet">
                      <Button
                        variant="outline"
                        className="h-14 rounded-xl border-border/50 flex-col bg-transparent w-full text-sm"
                      >
                        <CreditCard className="w-5 h-5 mb-1" />
                        <span>Deposit</span>
                      </Button>
                    </Link>

                    <Link href="/dashboard/wallet">
                      <Button
                        variant="outline"
                        className="h-14 rounded-xl border-border/50 flex-col bg-transparent w-full text-sm"
                      >
                        <Wallet className="w-5 h-5 mb-1" />
                        <span>Withdraw</span>
                      </Button>
                    </Link>

                    <Link href="/dashboard/trading">
                      <Button
                        variant="outline"
                        className="h-14 rounded-xl border-border/50 flex-col bg-transparent w-full text-sm"
                      >
                        <Activity className="w-5 h-5 mb-1" />
                        <span>Trade</span>
                      </Button>
                    </Link>

                    <Link href="/dashboard/trading">
                      <Button
                        variant="outline"
                        className="h-14 rounded-xl border-border/50 flex-col bg-transparent w-full text-sm"
                      >
                        <BarChart3 className="w-5 h-5 mb-1" />
                        <span>Analytics</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout >

  )
}

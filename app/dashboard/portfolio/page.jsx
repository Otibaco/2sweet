"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  TrendingDown,
  PieChart,
  BarChart3,
  Target,
  AlertTriangle,
  Eye,
  EyeOff,
  Download,
  RefreshCw,
  Plus,
} from "lucide-react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"

// Mock portfolio data
const portfolioData = {
  totalValue: 45678.9,
  totalChange: 2345.67,
  totalChangePercent: 5.42,
  dayChange: 1234.56,
  dayChangePercent: 2.78,
  weekChange: 3456.78,
  weekChangePercent: 8.21,
  monthChange: -567.89,
  monthChangePercent: -1.23,
}

const holdings = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    amount: 0.5432,
    avgBuyPrice: 41500,
    currentPrice: 43210.5,
    value: 23456.78,
    allocation: 51.3,
    pnl: 928.45,
    pnlPercent: 4.12,
    icon: "₿",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    amount: 12.8765,
    avgBuyPrice: 2200,
    currentPrice: 2345.67,
    value: 18765.43,
    allocation: 41.1,
    pnl: 1876.54,
    pnlPercent: 6.61,
    icon: "Ξ",
  },
  {
    symbol: "ADA",
    name: "Cardano",
    amount: 5000,
    avgBuyPrice: 0.52,
    currentPrice: 0.4567,
    value: 2345.67,
    allocation: 5.1,
    pnl: -316.5,
    pnlPercent: -11.89,
    icon: "₳",
  },
  {
    symbol: "SOL",
    name: "Solana",
    amount: 45.67,
    avgBuyPrice: 105,
    currentPrice: 98.76,
    value: 1111.02,
    allocation: 2.5,
    pnl: -284.78,
    pnlPercent: -6.12,
    icon: "◎",
  },
]

const performanceMetrics = {
  sharpeRatio: 1.42,
  maxDrawdown: -15.67,
  volatility: 23.45,
  beta: 1.12,
  alpha: 2.34,
  winRate: 67.8,
}

const rebalanceRecommendations = [
  {
    action: "reduce",
    asset: "BTC",
    current: 51.3,
    target: 45.0,
    reason: "Overweight position, consider taking profits",
  },
  {
    action: "increase",
    asset: "ETH",
    current: 41.1,
    target: 45.0,
    reason: "Underweight position, good accumulation opportunity",
  },
  {
    action: "hold",
    asset: "ADA",
    current: 5.1,
    target: 5.0,
    reason: "Near target allocation",
  },
]

export default function PortfolioPage() {
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [timeframe, setTimeframe] = useState("1M")
  const [selectedTab, setSelectedTab] = useState("overview")

  const formatCurrency = (amount) => {
    return balanceVisible ? `$${amount.toLocaleString()}` : "••••••"
  }

  const formatPercent = (percent) => {
    return `${percent > 0 ? "+" : ""}${percent.toFixed(2)}%`
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio</h1>
            <p className="text-muted-foreground">Track and analyze your investment performance</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Button variant="ghost" size="sm" onClick={() => setBalanceVisible(!balanceVisible)} className="rounded-xl">
              {balanceVisible ? <Eye className="w-4 h-4 mr-2" /> : <EyeOff className="w-4 h-4 mr-2" />}
              {balanceVisible ? "Hide" : "Show"} Balance
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-2 border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Total Portfolio Value
                <Select value={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger className="w-20 h-8 rounded-xl border-border/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1D">1D</SelectItem>
                    <SelectItem value="1W">1W</SelectItem>
                    <SelectItem value="1M">1M</SelectItem>
                    <SelectItem value="3M">3M</SelectItem>
                    <SelectItem value="1Y">1Y</SelectItem>
                  </SelectContent>
                </Select>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-foreground">{formatCurrency(portfolioData.totalValue)}</div>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge
                      variant={portfolioData.totalChangePercent > 0 ? "default" : "destructive"}
                      className="rounded-full"
                    >
                      {portfolioData.totalChangePercent > 0 ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {formatPercent(portfolioData.totalChangePercent)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {formatCurrency(Math.abs(portfolioData.totalChange))} all time
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">24h</div>
                    <div
                      className={`font-semibold ${portfolioData.dayChangePercent > 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {formatPercent(portfolioData.dayChangePercent)}
                    </div>
                    <div className="text-xs text-muted-foreground">{formatCurrency(portfolioData.dayChange)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">7d</div>
                    <div
                      className={`font-semibold ${portfolioData.weekChangePercent > 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {formatPercent(portfolioData.weekChangePercent)}
                    </div>
                    <div className="text-xs text-muted-foreground">{formatCurrency(portfolioData.weekChange)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">30d</div>
                    <div
                      className={`font-semibold ${portfolioData.monthChangePercent > 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {formatPercent(portfolioData.monthChangePercent)}
                    </div>
                    <div className="text-xs text-muted-foreground">{formatCurrency(portfolioData.monthChange)}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Performer</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">ETH</div>
              <p className="text-xs text-green-500 mt-1">+6.61% P&L</p>
              <p className="text-xs text-muted-foreground">{formatCurrency(1876.54)} profit</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Worst Performer</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">ADA</div>
              <p className="text-xs text-red-500 mt-1">-11.89% P&L</p>
              <p className="text-xs text-muted-foreground">{formatCurrency(316.5)} loss</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 rounded-xl">
            <TabsTrigger value="overview" className="rounded-xl">
              Overview
            </TabsTrigger>
            <TabsTrigger value="holdings" className="rounded-xl">
              Holdings
            </TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-xl">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="rebalance" className="rounded-xl">
              Rebalance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Portfolio Allocation */}
              <Card className="xl:col-span-2 border-0 shadow-lg bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="w-5 h-5 mr-2" />
                    Portfolio Allocation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {holdings.map((holding, index) => (
                      <motion.div
                        key={holding.symbol}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-xl bg-muted/30"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-bold text-primary">{holding.icon}</span>
                          </div>
                          <div>
                            <div className="font-semibold">{holding.symbol}</div>
                            <div className="text-sm text-muted-foreground">{holding.name}</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-semibold">{holding.allocation}%</div>
                          <div className="text-sm text-muted-foreground">{formatCurrency(holding.value)}</div>
                        </div>

                        <div className="w-24 bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${holding.allocation}%` }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sharpe Ratio</span>
                      <span className="font-semibold">{performanceMetrics.sharpeRatio}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Max Drawdown</span>
                      <span className="font-semibold text-red-500">{performanceMetrics.maxDrawdown}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Volatility</span>
                      <span className="font-semibold">{performanceMetrics.volatility}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Win Rate</span>
                      <span className="font-semibold text-green-500">{performanceMetrics.winRate}%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      <Button className="gradient-primary hover:opacity-90 text-white rounded-xl">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Position
                      </Button>
                      <Button variant="outline" className="rounded-xl border-border/50 bg-transparent">
                        <Target className="w-4 h-4 mr-2" />
                        Rebalance
                      </Button>
                      <Button variant="outline" className="rounded-xl border-border/50 bg-transparent">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Analyze
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="holdings" className="space-y-6">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Your Holdings</CardTitle>
                <CardDescription>Detailed breakdown of your cryptocurrency positions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {holdings.map((holding, index) => (
                    <motion.div
                      key={holding.symbol}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-lg font-bold text-primary">{holding.icon}</span>
                          </div>
                          <div>
                            <div className="text-xl font-semibold">{holding.symbol}</div>
                            <div className="text-muted-foreground">{holding.name}</div>
                          </div>
                        </div>
                        <Badge variant={holding.pnlPercent > 0 ? "default" : "destructive"} className="rounded-full">
                          {holding.pnlPercent > 0 ? (
                            <TrendingUp className="w-3 h-3 mr-1" />
                          ) : (
                            <TrendingDown className="w-3 h-3 mr-1" />
                          )}
                          {formatPercent(holding.pnlPercent)}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Holdings</div>
                          <div className="font-semibold">
                            {holding.amount} {holding.symbol}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Current Value</div>
                          <div className="font-semibold">{formatCurrency(holding.value)}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Avg Buy Price</div>
                          <div className="font-semibold">${holding.avgBuyPrice.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Current Price</div>
                          <div className="font-semibold">${holding.currentPrice.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">P&L</div>
                          <div className={`font-semibold ${holding.pnl > 0 ? "text-green-500" : "text-red-500"}`}>
                            {formatCurrency(Math.abs(holding.pnl))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Risk Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Portfolio Beta</span>
                      <span className="font-semibold">{performanceMetrics.beta}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Alpha</span>
                      <span className="font-semibold text-green-500">+{performanceMetrics.alpha}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Volatility</span>
                      <span className="font-semibold">{performanceMetrics.volatility}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Max Drawdown</span>
                      <span className="font-semibold text-red-500">{performanceMetrics.maxDrawdown}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Diversification Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">7.2</div>
                    <div className="text-sm text-muted-foreground mb-4">Out of 10</div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: "72%" }} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Good diversification. Consider adding more altcoins for better risk distribution.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rebalance" className="space-y-6">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Rebalancing Recommendations
                </CardTitle>
                <CardDescription>Optimize your portfolio allocation based on your targets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rebalanceRecommendations.map((rec, index) => (
                    <motion.div
                      key={rec.asset}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-muted/30 border border-border/50"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              rec.action === "reduce"
                                ? "bg-red-500/10"
                                : rec.action === "increase"
                                  ? "bg-green-500/10"
                                  : "bg-blue-500/10"
                            }`}
                          >
                            {rec.action === "reduce" ? (
                              <TrendingDown className="w-4 h-4 text-red-500" />
                            ) : rec.action === "increase" ? (
                              <TrendingUp className="w-4 h-4 text-green-500" />
                            ) : (
                              <AlertTriangle className="w-4 h-4 text-blue-500" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold capitalize">
                              {rec.action} {rec.asset}
                            </div>
                            <div className="text-sm text-muted-foreground">{rec.reason}</div>
                          </div>
                        </div>
                        <Badge
                          variant={
                            rec.action === "reduce"
                              ? "destructive"
                              : rec.action === "increase"
                                ? "default"
                                : "secondary"
                          }
                          className="rounded-full"
                        >
                          {rec.current}% → {rec.target}%
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <Button className="w-full gradient-primary hover:opacity-90 text-white font-semibold rounded-xl">
                    Execute Rebalancing
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Search, Star, StarOff, BarChart3, Activity, Filter } from "lucide-react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"

// Mock market data
const marketData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 43210.5,
    change24h: 2.34,
    volume24h: 1200000000,
    marketCap: 850000000000,
    high24h: 44000,
    low24h: 42500,
    icon: "₿",
    rank: 1,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 2345.67,
    change24h: -1.45,
    volume24h: 890000000,
    marketCap: 280000000000,
    high24h: 2400,
    low24h: 2300,
    icon: "Ξ",
    rank: 2,
  },
  {
    symbol: "BNB",
    name: "BNB",
    price: 312.45,
    change24h: 3.21,
    volume24h: 456000000,
    marketCap: 48000000000,
    high24h: 320,
    low24h: 305,
    icon: "⬡",
    rank: 3,
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: 0.4567,
    change24h: 5.67,
    volume24h: 234000000,
    marketCap: 16000000000,
    high24h: 0.48,
    low24h: 0.44,
    icon: "₳",
    rank: 4,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 98.76,
    change24h: -3.21,
    volume24h: 156000000,
    marketCap: 42000000000,
    high24h: 102,
    low24h: 96,
    icon: "◎",
    rank: 5,
  },
  {
    symbol: "XRP",
    name: "XRP",
    price: 0.6234,
    change24h: 1.89,
    volume24h: 789000000,
    marketCap: 34000000000,
    high24h: 0.65,
    low24h: 0.61,
    icon: "✕",
    rank: 6,
  },
]

const marketStats = {
  totalMarketCap: 1750000000000,
  totalVolume24h: 45000000000,
  btcDominance: 48.5,
  ethDominance: 16.2,
  defiTvl: 89000000000,
  fearGreedIndex: 72,
}

const topGainers = [
  { symbol: "DOGE", change: 15.67, price: 0.0823 },
  { symbol: "SHIB", change: 12.34, price: 0.000009876 },
  { symbol: "MATIC", change: 8.91, price: 0.8765 },
]

const topLosers = [
  { symbol: "LUNA", change: -8.45, price: 0.5432 },
  { symbol: "AVAX", change: -6.78, price: 23.45 },
  { symbol: "DOT", change: -5.23, price: 6.789 },
]

export default function MarketsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("marketCap")
  const [favorites, setFavorites] = useState(["BTC", "ETH"])
  const [selectedCategory, setSelectedCategory] = useState("all")

  const toggleFavorite = (symbol) => {
    setFavorites((prev) => (prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]))
  }

  const filteredMarketData = marketData
    .filter((coin) => {
      const matchesSearch =
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedCategory === "all" || (selectedCategory === "favorites" && favorites.includes(coin.symbol))
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "marketCap":
          return b.marketCap - a.marketCap
        case "volume":
          return b.volume24h - a.volume24h
        case "price":
          return b.price - a.price
        case "change":
          return b.change24h - a.change24h
        default:
          return a.rank - b.rank
      }
    })

  const formatNumber = (num) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`
    return `$${num.toFixed(2)}`
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Markets</h1>
            <p className="text-muted-foreground">Track cryptocurrency prices and market trends</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
              <Activity className="w-4 h-4 mr-2" />
              Live Data
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </div>
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Market Cap</div>
              <div className="text-lg font-bold">{formatNumber(marketStats.totalMarketCap)}</div>
              <div className="text-xs text-green-500">+2.34%</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">24h Volume</div>
              <div className="text-lg font-bold">{formatNumber(marketStats.totalVolume24h)}</div>
              <div className="text-xs text-red-500">-1.23%</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">BTC Dominance</div>
              <div className="text-lg font-bold">{marketStats.btcDominance}%</div>
              <div className="text-xs text-green-500">+0.45%</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">ETH Dominance</div>
              <div className="text-lg font-bold">{marketStats.ethDominance}%</div>
              <div className="text-xs text-red-500">-0.12%</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">DeFi TVL</div>
              <div className="text-lg font-bold">{formatNumber(marketStats.defiTvl)}</div>
              <div className="text-xs text-green-500">+3.21%</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Fear & Greed</div>
              <div className="text-lg font-bold">{marketStats.fearGreedIndex}</div>
              <div className="text-xs text-green-500">Greed</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Market Table */}
          <div className="xl:col-span-3">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <CardTitle>Cryptocurrency Prices</CardTitle>
                  <div className="flex items-center space-x-2 mt-4 lg:mt-0">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search coins..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-48 rounded-xl border-border/50"
                      />
                    </div>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-32 rounded-xl border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="favorites">Favorites</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-40 rounded-xl border-border/50">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marketCap">Market Cap</SelectItem>
                        <SelectItem value="volume">Volume</SelectItem>
                        <SelectItem value="price">Price</SelectItem>
                        <SelectItem value="change">24h Change</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-4 text-sm text-muted-foreground border-b border-border/50 pb-2">
                    <div className="col-span-1">#</div>
                    <div className="col-span-3">Name</div>
                    <div className="col-span-2">Price</div>
                    <div className="col-span-2">24h Change</div>
                    <div className="col-span-2">Market Cap</div>
                    <div className="col-span-2">Volume</div>
                  </div>

                  {/* Table Rows */}
                  {filteredMarketData.map((coin, index) => (
                    <motion.div
                      key={coin.symbol}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="grid grid-cols-12 gap-4 items-center py-3 px-2 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer"
                    >
                      <div className="col-span-1">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleFavorite(coin.symbol)}
                            className="p-1 h-auto"
                          >
                            {favorites.includes(coin.symbol) ? (
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ) : (
                              <StarOff className="w-3 h-3" />
                            )}
                          </Button>
                          <span className="text-sm text-muted-foreground">{coin.rank}</span>
                        </div>
                      </div>

                      <div className="col-span-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-bold text-primary">{coin.icon}</span>
                          </div>
                          <div>
                            <div className="font-semibold">{coin.symbol}</div>
                            <div className="text-sm text-muted-foreground">{coin.name}</div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-2">
                        <div className="font-semibold">${coin.price.toLocaleString()}</div>
                      </div>

                      <div className="col-span-2">
                        <Badge variant={coin.change24h > 0 ? "default" : "destructive"} className="rounded-full">
                          {coin.change24h > 0 ? (
                            <TrendingUp className="w-3 h-3 mr-1" />
                          ) : (
                            <TrendingDown className="w-3 h-3 mr-1" />
                          )}
                          {coin.change24h > 0 ? "+" : ""}
                          {coin.change24h.toFixed(2)}%
                        </Badge>
                      </div>

                      <div className="col-span-2">
                        <div className="text-sm">{formatNumber(coin.marketCap)}</div>
                      </div>

                      <div className="col-span-2">
                        <div className="text-sm">{formatNumber(coin.volume24h)}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Gainers */}
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-lg">Top Gainers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topGainers.map((coin, index) => (
                    <motion.div
                      key={coin.symbol}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-colors cursor-pointer"
                    >
                      <div>
                        <div className="font-semibold">{coin.symbol}</div>
                        <div className="text-sm text-muted-foreground">${coin.price}</div>
                      </div>
                      <Badge className="bg-green-500 text-white rounded-full">
                        <TrendingUp className="w-3 h-3 mr-1" />+{coin.change}%
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Losers */}
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-lg">Top Losers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topLosers.map((coin, index) => (
                    <motion.div
                      key={coin.symbol}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-colors cursor-pointer"
                    >
                      <div>
                        <div className="font-semibold">{coin.symbol}</div>
                        <div className="text-sm text-muted-foreground">${coin.price}</div>
                      </div>
                      <Badge variant="destructive" className="rounded-full">
                        <TrendingDown className="w-3 h-3 mr-1" />
                        {coin.change}%
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Analysis */}
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-lg">Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-blue-500/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="font-semibold">Bullish Trend</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Market showing strong upward momentum with increased institutional adoption.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Market Sentiment:</span>
                      <span className="text-green-500 font-medium">Positive</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Volatility Index:</span>
                      <span className="text-yellow-500 font-medium">Medium</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Support Level:</span>
                      <span className="font-medium">$42,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Resistance Level:</span>
                      <span className="font-medium">$45,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

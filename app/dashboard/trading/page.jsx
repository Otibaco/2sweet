"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Volume2, DollarSign, ArrowUpDown, MoreHorizontal, Star, StarOff } from "lucide-react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"
import { BarChart3 } from "lucide-react" // Import BarChart3

// Mock data
const tradingPairs = [
  { symbol: "BTC/USDT", price: 43210.5, change: 2.34, volume: "1.2B", high: 44000, low: 42500 },
  { symbol: "ETH/USDT", price: 2345.67, change: -1.45, volume: "890M", high: 2400, low: 2300 },
  { symbol: "ADA/USDT", price: 0.4567, change: 5.67, volume: "234M", high: 0.48, low: 0.44 },
  { symbol: "SOL/USDT", price: 98.76, change: -3.21, volume: "156M", high: 102, low: 96 },
]

const orderBookData = {
  asks: [
    { price: 43215.5, amount: 0.1234, total: 5.33 },
    { price: 43220.0, amount: 0.2456, total: 10.61 },
    { price: 43225.5, amount: 0.3678, total: 15.9 },
    { price: 43230.0, amount: 0.489, total: 21.14 },
    { price: 43235.5, amount: 0.5123, total: 22.15 },
  ],
  bids: [
    { price: 43210.0, amount: 0.1567, total: 6.77 },
    { price: 43205.5, amount: 0.2789, total: 12.05 },
    { price: 43200.0, amount: 0.3456, total: 14.93 },
    { price: 43195.5, amount: 0.4123, total: 17.81 },
    { price: 43190.0, amount: 0.5234, total: 22.6 },
  ],
}

const recentTrades = [
  { price: 43210.5, amount: 0.1234, time: "14:32:15", type: "buy" },
  { price: 43208.0, amount: 0.2456, time: "14:32:10", type: "sell" },
  { price: 43212.5, amount: 0.0987, time: "14:32:05", type: "buy" },
  { price: 43205.0, amount: 0.3456, time: "14:32:00", type: "sell" },
  { price: 43215.0, amount: 0.1789, time: "14:31:55", type: "buy" },
]

export default function TradingPage() {
  const [selectedPair, setSelectedPair] = useState("BTC/USDT")
  const [orderType, setOrderType] = useState("market")
  const [tradeType, setTradeType] = useState("buy")
  const [amount, setAmount] = useState("")
  const [price, setPrice] = useState("")
  const [favorites, setFavorites] = useState(["BTC/USDT", "ETH/USDT"])

  const selectedPairData = tradingPairs.find((pair) => pair.symbol === selectedPair) || tradingPairs[0]

  const toggleFavorite = (symbol) => {
    setFavorites((prev) => (prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]))
  }

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 space-y-6">
        {/* Trading Pair Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left: Pair Selector + Badge + Favorite */}
          <div className="flex items-center gap-3">
            <Select value={selectedPair} onValueChange={setSelectedPair}>
              <SelectTrigger className="w-44 sm:w-56 h-12 rounded-xl border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {tradingPairs.map((pair) => (
                  <SelectItem
                    key={pair.symbol}
                    value={pair.symbol}
                    className="flex items-center justify-between w-full"
                  >
                    <span className="flex-1">{pair.symbol}</span>
                    <Badge
                      variant={pair.change > 0 ? "default" : "destructive"}
                      className="ml-2 rounded-full shrink-0"
                    >
                      {pair.change > 0 ? "+" : ""}
                      {pair.change}%
                    </Badge>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleFavorite(selectedPair)}
              className="rounded-xl"
            >
              {favorites.includes(selectedPair) ? (
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ) : (
                <StarOff className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Right: Price + Info */}
          <div className="flex flex-col sm:items-end gap-3">
            {/* Price + Badge */}
            <div className="flex items-center gap-3">
              <div className="text-xl sm:text-2xl font-bold">
                ${selectedPairData.price.toLocaleString()}
              </div>
              <Badge
                variant={selectedPairData.change > 0 ? "default" : "destructive"}
                className="rounded-full"
              >
                {selectedPairData.change > 0 ? (
                  <TrendingUp className="w-3 h-3 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-1" />
                )}
                {selectedPairData.change > 0 ? "+" : ""}
                {selectedPairData.change}%
              </Badge>
            </div>

            {/* 24h Info */}
            <div className="flex flex-col items-start sm:items-end text-sm text-muted-foreground space-y-1">
              <div>
                24h High:{" "}
                <span className="text-foreground">
                  ${selectedPairData.high.toLocaleString()}
                </span>
              </div>
              <div>
                24h Low:{" "}
                <span className="text-foreground">
                  ${selectedPairData.low.toLocaleString()}
                </span>
              </div>
              <div>
                Volume:{" "}
                <span className="text-foreground">{selectedPairData.volume}</span>
              </div>
            </div>
          </div>
        </div>



        {/* Main Trading Interface */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Chart Area */}
          <div className="xl:col-span-3">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl h-[400px] sm:h-[500px] xl:h-[600px]">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <CardTitle>Price Chart</CardTitle>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                    1m
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                    15m
                  </Button>
                  <Button size="sm" className="rounded-xl gradient-primary text-white">
                    1h
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                    4h
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                    1d
                  </Button>

                </div>
              </CardHeader>
              <CardContent className="h-full">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center">
                  <div className="text-center px-4">
                    <BarChart3 className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Advanced Trading Chart</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      TradingView integration would go here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trading Panel */}
          <div className="space-y-6">
            {/* Buy/Sell Form */}
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <Tabs value={tradeType} onValueChange={setTradeType} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 rounded-xl">
                    <TabsTrigger
                      value="buy"
                      className="rounded-xl data-[state=active]:bg-green-500 data-[state=active]:text-white"
                    >
                      Buy
                    </TabsTrigger>
                    <TabsTrigger
                      value="sell"
                      className="rounded-xl data-[state=active]:bg-red-500 data-[state=active]:text-white"
                    >
                      Sell
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm">Order Type</Label>
                  <Select value={orderType} onValueChange={setOrderType}>
                    <SelectTrigger className="rounded-xl border-border/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="market">Market</SelectItem>
                      <SelectItem value="limit">Limit</SelectItem>
                      <SelectItem value="stop">Stop</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {orderType === "limit" && (
                  <div className="space-y-2">
                    <Label className="text-sm">Price (USDT)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        type="number"
                        placeholder="0.00"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="pl-10 rounded-xl border-border/50"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="text-sm">Amount (BTC)</Label>
                  <div className="relative">
                    <Volume2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-10 rounded-xl border-border/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {["25%", "50%", "75%", "100%"].map((percent) => (
                    <Button
                      key={percent}
                      variant="outline"
                      size="sm"
                      className="rounded-xl border-border/50 bg-transparent"
                    >
                      {percent}
                    </Button>
                  ))}
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Available:</span>
                    <span>12,345.67 USDT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total:</span>
                    <span>0.00 USDT</span>
                  </div>
                </div>

                <Button
                  className={`w-full h-12 rounded-xl font-semibold ${tradeType === "buy"
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-red-500 hover:bg-red-600 text-white"
                    }`}
                >
                  {tradeType === "buy" ? "Buy" : "Sell"} BTC
                </Button>
              </CardContent>
            </Card>

            {/* Account Balance */}
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Account Balance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">BTC</span>
                  <span className="font-semibold">0.5432</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">USDT</span>
                  <span className="font-semibold">12,345.67</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">ETH</span>
                  <span className="font-semibold">12.8765</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Order Book and Recent Trades */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Order Book */}
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Order Book
                <Button variant="ghost" size="sm" className="rounded-xl">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Asks */}
                <div>
                  <div className="hidden sm:flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Price (USDT)</span>
                    <span>Amount (BTC)</span>
                    <span>Total</span>
                  </div>
                  <div className="space-y-1">
                    {orderBookData.asks.reverse().map((ask, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex justify-between text-sm py-1 px-2 rounded hover:bg-red-500/10 cursor-pointer"
                      >
                        <span className="text-red-500">{ask.price.toLocaleString()}</span>
                        <span>{ask.amount}</span>
                        <span className="text-muted-foreground">{ask.total}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Spread */}
                <div className="flex items-center justify-center py-2 border-y border-border/50">
                  <span className="text-base sm:text-lg font-bold">
                    {selectedPairData.price.toLocaleString()}
                  </span>
                  <ArrowUpDown className="w-4 h-4 ml-2 text-muted-foreground" />
                </div>

                {/* Bids */}
                <div>
                  <div className="space-y-1">
                    {orderBookData.bids.map((bid, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex justify-between text-sm py-1 px-2 rounded hover:bg-green-500/10 cursor-pointer"
                      >
                        <span className="text-green-500">{bid.price.toLocaleString()}</span>
                        <span>{bid.amount}</span>
                        <span className="text-muted-foreground">{bid.total}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Trades */}
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardHeader>
              <CardTitle>Recent Trades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {/* Table header only visible on larger screens */}
                <div className="hidden sm:flex justify-between text-xs text-muted-foreground mb-2">
                  <span>Price (USDT)</span>
                  <span>Amount (BTC)</span>
                  <span>Time</span>
                </div>

                {recentTrades.map((trade, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row sm:justify-between py-2 px-3 rounded hover:bg-muted/30"
                  >
                    {/* Mobile Layout: Price + Amount on first line */}
                    <div className="flex justify-between sm:justify-start sm:gap-8 w-full">
                      <span
                        className={`font-medium ${trade.type === "buy" ? "text-green-500" : "text-red-500"
                          }`}
                      >
                        {trade.price.toLocaleString()}
                      </span>
                      <span className="text-foreground">{trade.amount}</span>
                    </div>

                    {/* Time */}
                    <div className="text-xs text-muted-foreground mt-1 sm:mt-0 sm:text-right">
                      {trade.time}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </DashboardLayout>

  )
}

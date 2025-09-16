"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowUpRight,
  ArrowDownLeft,
  Copy,
  QrCode,
  Eye,
  EyeOff,
  Filter,
  Download,
  Search,
  Wallet,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"

// Mock data
const walletBalances = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    balance: 0.5432,
    usdValue: 23456.78,
    address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    icon: "₿",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: 12.8765,
    usdValue: 18765.43,
    address: "0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4",
    icon: "Ξ",
  },
  {
    symbol: "USDT",
    name: "Tether",
    balance: 15432.67,
    usdValue: 15432.67,
    address: "0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4",
    icon: "₮",
  },
  {
    symbol: "ADA",
    name: "Cardano",
    balance: 5000,
    usdValue: 2345.67,
    address: "addr1qxy2lpan99fcnhhyqjvsua6h6jm99v842rf6",
    icon: "₳",
  },
]

const transactionHistory = [
  {
    id: "tx001",
    type: "deposit",
    asset: "BTC",
    amount: 0.1234,
    usdValue: 5432.1,
    status: "completed",
    date: "2024-01-15",
    time: "14:32:15",
    txHash: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
    fee: 0.0001,
    confirmations: 6,
  },
  {
    id: "tx002",
    type: "withdraw",
    asset: "ETH",
    amount: 2.5,
    usdValue: 3456.78,
    status: "pending",
    date: "2024-01-15",
    time: "12:15:30",
    txHash: "b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0a1",
    fee: 0.005,
    confirmations: 2,
  },
  {
    id: "tx003",
    type: "deposit",
    asset: "USDT",
    amount: 10000,
    usdValue: 10000,
    status: "completed",
    date: "2024-01-14",
    time: "09:45:22",
    txHash: "c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0a1b2",
    fee: 1.0,
    confirmations: 12,
  },
  {
    id: "tx004",
    type: "withdraw",
    asset: "ADA",
    amount: 1000,
    usdValue: 456.78,
    status: "failed",
    date: "2024-01-14",
    time: "16:20:45",
    txHash: "d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0a1b2c3",
    fee: 0.17,
    confirmations: 0,
  },
]

export default function WalletPage() {
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [selectedAsset, setSelectedAsset] = useState("BTC")
  const [depositAmount, setDepositAmount] = useState("")
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [withdrawAddress, setWithdrawAddress] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const selectedAssetData = walletBalances.find((asset) => asset.symbol === selectedAsset) || walletBalances[0]
  const totalUsdValue = walletBalances.reduce((sum, asset) => sum + asset.usdValue, 0)

  const filteredTransactions = transactionHistory.filter((tx) => {
    const matchesSearch =
      tx.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.txHash.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || tx.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    // In a real app, you'd show a toast notification here
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "failed":
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "failed":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <DashboardLayout>
      <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Wallet Overview */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
              Wallet
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Manage your crypto assets and transactions
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setBalanceVisible(!balanceVisible)}
              className="rounded-xl"
            >
              {balanceVisible ? (
                <Eye className="w-4 h-4 mr-2" />
              ) : (
                <EyeOff className="w-4 h-4 mr-2" />
              )}
              {balanceVisible ? "Hide" : "Show"} Balance
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl bg-transparent"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Total Balance */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
              Total Portfolio Value
              <Wallet className="w-5 h-5 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {balanceVisible ? `$${totalUsdValue.toLocaleString()}` : "••••••••"}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {walletBalances.map((asset, index) => (
                <motion.div
                  key={asset.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold text-primary">
                      {asset.icon}
                    </span>
                    <span className="font-semibold">{asset.symbol}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {balanceVisible ? asset.balance : "••••••"} {asset.symbol}
                  </div>
                  <div className="text-sm font-medium">
                    {balanceVisible
                      ? `$${asset.usdValue.toLocaleString()}`
                      : "••••••"}
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Deposit/Withdraw */}
          <div className="xl:col-span-1">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  Deposit & Withdraw
                </CardTitle>
                <CardDescription>Manage your crypto assets</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="deposit" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 rounded-xl">
                    <TabsTrigger value="deposit" className="rounded-xl">
                      <ArrowDownLeft className="w-4 h-4 mr-2" />
                      Deposit
                    </TabsTrigger>
                    <TabsTrigger value="withdraw" className="rounded-xl">
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Withdraw
                    </TabsTrigger>
                  </TabsList>

                  {/* Deposit */}
                  <TabsContent value="deposit" className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm">Select Asset</Label>
                      <Select value={selectedAsset} onValueChange={setSelectedAsset}>
                        <SelectTrigger className="rounded-xl border-border/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {walletBalances.map((asset) => (
                            <SelectItem key={asset.symbol} value={asset.symbol}>
                              <div className="flex items-center space-x-2">
                                <span>{asset.icon}</span>
                                <span>{asset.symbol}</span>
                                <span className="text-muted-foreground">
                                  - {asset.name}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="p-4 rounded-xl bg-muted/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          Deposit Address
                        </span>
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(selectedAssetData.address)
                            }
                            className="rounded-xl"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="rounded-xl">
                            <QrCode className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground break-all">
                        {selectedAssetData.address}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                        <div className="text-xs text-yellow-600 dark:text-yellow-400">
                          <p className="font-medium mb-1">Important Notice:</p>
                          <p>
                            Only send {selectedAsset} to this address. Sending
                            other assets may result in permanent loss.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm">Expected Amount (Optional)</Label>
                      <Input
                        type="number"
                        placeholder={`0.00 ${selectedAsset}`}
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                        className="rounded-xl border-border/50"
                      />
                    </div>
                  </TabsContent>

                  {/* Withdraw */}
                  <TabsContent value="withdraw" className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm">Withdrawal Address</Label>
                      <Input
                        type="text"
                        placeholder="Enter recipient address"
                        value={withdrawAddress}
                        onChange={(e) => setWithdrawAddress(e.target.value)}
                        className="rounded-xl border-border/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm">Amount</Label>
                      <div className="relative">
                        <Input
                          type="number"
                          placeholder={`0.00 ${selectedAsset}`}
                          value={withdrawAmount}
                          onChange={(e) => setWithdrawAmount(e.target.value)}
                          className="rounded-xl border-border/50 pr-16"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-xs"
                        >
                          MAX
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Available: {selectedAssetData.balance} {selectedAsset}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-muted/30">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Network Fee:</span>
                        <span>0.0001 {selectedAsset}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">You'll receive:</span>
                        <span className="font-medium">
                          {withdrawAmount
                            ? (
                              Number.parseFloat(withdrawAmount) - 0.0001
                            ).toFixed(4)
                            : "0.0000"}{" "}
                          {selectedAsset}
                        </span>
                      </div>
                    </div>

                    <Button
                      className="w-full h-12 gradient-primary hover:opacity-90 text-white font-semibold rounded-xl"
                      disabled={!withdrawAddress || !withdrawAmount}
                    >
                      Withdraw {selectedAsset}
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Transaction History */}
          <div className="xl:col-span-2">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  {/* Title */}
                  <div className="text-center sm:text-left">
                    <CardTitle className="text-lg sm:text-xl">Transaction History</CardTitle>
                    <CardDescription>Your recent deposits and withdrawals</CardDescription>
                  </div>

                  {/* Filters */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
                    <div className="relative w-full sm:w-48">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search transactions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full rounded-xl border-border/50"
                      />
                    </div>

                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full sm:w-32 rounded-xl border-border/50">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {filteredTransactions.map((tx, index) => (
                    <motion.div
                      key={tx.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      {/* Main Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Left: Type & Asset */}
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === "deposit" ? "bg-green-500/10" : "bg-red-500/10"
                              }`}
                          >
                            {tx.type === "deposit" ? (
                              <ArrowDownLeft className="w-5 h-5 text-green-500" />
                            ) : (
                              <ArrowUpRight className="w-5 h-5 text-red-500" />
                            )}
                          </div>
                          <div className="text-left">
                            <div className="font-semibold capitalize">
                              {tx.type} {tx.asset}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {tx.date} at {tx.time}
                            </div>
                          </div>
                        </div>

                        {/* Middle: Amount */}
                        <div className="text-left sm:text-right">
                          <div className="font-semibold">
                            {tx.type === "deposit" ? "+" : "-"}
                            {tx.amount} {tx.asset}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ${tx.usdValue.toLocaleString()}
                          </div>
                        </div>

                        {/* Right: Status */}
                        <div className="flex items-center gap-2 justify-start sm:justify-end">
                          <Badge className={`rounded-full border ${getStatusColor(tx.status)}`}>
                            {getStatusIcon(tx.status)}
                            <span className="ml-1 capitalize">{tx.status}</span>
                          </Badge>
                          <Button variant="ghost" size="sm" className="rounded-xl">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Extra Details */}
                      <div className="mt-3 pt-3 border-t border-border/50">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                          <div>
                            <span className="text-muted-foreground">Transaction Hash:</span>
                            <div className="font-mono truncate">{tx.txHash}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Network Fee:</span>
                            <div>{tx.fee} {tx.asset}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Confirmations:</span>
                            <div>{tx.confirmations}/12</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Status:</span>
                            <div className="capitalize">{tx.status}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {filteredTransactions.length === 0 && (
                  <div className="text-center py-12">
                    <Wallet className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No transactions found</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </DashboardLayout>


  )
}

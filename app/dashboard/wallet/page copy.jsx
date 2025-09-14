"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Shield,
  Bell,
  Palette,
  Globe,
  Smartphone,
  Key,
  Eye,
  EyeOff,
  Camera,
  Save,
  AlertTriangle,
  CheckCircle,
  Download,
  Upload,
} from "lucide-react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"

// Mock user data
const userData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  country: "United States",
  timezone: "America/New_York",
  avatar: "/placeholder.svg?height=100&width=100",
  verified: true,
  kycStatus: "verified",
  twoFactorEnabled: true,
  emailNotifications: true,
  pushNotifications: false,
  tradingNotifications: true,
  theme: "system",
  language: "en",
  currency: "USD",
}

const securityLogs = [
  {
    id: 1,
    action: "Login",
    device: "Chrome on Windows",
    location: "New York, US",
    timestamp: "2024-01-15 14:32:15",
    status: "success",
  },
  {
    id: 2,
    action: "Password Change",
    device: "Mobile App",
    location: "New York, US",
    timestamp: "2024-01-14 09:15:22",
    status: "success",
  },
  {
    id: 3,
    action: "Failed Login",
    device: "Unknown Device",
    location: "Unknown Location",
    timestamp: "2024-01-13 23:45:10",
    status: "failed",
  },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    phone: userData.phone,
    country: userData.country,
    timezone: userData.timezone,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    emailNotifications: userData.emailNotifications,
    pushNotifications: userData.pushNotifications,
    tradingNotifications: userData.tradingNotifications,
    theme: userData.theme,
    language: userData.language,
    currency: userData.currency,
  })

  const handleSave = async (section) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    // Show success message
  }

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 rounded-xl">
            <TabsTrigger value="profile" className="rounded-xl">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="security" className="rounded-xl">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="notifications" className="rounded-xl">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="preferences" className="rounded-xl">
              <Palette className="w-4 h-4 mr-2" />
              Preferences
            </TabsTrigger>
            <TabsTrigger value="privacy" className="rounded-xl">
              <Eye className="w-4 h-4 mr-2" />
              Privacy
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Profile Picture</CardTitle>
                  <CardDescription>Update your profile photo</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                      <User className="w-12 h-12 text-primary" />
                    </div>
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 gradient-primary text-white"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <Button variant="outline" size="sm" className="rounded-xl border-border/50 bg-transparent">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Photo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="xl:col-span-2 border-0 shadow-lg bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateFormData("firstName", e.target.value)}
                        className="rounded-xl border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        className="rounded-xl border-border/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="rounded-xl border-border/50"
                      />
                      {userData.verified && (
                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      className="rounded-xl border-border/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select value={formData.country} onValueChange={(value) => updateFormData("country", value)}>
                        <SelectTrigger className="rounded-xl border-border/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="United States">United States</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                          <SelectItem value="Germany">Germany</SelectItem>
                          <SelectItem value="France">France</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select value={formData.timezone} onValueChange={(value) => updateFormData("timezone", value)}>
                        <SelectTrigger className="rounded-xl border-border/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="America/New_York">Eastern Time</SelectItem>
                          <SelectItem value="America/Chicago">Central Time</SelectItem>
                          <SelectItem value="America/Denver">Mountain Time</SelectItem>
                          <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                          <SelectItem value="Europe/London">London</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleSave("profile")}
                    disabled={isLoading}
                    className="w-full gradient-primary hover:opacity-90 text-white font-semibold rounded-xl"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Saving...</span>
                      </div>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* KYC Status */}
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Verification Status</CardTitle>
                <CardDescription>Your account verification and KYC status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-semibold">Identity Verified</div>
                      <div className="text-sm text-muted-foreground">Your identity has been successfully verified</div>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white">Verified</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>Update your account password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showCurrentPassword ? "text" : "password"}
                        value={formData.currentPassword}
                        onChange={(e) => updateFormData("currentPassword", e.target.value)}
                        className="rounded-xl border-border/50 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      >
                        {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showNewPassword ? "text" : "password"}
                        value={formData.newPassword}
                        onChange={(e) => updateFormData("newPassword", e.target.value)}
                        className="rounded-xl border-border/50 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      >
                        {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                        className="rounded-xl border-border/50 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleSave("password")}
                    className="w-full gradient-primary hover:opacity-90 text-white font-semibold rounded-xl"
                  >
                    Update Password
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>Secure your account with 2FA</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-green-500" />
                      <div>
                        <div className="font-semibold">Authenticator App</div>
                        <div className="text-sm text-muted-foreground">Google Authenticator enabled</div>
                      </div>
                    </div>
                    <Switch checked={userData.twoFactorEnabled} />
                  </div>

                  <div className="space-y-3">
                    <Button variant="outline" className="w-full rounded-xl border-border/50 bg-transparent">
                      <Key className="w-4 h-4 mr-2" />
                      View Backup Codes
                    </Button>
                    <Button variant="outline" className="w-full rounded-xl border-border/50 bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Download Recovery Codes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Security Activity */}
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Recent Security Activity</CardTitle>
                <CardDescription>Monitor your account security events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {securityLogs.map((log, index) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/30"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            log.status === "success" ? "bg-green-500/10" : "bg-red-500/10"
                          }`}
                        >
                          {log.status === "success" ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <AlertTriangle className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                        <div>
                          <div className="font-semibold">{log.action}</div>
                          <div className="text-sm text-muted-foreground">
                            {log.device} • {log.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">{log.timestamp}</div>
                        <Badge variant={log.status === "success" ? "default" : "destructive"} className="rounded-full">
                          {log.status}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div className="flex items-center space-x-3">
                      <Bell className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold">Email Notifications</div>
                        <div className="text-sm text-muted-foreground">Receive notifications via email</div>
                      </div>
                    </div>
                    <Switch
                      checked={formData.emailNotifications}
                      onCheckedChange={(checked) => updateFormData("emailNotifications", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold">Push Notifications</div>
                        <div className="text-sm text-muted-foreground">Receive push notifications on mobile</div>
                      </div>
                    </div>
                    <Switch
                      checked={formData.pushNotifications}
                      onCheckedChange={(checked) => updateFormData("pushNotifications", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold">Trading Notifications</div>
                        <div className="text-sm text-muted-foreground">Get notified about trading activities</div>
                      </div>
                    </div>
                    <Switch
                      checked={formData.tradingNotifications}
                      onCheckedChange={(checked) => updateFormData("tradingNotifications", checked)}
                    />
                  </div>
                </div>

                <Button
                  onClick={() => handleSave("notifications")}
                  className="w-full gradient-primary hover:opacity-90 text-white font-semibold rounded-xl"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Notification Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Display Settings</CardTitle>
                  <CardDescription>Customize your interface</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select value={formData.theme} onValueChange={(value) => updateFormData("theme", value)}>
                      <SelectTrigger className="rounded-xl border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select value={formData.language} onValueChange={(value) => updateFormData("language", value)}>
                      <SelectTrigger className="rounded-xl border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="zh">Chinese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select value={formData.currency} onValueChange={(value) => updateFormData("currency", value)}>
                      <SelectTrigger className="rounded-xl border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD - US Dollar</SelectItem>
                        <SelectItem value="EUR">EUR - Euro</SelectItem>
                        <SelectItem value="GBP">GBP - British Pound</SelectItem>
                        <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                        <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Trading Preferences</CardTitle>
                  <CardDescription>Configure your trading settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div>
                      <div className="font-semibold">Advanced Trading</div>
                      <div className="text-sm text-muted-foreground">Enable advanced trading features</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div>
                      <div className="font-semibold">Price Alerts</div>
                      <div className="text-sm text-muted-foreground">Get notified of price changes</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div>
                      <div className="font-semibold">Auto-Refresh</div>
                      <div className="text-sm text-muted-foreground">Automatically refresh market data</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              onClick={() => handleSave("preferences")}
              className="w-full gradient-primary hover:opacity-90 text-white font-semibold rounded-xl"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Preferences
            </Button>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your privacy and data sharing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div>
                      <div className="font-semibold">Profile Visibility</div>
                      <div className="text-sm text-muted-foreground">Make your profile visible to other users</div>
                    </div>
                    <Switch defaultChecked={false} />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div>
                      <div className="font-semibold">Trading Activity</div>
                      <div className="text-sm text-muted-foreground">Share your trading activity publicly</div>
                    </div>
                    <Switch defaultChecked={false} />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div>
                      <div className="font-semibold">Analytics</div>
                      <div className="text-sm text-muted-foreground">Help improve our service with usage data</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full rounded-xl border-border/50 bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Download My Data
                    </Button>
                    <Button variant="destructive" className="w-full rounded-xl">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

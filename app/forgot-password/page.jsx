"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft, Mail, Lock, Eye, EyeOff, CheckCircle, Shield } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ForgotPasswordPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Form data
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const totalSteps = 4
  const stepTitles = ["Enter Email", "Verify Email", "New Password", "Success"]

  const handleNext = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return email.includes("@") && email.includes(".")
      case 2:
        return otp.every((digit) => digit !== "")
      case 3:
        return newPassword.length >= 8 && newPassword === confirmPassword
      default:
        return true
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Reset Your Password</h2>
              <p className="text-muted-foreground">Enter your email address and we'll send you a verification code</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 rounded-xl border-border/50 focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
              <p className="text-muted-foreground">
                We've sent a 6-digit code to <span className="font-medium text-foreground">{email}</span>
              </p>
            </div>

            <div className="space-y-4">
              <Label className="text-sm font-medium">Verification Code</Label>
              <div className="flex justify-center space-x-3">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-semibold rounded-xl border-border/50 focus:border-primary transition-colors"
                  />
                ))}
              </div>
              <div className="text-center">
                <button className="text-sm text-primary hover:underline">Didn't receive the code? Resend</button>
              </div>
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Create New Password</h2>
              <p className="text-muted-foreground">Choose a strong password to secure your account</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword" className="text-sm font-medium">
                  New Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 rounded-xl border-border/50 focus:border-primary transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 rounded-xl border-border/50 focus:border-primary transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="bg-muted/30 rounded-xl p-4 space-y-2">
                <p className="text-sm font-medium">Password must contain:</p>
                <div className="space-y-1 text-sm">
                  <div
                    className={`flex items-center space-x-2 ${newPassword.length >= 8 ? "text-green-600" : "text-muted-foreground"}`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${newPassword.length >= 8 ? "bg-green-600" : "bg-muted-foreground"}`}
                    />
                    <span>At least 8 characters</span>
                  </div>
                  <div
                    className={`flex items-center space-x-2 ${/[A-Z]/.test(newPassword) ? "text-green-600" : "text-muted-foreground"}`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${/[A-Z]/.test(newPassword) ? "bg-green-600" : "bg-muted-foreground"}`}
                    />
                    <span>One uppercase letter</span>
                  </div>
                  <div
                    className={`flex items-center space-x-2 ${/[0-9]/.test(newPassword) ? "text-green-600" : "text-muted-foreground"}`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${/[0-9]/.test(newPassword) ? "bg-green-600" : "bg-muted-foreground"}`}
                    />
                    <span>One number</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Password Reset Successful!</h2>
              <p className="text-muted-foreground mb-8">
                Your password has been successfully updated. You can now sign in with your new password.
              </p>
            </div>
            <Link href="/login">
              <Button className="w-full h-12 gradient-primary hover:opacity-90 text-white font-semibold rounded-xl shadow-lg">
                Continue to Sign In
              </Button>
            </Link>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Back to Login */}
        <Link
          href="/login"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Sign In
        </Link>

        <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-xl">
          <CardHeader className="text-center pb-4">
            {/* Step Indicators */}
            {currentStep < 4 && (
              <div className="flex justify-center space-x-2 mb-6">
                {Array.from({ length: totalSteps - 1 }, (_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i + 1 <= currentStep ? "bg-primary w-8" : "bg-muted w-2"
                    }`}
                  />
                ))}
              </div>
            )}

            {currentStep < 4 && (
              <div className="text-sm text-muted-foreground mb-2">
                Step {currentStep} of {totalSteps - 1}
              </div>
            )}
          </CardHeader>

          <CardContent>
            <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>

            {/* Action Buttons */}
            {currentStep < 4 && (
              <div className="mt-8 space-y-4">
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid() || isLoading}
                  className="w-full h-12 gradient-primary hover:opacity-90 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>
                        {currentStep === 1 && "Sending Code..."}
                        {currentStep === 2 && "Verifying..."}
                        {currentStep === 3 && "Updating Password..."}
                      </span>
                    </div>
                  ) : (
                    <>
                      {currentStep === 1 && "Send Verification Code"}
                      {currentStep === 2 && "Verify Code"}
                      {currentStep === 3 && "Update Password"}
                    </>
                  )}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

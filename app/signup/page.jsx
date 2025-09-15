"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Eye,
  EyeOff,
  ArrowLeft,
  Mail,
  Lock,
  User,
  Check,
  Phone,
  MapPin,
  Calendar,
  Upload,
  Camera,
  Shield,
  Globe,
  Clock,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const steps = [
  { id: 1, title: "Email", description: "Enter your email address" },
  { id: 2, title: "Verify Email", description: "Confirm your email with OTP" },
  { id: 3, title: "Phone", description: "Add your phone number" },
  { id: 4, title: "Verify Phone", description: "Confirm with SMS code" },
  { id: 5, title: "Profile", description: "Basic information" },
  { id: 6, title: "Identity", description: "Document verification" },
  { id: 7, title: "Address", description: "Residential details" },
]

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [otpCode, setOtpCode] = useState(["", "", "", "", "", ""])
  const [phoneOtpCode, setPhoneOtpCode] = useState(["", "", "", "", "", ""])

  const [emailTimer, setEmailTimer] = useState(0)
  const [phoneTimer, setPhoneTimer] = useState(0)
  const [canResendEmail, setCanResendEmail] = useState(false)
  const [canResendPhone, setCanResendPhone] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    emailVerified: false,
    phone: "",
    phoneVerified: false,
    password: "",
    confirmPassword: "",
    username: "",
    displayName: "",
    country: "",
    dateOfBirth: "",
    idDocument: null,
    selfiePhoto: null,
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    agreeToTerms: false,
  })

  useEffect(() => {
    let interval
    if (emailTimer > 0) {
      interval = setInterval(() => {
        setEmailTimer((prev) => {
          if (prev <= 1) {
            setCanResendEmail(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [emailTimer])

  useEffect(() => {
    let interval
    if (phoneTimer > 0) {
      interval = setInterval(() => {
        setPhoneTimer((prev) => {
          if (prev <= 1) {
            setCanResendPhone(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [phoneTimer])

  const handleNext = async () => {
    setIsLoading(true)
    // Simulate API calls
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)

    if (currentStep === 1) {
      setEmailTimer(180) // 3 minutes
      setCanResendEmail(false)
    } else if (currentStep === 3) {
      setPhoneTimer(180) // 3 minutes
      setCanResendPhone(false)
    }

    if (currentStep < 7) {
      setCurrentStep(currentStep + 1)
    } else {
      // Handle final signup
      console.log("Signup completed:", formData)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateFormData = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".")
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }
  }

  const handleOtpChange = (index, value, isPhone = false) => {
    if (value.length <= 1) {
      const newOtp = isPhone ? [...phoneOtpCode] : [...otpCode]
      newOtp[index] = value
      if (isPhone) {
        setPhoneOtpCode(newOtp)
      } else {
        setOtpCode(newOtp)
      }

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`${isPhone ? "phone-" : ""}otp-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleGoogleSignup = () => {
    // Handle Google OAuth signup
    console.log("Google signup initiated")
  }

  const handleResendEmail = () => {
    setEmailTimer(180)
    setCanResendEmail(false)
    setOtpCode(["", "", "", "", "", ""])
    console.log("Resending email OTP")
  }

  const handleResendPhone = () => {
    setPhoneTimer(180)
    setCanResendPhone(false)
    setPhoneOtpCode(["", "", "", "", "", ""])
    console.log("Resending phone OTP")
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.email && formData.email.includes("@")
      case 2:
        return otpCode.every((digit) => digit !== "")
      case 3:
        return formData.phone.length >= 10
      case 4:
        return phoneOtpCode.every((digit) => digit !== "")
      case 5:
        return (
          formData.username &&
          formData.displayName &&
          formData.country &&
          formData.dateOfBirth &&
          formData.password.length >= 8
        )
      case 6:
        return formData.idDocument && formData.selfiePhoto
      case 7:
        return formData.address.street && formData.address.city && formData.address.postalCode && formData.agreeToTerms
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4 py-6">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg relative z-10"
      >
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-xl">
          <CardHeader className="text-center pb-4 px-6 pt-6">
            <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
              <span className="text-white font-bold text-xl">2$</span>
            </div>
            <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              Join 2$weet and start trading cryptocurrencies securely
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-6">
            {/* Step Indicators - Mobile Optimized */}
            <div className="flex justify-center mb-6 overflow-x-auto">
              <div className="flex items-center space-x-2 min-w-max px-2">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                        currentStep > step.id
                          ? "bg-primary text-white"
                          : currentStep === step.id
                            ? "bg-primary text-white"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.id ? <Check className="w-3 h-3" /> : step.id}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-3 h-0.5 mx-1 transition-colors duration-300 ${
                          currentStep > step.id ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1: Email */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div className="text-center mb-5">
                    <h3 className="text-lg font-semibold">What's your email?</h3>
                    <p className="text-muted-foreground text-sm">We'll use this to create your account</p>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleGoogleSignup}
                    className="w-full h-11 rounded-xl relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-transparent"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="absolute inset-[1px] bg-card rounded-[11px]" />
                    <div className="relative flex items-center justify-center">
                      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        Continue with Google
                      </span>
                    </div>
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border/50" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
                    </div>
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
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="pl-10 h-11 rounded-xl border-border/50 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Email Verification */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div className="text-center mb-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Check your email</h3>
                    <p className="text-muted-foreground text-sm">
                      We sent a 6-digit code to <span className="font-medium">{formData.email}</span>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-sm font-medium">Verification Code</Label>
                    <div className="flex justify-center space-x-2">
                      {otpCode.map((digit, index) => (
                        <Input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          className="w-11 h-11 text-center text-lg font-semibold rounded-xl border-border/50 focus:border-primary transition-colors"
                        />
                      ))}
                    </div>

                    <div className="text-center space-y-2">
                      {emailTimer > 0 ? (
                        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>Resend code in {formatTime(emailTimer)}</span>
                        </div>
                      ) : (
                        <Button
                          variant="ghost"
                          className="text-sm text-primary hover:text-primary/80"
                          onClick={handleResendEmail}
                          disabled={!canResendEmail}
                        >
                          Didn't receive code? Resend
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Phone Number */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div className="text-center mb-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Add your phone number</h3>
                    <p className="text-muted-foreground text-sm">We'll send you a verification code via SMS</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="pl-10 h-11 rounded-xl border-border/50 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Phone Verification */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div className="text-center mb-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Verify your phone</h3>
                    <p className="text-muted-foreground text-sm">
                      We sent a 6-digit code to <span className="font-medium">{formData.phone}</span>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-sm font-medium">SMS Verification Code</Label>
                    <div className="flex justify-center space-x-2">
                      {phoneOtpCode.map((digit, index) => (
                        <Input
                          key={index}
                          id={`phone-otp-${index}`}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value, true)}
                          className="w-11 h-11 text-center text-lg font-semibold rounded-xl border-border/50 focus:border-primary transition-colors"
                        />
                      ))}
                    </div>

                    <div className="text-center space-y-2">
                      {phoneTimer > 0 ? (
                        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>Resend code in {formatTime(phoneTimer)}</span>
                        </div>
                      ) : (
                        <Button
                          variant="ghost"
                          className="text-sm text-primary hover:text-primary/80"
                          onClick={handleResendPhone}
                          disabled={!canResendPhone}
                        >
                          Didn't receive code? Resend
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Profile Setup */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div className="text-center mb-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Complete your profile</h3>
                    <p className="text-muted-foreground text-sm">Tell us a bit about yourself</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-sm font-medium">
                        Username <span className="text-muted-foreground">(unique handle)</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="username"
                          type="text"
                          placeholder="@username"
                          value={formData.username}
                          onChange={(e) => updateFormData("username", e.target.value)}
                          className="pl-10 h-11 rounded-xl border-border/50 focus:border-primary transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="displayName" className="text-sm font-medium">
                        Display Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="displayName"
                          type="text"
                          placeholder="Your display name"
                          value={formData.displayName}
                          onChange={(e) => updateFormData("displayName", e.target.value)}
                          className="pl-10 h-11 rounded-xl border-border/50 focus:border-primary transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-sm font-medium">
                        Country / Region
                      </Label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 z-10" />
                        <Select value={formData.country} onValueChange={(value) => updateFormData("country", value)}>
                          <SelectTrigger className="pl-10 h-11 rounded-xl border-border/50 focus:border-primary transition-colors">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="de">Germany</SelectItem>
                            <SelectItem value="fr">France</SelectItem>
                            <SelectItem value="jp">Japan</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="sg">Singapore</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="text-sm font-medium">
                        Date of Birth
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                          className="pl-10 h-11 rounded-xl border-border/50 focus:border-primary transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={(e) => updateFormData("password", e.target.value)}
                          className="pl-10 pr-10 h-11 rounded-xl border-border/50 focus:border-primary transition-colors"
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
                  </div>
                </motion.div>
              )}

              {/* Step 6: Identity Verification */}
              {currentStep === 6 && (
                <motion.div
                  key="step6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div className="text-center mb-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Identity Verification</h3>
                    <p className="text-muted-foreground text-sm">Upload your documents for account verification</p>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Government ID</Label>
                      <div className="border-2 border-dashed border-border/50 rounded-xl p-5 text-center hover:border-primary/50 transition-colors group cursor-pointer">
                        <input
                          type="file"
                          id="id-upload"
                          accept="image/*,.pdf"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              updateFormData("idDocument", file)
                            }
                          }}
                        />
                        <Upload className="w-7 h-7 text-muted-foreground mx-auto mb-2 group-hover:text-primary transition-colors" />
                        <p className="text-sm text-muted-foreground mb-3">
                          Upload your passport, driver's license, or national ID
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          className="h-10 rounded-lg bg-transparent hover:bg-primary/5"
                          onClick={() => document.getElementById("id-upload")?.click()}
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Choose from Computer
                        </Button>
                        {formData.idDocument && (
                          <div className="mt-3 p-2 bg-primary/10 rounded-lg">
                            <p className="text-xs text-primary font-medium">✓ {formData.idDocument.name}</p>
                            <p className="text-xs text-muted-foreground">Document uploaded successfully</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Selfie Photo</Label>
                      <div className="border-2 border-dashed border-border/50 rounded-xl p-5 text-center hover:border-primary/50 transition-colors group cursor-pointer">
                        <input
                          type="file"
                          id="selfie-upload"
                          accept="image/*"
                          capture="user"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              updateFormData("selfiePhoto", file)
                            }
                          }}
                        />
                        <Camera className="w-7 h-7 text-muted-foreground mx-auto mb-2 group-hover:text-primary transition-colors" />
                        <p className="text-sm text-muted-foreground mb-3">
                          Take a clear selfie holding your ID document
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 justify-center">
                          <Button
                            type="button"
                            variant="outline"
                            className="h-10 rounded-lg bg-transparent hover:bg-primary/5"
                            onClick={() => document.getElementById("selfie-upload")?.click()}
                          >
                            <Camera className="w-4 h-4 mr-2" />
                            Take Photo
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-10 rounded-lg text-xs text-muted-foreground hover:text-primary"
                            onClick={() =>
                              updateFormData("selfiePhoto", new File([""], "bypass.jpg", { type: "image/jpeg" }))
                            }
                          >
                            Skip for now
                          </Button>
                        </div>
                        {formData.selfiePhoto && (
                          <div className="mt-3 p-2 bg-primary/10 rounded-lg">
                            <p className="text-xs text-primary font-medium">✓ Selfie captured</p>
                            <p className="text-xs text-muted-foreground">Photo uploaded successfully</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 7: Address Verification */}
              {currentStep === 7 && (
                <motion.div
                  key="step7"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div className="text-center mb-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Residential Address</h3>
                    <p className="text-muted-foreground text-sm">Provide your current residential address</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="street" className="text-sm font-medium">
                        Street Address
                      </Label>
                      <Textarea
                        id="street"
                        placeholder="Enter your full street address"
                        value={formData.address.street}
                        onChange={(e) => updateFormData("address.street", e.target.value)}
                        className="min-h-[70px] rounded-xl border-border/50 focus:border-primary transition-colors resize-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-sm font-medium">
                          City
                        </Label>
                        <Input
                          id="city"
                          type="text"
                          placeholder="City"
                          value={formData.address.city}
                          onChange={(e) => updateFormData("address.city", e.target.value)}
                          className="h-11 rounded-xl border-border/50 focus:border-primary transition-colors"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="state" className="text-sm font-medium">
                          State / Province
                        </Label>
                        <Input
                          id="state"
                          type="text"
                          placeholder="State"
                          value={formData.address.state}
                          onChange={(e) => updateFormData("address.state", e.target.value)}
                          className="h-11 rounded-xl border-border/50 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postalCode" className="text-sm font-medium">
                        Postal Code
                      </Label>
                      <Input
                        id="postalCode"
                        type="text"
                        placeholder="Postal Code"
                        value={formData.address.postalCode}
                        onChange={(e) => updateFormData("address.postalCode", e.target.value)}
                        className="h-11 rounded-xl border-border/50 focus:border-primary transition-colors"
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-2 pt-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={formData.agreeToTerms}
                        onChange={(e) => updateFormData("agreeToTerms", e.target.checked)}
                        className="mt-1 rounded border-border"
                      />
                      <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>
                        ,{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                        , and{" "}
                        <Link href="/kyc-policy" className="text-primary hover:underline">
                          KYC Policy
                        </Link>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="h-11 px-6 rounded-xl border-border/50 hover:border-primary transition-colors bg-transparent flex-1 sm:flex-none"
              >
                Back
              </Button>

              <Button
                type="button"
                onClick={handleNext}
                disabled={!isStepValid() || isLoading}
                className="h-11 px-8 gradient-primary hover:opacity-90 text-white font-semibold rounded-xl shadow-lg animate-glow flex-1 sm:flex-none"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : currentStep === 7 ? (
                  "Create Account"
                ) : (
                  "Continue"
                )}
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

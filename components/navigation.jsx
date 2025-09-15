"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Trading", href: "/trading" },
  { name: "About", href: "/about" },
  { name: "Get Mobile App", href: "/mobile-app" },
  { name: "Blog", href: "/blog" },
  { name: "Buy/Sell", href: "/buy-sell" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("#mobile-menu-btn") // don't trigger when clicking the button itself
      ) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md">
              <img
                src="/logo-removebg.png" // 👉 replace with your real logo path
                alt="2$weet Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-foreground">2$weet</span>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: Auth + Theme (desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              asChild
              variant="outline"
              className="h-10 px-4 rounded-xl border-border/50 hover:border-primary transition-colors bg-transparent"
            >
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              asChild
              className="gradient-primary hover:opacity-90 text-white font-semibold px-6 py-2 rounded-xl shadow-md animate-glow"
            >
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile: Theme + Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-foreground hover:text-primary transition-colors relative"
            >
              {isOpen ? (
                <X size={24} className="transition-transform duration-300 rotate-90" />
              ) : (
                <Menu size={24} className="transition-transform duration-300 rotate-0" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg transform transition-all duration-300 ease-in-out origin-top",
            isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none",
          )}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-border/50">
              <Button
                asChild
                variant="outline"
                className="w-full h-12 rounded-xl border-border/50 hover:border-primary transition-colors bg-transparent"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                asChild
                className="w-full gradient-primary hover:opacity-90 text-white font-semibold rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

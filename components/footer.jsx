import Link from "next/link"
import Image from "next/image"

const footerSections = [
  {
    title: "Platform",
    links: [
      { name: "Trading", href: "/trading" },
      { name: "Buy/Sell", href: "/buy-sell" },
      { name: "Mobile App", href: "/app" },
      { name: "API", href: "/api" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Investors", href: "/investors" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Help Center", href: "/help" },
      { name: "Security", href: "/security" },
      { name: "Legal", href: "/legal" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Twitter", href: "#" },
      { name: "Discord", href: "#" },
      { name: "Telegram", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">2$</span>
              </div>
              <span className="text-xl font-bold text-foreground">2$weet</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The most trusted cryptocurrency exchange platform. Trade with confidence, security, and speed.
            </p>

            {/* App Download Section */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Download Our App</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Image
                  src="/play-store.web"
                  alt="Download on App Store and Google Play"
                  width={300}
                  height={90}
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Accepted Payment Methods:</span>
              <Image
                src="/payment-image1.webp"
                alt="Accepted payment methods"
                width={250}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 2$weet. All rights reserved.
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

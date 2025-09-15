import React, { Suspense } from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "next-themes"
import "./globals.css"

export const metadata = {
  title: "2$weet - Professional Crypto Exchange & Trading Platform",
  description:
    "Trade cryptocurrencies with confidence on 2$weet. Professional trading platform with advanced features, security, and mobile app.",
  keywords:
    "cryptocurrency, crypto exchange, bitcoin, trading, blockchain, digital assets",
  icons: {
    icon: "/logo.jpg",        // Favicon (shows in browser tab)
    shortcut: "/logo.jpg",    // Safari/old browsers
    apple: "/logo.jpg",       // iOS home screen icon
  },
  openGraph: {
    images: ["/logo.jpg"],    // For link previews (FB, Twitter, WhatsApp)
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevents theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && systemDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <main className="min-h-screen">{children}</main>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

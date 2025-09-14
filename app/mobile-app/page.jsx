import { AppHero } from "@/components/mobile-app/app-hero"
import { AppFeatures } from "@/components/mobile-app/app-features"
import { AppScreenshots } from "@/components/mobile-app/app-screenshots"
import { AppDownload } from "@/components/mobile-app/app-download"
import { AppTestimonials } from "@/components/mobile-app/app-testimonials"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AppPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AppHero />
      <AppFeatures />
      <AppScreenshots />
      <AppTestimonials />
      <AppDownload />
      <Footer />
    </div>
  )
}

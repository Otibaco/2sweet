import { AppHero } from "@/components/mobile-app/app-hero"
import { AppFeatures } from "@/components/mobile-app/app-features"
import { AppScreenshots } from "@/components/mobile-app/app-screenshots"
import { AppDownload } from "@/components/mobile-app/app-download"
import { AppTestimonials } from "@/components/mobile-app/app-testimonials"

export default function AppPage() {
  return (
    <div className="min-h-screen">
      <AppHero />
      <AppFeatures />
      <AppScreenshots />
      <AppTestimonials />
      <AppDownload />
    </div>
  )
}

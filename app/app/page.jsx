import { AppHero } from "@/components/app/app-hero"
import { AppFeatures } from "@/components/app/app-features"
import { AppScreenshots } from "@/components/app/app-screenshots"
import { AppDownload } from "@/components/app/app-download"
import { AppTestimonials } from "@/components/app/app-testimonials"

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

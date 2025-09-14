import { HeroSection } from "@/components/hero-section"
import { EducationalSection } from "@/components/educational-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EducationalSection />
      <Footer />
    </div>
  )
}

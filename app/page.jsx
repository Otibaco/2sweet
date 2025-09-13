import { HeroSection } from "@/components/hero-section"
import { EducationalSection } from "@/components/educational-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EducationalSection />
    </div>
  )
}

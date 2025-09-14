import { AboutHero } from "@/components/about/about-hero"
import { CompanyStory } from "@/components/about/company-story"
import { TeamSection } from "@/components/about/team-section"
import { InvestorsSection } from "@/components/about/investors-section"
import { SecuritySection } from "@/components/about/security-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutHero />
      <CompanyStory />
      <TeamSection />
      <InvestorsSection />
      <SecuritySection />
      <Footer/>
    </div>
  )
}

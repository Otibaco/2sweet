import { AboutHero } from "@/components/about/about-hero"
import { CompanyStory } from "@/components/about/company-story"
import { TeamSection } from "@/components/about/team-section"
import { InvestorsSection } from "@/components/about/investors-section"
import { SecuritySection } from "@/components/about/security-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <CompanyStory />
      <TeamSection />
      <InvestorsSection />
      <SecuritySection />
    </div>
  )
}

import { BlogHero } from "@/components/blog/blog-hero"
import { FeaturedPosts } from "@/components/blog/featured-posts"
import { BlogCategories } from "@/components/blog/blog-categories"
import { RecentPosts } from "@/components/blog/recent-posts"
import { NewsletterSignup } from "@/components/blog/newsletter-signup"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <BlogHero />
      <FeaturedPosts />
      <BlogCategories />
      <RecentPosts />
      <NewsletterSignup />
      <Footer />
      
    </div>
  )
}

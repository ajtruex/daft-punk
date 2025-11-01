import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DiscographySection } from "@/components/discography-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DiscographySection />
      <Footer />
    </div>
  )
}

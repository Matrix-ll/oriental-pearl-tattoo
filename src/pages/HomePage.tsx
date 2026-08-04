import HeroSection from '@/components/HeroSection'
import FeatureRibbon from '@/components/FeatureRibbon'
import ArtistsSection from '@/components/ArtistsSection'
import PortfolioCarousel from '@/components/PortfolioCarousel'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureRibbon />
      <ArtistsSection />
      <PortfolioCarousel />
      <ContactSection />
    </>
  )
}

import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import WhyUsSection from '@/components/sections/WhyUsSection'
import GalleryPreview from '@/components/sections/GalleryPreview'
import CtaSection from '@/components/sections/CtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <WhyUsSection />
      <GalleryPreview />
      <CtaSection />
    </>
  )
}

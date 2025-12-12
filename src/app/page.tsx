import HeroSection from "@/sections/hero"
import IndustriesSection from "@/sections/industries"
import { SolutionSection } from "@/sections/solutions"
import { SpectraSection } from "@/sections/spectra"
import VisionSection from "@/sections/vision"

const page = () => {
  return (
  <>
    <HeroSection />
    <VisionSection/>
    <SpectraSection/>
    <SolutionSection/>
    <IndustriesSection/>
  </>
)
}

export default page
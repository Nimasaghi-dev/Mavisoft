import HeroSection from "@/sections/hero"
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
  </>
)
}

export default page
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeatureABS } from "@/components/sections/FeatureABS";
import { FeaturePrediction } from "@/components/sections/FeaturePrediction";
import { Metrics } from "@/components/sections/Metrics";
import { SocialProof } from "@/components/sections/SocialProof";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";
import { WaitlistCTA } from "@/components/sections/WaitlistCTA";
import { CTABeat } from "@/components/ui/CTABeat";
import { CTA_BEATS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <CTABeat text={CTA_BEATS[0]} />
        <FeatureABS />
        <FeaturePrediction />
        <CTABeat text={CTA_BEATS[1]} />
        <Metrics />
        <SocialProof />
        <Team />
        <FAQ />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}

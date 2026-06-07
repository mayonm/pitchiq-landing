import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeatureABS } from "@/components/sections/FeatureABS";
import { FeaturePrediction } from "@/components/sections/FeaturePrediction";
import { Metrics } from "@/components/sections/Metrics";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";
import { WaitlistCTA } from "@/components/sections/WaitlistCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeatureABS />
        <FeaturePrediction />
        <Metrics />
        <Team />
        <FAQ />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}

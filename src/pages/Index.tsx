
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { MedicalInfo } from "@/components/MedicalInfo";
import { SafetyGuidelines } from "@/components/SafetyGuidelines";
import { FactsSection } from "@/components/FactsSection";
import { WarningSection } from "@/components/WarningSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TrustSection />
      <MedicalInfo />
      <SafetyGuidelines />
      <FactsSection />
      <WarningSection />
      <Footer />
    </div>
  );
};

export default Index;

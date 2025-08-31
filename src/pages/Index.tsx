import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedInfluencers } from "@/components/FeaturedInfluencers";
import { HowItWorks } from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedInfluencers />
      <HowItWorks />
    </div>
  );
};

export default Index;

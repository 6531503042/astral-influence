import { Button } from "@/components/ui/button";
import { Sparkles, Users, TrendingUp } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40 animation-delay-1000" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/30 rounded-full animate-pulse opacity-50 animation-delay-2000" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-accent/50 rounded-full animate-pulse opacity-70 animation-delay-3000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              The Fantasy Marketplace for Influencer Marketing
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow">
            Find the Right
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Influencer
            </span>
            for Your Brand
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with top-tier influencers and brands in a cinematic marketplace 
            where epic collaborations are born.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" className="group">
              <Users className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Hire an Influencer
            </Button>
            <Button variant="glow" size="xl" className="group">
              <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Become an Influencer
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-6 magical-hover">
              <div className="text-3xl font-heading font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Verified Influencers</div>
            </div>
            <div className="glass-card p-6 magical-hover">
              <div className="text-3xl font-heading font-bold text-accent mb-2">5M+</div>
              <div className="text-muted-foreground">Successful Campaigns</div>
            </div>
            <div className="glass-card p-6 magical-hover">
              <div className="text-3xl font-heading font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
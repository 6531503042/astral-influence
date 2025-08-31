import { Card, CardContent } from "@/components/ui/card";
import { Search, UserCheck, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Post Your Campaign",
    description: "Define your brand goals, target audience, and campaign requirements. Our AI will match you with perfect influencers.",
    color: "text-primary"
  },
  {
    icon: UserCheck,
    title: "Match & Connect",
    description: "Browse curated influencer profiles, review their portfolios, and connect with creators who align with your brand vision.",
    color: "text-accent"
  },
  {
    icon: BarChart3,
    title: "Track Results",
    description: "Monitor campaign performance in real-time with detailed analytics and ROI tracking to measure your success.",
    color: "text-primary"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">Fulnfinz</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to launch your next epic influencer campaign
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (hidden on mobile) */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 transform -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative z-10">
                <Card className="glass-card magical-hover border-primary/20 text-center">
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full glass-card border border-primary/30 mb-6">
                      <span className="font-heading font-bold text-primary">{index + 1}</span>
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-secondary mb-6 ${step.color === 'text-primary' ? 'border border-primary/20' : 'border border-accent/20'}`}>
                      <IconComponent className={`w-8 h-8 ${step.color}`} />
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Ready to Start Your <span className="text-primary">Epic Campaign</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of brands who have already discovered the power of influencer marketing through Fulnfinz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-gradient-primary text-primary-foreground font-heading font-semibold shadow-glow hover:shadow-glow hover:scale-105 border border-primary/20 transition-magical">
                Get Started Now
              </button>
              <button className="inline-flex items-center justify-center h-12 px-8 rounded-lg glass-card text-foreground hover:bg-card/90 hover:border-primary/40 magical-hover">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
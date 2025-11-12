import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Star, CheckCircle, BarChart3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Connect with Top
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Influencers
            </span>
            and Grow Your Brand
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The professional marketplace where brands discover authentic influencers 
            and creators build meaningful partnerships.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 rounded-full border border-border">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Verified Influencers Only</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 rounded-full border border-border">
              <BarChart3 className="w-4 h-4 text-blue-500" />
              <span>Real-Time Analytics</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 rounded-full border border-border">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span>AI-Powered Matching</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/campaign/create">
              <Button variant="default" size="xl" className="group">
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Hire an Influencer
              </Button>
            </Link>
            <Link to="/influencer/signup">
              <Button variant="success" size="xl" className="group">
                <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Become an Influencer
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-elevated p-8 hover-lift group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  +24%
                </div>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">12,847</div>
              <div className="text-muted-foreground">Verified Influencers</div>
              <div className="text-xs text-muted-foreground mt-2">Across 50+ countries</div>
            </div>
            <div className="card-elevated p-8 hover-lift group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  +18%
                </div>
              </div>
              <div className="text-4xl font-bold text-accent mb-2">5.2M+</div>
              <div className="text-muted-foreground">Successful Campaigns</div>
              <div className="text-xs text-muted-foreground mt-2">$2.8B+ in ad spend</div>
            </div>
            <div className="card-elevated p-8 hover-lift group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  +2.1%
                </div>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">98.7%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
              <div className="text-xs text-muted-foreground mt-2">4.9/5 average rating</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Verified Profiles</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-accent" />
              <span>Real-Time Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
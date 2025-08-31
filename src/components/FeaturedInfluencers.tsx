import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Verified, MapPin, TrendingUp } from "lucide-react";
import { featuredInfluencers } from "@/data/influencers";

export const FeaturedInfluencers = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-glow">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Influencers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover top-performing influencers ready to elevate your brand to legendary status
          </p>
        </div>

        {/* Influencer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredInfluencers.map((influencer) => {
            const IconComponent = influencer.icon;
            return (
              <Card key={influencer.id} className="glass-card magical-hover border-primary/20 overflow-hidden">
                <CardContent className="p-0">
                  {/* Avatar Section */}
                  <div className="relative">
                    <img 
                      src={influencer.avatar} 
                      alt={influencer.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    {/* Verification Badge */}
                    {influencer.verified && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary/90 text-primary-foreground border-primary/20">
                          <Verified className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      </div>
                    )}

                    {/* Category Icon */}
                    <div className="absolute top-4 left-4 glass-card p-2">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Name and Username */}
                    <div className="mb-4">
                      <h3 className="font-heading text-xl font-semibold mb-1">{influencer.name}</h3>
                      <p className="text-muted-foreground">{influencer.username}</p>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {influencer.bio}
                    </p>

                    {/* Niches */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {influencer.niches.slice(0, 2).map((niche) => (
                        <Badge key={niche} variant="secondary" className="text-xs">
                          {niche}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-secondary/30 rounded-lg">
                      <div className="text-center">
                        <div className="font-semibold text-primary">{influencer.totalFollowers}</div>
                        <div className="text-xs text-muted-foreground">Total Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-accent">{influencer.averageEngagement}</div>
                        <div className="text-xs text-muted-foreground">Avg Engagement</div>
                      </div>
                    </div>

                    {/* Rating and Location */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="font-medium">{influencer.rating}</span>
                        <span className="text-sm text-muted-foreground">({influencer.reviewCount})</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {influencer.location.split(',')[0]}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-heading font-semibold text-lg text-primary">
                          {influencer.ratePerPost}
                        </div>
                        <div className="text-xs text-muted-foreground">per post</div>
                      </div>
                      <Button variant="fantasy" size="sm" className="group">
                        <TrendingUp className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Browse All CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            Browse All Influencers
          </Button>
        </div>
      </div>
    </section>
  );
};
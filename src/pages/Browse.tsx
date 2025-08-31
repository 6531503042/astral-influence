import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Star, MapPin, Users, TrendingUp, Verified } from "lucide-react";
import { allInfluencers } from "@/data/influencers";
import { useState } from "react";

export default function Browse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("all");

  const filteredInfluencers = allInfluencers.filter(influencer => {
    const matchesSearch = influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         influencer.niches.some(niche => niche.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesNiche = selectedNiche === "all" || influencer.niches.includes(selectedNiche);
    return matchesSearch && matchesNiche;
  });

  const uniqueNiches = Array.from(new Set(allInfluencers.flatMap(inf => inf.niches)));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Search and Filter Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Browse <span className="bg-gradient-primary bg-clip-text text-transparent">Influencers</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover the perfect influencer for your next campaign
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search influencers by name or niche..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 card-elevated"
                />
              </div>
              
              <Select value={selectedNiche} onValueChange={setSelectedNiche}>
                <SelectTrigger className="w-full md:w-48 card-elevated">
                  <SelectValue placeholder="Select niche" />
                </SelectTrigger>
                <SelectContent className="card-elevated">
                  <SelectItem value="all">All Niches</SelectItem>
                  {uniqueNiches.map(niche => (
                    <SelectItem key={niche} value={niche}>{niche}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="professional" className="gap-2">
                <Filter className="w-4 h-4" />
                More Filters
              </Button>
            </div>

            {/* Results Count */}
            <div className="text-center mb-8">
              <p className="text-muted-foreground">
                Found <span className="text-primary font-semibold">{filteredInfluencers.length}</span> influencers
              </p>
            </div>
          </div>
        </section>

        {/* Influencers Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredInfluencers.map((influencer) => {
                const IconComponent = influencer.icon;
                return (
                  <Card key={influencer.id} className="card-elevated hover-lift overflow-hidden">
                    <CardContent className="p-0">
                      {/* Avatar Section */}
                      <div className="relative">
                        <img 
                          src={influencer.avatar} 
                          alt={influencer.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        
                        {/* Verification Badge */}
                        {influencer.verified && (
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-primary/90 text-primary-foreground border-primary/20 text-xs">
                              <Verified className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          </div>
                        )}

                        {/* Category Icon */}
                        <div className="absolute top-3 left-3 card-elevated p-1.5">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>

                        {/* Quick Stats Overlay */}
                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                          <div className="flex items-center gap-1 card-elevated px-2 py-1 text-xs">
                            <Users className="w-3 h-3 text-primary" />
                            <span className="font-medium">{influencer.totalFollowers}</span>
                          </div>
                          <div className="flex items-center gap-1 card-elevated px-2 py-1 text-xs">
                            <TrendingUp className="w-3 h-3 text-accent" />
                            <span className="font-medium">{influencer.averageEngagement}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        {/* Name and Username */}
                        <div className="mb-3">
                          <h3 className="font-heading text-lg font-semibold mb-1 truncate">{influencer.name}</h3>
                          <p className="text-sm text-muted-foreground truncate">{influencer.username}</p>
                        </div>

                        {/* Bio */}
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 h-10">
                          {influencer.bio}
                        </p>

                        {/* Niches */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {influencer.niches.slice(0, 2).map((niche) => (
                            <Badge key={niche} variant="secondary" className="text-xs px-2 py-0.5">
                              {niche}
                            </Badge>
                          ))}
                          {influencer.niches.length > 2 && (
                            <Badge variant="secondary" className="text-xs px-2 py-0.5">
                              +{influencer.niches.length - 2}
                            </Badge>
                          )}
                        </div>

                        {/* Rating and Location */}
                        <div className="flex items-center justify-between mb-3 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-primary fill-primary" />
                            <span className="font-medium">{influencer.rating}</span>
                            <span className="text-muted-foreground">({influencer.reviewCount})</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            <span className="truncate">{influencer.location.split(',')[0]}</span>
                          </div>
                        </div>

                        {/* Price and CTA */}
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-heading font-semibold text-primary">
                              {influencer.ratePerPost}
                            </div>
                            <div className="text-xs text-muted-foreground">per post</div>
                          </div>
                          <Button variant="professional" size="sm">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="default" size="lg">
                Load More Influencers
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Star, Verified, MapPin, Users, TrendingUp, MessageCircle, Heart, Share2, Instagram, Youtube, Clock, Edit, Briefcase } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { allInfluencers } from "@/data/influencers";
import { useState } from "react";

export default function InfluencerProfile() {
  const { id } = useParams();
  const { toast } = useToast();
  const influencer = allInfluencers.find(inf => inf.id === id);
  
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editData, setEditData] = useState({
    bio: influencer?.bio || "",
    location: influencer?.location || "",
    ratePerPost: influencer?.ratePerPost || "$0",
  });

  const handleSaveEdit = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved.",
    });
    setIsEditOpen(false);
  };

  if (!influencer) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Influencer Not Found</h1>
            <Link to="/browse">
              <Button variant="default">Back to Browse</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const IconComponent = influencer.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="card-elevated p-8 mb-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Profile Image */}
                  <div className="relative">
                    <img 
                      src={influencer.avatar} 
                      alt={influencer.name}
                      className="w-48 h-48 object-cover rounded-xl"
                    />
                    <div className="absolute top-4 right-4">
                      {influencer.verified && (
                        <Badge className="bg-primary text-primary-foreground">
                          <Verified className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="absolute top-4 left-4 card-elevated p-2">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{influencer.name}</h1>
                    <p className="text-muted-foreground mb-4">{influencer.username}</p>
                    
                    <p className="text-lg mb-6">{editData.bio}</p>

                    {/* Niches */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {influencer.niches.map((niche) => (
                        <Badge key={niche} variant="secondary">
                          {niche}
                        </Badge>
                      ))}
                    </div>

                    {/* Location and Rating */}
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{editData.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="font-medium">{influencer.rating}</span>
                        <span className="text-muted-foreground">({influencer.reviewCount} reviews)</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Link to="/campaign/create">
                        <Button variant="default" size="lg">
                          <Briefcase className="w-4 h-4" />
                          Hire Now
                        </Button>
                      </Link>
                      <Button variant="outline" size="lg">
                        <MessageCircle className="w-4 h-4" />
                        Send Message
                      </Button>
                      <Button variant="outline" size="lg">
                        <Heart className="w-4 h-4" />
                        Save
                      </Button>
                      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                        <DialogTrigger asChild>
                          <Button variant="secondary" size="lg">
                            <Edit className="w-4 h-4" />
                            Edit Profile
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-xl">
                          <DialogHeader>
                            <DialogTitle>Edit Profile</DialogTitle>
                          </DialogHeader>
                          
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="edit-bio">Bio</Label>
                              <Textarea
                                id="edit-bio"
                                value={editData.bio}
                                onChange={(e) => setEditData({...editData, bio: e.target.value})}
                                rows={4}
                              />
                            </div>

                            <div>
                              <Label htmlFor="edit-location">Location</Label>
                              <Input
                                id="edit-location"
                                value={editData.location}
                                onChange={(e) => setEditData({...editData, location: e.target.value})}
                              />
                            </div>

                            <div>
                              <Label htmlFor="edit-rate">Rate per Post</Label>
                              <Input
                                id="edit-rate"
                                value={editData.ratePerPost}
                                onChange={(e) => setEditData({...editData, ratePerPost: e.target.value})}
                                placeholder="$5,000"
                              />
                            </div>
                          </div>

                          <DialogFooter>
                            <Button variant="outline" onClick={() => setIsEditOpen(false)}>
                              Cancel
                            </Button>
                            <Button onClick={handleSaveEdit}>
                              Save Changes
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="card-elevated p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{influencer.totalFollowers}</div>
                  <div className="text-sm text-muted-foreground">Total Followers</div>
                </div>
                <div className="card-elevated p-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">{influencer.averageEngagement}</div>
                  <div className="text-sm text-muted-foreground">Avg Engagement</div>
                </div>
                <div className="card-elevated p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{editData.ratePerPost}</div>
                  <div className="text-sm text-muted-foreground">Per Post</div>
                </div>
                <div className="card-elevated p-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">24h</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
              </div>

              {/* Tabs Section */}
              <Tabs defaultValue="portfolio" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="platforms">Platforms</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="rates">Rate Card</TabsTrigger>
                </TabsList>

                <TabsContent value="portfolio" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "Summer Fashion Collection 2024", brand: "Fashion Brand Co.", type: "Instagram Posts", engagement: "125K", emoji: "👗" },
                      { title: "Product Launch Campaign", brand: "Tech Innovations", type: "YouTube Video", engagement: "450K", emoji: "📱" },
                      { title: "Lifestyle Content Series", brand: "Wellness Plus", type: "Instagram Reels", engagement: "280K", emoji: "✨" },
                      { title: "Holiday Special Promotion", brand: "Retail Express", type: "TikTok Campaign", engagement: "320K", emoji: "🎄" },
                      { title: "Brand Ambassador Program", brand: "Sportswear Pro", type: "Multi-Platform", engagement: "890K", emoji: "🏃" },
                      { title: "Product Review Series", brand: "Beauty Essentials", type: "YouTube & IG", engagement: "210K", emoji: "💄" },
                    ].map((project, i) => (
                      <Card key={i} className="card-elevated hover-lift overflow-hidden group">
                        <CardContent className="p-0">
                          <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="relative z-10">{project.emoji}</span>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="flex items-center justify-between text-white text-sm">
                                <span className="flex items-center gap-1">
                                  <Heart className="w-4 h-4 fill-white" />
                                  {project.engagement}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Share2 className="w-4 h-4" />
                                  {Math.floor(parseFloat(project.engagement) * 0.15)}K
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold mb-1">{project.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{project.brand}</p>
                            <div className="flex items-center justify-between">
                              <Badge variant="secondary" className="text-xs">{project.type}</Badge>
                              <span className="text-xs text-muted-foreground">{project.engagement} reach</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="platforms" className="space-y-6">
                  <div className="grid gap-6">
                    {influencer.platforms.map((platform) => (
                      <Card key={platform.platform} className="card-elevated">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              {platform.platform === 'Instagram' && <Instagram className="w-6 h-6 text-primary" />}
                              {platform.platform === 'YouTube' && <Youtube className="w-6 h-6 text-primary" />}
                              {platform.platform === 'TikTok' && <Users className="w-6 h-6 text-primary" />}
                              {platform.platform === 'Twitch' && <TrendingUp className="w-6 h-6 text-primary" />}
                              <div>
                                <h3 className="font-semibold">{platform.platform}</h3>
                                <p className="text-sm text-muted-foreground">{platform.followers} followers</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-accent">{platform.engagementRate}</div>
                              <div className="text-sm text-muted-foreground">Engagement Rate</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <div className="grid gap-6">
                    {[
                      { 
                        brand: "Fashion Brand Co.", 
                        rating: 5.0, 
                        review: "Outstanding collaboration! Sofia delivered exceptional content that exceeded our expectations. Her attention to detail and creative vision helped us achieve 3x our engagement goals. Highly professional and easy to work with.",
                        campaign: "Summer Collection Launch",
                        date: "2 weeks ago",
                        metrics: "125K impressions, 8.2% engagement"
                      },
                      { 
                        brand: "Tech Innovations", 
                        rating: 5.0, 
                        review: "Professional, responsive, and creative. The product review video was thorough and authentic, resulting in a significant boost in product awareness. Would definitely collaborate again!",
                        campaign: "Product Launch Campaign",
                        date: "1 month ago",
                        metrics: "450K views, 12.5% engagement"
                      },
                      { 
                        brand: "Wellness Plus", 
                        rating: 4.8, 
                        review: "Great partnership! Sofia's content resonated perfectly with our target audience. The lifestyle series generated excellent engagement and helped us reach new demographics.",
                        campaign: "Lifestyle Content Series",
                        date: "2 months ago",
                        metrics: "280K reach, 9.1% engagement"
                      },
                      { 
                        brand: "Retail Express", 
                        rating: 5.0, 
                        review: "Sofia is a true professional. Her holiday campaign content was creative, on-brand, and delivered exceptional results. The collaboration was seamless from start to finish.",
                        campaign: "Holiday Special Promotion",
                        date: "3 months ago",
                        metrics: "320K impressions, 10.3% engagement"
                      },
                      { 
                        brand: "Beauty Essentials", 
                        rating: 4.9, 
                        review: "Excellent work! The product review series was authentic and engaging. Sofia's expertise in beauty content helped us build trust with our audience and drive conversions.",
                        campaign: "Product Review Series",
                        date: "4 months ago",
                        metrics: "210K views, 7.8% engagement"
                      },
                    ].map((review, i) => (
                      <Card key={i} className="card-elevated hover:scale-[1.01] transition-transform">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {review.brand.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold text-lg">{review.brand}</h4>
                                  <p className="text-sm text-muted-foreground">{review.campaign}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                  {Array.from({length: 5}).map((_, j) => (
                                    <Star 
                                      key={j} 
                                      className={`w-4 h-4 ${j < Math.floor(review.rating) ? 'text-primary fill-primary' : 'text-muted-foreground'}`} 
                                    />
                                  ))}
                                  <span className="font-medium ml-1">{review.rating}</span>
                                </div>
                              </div>
                              <p className="text-muted-foreground mb-3 leading-relaxed">
                                "{review.review}"
                              </p>
                              <div className="flex flex-wrap items-center gap-4 text-sm">
                                <div className="flex items-center gap-1 text-muted-foreground">
                                  <Clock className="w-3 h-3" />
                                  <span>{review.date}</span>
                                </div>
                                <div className="flex items-center gap-1 text-green-600">
                                  <TrendingUp className="w-3 h-3" />
                                  <span className="font-medium">{review.metrics}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="rates" className="space-y-6">
                  <div className="grid gap-6">
                    <Card className="card-elevated">
                      <CardHeader>
                        <CardTitle>Pricing Packages</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-border">
                          <span>Single Post</span>
                          <span className="font-semibold text-primary">{editData.ratePerPost}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-border">
                          <span>Story (24h)</span>
                          <span className="font-semibold text-primary">$1,200</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-border">
                          <span>Video Content</span>
                          <span className="font-semibold text-primary">$8,500</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <span>Campaign Package</span>
                          <span className="font-semibold text-primary">$15,000</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

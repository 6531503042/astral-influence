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
                    {Array.from({length: 6}).map((_, i) => (
                      <Card key={i} className="card-elevated hover-lift overflow-hidden">
                        <CardContent className="p-0">
                          <div className="aspect-square bg-gradient-secondary"></div>
                          <div className="p-4">
                            <h3 className="font-semibold mb-2">Campaign Project {i + 1}</h3>
                            <p className="text-sm text-muted-foreground">Brand collaboration showcase</p>
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
                    {Array.from({length: 5}).map((_, i) => (
                      <Card key={i} className="card-elevated">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-primary rounded-full"></div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold">Brand Name {i + 1}</h4>
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-primary fill-primary" />
                                  <span className="font-medium">5.0</span>
                                </div>
                              </div>
                              <p className="text-muted-foreground mb-2">
                                "Excellent collaboration! Professional, creative, and delivered amazing results for our campaign."
                              </p>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Clock className="w-3 h-3" />
                                <span>{i + 1} month ago</span>
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

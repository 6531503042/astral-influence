import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Plus, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Eye,
  MessageCircle,
  Star,
  DollarSign,
  Edit,
  Trash2
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BrandDashboard() {
  const { toast } = useToast();
  
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: "Summer Fashion Collection",
      description: "Launch our new summer collection with fashion influencers",
      status: "active",
      budget: "$25,000",
      spent: "$18,500",
      influencers: 12,
      applications: 47,
      progress: 74,
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      deadline: "2024-02-15"
    },
    {
      id: 2,
      title: "Tech Product Launch",
      description: "Promote our new tech product to gaming community",
      status: "planning",
      budget: "$50,000",
      spent: "$0",
      influencers: 0,
      applications: 23,
      progress: 15,
      startDate: "2024-02-01",
      endDate: "2024-03-01",
      deadline: "2024-03-01"
    },
    {
      id: 3,
      title: "Holiday Special Campaign",
      description: "End of year holiday promotion",
      status: "completed",
      budget: "$15,000",
      spent: "$14,200",
      influencers: 8,
      applications: 31,
      progress: 100,
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      deadline: "2023-12-31"
    }
  ]);

  const [editingCampaign, setEditingCampaign] = useState<any>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const recentInfluencers = [
    { id: 1, name: "Alex Rivera", username: "@alexgamesyt", status: "accepted", proposal: "$5,500" },
    { id: 2, name: "Sofia Chen", username: "@sofiabeauty", status: "pending", proposal: "$8,200" },
    { id: 3, name: "Marcus Johnson", username: "@marcusfitlife", status: "declined", proposal: "$4,800" },
    { id: 4, name: "Emma Thompson", username: "@emmafoodie", status: "negotiating", proposal: "$3,200" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-accent text-accent-foreground';
      case 'planning': return 'bg-primary text-primary-foreground';
      case 'completed': return 'bg-secondary text-secondary-foreground';
      case 'accepted': return 'bg-accent text-accent-foreground';
      case 'pending': return 'bg-primary text-primary-foreground';
      case 'declined': return 'bg-destructive text-destructive-foreground';
      case 'negotiating': return 'bg-primary/80 text-primary-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const handleEdit = (campaign: any) => {
    setEditingCampaign({ ...campaign });
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (editingCampaign) {
      setCampaigns(prev => 
        prev.map(c => c.id === editingCampaign.id ? editingCampaign : c)
      );
      toast({
        title: "Campaign Updated",
        description: "Your campaign has been updated successfully.",
      });
      setIsEditDialogOpen(false);
    }
  };

  const handleDelete = (id: number) => {
    setCampaigns(prev => prev.filter(c => c.id !== id));
    toast({
      title: "Campaign Deleted",
      description: "Campaign has been removed.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Brand Dashboard</h1>
              <p className="text-muted-foreground">Manage your influencer campaigns and track performance</p>
            </div>
            <Link to="/campaign/create">
              <Button variant="default" size="lg" className="gap-2">
                <Plus className="w-4 h-4" />
                New Campaign
              </Button>
            </Link>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Campaigns</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Influencers</p>
                    <p className="text-2xl font-bold">20</p>
                  </div>
                  <Users className="w-8 h-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Reach</p>
                    <p className="text-2xl font-bold">2.4M</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Spent</p>
                    <p className="text-2xl font-bold">$32.7K</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="campaigns" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="influencers">Influencers</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>

            <TabsContent value="campaigns" className="space-y-6">
              <div className="grid gap-6">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id} className="card-elevated hover-lift">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                          <Badge className={getStatusColor(campaign.status)}>
                            {campaign.status}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Link to={`/campaign/${campaign.id}`}>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button variant="outline" size="sm" onClick={() => handleEdit(campaign)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="destructive" size="sm" onClick={() => handleDelete(campaign.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Budget</p>
                          <p className="font-semibold">{campaign.budget}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Spent</p>
                          <p className="font-semibold">{campaign.spent}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Influencers</p>
                          <p className="font-semibold">{campaign.influencers}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Applications</p>
                          <p className="font-semibold">{campaign.applications}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{campaign.progress}%</span>
                        </div>
                        <Progress value={campaign.progress} className="w-full" />
                      </div>

                      <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                        <span>{campaign.startDate} - {campaign.endDate}</span>
                        <div className="flex items-center gap-4">
                          {campaign.status === 'active' && (
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>15 days left</span>
                            </div>
                          )}
                          {campaign.status === 'completed' && (
                            <div className="flex items-center gap-1 text-accent">
                              <CheckCircle className="w-4 h-4" />
                              <span>Completed</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="influencers" className="space-y-6">
              <div className="grid gap-4">
                {recentInfluencers.map((influencer) => (
                  <Card key={influencer.id} className="card-elevated">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full"></div>
                          <div>
                            <h4 className="font-semibold">{influencer.name}</h4>
                            <p className="text-sm text-muted-foreground">{influencer.username}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-semibold">{influencer.proposal}</p>
                            <Badge className={getStatusColor(influencer.status)}>
                              {influencer.status}
                            </Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="professional" size="sm">
                              <MessageCircle className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle>Campaign Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-secondary rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Analytics Chart Placeholder</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle>Top Performing Content</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Array.from({length: 3}).map((_, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-lg"></div>
                          <div>
                            <p className="font-medium">Post Title {i + 1}</p>
                            <p className="text-sm text-muted-foreground">@influencer{i + 1}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{(12.5 + i * 2.3).toFixed(1)}K</p>
                          <p className="text-sm text-muted-foreground">engagement</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="messages" className="space-y-6">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Array.from({length: 5}).map((_, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 hover:bg-secondary/20 rounded-lg cursor-pointer">
                      <div className="w-10 h-10 bg-gradient-accent rounded-full"></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold">Influencer Name {i + 1}</h4>
                          <span className="text-sm text-muted-foreground">2h ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Thank you for the campaign details. I'm excited to work with your brand...
                        </p>
                      </div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Edit Campaign Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Campaign</DialogTitle>
          </DialogHeader>
          
          {editingCampaign && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-title">Campaign Title</Label>
                <Input
                  id="edit-title"
                  value={editingCampaign.title}
                  onChange={(e) => setEditingCampaign({...editingCampaign, title: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  value={editingCampaign.description}
                  onChange={(e) => setEditingCampaign({...editingCampaign, description: e.target.value})}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-budget">Budget</Label>
                  <Input
                    id="edit-budget"
                    value={editingCampaign.budget}
                    onChange={(e) => setEditingCampaign({...editingCampaign, budget: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="edit-status">Status</Label>
                  <Select
                    value={editingCampaign.status}
                    onValueChange={(value) => setEditingCampaign({...editingCampaign, status: value})}
                  >
                    <SelectTrigger id="edit-status">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="planning">Planning</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="edit-deadline">Deadline</Label>
                <Input
                  id="edit-deadline"
                  type="date"
                  value={editingCampaign.deadline}
                  onChange={(e) => setEditingCampaign({...editingCampaign, deadline: e.target.value})}
                />
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

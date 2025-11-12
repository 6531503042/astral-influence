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
  Trash2,
  Sparkles,
  Target,
  Calendar,
  Zap,
  Heart,
  Share2,
  ThumbsUp,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Search,
  MoreHorizontal,
  Play,
  Pause,
  Settings,
  Globe
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
  const [editErrors, setEditErrors] = useState<Record<string, string>>({});
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const recentInfluencers = [
    { id: 1, name: "Alex Rivera", username: "@alexgamesyt", status: "accepted", proposal: "$5,500" },
    { id: 2, name: "Sofia Chen", username: "@sofiabeauty", status: "pending", proposal: "$8,200" },
    { id: 3, name: "Marcus Johnson", username: "@marcusfitlife", status: "declined", proposal: "$4,800" },
    { id: 4, name: "Emma Thompson", username: "@emmafoodie", status: "negotiating", proposal: "$3,200" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400';
      case 'planning': return 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400';
      case 'completed': return 'bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-400';
      case 'paused': return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400';
      case 'accepted': return 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400';
      case 'pending': return 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400';
      case 'declined': return 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400';
      case 'negotiating': return 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400';
      default: return 'bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-400';
    }
  };

  const handleEdit = (campaign: any) => {
    setEditingCampaign({ ...campaign });
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (editingCampaign) {
      // Basic validation
      const nextErrors: Record<string, string> = {};
      if (!editingCampaign.title?.trim()) nextErrors.title = "Title is required";
      if (!editingCampaign.description?.trim()) nextErrors.description = "Description is required";
      if (!editingCampaign.budget?.trim()) nextErrors.budget = "Budget is required";
      if (!editingCampaign.startDate) nextErrors.startDate = "Start date is required";
      if (!editingCampaign.endDate) nextErrors.endDate = "End date is required";
      if (editingCampaign.startDate && editingCampaign.endDate && new Date(editingCampaign.startDate) > new Date(editingCampaign.endDate)) {
        nextErrors.endDate = "End date must be after start date";
      }
      setEditErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) {
        toast({ title: "Please fix the errors", description: "Some fields are missing or invalid", variant: "destructive" });
        return;
      }

      // Update campaign
      setCampaigns(prev => 
        prev.map(c => c.id === editingCampaign.id ? editingCampaign : c)
      );
      
      toast({
        title: "🎉 Campaign Updated Successfully!",
        description: `"${editingCampaign.title}" has been updated with all changes.`,
      });
      setIsEditDialogOpen(false);
      setEditErrors({});
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8">
          {/* Enhanced Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
            <div>
                  <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Brand Dashboard
                  </h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    Manage your influencer campaigns and track performance
                  </p>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>3 Active Campaigns</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-sm">
                  <TrendingUp className="w-3 h-3" />
                  <span>+12% This Month</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-full text-sm">
                  <Star className="w-3 h-3" />
                  <span>4.8 Avg Rating</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" size="lg" className="gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            <Link to="/campaign/create">
                <Button variant="default" size="lg" className="gap-2 bg-gradient-primary hover:scale-105 transition-all duration-200 shadow-lg">
                <Plus className="w-4 h-4" />
                New Campaign
              </Button>
            </Link>
            </div>
          </div>

          {/* Enhanced Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="card-elevated hover:scale-105 transition-all duration-200 border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="text-sm font-medium">+15%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Active Campaigns</p>
                  <p className="text-3xl font-bold text-white mb-2">3</p>
                  <p className="text-xs text-slate-400">2 more than last month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:scale-105 transition-all duration-200 border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="text-sm font-medium">+8%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Total Influencers</p>
                  <p className="text-3xl font-bold text-white mb-2">20</p>
                  <p className="text-xs text-slate-400">12 active, 8 pending</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:scale-105 transition-all duration-200 border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="text-sm font-medium">+23%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Total Reach</p>
                  <p className="text-3xl font-bold text-white mb-2">2.4M</p>
                  <p className="text-xs text-slate-400">1.2M this month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:scale-105 transition-all duration-200 border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-red-600">
                    <ArrowDownRight className="w-4 h-4" />
                    <span className="text-sm font-medium">-5%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Total Spent</p>
                  <p className="text-3xl font-bold text-white mb-2">$32.7K</p>
                  <p className="text-xs text-slate-400">$18.5K remaining</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Main Content */}
          <Tabs defaultValue="campaigns" className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <TabsList className="grid w-full sm:w-auto grid-cols-4 bg-card border">
                <TabsTrigger value="campaigns" className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span className="hidden sm:inline">Campaigns</span>
                </TabsTrigger>
                <TabsTrigger value="influencers" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">Influencers</span>
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span className="hidden sm:inline">Analytics</span>
                </TabsTrigger>
                <TabsTrigger value="messages" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Messages</span>
                </TabsTrigger>
            </TabsList>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Search className="w-4 h-4" />
                  Search
                </Button>
              </div>
            </div>

            <TabsContent value="campaigns" className="space-y-6">
              <div className="grid gap-6">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id} className="card-elevated hover:scale-[1.02] transition-all duration-200 border-l-4 border-l-primary/20 hover:border-l-primary">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-2xl font-bold">{campaign.title}</h3>
                            <Badge className={`${getStatusColor(campaign.status)} px-3 py-1`}>
                              {campaign.status === 'active' && <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>}
                            {campaign.status}
                          </Badge>
                        </div>
                          <p className="text-muted-foreground text-lg mb-4">{campaign.description}</p>
                          
                          {/* Campaign Metrics */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl">
                              <DollarSign className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Budget</p>
                              <p className="text-xl font-bold text-blue-600">{campaign.budget}</p>
                        </div>
                            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl">
                              <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Spent</p>
                              <p className="text-xl font-bold text-green-600">{campaign.spent}</p>
                        </div>
                            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl">
                              <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Influencers</p>
                              <p className="text-xl font-bold text-purple-600">{campaign.influencers}</p>
                        </div>
                            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl">
                              <Activity className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Applications</p>
                              <p className="text-xl font-bold text-orange-600">{campaign.applications}</p>
                        </div>
                      </div>

                          {/* Progress Section */}
                          <div className="space-y-3 mb-6">
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-semibold">Campaign Progress</span>
                              <span className="text-2xl font-bold text-primary">{campaign.progress}%</span>
                            </div>
                            <Progress value={campaign.progress} className="h-3" />
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>Started: {campaign.startDate}</span>
                              <span>Ends: {campaign.endDate}</span>
                        </div>
                      </div>

                          {/* Status and Actions */}
                          <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          {campaign.status === 'active' && (
                                <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full">
                              <Clock className="w-4 h-4" />
                                  <span className="font-medium">15 days left</span>
                            </div>
                          )}
                          {campaign.status === 'completed' && (
                                <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full">
                              <CheckCircle className="w-4 h-4" />
                                  <span className="font-medium">Completed</span>
                                </div>
                              )}
                              {campaign.status === 'planning' && (
                                <div className="flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 rounded-full">
                                  <Calendar className="w-4 h-4" />
                                  <span className="font-medium">Planning Phase</span>
                                </div>
                              )}
                              {campaign.status === 'paused' && (
                                <div className="flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 rounded-full">
                                  <Pause className="w-4 h-4" />
                                  <span className="font-medium">Paused</span>
                                </div>
                              )}
                            </div>
                            
                            <div className="flex gap-2">
                              <Link to={`/campaign/${campaign.id}`}>
                                <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform">
                                  <Eye className="w-4 h-4" />
                                  View
                                </Button>
                              </Link>
                              <Button variant="outline" size="sm" onClick={() => handleEdit(campaign)} className="gap-2 hover:scale-105 transition-transform">
                                <Edit className="w-4 h-4" />
                                Edit
                              </Button>
                              <Button variant="destructive" size="sm" onClick={() => handleDelete(campaign.id)} className="gap-2 hover:scale-105 transition-transform">
                                <Trash2 className="w-4 h-4" />
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="influencers" className="space-y-6">
              <div className="grid gap-6">
                {recentInfluencers.map((influencer) => (
                  <Card key={influencer.id} className="card-elevated hover:scale-[1.02] transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                              {influencer.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold mb-1">{influencer.name}</h4>
                            <p className="text-slate-400 mb-2">{influencer.username}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4 text-blue-500" />
                                <span>125K followers</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="w-4 h-4 text-red-500" />
                                <span>4.2% engagement</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-2xl font-bold text-green-600 mb-1">{influencer.proposal}</p>
                            <Badge className={`${getStatusColor(influencer.status)} px-3 py-1`}>
                              {influencer.status}
                            </Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform">
                              <Eye className="w-4 h-4" />
                              View
                            </Button>
                            <Button variant="default" size="sm" className="gap-2 hover:scale-105 transition-transform">
                              <MessageCircle className="w-4 h-4" />
                              Chat
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              {/* Analytics Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="card-elevated border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Total Impressions</p>
                        <p className="text-3xl font-bold text-blue-600">2.4M</p>
                        <p className="text-sm text-green-600 flex items-center gap-1">
                          <ArrowUpRight className="w-3 h-3" />
                          +23% from last month
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Engagement Rate</p>
                        <p className="text-3xl font-bold text-green-600">4.2%</p>
                        <p className="text-sm text-green-600 flex items-center gap-1">
                          <ArrowUpRight className="w-3 h-3" />
                          +0.8% from last month
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated border-l-4 border-l-purple-500">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Click-Through Rate</p>
                        <p className="text-3xl font-bold text-purple-600">3.8%</p>
                        <p className="text-sm text-green-600 flex items-center gap-1">
                          <ArrowUpRight className="w-3 h-3" />
                          +1.2% from last month
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Share2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Campaign Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Chart Area */}
                      <div className="h-64 relative">
                        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                          {/* Grid Lines */}
                          {[0, 1, 2, 3, 4].map((i) => (
                            <line
                              key={i}
                              x1="0"
                              y1={40 + i * 40}
                              x2="400"
                              y2={40 + i * 40}
                              stroke="currentColor"
                              strokeWidth="0.5"
                              className="text-slate-700"
                              opacity="0.2"
                            />
                          ))}
                          {/* Data Line */}
                          <polyline
                            points="20,160 60,140 100,120 140,100 180,90 220,85 260,75 300,70 340,65 380,60"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            className="drop-shadow-lg"
                          />
                          {/* Gradient Definition */}
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                          </defs>
                          {/* Area Fill */}
                          <polygon
                            points="20,160 60,140 100,120 140,100 180,90 220,85 260,75 300,70 340,65 380,60 380,200 20,200"
                            fill="url(#gradient)"
                            opacity="0.2"
                          />
                          {/* Data Points */}
                          {[
                            { x: 20, y: 160 },
                            { x: 60, y: 140 },
                            { x: 100, y: 120 },
                            { x: 140, y: 100 },
                            { x: 180, y: 90 },
                            { x: 220, y: 85 },
                            { x: 260, y: 75 },
                            { x: 300, y: 70 },
                            { x: 340, y: 65 },
                            { x: 380, y: 60 },
                          ].map((point, i) => (
                            <circle
                              key={i}
                              cx={point.x}
                              cy={point.y}
                              r="4"
                              fill="#3b82f6"
                              className="drop-shadow-md"
                            />
                          ))}
                        </svg>
                        {/* Y-Axis Labels */}
                        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-400 py-2">
                          <span>100K</span>
                          <span>75K</span>
                          <span>50K</span>
                          <span>25K</span>
                          <span>0</span>
                        </div>
                        {/* X-Axis Labels */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-400 px-4 pb-2">
                          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map((month) => (
                            <span key={month}>{month}</span>
                          ))}
                        </div>
                      </div>
                      {/* Stats Summary */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">2.4M</div>
                          <div className="text-xs text-slate-400">Total Impressions</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">+23%</div>
                          <div className="text-xs text-slate-400">Growth Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">4.2%</div>
                          <div className="text-xs text-slate-400">Avg Engagement</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      Top Performing Content
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { title: "Summer Collection Launch", influencer: "@sofiabeauty", likes: 18.5, shares: 3.2, engagement: 15.8, image: "👗" },
                      { title: "Product Review Video", influencer: "@alexgamesyt", likes: 22.3, shares: 4.1, engagement: 18.2, image: "🎮" },
                      { title: "Fitness Challenge Post", influencer: "@marcusfitlife", likes: 15.7, shares: 2.8, engagement: 13.5, image: "💪" },
                    ].map((content, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl hover:scale-105 transition-transform border border-border">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                            {content.image}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold text-purple-600 bg-purple-100 dark:bg-purple-900/20 px-2 py-0.5 rounded">#{i + 1}</span>
                              <p className="font-semibold text-base">{content.title}</p>
                            </div>
                            <p className="text-sm text-slate-400 mb-2">{content.influencer}</p>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1 text-red-500">
                                <Heart className="w-3.5 h-3.5 fill-red-500" />
                                <span className="text-xs font-medium">{content.likes}K</span>
                              </div>
                              <div className="flex items-center gap-1 text-blue-500">
                                <Share2 className="w-3.5 h-3.5" />
                                <span className="text-xs font-medium">{content.shares}K</span>
                              </div>
                              <div className="flex items-center gap-1 text-green-500">
                                <TrendingUp className="w-3.5 h-3.5" />
                                <span className="text-xs font-medium">{content.engagement}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-green-600">{content.engagement}K</p>
                          <p className="text-xs text-slate-400">total engagement</p>
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
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Recent Messages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Sofia Chen", username: "@sofiabeauty", initials: "SC", time: "2h ago", message: "Thank you for the campaign details! I'm excited to work with your brand. I have some creative ideas that align perfectly with your vision. When would be a good time to discuss?", campaign: "Summer Fashion Collection", proposal: "$8,200", online: true },
                    { name: "Alex Rivera", username: "@alexgamesyt", initials: "AR", time: "5h ago", message: "Hi! I've reviewed the campaign brief and I'm very interested. My audience would love this collaboration. Can we schedule a call to discuss the deliverables?", campaign: "Tech Product Launch", proposal: "$5,500", online: true },
                    { name: "Marcus Johnson", username: "@marcusfitlife", initials: "MJ", time: "1d ago", message: "Thanks for reaching out! I'd love to be part of this campaign. I have availability next month and can deliver high-quality fitness content that resonates with your target audience.", campaign: "Fitness Challenge", proposal: "$4,800", online: false },
                    { name: "Emma Thompson", username: "@emmafoodie", initials: "ET", time: "2d ago", message: "Hello! I'm interested in collaborating on this food campaign. I specialize in authentic recipe content and have great engagement with food enthusiasts. Let me know if you'd like to see my portfolio!", campaign: "Food Product Launch", proposal: "$3,200", online: false },
                    { name: "Maya Patel", username: "@mayacreates", initials: "MP", time: "3d ago", message: "Hi there! I've been following your brand and I'm thrilled about this opportunity. I can create stunning fashion content that showcases your products beautifully. Looking forward to working together!", campaign: "Fashion Collection", proposal: "$6,800", online: false },
                  ].map((msg, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950/20 dark:hover:to-purple-950/20 rounded-xl cursor-pointer transition-all duration-200 hover:scale-[1.02] border border-border">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {msg.initials}
                          </span>
                        </div>
                        {msg.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-bold text-lg">{msg.name}</h4>
                            <p className="text-sm text-slate-400">{msg.username}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-400">{msg.time}</span>
                            {msg.online && <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>}
                          </div>
                        </div>
                        <p className="text-slate-400 mb-3 line-clamp-2">
                          {msg.message}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-blue-500">
                            <MessageCircle className="w-3 h-3" />
                            <span className="font-medium">{msg.campaign}</span>
                          </div>
                          <div className="flex items-center gap-1 text-green-500">
                            <DollarSign className="w-3 h-3" />
                            <span className="font-medium">Proposal: {msg.proposal}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform">
                        <MessageCircle className="w-4 h-4" />
                        Reply
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Enhanced Edit Campaign Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto bg-black border-2 border-gray-800 shadow-2xl">
          <DialogHeader className="pb-8 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Edit className="w-8 h-8 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-3xl font-bold text-white">
                    Edit Campaign
                  </DialogTitle>
                  <p className="text-slate-400 mt-2 text-lg">
                    Update your campaign details and settings
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-400">Auto-save enabled</span>
              </div>
            </div>
          </DialogHeader>
          
          {editingCampaign && (
            <div className="space-y-8">
              {/* Basic Information */}
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                    <Target className="w-6 h-6 text-white" />
                  </div>
              <div>
                    <h3 className="text-2xl font-bold text-white">Basic Information</h3>
                    <p className="text-sm text-slate-400">Essential campaign details and settings</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="edit-title" className="text-base font-semibold flex items-center gap-2 text-white">
                      <Star className="w-4 h-4 text-blue-400" />
                      Campaign Title *
                    </Label>
                <Input
                  id="edit-title"
                  value={editingCampaign.title}
                  onChange={(e) => setEditingCampaign({...editingCampaign, title: e.target.value})}
                      className={`h-14 text-base border-2 ${editErrors.title ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500/20'} focus:ring-2 transition-all duration-200 bg-gray-800 text-white placeholder:text-slate-400`}
                      placeholder="Enter campaign title"
                    />
                    {editErrors.title && <p className="text-destructive text-sm">{editErrors.title}</p>}
                    <p className="text-xs text-slate-400">Choose a clear, descriptive title for your campaign</p>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="edit-status" className="text-base font-semibold flex items-center gap-2 text-white">
                      <Activity className="w-4 h-4 text-purple-400" />
                      Status *
                    </Label>
                    <Select
                      value={editingCampaign.status}
                      onValueChange={(value) => setEditingCampaign({...editingCampaign, status: value})}
                    >
                      <SelectTrigger className="h-14 text-base border-2 border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 bg-gray-800 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="planning">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span>Planning</span>
                            <Badge variant="secondary" className="ml-auto">Draft</Badge>
                          </div>
                        </SelectItem>
                        <SelectItem value="active">
                          <div className="flex items-center gap-3">
                            <Play className="w-4 h-4 text-green-500" />
                            <span>Active</span>
                            <Badge variant="default" className="ml-auto bg-green-500">Live</Badge>
                          </div>
                        </SelectItem>
                        <SelectItem value="completed">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-gray-500" />
                            <span>Completed</span>
                            <Badge variant="secondary" className="ml-auto">Done</Badge>
                          </div>
                        </SelectItem>
                        <SelectItem value="paused">
                          <div className="flex items-center gap-3">
                            <Pause className="w-4 h-4 text-yellow-500" />
                            <span>Paused</span>
                            <Badge variant="secondary" className="ml-auto bg-yellow-500">Hold</Badge>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-slate-400">Current status of your campaign</p>
                  </div>
              </div>

                <div className="space-y-3 mt-6">
                  <Label htmlFor="edit-description" className="text-base font-semibold flex items-center gap-2 text-white">
                    <Globe className="w-4 h-4 text-green-400" />
                    Description *
                  </Label>
                <Textarea
                  id="edit-description"
                  value={editingCampaign.description}
                  onChange={(e) => setEditingCampaign({...editingCampaign, description: e.target.value})}
                    rows={5}
                    className={`text-base resize-none border-2 ${editErrors.description ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-gray-700 focus:border-green-500 focus:ring-green-500/20'} focus:ring-2 transition-all duration-200 bg-gray-800 text-white placeholder:text-slate-400`}
                    placeholder="Describe your campaign goals, target audience, and what you want to achieve..."
                />
                  {editErrors.description && <p className="text-destructive text-sm">{editErrors.description}</p>}
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>Provide detailed information about your campaign</span>
                    <span>{editingCampaign.description?.length || 0} characters</span>
                  </div>
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">Budget & Timeline</h3>
                    <p className="text-sm text-slate-400">Financial planning and campaign duration</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  <div className="space-y-3">
                    <Label htmlFor="edit-budget" className="text-base font-semibold flex items-center gap-2 text-white">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      Total Budget *
                    </Label>
                  <Input
                    id="edit-budget"
                    value={editingCampaign.budget}
                    onChange={(e) => setEditingCampaign({...editingCampaign, budget: e.target.value})}
                      className={`h-14 text-base border-2 ${editErrors.budget ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-gray-700 focus:border-green-500 focus:ring-green-500/20'} focus:ring-2 transition-all duration-200 bg-gray-800 text-white placeholder:text-slate-400`}
                      placeholder="$25,000"
                    />
                    {editErrors.budget && <p className="text-destructive text-sm">{editErrors.budget}</p>}
                    <p className="text-xs text-slate-400">Total amount allocated for this campaign</p>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="edit-spent" className="text-base font-semibold flex items-center gap-2 text-white">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      Amount Spent
                    </Label>
                    <Input
                      id="edit-spent"
                      value={editingCampaign.spent}
                      onChange={(e) => setEditingCampaign({...editingCampaign, spent: e.target.value})}
                      className="h-14 text-base border-2 border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-gray-800 text-white placeholder:text-slate-400"
                      placeholder="$18,500"
                    />
                    <p className="text-xs text-slate-400">Amount already spent on this campaign</p>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="edit-influencers" className="text-base font-semibold flex items-center gap-2 text-white">
                      <Users className="w-4 h-4 text-purple-400" />
                      Target Influencers
                    </Label>
                    <Input
                      id="edit-influencers"
                      type="number"
                      value={editingCampaign.influencers}
                      onChange={(e) => setEditingCampaign({...editingCampaign, influencers: parseInt(e.target.value) || 0})}
                      className="h-14 text-base border-2 border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 bg-gray-800 text-white placeholder:text-slate-400"
                      placeholder="12"
                    />
                    <p className="text-xs text-slate-400">Number of influencers to work with</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="edit-start-date" className="text-base font-semibold flex items-center gap-2 text-white">
                      <Calendar className="w-4 h-4 text-orange-400" />
                      Start Date *
                    </Label>
                    <Input
                      id="edit-start-date"
                      type="date"
                      value={editingCampaign.startDate}
                      onChange={(e) => setEditingCampaign({...editingCampaign, startDate: e.target.value})}
                      className={`h-14 text-base border-2 ${editErrors.startDate ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-gray-700 focus:border-orange-500 focus:ring-orange-500/20'} focus:ring-2 transition-all duration-200 bg-gray-800 text-white`}
                    />
                    {editErrors.startDate && <p className="text-destructive text-sm">{editErrors.startDate}</p>}
                    <p className="text-xs text-slate-400">When the campaign will begin</p>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="edit-end-date" className="text-base font-semibold flex items-center gap-2 text-white">
                      <Clock className="w-4 h-4 text-red-400" />
                      End Date *
                    </Label>
                    <Input
                      id="edit-end-date"
                      type="date"
                      value={editingCampaign.endDate}
                      onChange={(e) => setEditingCampaign({...editingCampaign, endDate: e.target.value})}
                      className={`h-14 text-base border-2 ${editErrors.endDate ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-gray-700 focus:border-red-500 focus:ring-red-500/20'} focus:ring-2 transition-all duration-200 bg-gray-800 text-white`}
                    />
                    {editErrors.endDate && <p className="text-destructive text-sm">{editErrors.endDate}</p>}
                    <p className="text-xs text-slate-400">When the campaign will end</p>
                  </div>
                </div>

                {/* Budget Summary */}
                {editingCampaign.budget && editingCampaign.spent && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl border border-green-700">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-white">Budget Summary</span>
                      <span className="text-sm font-semibold text-green-400">
                        {((parseFloat(editingCampaign.spent.replace(/[$,]/g, '')) / parseFloat(editingCampaign.budget.replace(/[$,]/g, ''))) * 100).toFixed(1)}% used
                      </span>
                    </div>
                    <Progress 
                      value={(parseFloat(editingCampaign.spent.replace(/[$,]/g, '')) / parseFloat(editingCampaign.budget.replace(/[$,]/g, ''))) * 100} 
                      className="h-2" 
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-2">
                      <span>Spent: {editingCampaign.spent}</span>
                      <span>Remaining: ${(parseFloat(editingCampaign.budget.replace(/[$,]/g, '')) - parseFloat(editingCampaign.spent.replace(/[$,]/g, ''))).toLocaleString()}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Performance Metrics */}
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-md">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">Performance Metrics</h3>
                    <p className="text-sm text-slate-400">Campaign analytics and progress tracking</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <Label htmlFor="edit-applications" className="text-base font-semibold flex items-center gap-2 text-white">
                      <Users className="w-4 h-4 text-purple-400" />
                      Applications Received
                    </Label>
                    <Input
                      id="edit-applications"
                      type="number"
                      value={editingCampaign.applications}
                      onChange={(e) => setEditingCampaign({...editingCampaign, applications: parseInt(e.target.value) || 0})}
                      className="h-14 text-base border-2 border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 bg-gray-800 text-white placeholder:text-slate-400"
                      placeholder="47"
                    />
                    <p className="text-xs text-slate-400">Number of influencer applications received</p>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="edit-progress" className="text-base font-semibold flex items-center gap-2 text-white">
                      <TrendingUp className="w-4 h-4 text-pink-400" />
                      Progress (%)
                    </Label>
                    <Input
                      id="edit-progress"
                      type="number"
                      min="0"
                      max="100"
                      value={editingCampaign.progress}
                      onChange={(e) => setEditingCampaign({...editingCampaign, progress: parseInt(e.target.value) || 0})}
                      className="h-14 text-base border-2 border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-200 bg-gray-800 text-white placeholder:text-slate-400"
                      placeholder="74"
                    />
                    <p className="text-xs text-slate-400">Overall campaign completion percentage</p>
                  </div>
                </div>

                {/* Enhanced Progress Preview */}
                <div className="space-y-4 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-700">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">Campaign Progress</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-purple-400">{editingCampaign.progress}%</span>
                      {editingCampaign.progress >= 100 && <CheckCircle className="w-5 h-5 text-green-500" />}
                    </div>
                  </div>
                  <Progress value={editingCampaign.progress} className="h-4" />
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>Started</span>
                    <span>In Progress</span>
                    <span>Completed</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Campaign Summary */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
              <div>
                    <h3 className="text-2xl font-bold text-white">Campaign Summary</h3>
                    <p className="text-sm text-slate-400">Overview of your campaign details</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-800/60 rounded-xl border border-gray-700">
                      <span className="text-slate-400">Title:</span>
                      <span className="font-semibold text-right max-w-[200px] truncate text-white">{editingCampaign.title || "Not specified"}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-800/60 rounded-xl border border-gray-700">
                      <span className="text-slate-400">Status:</span>
                      <Badge className={getStatusColor(editingCampaign.status)}>
                        {editingCampaign.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-800/60 rounded-xl border border-gray-700">
                      <span className="text-slate-400">Budget:</span>
                      <span className="font-semibold text-green-400">{editingCampaign.budget || "Not specified"}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-800/60 rounded-xl border border-gray-700">
                      <span className="text-slate-400">Duration:</span>
                      <span className="font-semibold text-right text-white">
                        {editingCampaign.startDate && editingCampaign.endDate 
                          ? `${editingCampaign.startDate} to ${editingCampaign.endDate}` 
                          : "Not specified"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-800/60 rounded-xl border border-gray-700">
                      <span className="text-slate-400">Influencers:</span>
                      <span className="font-semibold text-purple-400">{editingCampaign.influencers || 0}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-800/60 rounded-xl border border-gray-700">
                      <span className="text-slate-400">Progress:</span>
                      <span className="font-semibold text-blue-400">{editingCampaign.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="pt-8 border-t border-slate-700 bg-slate-800/50 -mx-6 -mb-6 px-6 py-6 rounded-b-2xl">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button 
                variant="outline" 
                onClick={() => setIsEditDialogOpen(false)}
                className="flex-1 sm:flex-none h-12 text-base border-2 border-gray-700 hover:border-gray-600 hover:bg-gray-800 hover:scale-105 transition-all duration-200 text-white"
              >
              Cancel
            </Button>
              <Button 
                onClick={handleSaveEdit}
                className="flex-1 sm:flex-none h-12 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg gap-2 text-white"
              >
                <CheckCircle className="w-5 h-5" />
              Save Changes
            </Button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-slate-700/30">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Auto-save enabled</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Clock className="w-3 h-3" />
                <span>Last saved: Just now</span>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, DollarSign, Calendar, Users, Zap, CheckCircle, Sparkles, Globe, Clock, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { 
    id: 1, 
    title: "Campaign Details", 
    subtitle: "Tell us about your campaign",
    icon: Target,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    id: 2, 
    title: "Target Audience", 
    subtitle: "Define your ideal audience",
    icon: Users,
    color: "from-purple-500 to-pink-500"
  },
  { 
    id: 3, 
    title: "Budget & Timeline", 
    subtitle: "Set your investment & schedule",
    icon: DollarSign,
    color: "from-green-500 to-emerald-500"
  },
  { 
    id: 4, 
    title: "Requirements", 
    subtitle: "Finalize your campaign",
    icon: Zap,
    color: "from-orange-500 to-red-500"
  }
];

const platforms = [
  { name: "Instagram", icon: "📸", color: "from-pink-500 to-purple-500" },
  { name: "YouTube", icon: "📺", color: "from-red-500 to-red-600" },
  { name: "TikTok", icon: "🎵", color: "from-black to-gray-800" },
  { name: "Twitter", icon: "🐦", color: "from-blue-400 to-blue-500" },
  { name: "Facebook", icon: "👥", color: "from-blue-600 to-blue-700" },
  { name: "LinkedIn", icon: "💼", color: "from-blue-700 to-blue-800" }
];

const niches = [
  { name: "Gaming", icon: "🎮", color: "from-purple-500 to-indigo-500" },
  { name: "Beauty", icon: "💄", color: "from-pink-400 to-rose-500" },
  { name: "Fitness", icon: "💪", color: "from-green-500 to-teal-500" },
  { name: "Food", icon: "🍕", color: "from-orange-500 to-yellow-500" },
  { name: "Travel", icon: "✈️", color: "from-cyan-500 to-blue-500" },
  { name: "Tech", icon: "💻", color: "from-gray-600 to-gray-700" },
  { name: "Fashion", icon: "👗", color: "from-purple-400 to-pink-400" },
  { name: "Lifestyle", icon: "🌟", color: "from-yellow-400 to-orange-400" }
];

export default function CampaignCreate() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    campaignTitle: "",
    campaignDescription: "",
    ageRange: "",
    gender: "",
    location: "",
    budget: "",
    budgetType: "",
    startDate: "",
    endDate: "",
    deliverables: "",
    contentRequirements: "",
    hashtags: "",
    additionalNotes: ""
  });
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleNicheToggle = (niche: string) => {
    setSelectedNiches(prev => 
      prev.includes(niche) 
        ? prev.filter(n => n !== niche)
        : [...prev, niche]
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number): boolean => {
    const stepErrors: Record<string, string> = {};
    if (step === 1) {
      if (!formData.campaignTitle?.trim()) stepErrors.campaignTitle = "Title is required";
      if (!formData.campaignDescription?.trim()) stepErrors.campaignDescription = "Description is required";
      if (selectedPlatforms.length === 0) stepErrors.platforms = "Select at least one platform";
    }
    if (step === 3) {
      if (!formData.budget?.trim()) stepErrors.budget = "Budget is required";
      if (!formData.startDate) stepErrors.startDate = "Start date is required";
      if (!formData.endDate) stepErrors.endDate = "End date is required";
      if (formData.startDate && formData.endDate && new Date(formData.startDate) > new Date(formData.endDate)) {
        stepErrors.endDate = "End date must be after start date";
      }
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep(currentStep)) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(prev => Math.min(prev + 1, 4));
      setIsAnimating(false);
    }, 150);
  };

  const prevStep = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(prev => Math.max(prev - 1, 1));
      setIsAnimating(false);
    }, 150);
  };

  const progressPercentage = (currentStep / 4) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Create Your Campaign
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's find the perfect influencers for your brand
            </p>
          </div>

          {/* Stepper */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="max-w-2xl mx-auto mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Step {currentStep} of 4</span>
                <span className="text-sm font-medium text-primary">{Math.round(progressPercentage)}% Complete</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step) => {
                const IconComponent = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;
                
                return (
                  <div key={step.id} className="text-center group cursor-pointer" onClick={() => currentStep > step.id && setCurrentStep(step.id)}>
                    <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-r ${step.color} text-white shadow-lg scale-110` 
                        : isCompleted 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md'
                        : 'bg-card border-2 border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <IconComponent className="w-6 h-6" />
                      )}
                    </div>
                    <div className={`text-sm font-semibold ${isActive ? 'text-primary' : isCompleted ? 'text-green-600' : 'text-muted-foreground group-hover:text-primary'}`}>
                      {step.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`max-w-4xl mx-auto transition-all duration-300 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <form className="space-y-8">
              {/* Step 1: Campaign Details */}
              {currentStep === 1 && (
              <Card className="card-elevated">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Campaign Details
                  </CardTitle>
                  <CardDescription>
                    Tell us about your campaign
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="campaign-title">Campaign Title *</Label>
                      <Input 
                        id="campaign-title" 
                        placeholder="e.g., Summer Fashion Collection 2024"
                        className={`h-12 text-base ${errors.campaignTitle ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        value={formData.campaignTitle}
                        onChange={(e) => handleInputChange("campaignTitle", e.target.value)}
                      />
                      {errors.campaignTitle && <p className="text-destructive text-sm">{errors.campaignTitle}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Campaign Type</Label>
                      <Select>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select campaign type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product-launch">Product Launch</SelectItem>
                          <SelectItem value="brand-awareness">Brand Awareness</SelectItem>
                          <SelectItem value="sales-promotion">Sales Promotion</SelectItem>
                          <SelectItem value="event-promotion">Event Promotion</SelectItem>
                          <SelectItem value="seasonal-campaign">Seasonal Campaign</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="campaign-description">Campaign Description *</Label>
                    <Textarea 
                      id="campaign-description" 
                      placeholder="Describe your campaign goals, target audience, and what you want to achieve..."
                      className={`min-h-[140px] text-base resize-none ${errors.campaignDescription ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      value={formData.campaignDescription}
                      onChange={(e) => handleInputChange("campaignDescription", e.target.value)}
                    />
                    {errors.campaignDescription && <p className="text-destructive text-sm">{errors.campaignDescription}</p>}
                  </div>

                  <div className="space-y-3">
                    <Label>Target Platforms *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {platforms.map((platform) => (
                        <div 
                          key={platform.name} 
                          className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                            selectedPlatforms.includes(platform.name)
                              ? `border-primary bg-gradient-to-r ${platform.color} text-white shadow-lg`
                              : 'border-border bg-card hover:border-primary/50'
                          }`}
                          onClick={() => handlePlatformToggle(platform.name)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{platform.icon}</span>
                            <span className="font-medium">{platform.name}</span>
                          </div>
                          {selectedPlatforms.includes(platform.name) && (
                            <div className="absolute top-2 right-2">
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {errors.platforms && <p className="text-destructive text-sm">{errors.platforms}</p>}
                    {selectedPlatforms.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-sm text-muted-foreground">Selected:</span>
                        {selectedPlatforms.map((platform) => (
                          <Badge key={platform} variant="secondary" className="text-sm">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              )}

              {/* Step 2: Target Audience */}
              {currentStep === 2 && (
              <Card className="card-elevated">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Target Audience
                  </CardTitle>
                  <CardDescription>
                    Define your ideal audience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="age-range">Age Range *</Label>
                      <Select value={formData.ageRange} onValueChange={(value) => handleInputChange("ageRange", value)}>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="13-17">13-17 (Teen)</SelectItem>
                          <SelectItem value="18-24">18-24 (Gen Z)</SelectItem>
                          <SelectItem value="25-34">25-34 (Millennial)</SelectItem>
                          <SelectItem value="35-44">35-44 (Gen X)</SelectItem>
                          <SelectItem value="45-54">45-54 (Gen X)</SelectItem>
                          <SelectItem value="55+">55+ (Boomer+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Genders</SelectItem>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="non-binary">Non-binary</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input 
                        id="location" 
                        placeholder="e.g., Thailand, Global"
                        className="h-12 text-base"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Target Niches *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {niches.map((niche) => (
                        <div 
                          key={niche.name} 
                          className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                            selectedNiches.includes(niche.name)
                              ? `border-primary bg-gradient-to-r ${niche.color} text-white shadow-lg`
                              : 'border-border bg-card hover:border-primary/50'
                          }`}
                          onClick={() => handleNicheToggle(niche.name)}
                        >
                          <div className="flex flex-col items-center gap-2 text-center">
                            <span className="text-3xl">{niche.icon}</span>
                            <span className="font-medium text-sm">{niche.name}</span>
                          </div>
                          {selectedNiches.includes(niche.name) && (
                            <div className="absolute top-2 right-2">
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {selectedNiches.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-sm text-muted-foreground">Selected niches:</span>
                        {selectedNiches.map((niche) => (
                          <Badge key={niche} variant="secondary" className="text-sm">
                            {niche}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              )}

              {/* Step 3: Budget & Timeline */}
              {currentStep === 3 && (
              <Card className="card-elevated">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Budget & Timeline
                  </CardTitle>
                  <CardDescription>
                    Set your investment & schedule
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Campaign Budget *</Label>
                      <Input 
                        id="budget" 
                        placeholder="e.g., 50000"
                        className={`h-12 text-base ${errors.budget ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        value={formData.budget}
                        onChange={(e) => handleInputChange("budget", e.target.value)}
                      />
                      {errors.budget && <p className="text-destructive text-sm">{errors.budget}</p>}
                      <p className="text-sm text-muted-foreground">Enter amount in THB</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget-type">Budget Type *</Label>
                      <Select value={formData.budgetType} onValueChange={(value) => handleInputChange("budgetType", value)}>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select budget type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="total">Total Campaign Budget</SelectItem>
                          <SelectItem value="per-influencer">Per Influencer</SelectItem>
                          <SelectItem value="per-post">Per Post</SelectItem>
                          <SelectItem value="per-impression">Per 1000 Impressions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">Campaign Start *</Label>
                      <Input 
                        id="start-date" 
                        type="date"
                        className={`h-12 text-base ${errors.startDate ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        value={formData.startDate}
                        onChange={(e) => handleInputChange("startDate", e.target.value)}
                      />
                      {errors.startDate && <p className="text-destructive text-sm">{errors.startDate}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="end-date">Campaign End *</Label>
                      <Input 
                        id="end-date" 
                        type="date"
                        className={`h-12 text-base ${errors.endDate ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        value={formData.endDate}
                        onChange={(e) => handleInputChange("endDate", e.target.value)}
                      />
                      {errors.endDate && <p className="text-destructive text-sm">{errors.endDate}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deliverables">Number of Deliverables *</Label>
                    <Select value={formData.deliverables} onValueChange={(value) => handleInputChange("deliverables", value)}>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Select number of posts" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Post</SelectItem>
                        <SelectItem value="3">3 Posts</SelectItem>
                        <SelectItem value="5">5 Posts</SelectItem>
                        <SelectItem value="10">10 Posts</SelectItem>
                        <SelectItem value="custom">Custom Amount</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
              )}

              {/* Step 4: Requirements */}
              {currentStep === 4 && (
              <Card className="card-elevated">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Requirements
                  </CardTitle>
                  <CardDescription>
                    Finalize your campaign
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="content-requirements">Content Requirements</Label>
                    <Textarea 
                      id="content-requirements" 
                      placeholder="Specify any content requirements, brand guidelines, key messages, or creative direction..."
                      className="min-h-[140px] text-base resize-none"
                      value={formData.contentRequirements}
                      onChange={(e) => handleInputChange("contentRequirements", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hashtags">Required Hashtags</Label>
                    <Input 
                      id="hashtags" 
                      placeholder="#brandname #campaign2024 #summer #fashion"
                      className="h-12 text-base"
                      value={formData.hashtags}
                      onChange={(e) => handleInputChange("hashtags", e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">Separate hashtags with spaces</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional-notes">Additional Notes</Label>
                    <Textarea 
                      id="additional-notes" 
                      placeholder="Any additional information, special instructions, or requirements for influencers..."
                      className="min-h-[120px] text-base resize-none"
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
              )}

              <div className="flex items-center justify-between">
                <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                  Back
                </Button>
                {currentStep < 4 ? (
                  <Button type="button" onClick={nextStep}>
                    Next
                  </Button>
                ) : (
                  <Button 
                    type="button"
                    onClick={() => {
                      toast({
                        title: "🎉 Campaign Created Successfully!",
                        description: "Your campaign has been created and is now live. We'll start matching you with perfect influencers!",
                      });
                      navigate("/brand/dashboard");
                    }}
                  >
                    Launch Campaign
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
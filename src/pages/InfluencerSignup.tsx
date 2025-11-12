import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Instagram, Youtube, Music, Twitter, Facebook, Users, Star, TrendingUp, User, DollarSign, CheckCircle, Upload, X, Image as ImageIcon, AlertCircle } from "lucide-react";
import analyticsExample from "@/assets/analytics engagement.jpg";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const InfluencerSignup = () => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    category: "",
    location: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    twitter: "",
    facebook: "",
    followers: "",
    engagement: "",
    languages: [] as string[],
    contentTypes: [] as string[],
    availability: "",
    rate: "",
    experience: "",
    portfolio: "",
    engagementScreenshots: [] as File[],
    terms: false,
  });

  const categories = [
    "Beauty & Fashion",
    "Fitness & Health",
    "Gaming",
    "Food & Cooking",
    "Travel",
    "Technology",
    "Lifestyle",
    "Education",
    "Business",
    "Entertainment",
    "Sports",
    "Art & Design"
  ];

  const contentTypes = [
    "Photos",
    "Videos",
    "Stories",
    "Reels",
    "Live Streams",
    "Blog Posts",
    "Reviews",
    "Tutorials"
  ];

  const languages = [
    "Thai",
    "English",
    "Chinese",
    "Japanese",
    "Korean",
    "Spanish",
    "French",
    "German"
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const steps = [
    { id: 1, title: "Personal Information", subtitle: "Basic profile details", icon: User, color: "from-blue-500 to-cyan-500" },
    { id: 2, title: "Social Media", subtitle: "Your social accounts", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { id: 3, title: "Content & Category", subtitle: "Your expertise", icon: Star, color: "from-purple-500 to-pink-500" },
    { id: 4, title: "Business & Submit", subtitle: "Rates and terms", icon: DollarSign, color: "from-orange-500 to-red-500" },
  ];

  const progressPercentage = (currentStep / steps.length) * 100;

  const validateStep = (step: number): boolean => {
    const nextErrors: Record<string, string> = {};
    if (step === 1) {
      if (!formData.name.trim()) nextErrors.name = "Full name is required";
      if (!formData.email.trim()) nextErrors.email = "Email is required";
      if (!formData.phone.trim()) nextErrors.phone = "Phone is required";
      if (!formData.bio.trim()) nextErrors.bio = "Bio is required";
    }
    if (step === 3) {
      if (!formData.category.trim()) nextErrors.category = "Category is required";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep(currentStep)) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
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

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field as keyof typeof prev] as string[], value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const validate = (): boolean => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = "Full name is required";
    if (!formData.email.trim()) nextErrors.email = "Email is required";
    if (!formData.phone.trim()) nextErrors.phone = "Phone number is required";
    if (!formData.bio.trim()) nextErrors.bio = "Bio is required";
    if (!formData.category.trim()) nextErrors.category = "Category is required";
    if (!formData.terms) nextErrors.terms = "You must accept terms";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((formData.engagementScreenshots?.length || 0) === 0) {
      setErrors(prev => ({ ...prev, engagement: "At least 1 analytics screenshot is required" }));
    }
    if (!validate() || (formData.engagementScreenshots?.length || 0) === 0) {
      toast({ title: "Please fix the errors", description: "Some fields are missing or invalid", variant: "destructive" });
      return;
    }

    // Simulate form submission
    toast({
      title: "สมัครสำเร็จ! 🎉",
      description: "เราได้รับข้อมูลของคุณแล้ว จะติดต่อกลับภายใน 24 ชั่วโมง",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      bio: "",
      category: "",
      location: "",
      instagram: "",
      youtube: "",
      tiktok: "",
      twitter: "",
      facebook: "",
      followers: "",
      engagement: "",
      languages: [],
      contentTypes: [],
      availability: "",
      rate: "",
      experience: "",
      portfolio: "",
      terms: false,
      engagementScreenshots: [],
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Become an Influencer
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join our influencer network and get opportunities to work with leading brands
            </p>
          </div>

          {/* Stepper */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="max-w-2xl mx-auto mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Step {currentStep} of 4</span>
                <span className="text-sm font-medium text-primary">{Math.round((currentStep/4)*100)}% Complete</span>
              </div>
              <Progress value={(currentStep/4)*100} className="h-3" />
            </div>
            <div className="grid grid-cols-4 gap-6">
              {[1,2,3,4].map((id) => {
                const map = {1:{title:'Personal',icon: Users},2:{title:'Social',icon: TrendingUp},3:{title:'Content',icon: Star},4:{title:'Business',icon: DollarSign}} as const;
                const Icon = map[id as 1|2|3|4].icon;
                const isActive = currentStep === id;
                const isCompleted = currentStep > id;
                return (
                  <div key={id} className="text-center group cursor-pointer" onClick={() => currentStep>id && setCurrentStep(id)}>
                    <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-110' : isCompleted ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md' : 'bg-card border-2 border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary'}`}>
                      {isCompleted ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                    </div>
                    <div className={`text-sm font-semibold ${isActive ? 'text-primary' : isCompleted ? 'text-green-600' : 'text-muted-foreground group-hover:text-primary'}`}>{map[id as 1|2|3|4].title}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`max-w-4xl mx-auto transition-all duration-300 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              {currentStep === 1 && (
              <Card className="card-elevated">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>
                    Fill in your basic information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className={`h-12 text-base ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        aria-invalid={!!errors.name}
                        required
                      />
                      {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        className={`h-12 text-base ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        aria-invalid={!!errors.email}
                        required
                      />
                      {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="08x-xxx-xxxx"
                        className={`h-12 text-base ${errors.phone ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        aria-invalid={!!errors.phone}
                        required
                      />
                      {errors.phone && <p className="text-destructive text-sm">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Address</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="Bangkok, Thailand"
                        className="h-12 text-base"
                      />
                    </div>
                  </div>
                  
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio *</Label>
                      <Textarea
                        id="bio"
                        value={formData.bio}
                        onChange={(e) => handleInputChange("bio", e.target.value)}
                        placeholder="Tell us about your story, interests, and content creation style..."
                        className={`min-h-[140px] text-base resize-none ${errors.bio ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        aria-invalid={!!errors.bio}
                        required
                      />
                      {errors.bio && <p className="text-destructive text-sm">{errors.bio}</p>}
                    </div>
                </CardContent>
              </Card>
              )}

              {/* Social Media */}
              {currentStep === 2 && (
              <Card className="card-elevated">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Social Media
                  </CardTitle>
                  <CardDescription>
                    Fill in your social media information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="instagram" className="flex items-center gap-2">
                        <Instagram className="w-4 h-4 text-pink-500" />
                        Instagram
                      </Label>
                      <Input
                        id="instagram"
                        value={formData.instagram}
                        onChange={(e) => handleInputChange("instagram", e.target.value)}
                        placeholder="@username"
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="youtube" className="flex items-center gap-2">
                        <Youtube className="w-4 h-4 text-red-500" />
                        YouTube
                      </Label>
                      <Input
                        id="youtube"
                        value={formData.youtube}
                        onChange={(e) => handleInputChange("youtube", e.target.value)}
                        placeholder="Channel name or URL"
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tiktok" className="flex items-center gap-2">
                        <Music className="w-4 h-4 text-black" />
                        TikTok
                      </Label>
                      <Input
                        id="tiktok"
                        value={formData.tiktok}
                        onChange={(e) => handleInputChange("tiktok", e.target.value)}
                        placeholder="@username"
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitter" className="flex items-center gap-2">
                        <Twitter className="w-4 h-4 text-blue-400" />
                        Twitter
                      </Label>
                      <Input
                        id="twitter"
                        value={formData.twitter}
                        onChange={(e) => handleInputChange("twitter", e.target.value)}
                        placeholder="@username"
                        className="h-12 text-base"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="followers">Total Followers (All Platforms)</Label>
                      <Input
                        id="followers"
                        value={formData.followers}
                        onChange={(e) => handleInputChange("followers", e.target.value)}
                        placeholder="e.g. 10,000"
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="engagement">Engagement Rate (%)</Label>
                      <Input
                        id="engagement"
                        value={formData.engagement}
                        onChange={(e) => handleInputChange("engagement", e.target.value)}
                        placeholder="e.g. 3.5"
                        className="h-12 text-base"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              )}

              {/* Content & Category */}
              {currentStep === 3 && (
              <Card className="card-elevated">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Content Type and Expertise
                  </CardTitle>
                  <CardDescription>
                    Select the content types you specialize in
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Main Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger className={`h-12 text-base ${errors.category ? 'border-destructive focus-visible:ring-destructive' : ''}`}>
                        <SelectValue placeholder="Select your expertise category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Content Types You Create</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {contentTypes.map((type) => {
                        const isSelected = formData.contentTypes.includes(type);
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleArrayChange("contentTypes", type, !isSelected)}
                            className={`relative flex items-center justify-center p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                              isSelected
                                ? "border-primary bg-primary/10 text-primary shadow-md"
                                : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5"
                            }`}
                          >
                            <span className="text-sm font-medium">{type}</span>
                            {isSelected && (
                              <div className="absolute top-1 right-1">
                                <CheckCircle className="w-4 h-4 text-primary" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Languages Used for Content Creation</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {languages.map((language) => {
                        const isSelected = formData.languages.includes(language);
                        return (
                          <button
                            key={language}
                            type="button"
                            onClick={() => handleArrayChange("languages", language, !isSelected)}
                            className={`relative flex items-center justify-center p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                              isSelected
                                ? "border-primary bg-primary/10 text-primary shadow-md"
                                : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5"
                            }`}
                          >
                            <span className="text-sm font-medium">{language}</span>
                            {isSelected && (
                              <div className="absolute top-1 right-1">
                                <CheckCircle className="w-4 h-4 text-primary" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
              )}

              {/* Business Information */}
              {currentStep === 4 && (
              <>
              <Card className="card-elevated">
                <CardHeader className="pb-6">
                  <CardTitle>Business Information</CardTitle>
                  <CardDescription>
                    Information about rates and experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="rate">Rate per Post (THB)</Label>
                      <Input
                        id="rate"
                        value={formData.rate}
                        onChange={(e) => handleInputChange("rate", e.target.value)}
                        placeholder="e.g. 5,000"
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability">Work Availability</Label>
                      <Select value={formData.availability} onValueChange={(value) => handleInputChange("availability", value)}>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="freelance">Freelance</SelectItem>
                          <SelectItem value="weekend">Weekend Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange("experience", e.target.value)}
                      placeholder="e.g. 2"
                      className="h-12 text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio or Work Link</Label>
                    <Input
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={(e) => handleInputChange("portfolio", e.target.value)}
                      placeholder="https://your-portfolio.com"
                      className="h-12 text-base"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Submit */}
              <Card className="card-elevated">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {/* Example analytics screenshot */}
                    <div className="space-y-2">
                      <Label>Example analytics screenshot</Label>
                      <div className="rounded-xl overflow-hidden border border-border bg-card max-w-md">
                        <img src={analyticsExample} alt="Analytics engagement example" className="w-full h-60 object-cover" />
                      </div>
                      <p className="text-xs text-muted-foreground">Attach screenshots like this from your platform analytics (reach, impressions, audience, etc.).</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="engagement">Platform Engagement Screenshots (Images) *</Label>
                      
                      {/* File Input with Better UX */}
                      <div className="space-y-3">
                        <div className="relative">
                          <input
                            id="engagement"
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={(e) => {
                              const files = e.target.files ? Array.from(e.target.files) : [];
                              handleInputChange("engagementScreenshots", files);
                            }}
                          />
                          <label htmlFor="engagement">
                            <div 
                              className={`flex items-center gap-3 p-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                                errors.engagement
                                  ? 'border-destructive bg-destructive/5'
                                  : 'border-border bg-card hover:border-primary/50 hover:bg-primary/5'
                              }`}
                              onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                e.currentTarget.classList.add('border-primary', 'bg-primary/10');
                              }}
                              onDragLeave={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                e.currentTarget.classList.remove('border-primary', 'bg-primary/10');
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                e.currentTarget.classList.remove('border-primary', 'bg-primary/10');
                                const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
                                if (files.length > 0) {
                                  handleInputChange("engagementScreenshots", files);
                                }
                              }}
                            >
                              <div className="flex-shrink-0">
                                <Upload className="w-5 h-5 text-muted-foreground" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium">
                                  {formData.engagementScreenshots?.length 
                                    ? `${formData.engagementScreenshots.length} file${formData.engagementScreenshots.length > 1 ? 's' : ''} selected`
                                    : 'Click to choose files or drag and drop'}
                                </p>
                                <p className="text-xs text-muted-foreground">JPG, PNG, GIF (Max 10MB per file)</p>
                              </div>
                              <Button type="button" variant="outline" size="sm" className="flex-shrink-0">
                                {formData.engagementScreenshots?.length ? 'Change' : 'Browse'}
                              </Button>
                            </div>
                          </label>
                        </div>

                        {/* File Previews */}
                        {formData.engagementScreenshots && formData.engagementScreenshots.length > 0 && (
                          <div className="space-y-2">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {formData.engagementScreenshots.map((file, index) => (
                                <div key={index} className="relative group border border-border rounded-lg overflow-hidden bg-card">
                                  <div className="aspect-square">
                                    <img
                                      src={URL.createObjectURL(file)}
                                      alt={`Preview ${index + 1}`}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const newFiles = formData.engagementScreenshots.filter((_, i) => i !== index);
                                      handleInputChange("engagementScreenshots", newFiles);
                                    }}
                                    className="absolute top-1 right-1 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-1.5 truncate">
                                    {file.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {formData.engagementScreenshots.length} file{formData.engagementScreenshots.length > 1 ? 's' : ''} ready to upload
                            </p>
                          </div>
                        )}

                        {/* Error Message */}
                        {errors.engagement && (
                          <div className="flex items-center gap-2 text-destructive text-sm">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            <span>{errors.engagement}</span>
                          </div>
                        )}

                        {/* Helper Text */}
                        {!formData.engagementScreenshots?.length && !errors.engagement && (
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            At least 1 screenshot is required
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.terms}
                        onCheckedChange={(checked) => handleInputChange("terms", checked)}
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I accept the{" "}
                        <a href="#" className="text-primary hover:underline">
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>{" "}
                        of Fulnfinz
                      </Label>
                    </div>
                    {errors.terms && <p className="text-destructive text-sm">{errors.terms}</p>}
                    
                    <Button type="submit" size="lg" className="w-full">
                      Apply to be an Influencer
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </>
              )}

              <div className="flex items-center justify-between">
                <Button type="button" variant="outline" onClick={() => { setIsAnimating(true); setTimeout(()=>{ setCurrentStep(s=>Math.max(1,s-1)); setIsAnimating(false);},150); }} disabled={currentStep===1}>Back</Button>
                {currentStep < 4 ? (
                  <Button type="button" onClick={() => { setIsAnimating(true); setTimeout(()=>{ setCurrentStep(s=>Math.min(4,s+1)); setIsAnimating(false);},150); }}>Next</Button>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerSignup;


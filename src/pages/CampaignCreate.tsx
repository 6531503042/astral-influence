import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, DollarSign, Calendar, Users, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

const steps = [
  { id: 1, title: "Campaign Details", icon: Target },
  { id: 2, title: "Target Audience", icon: Users },
  { id: 3, title: "Budget & Timeline", icon: DollarSign },
  { id: 4, title: "Requirements", icon: Zap }
];

const platforms = ["Instagram", "YouTube", "TikTok", "Twitter", "Facebook", "LinkedIn"];
const niches = ["Gaming", "Beauty", "Fitness", "Food", "Travel", "Tech", "Fashion", "Lifestyle"];

export default function CampaignCreate() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Create Your Campaign</h1>
              <p className="text-xl text-muted-foreground">
                Let's find the perfect influencers for your brand
              </p>
            </div>

            {/* Progress Steps */}
            <div className="grid grid-cols-4 gap-4 mb-12">
              {steps.map((step) => {
                const IconComponent = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;
                
                return (
                  <div key={step.id} className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : isCompleted 
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className={`text-sm font-medium ${
                      isActive 
                        ? 'text-primary' 
                        : isCompleted 
                        ? 'text-accent'
                        : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Form Content */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {React.createElement(steps[currentStep - 1].icon, { className: "w-5 h-5" })}
                  {steps[currentStep - 1].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Campaign Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="campaign-title">Campaign Title</Label>
                      <Input 
                        id="campaign-title" 
                        placeholder="Enter your campaign title"
                        className="card-elevated"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="campaign-description">Campaign Description</Label>
                      <Textarea 
                        id="campaign-description" 
                        placeholder="Describe your campaign goals and requirements"
                        className="card-elevated min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Platforms</Label>
                      <div className="grid grid-cols-3 gap-3">
                        {platforms.map((platform) => (
                          <div key={platform} className="flex items-center space-x-2">
                            <Checkbox 
                              id={platform}
                              checked={selectedPlatforms.includes(platform)}
                              onCheckedChange={() => handlePlatformToggle(platform)}
                            />
                            <Label htmlFor={platform} className="text-sm font-normal">
                              {platform}
                            </Label>
                          </div>
                        ))}
                      </div>
                      {selectedPlatforms.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {selectedPlatforms.map((platform) => (
                            <Badge key={platform} variant="secondary">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Target Audience */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="age-range">Age Range</Label>
                        <Select>
                          <SelectTrigger className="card-elevated">
                            <SelectValue placeholder="Select age range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="18-24">18-24</SelectItem>
                            <SelectItem value="25-34">25-34</SelectItem>
                            <SelectItem value="35-44">35-44</SelectItem>
                            <SelectItem value="45+">45+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select>
                          <SelectTrigger className="card-elevated">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Target Niches</Label>
                      <div className="grid grid-cols-4 gap-3">
                        {niches.map((niche) => (
                          <div key={niche} className="flex items-center space-x-2">
                            <Checkbox 
                              id={niche}
                              checked={selectedNiches.includes(niche)}
                              onCheckedChange={() => handleNicheToggle(niche)}
                            />
                            <Label htmlFor={niche} className="text-sm font-normal">
                              {niche}
                            </Label>
                          </div>
                        ))}
                      </div>
                      {selectedNiches.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {selectedNiches.map((niche) => (
                            <Badge key={niche} variant="secondary">
                              {niche}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Target Location</Label>
                      <Input 
                        id="location" 
                        placeholder="e.g., United States, Global"
                        className="card-elevated"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Budget & Timeline */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Campaign Budget</Label>
                        <Input 
                          id="budget" 
                          placeholder="$10,000"
                          className="card-elevated"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget-type">Budget Type</Label>
                        <Select>
                          <SelectTrigger className="card-elevated">
                            <SelectValue placeholder="Select budget type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="total">Total Budget</SelectItem>
                            <SelectItem value="per-influencer">Per Influencer</SelectItem>
                            <SelectItem value="per-post">Per Post</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="start-date">Campaign Start</Label>
                        <Input 
                          id="start-date" 
                          type="date"
                          className="card-elevated"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="end-date">Campaign End</Label>
                        <Input 
                          id="end-date" 
                          type="date"
                          className="card-elevated"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deliverables">Number of Deliverables</Label>
                      <Select>
                        <SelectTrigger className="card-elevated">
                          <SelectValue placeholder="Select number of posts" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Post</SelectItem>
                          <SelectItem value="3">3 Posts</SelectItem>
                          <SelectItem value="5">5 Posts</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 4: Requirements */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="content-requirements">Content Requirements</Label>
                      <Textarea 
                        id="content-requirements" 
                        placeholder="Specify any content requirements, brand guidelines, etc."
                        className="card-elevated min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hashtags">Required Hashtags</Label>
                      <Input 
                        id="hashtags" 
                        placeholder="#brandname #campaign2024"
                        className="card-elevated"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additional-notes">Additional Notes</Label>
                      <Textarea 
                        id="additional-notes" 
                        placeholder="Any additional information for influencers"
                        className="card-elevated"
                      />
                    </div>

                    <div className="card-elevated p-6 bg-accent/5 border border-accent/20">
                      <h3 className="font-semibold mb-4">Campaign Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Platforms:</span>
                          <span>{selectedPlatforms.join(", ") || "Not selected"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Niches:</span>
                          <span>{selectedNiches.join(", ") || "Not selected"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Expected Matches:</span>
                          <span className="text-primary font-semibold">25-50 influencers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t border-border">
                  <div>
                    {currentStep > 1 && (
                      <Button 
                        variant="outline" 
                        onClick={() => setCurrentStep(currentStep - 1)}
                      >
                        Previous
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {currentStep < 4 ? (
                      <Button 
                        variant="default" 
                        onClick={() => setCurrentStep(currentStep + 1)}
                        className="gap-2"
                      >
                        Next Step
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Link to="/brand/dashboard">
                        <Button variant="success" size="lg" className="gap-2">
                          Launch Campaign
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
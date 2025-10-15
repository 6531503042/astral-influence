import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Instagram, Youtube, Music, Twitter, Facebook, Users, Star, TrendingUp, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const InfluencerSignup = () => {
  const { toast } = useToast();
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

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field as keyof typeof prev] as string[], value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.terms) {
      toast({
        title: "กรุณายอมรับข้อกำหนด",
        description: "คุณต้องยอมรับข้อกำหนดและเงื่อนไขก่อนสมัคร",
        variant: "destructive",
      });
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
    });
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
                สมัครเป็นอินฟลูเอนเซอร์
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              เข้าร่วมกับเครือข่ายอินฟลูเอนเซอร์ของเราและรับโอกาสในการทำงานร่วมกับแบรนด์ชั้นนำ
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    ข้อมูลส่วนตัว
                  </CardTitle>
                  <CardDescription>
                    กรอกข้อมูลพื้นฐานของคุณ
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">ชื่อ-นามสกุล *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="กรอกชื่อ-นามสกุล"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">อีเมล *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">เบอร์โทรศัพท์ *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="08x-xxx-xxxx"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">ที่อยู่</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="กรุงเทพฯ, ประเทศไทย"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">แนะนำตัว *</Label>
                    <Textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      placeholder="บอกเล่าเรื่องราวของคุณ ความสนใจ และสไตล์การสร้างคอนเทนต์..."
                      rows={4}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    โซเชียลมีเดีย
                  </CardTitle>
                  <CardDescription>
                    กรอกข้อมูลโซเชียลมีเดียของคุณ
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
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="followers">จำนวนผู้ติดตาม (รวมทุกแพลตฟอร์ม)</Label>
                      <Input
                        id="followers"
                        value={formData.followers}
                        onChange={(e) => handleInputChange("followers", e.target.value)}
                        placeholder="เช่น 10,000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="engagement">Engagement Rate (%)</Label>
                      <Input
                        id="engagement"
                        value={formData.engagement}
                        onChange={(e) => handleInputChange("engagement", e.target.value)}
                        placeholder="เช่น 3.5"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Content & Category */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    ประเภทคอนเทนต์และความเชี่ยวชาญ
                  </CardTitle>
                  <CardDescription>
                    เลือกประเภทคอนเทนต์ที่คุณเชี่ยวชาญ
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>หมวดหมู่หลัก *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกหมวดหมู่ที่คุณเชี่ยวชาญ" />
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
                    <Label>ประเภทคอนเทนต์ที่คุณสร้าง</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {contentTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={type}
                            checked={formData.contentTypes.includes(type)}
                            onCheckedChange={(checked) => 
                              handleArrayChange("contentTypes", type, checked as boolean)
                            }
                          />
                          <Label htmlFor={type} className="text-sm">{type}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>ภาษาที่ใช้สร้างคอนเทนต์</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {languages.map((language) => (
                        <div key={language} className="flex items-center space-x-2">
                          <Checkbox
                            id={language}
                            checked={formData.languages.includes(language)}
                            onCheckedChange={(checked) => 
                              handleArrayChange("languages", language, checked as boolean)
                            }
                          />
                          <Label htmlFor={language} className="text-sm">{language}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Information */}
              <Card>
                <CardHeader>
                  <CardTitle>ข้อมูลธุรกิจ</CardTitle>
                  <CardDescription>
                    ข้อมูลเกี่ยวกับอัตราค่าจ้างและประสบการณ์
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="rate">อัตราค่าจ้างต่อโพสต์ (บาท)</Label>
                      <Input
                        id="rate"
                        value={formData.rate}
                        onChange={(e) => handleInputChange("rate", e.target.value)}
                        placeholder="เช่น 5,000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability">ความพร้อมในการทำงาน</Label>
                      <Select value={formData.availability} onValueChange={(value) => handleInputChange("availability", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกความพร้อม" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">เต็มเวลา</SelectItem>
                          <SelectItem value="part-time">พาร์ทไทม์</SelectItem>
                          <SelectItem value="freelance">ฟรีแลนซ์</SelectItem>
                          <SelectItem value="weekend">เฉพาะวันหยุด</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">ประสบการณ์การทำงาน (ปี)</Label>
                    <Input
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange("experience", e.target.value)}
                      placeholder="เช่น 2"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">ลิงก์ Portfolio หรือ ผลงาน</Label>
                    <Input
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={(e) => handleInputChange("portfolio", e.target.value)}
                      placeholder="https://your-portfolio.com"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Submit */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.terms}
                        onCheckedChange={(checked) => handleInputChange("terms", checked)}
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        ฉันยอมรับ{" "}
                        <a href="#" className="text-primary hover:underline">
                          ข้อกำหนดและเงื่อนไข
                        </a>{" "}
                        และ{" "}
                        <a href="#" className="text-primary hover:underline">
                          นโยบายความเป็นส่วนตัว
                        </a>{" "}
                        ของ Fulnfinz
                      </Label>
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      สมัครเป็นอินฟลูเอนเซอร์
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerSignup;


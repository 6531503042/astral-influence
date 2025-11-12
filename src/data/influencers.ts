import { Gamepad2, Heart, Dumbbell, Camera, MapPin, Coffee } from "lucide-react";
import influencerGaming from "@/assets/influencer-gaming.jpg";
import influencerBeauty from "@/assets/influencer-beauty.jpg";
import influencerFitness from "@/assets/influencer-fitness.jpg";

export interface Influencer {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  niches: string[];
  platforms: {
    platform: string;
    followers: string;
    engagementRate: string;
  }[];
  totalFollowers: string;
  averageEngagement: string;
  ratePerPost: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  location: string;
  icon: any;
}

export const featuredInfluencers: Influencer[] = [
  {
    id: "1",
    name: "Alex Rivera",
    username: "@alexgamesyt",
    avatar: influencerGaming,
    bio: "Pro gamer and content creator specializing in FPS and strategy games. Building communities through epic gameplay.",
    niches: ["Gaming", "Esports", "Tech Reviews"],
    platforms: [
      { platform: "YouTube", followers: "2.4M", engagementRate: "8.5%" },
      { platform: "Twitch", followers: "890K", engagementRate: "12.3%" },
      { platform: "TikTok", followers: "1.8M", engagementRate: "15.2%" }
    ],
    totalFollowers: "5.1M",
    averageEngagement: "11.2%",
    ratePerPost: "$5,500",
    rating: 4.9,
    reviewCount: 127,
    verified: true,
    location: "Los Angeles, CA",
    icon: Gamepad2
  },
  {
    id: "2", 
    name: "Sofia Chen",
    username: "@sofiabeauty",
    avatar: influencerBeauty,
    bio: "Beauty guru and lifestyle influencer sharing skincare secrets and makeup tutorials with authentic reviews.",
    niches: ["Beauty", "Skincare", "Lifestyle"],
    platforms: [
      { platform: "Instagram", followers: "3.2M", engagementRate: "9.8%" },
      { platform: "YouTube", followers: "1.5M", engagementRate: "7.2%" },
      { platform: "TikTok", followers: "4.1M", engagementRate: "18.5%" }
    ],
    totalFollowers: "8.8M",
    averageEngagement: "12.1%",
    ratePerPost: "$8,200",
    rating: 4.8,
    reviewCount: 89,
    verified: true,
    location: "New York, NY",
    icon: Heart
  },
  {
    id: "3",
    name: "Marcus Johnson", 
    username: "@marcusfitlife",
    avatar: influencerFitness,
    bio: "Fitness coach and nutrition expert helping people transform their lives through sustainable fitness routines.",
    niches: ["Fitness", "Nutrition", "Wellness"],
    platforms: [
      { platform: "Instagram", followers: "1.8M", engagementRate: "11.4%" },
      { platform: "YouTube", followers: "950K", engagementRate: "9.1%" },
      { platform: "TikTok", followers: "2.3M", engagementRate: "16.8%" }
    ],
    totalFollowers: "5.1M",
    averageEngagement: "12.8%",
    ratePerPost: "$4,800",
    rating: 4.9,
    reviewCount: 156,
    verified: true,
    location: "Miami, FL",
    icon: Dumbbell
  }
];

export const allInfluencers: Influencer[] = [
  ...featuredInfluencers,
  {
    id: "4",
    name: "Emma Thompson",
    username: "@emmafoodie",
    avatar: "/placeholder.svg",
    bio: "Food blogger and recipe developer creating delicious content for food lovers worldwide.",
    niches: ["Food", "Cooking", "Restaurant Reviews"],
    platforms: [
      { platform: "Instagram", followers: "1.2M", engagementRate: "8.9%" },
      { platform: "YouTube", followers: "680K", engagementRate: "6.4%" }
    ],
    totalFollowers: "1.9M",
    averageEngagement: "7.8%",
    ratePerPost: "$3,200",
    rating: 4.7,
    reviewCount: 73,
    verified: false,
    location: "Austin, TX",
    icon: Coffee
  },
  {
    id: "5",
    name: "Jake Wilson",
    username: "@jakeontheroad",
    avatar: "/placeholder.svg", 
    bio: "Travel photographer and adventure seeker sharing breathtaking destinations and travel tips.",
    niches: ["Travel", "Photography", "Adventure"],
    platforms: [
      { platform: "Instagram", followers: "2.1M", engagementRate: "10.3%" },
      { platform: "YouTube", followers: "750K", engagementRate: "8.7%" }
    ],
    totalFollowers: "2.9M",
    averageEngagement: "9.6%",
    ratePerPost: "$4,100",
    rating: 4.8,
    reviewCount: 94,
    verified: true,
    location: "Denver, CO",
    icon: MapPin
  },
  {
    id: "6",
    name: "Maya Patel",
    username: "@mayacreates",
    avatar: "/placeholder.svg",
    bio: "Fashion designer and style influencer showcasing sustainable fashion and DIY tutorials.",
    niches: ["Fashion", "Sustainability", "DIY"],
    platforms: [
      { platform: "Instagram", followers: "1.6M", engagementRate: "12.1%" },
      { platform: "TikTok", followers: "3.4M", engagementRate: "19.3%" }
    ],
    totalFollowers: "5.0M",
    averageEngagement: "15.2%",
    ratePerPost: "$6,800",
    rating: 4.9,
    reviewCount: 112,
    verified: true,
    location: "San Francisco, CA",
    icon: Camera
  },
  {
    id: "7",
    name: "Ryan Chen",
    username: "@ryantech",
    avatar: "/placeholder.svg",
    bio: "Tech reviewer and gadget enthusiast breaking down the latest technology for everyday users.",
    niches: ["Technology", "Gadgets", "Reviews"],
    platforms: [
      { platform: "YouTube", followers: "1.8M", engagementRate: "9.2%" },
      { platform: "Instagram", followers: "950K", engagementRate: "7.5%" }
    ],
    totalFollowers: "2.75M",
    averageEngagement: "8.4%",
    ratePerPost: "$5,500",
    rating: 4.8,
    reviewCount: 156,
    verified: true,
    location: "Seattle, WA",
    icon: Gamepad2
  },
  {
    id: "8",
    name: "Luna Martinez",
    username: "@lunabeauty",
    avatar: "/placeholder.svg",
    bio: "Makeup artist and beauty influencer sharing professional techniques and product reviews.",
    niches: ["Beauty", "Makeup", "Skincare"],
    platforms: [
      { platform: "Instagram", followers: "2.5M", engagementRate: "11.8%" },
      { platform: "TikTok", followers: "3.8M", engagementRate: "17.2%" }
    ],
    totalFollowers: "6.3M",
    averageEngagement: "14.5%",
    ratePerPost: "$7,200",
    rating: 4.9,
    reviewCount: 203,
    verified: true,
    location: "Los Angeles, CA",
    icon: Heart
  },
  {
    id: "9",
    name: "David Kim",
    username: "@davidfitness",
    avatar: "/placeholder.svg",
    bio: "Personal trainer and nutrition coach helping people achieve their fitness goals.",
    niches: ["Fitness", "Health", "Nutrition"],
    platforms: [
      { platform: "Instagram", followers: "1.4M", engagementRate: "10.5%" },
      { platform: "YouTube", followers: "520K", engagementRate: "8.1%" }
    ],
    totalFollowers: "1.92M",
    averageEngagement: "9.3%",
    ratePerPost: "$3,800",
    rating: 4.7,
    reviewCount: 98,
    verified: true,
    location: "Chicago, IL",
    icon: Dumbbell
  },
  {
    id: "10",
    name: "Zoe Anderson",
    username: "@zoestyle",
    avatar: "/placeholder.svg",
    bio: "Fashion stylist and trendsetter showcasing the latest in streetwear and high fashion.",
    niches: ["Fashion", "Style", "Lifestyle"],
    platforms: [
      { platform: "Instagram", followers: "2.8M", engagementRate: "13.2%" },
      { platform: "TikTok", followers: "4.2M", engagementRate: "20.1%" }
    ],
    totalFollowers: "7.0M",
    averageEngagement: "16.7%",
    ratePerPost: "$8,500",
    rating: 4.9,
    reviewCount: 187,
    verified: true,
    location: "New York, NY",
    icon: Camera
  },
  {
    id: "11",
    name: "Chris Taylor",
    username: "@chrisadventures",
    avatar: "/placeholder.svg",
    bio: "Outdoor enthusiast and adventure vlogger exploring the world's most beautiful destinations.",
    niches: ["Travel", "Adventure", "Outdoor"],
    platforms: [
      { platform: "YouTube", followers: "1.3M", engagementRate: "9.8%" },
      { platform: "Instagram", followers: "890K", engagementRate: "8.4%" }
    ],
    totalFollowers: "2.19M",
    averageEngagement: "9.1%",
    ratePerPost: "$4,200",
    rating: 4.8,
    reviewCount: 124,
    verified: true,
    location: "Portland, OR",
    icon: MapPin
  },
  {
    id: "12",
    name: "Isabella Rodriguez",
    username: "@isabellacooks",
    avatar: "/placeholder.svg",
    bio: "Chef and food content creator sharing authentic recipes and cooking tips from around the world.",
    niches: ["Food", "Cooking", "Recipes"],
    platforms: [
      { platform: "Instagram", followers: "1.7M", engagementRate: "9.5%" },
      { platform: "YouTube", followers: "1.1M", engagementRate: "7.8%" }
    ],
    totalFollowers: "2.8M",
    averageEngagement: "8.7%",
    ratePerPost: "$4,600",
    rating: 4.8,
    reviewCount: 145,
    verified: true,
    location: "Miami, FL",
    icon: Coffee
  }
];
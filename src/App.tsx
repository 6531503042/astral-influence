import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Browse from "./pages/Browse";
import InfluencerProfile from "./pages/InfluencerProfile";
import CampaignCreate from "./pages/CampaignCreate";
import BrandDashboard from "./pages/BrandDashboard";
import InfluencerSignup from "./pages/InfluencerSignup";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/influencer/:id" element={<InfluencerProfile />} />
          <Route path="/campaign/create" element={<CampaignCreate />} />
          <Route path="/brand/dashboard" element={<BrandDashboard />} />
          <Route path="/influencer/signup" element={<InfluencerSignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

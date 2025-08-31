import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, Search, Bell, User, Sparkles } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Fulnfinz
              </span>
            </div>
            <Badge variant="secondary" className="hidden sm:inline-flex text-xs">
              Beta
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/browse" className="text-foreground hover:text-primary transition-colors">
              Browse Influencers
            </a>
            <a href="/campaigns" className="text-foreground hover:text-primary transition-colors">
              Campaigns
            </a>
            <a href="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-4 h-4" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"></div>
            </Button>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <nav className="flex flex-col gap-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors py-2">
                Home
              </a>
              <a href="/browse" className="text-foreground hover:text-primary transition-colors py-2">
                Browse Influencers
              </a>
              <a href="/campaigns" className="text-foreground hover:text-primary transition-colors py-2">
                Campaigns
              </a>
              <a href="/pricing" className="text-foreground hover:text-primary transition-colors py-2">
                Pricing
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-primary/20">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
                <Button variant="hero" size="sm">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
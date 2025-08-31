import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center glass-card magical-hover">
      <div className="text-center p-12">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="font-heading text-2xl font-bold text-primary-foreground">404</span>
        </div>
        <h1 className="font-heading text-4xl font-bold mb-4 text-glow">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">This mystical realm doesn't exist in our universe</p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-gradient-primary text-primary-foreground font-heading font-semibold shadow-glow hover:shadow-glow hover:scale-105 border border-primary/20 transition-magical"
        >
          Return to Home Realm
        </a>
      </div>
    </div>
  );
};

export default NotFound;

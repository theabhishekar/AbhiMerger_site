import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glassmorphism shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img 
              src="/App Icon.png" 
              alt="AbhiMerger Logo" 
              className="w-8 h-8 rounded-lg" 
              data-testid="logo-image"
            />
            <span className="text-xl font-semibold" data-testid="brand-name">AbhiMerger</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("workflow")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-workflow"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-download"
            >
              Download
            </button>
          </div>
          
          <Button
            onClick={() => scrollToSection("download")}
            className="bg-primary text-primary-foreground hover:bg-blue-600 transition-all transform hover:scale-105 rounded-full px-6"
            data-testid="button-get-started"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}

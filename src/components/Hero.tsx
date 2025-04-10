
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Star, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/5 -z-10 transition-opacity duration-700" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 -right-16 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float animation-delay-2000 opacity-60"></div>
        <div className="absolute top-2/3 left-1/4 w-24 h-24 bg-primary/30 rounded-full blur-3xl animate-pulse-soft opacity-50"></div>
      </div>
      
      <div className="container px-4 mx-auto text-center">
        <div 
          className={`max-w-4xl mx-auto space-y-8 transition-all duration-700 ${
            scrolled ? 'opacity-90 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Open Source by <br />
            <span className="text-gradient relative inline-block">
              Dream11
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-yellow-500/50 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-500 hover:text-foreground">
            DreamSportsLabs is Dream11's umbrella for all open source initiatives and community engagement, fostering innovation in tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="gap-2 group relative overflow-hidden bg-gradient-to-r from-primary to-yellow-500 hover:from-yellow-500 hover:to-primary transition-all duration-500 shadow-lg hover:shadow-primary/25"
              asChild
            >
              <a href="#featured-projects" className="flex items-center">
                Explore Projects 
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 w-full h-full bg-gradient-shine bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100"></span>
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="gap-2 group border-primary/20 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
              asChild
            >
              <a 
                href="https://github.com/orgs/dream-sports-labs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                GitHub
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </Button>
          </div>
          
          <div className="pt-6 text-muted-foreground">
            
            <div className="flex justify-center items-center gap-4 mt-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-muted rounded-full animate-pulse-soft" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <div className="w-8 h-14 border-2 border-primary/30 rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce-soft"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

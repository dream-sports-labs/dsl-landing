import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { useEffect, useState } from "react";
import projectsData from "@/data/projects.json";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const { title, description, githubUrl, projectsUrl } = projectsData.hero;
  
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
          <div className="flex justify-center mb-6">
            <img 
              src="./lovable-uploads/9f532731-868c-4fe5-93e2-734f0b13849b.png" 
              alt="DreamSportsLabs Logo" 
              className="w-32 h-32 animate-float"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {title.split(" ")[0]} {title.split(" ")[1]} {title.split(" ")[2]}<br />
            <span className="text-gradient relative inline-block">
               {title.split(" ")[3]}
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-yellow-500/50 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-500 hover:text-foreground">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="gap-2 group relative overflow-hidden bg-gradient-to-r from-dreamlabs-red/90 to-dreamlabs-black/80 hover:from-dreamlabs-black/80 hover:to-dreamlabs-red/90 transition-all duration-500 shadow-lg hover:shadow-dreamlabs-red/25"
              asChild
            >
              <a href={projectsUrl} className="flex items-center">
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
                href={githubUrl}
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
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <div className="w-8 h-14 border-2 border-primary/30 rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce-soft"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

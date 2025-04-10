
import { useState } from "react";
import { Star, Code, GitFork, ExternalLink, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  logoSrc?: string;
  stars?: number;
  githubUrl?: string;
  variant?: 'default' | 'featured';
}

const ProjectCard = ({
  title,
  description,
  stars,
  githubUrl,
  variant = 'default'
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    if (githubUrl) {
      window.open(githubUrl, "_blank", "noopener,noreferrer");
    }
  };

  const borderStyles = variant === 'featured' 
    ? 'border border-gray-300/50 hover:border-gray-400/70' 
    : 'border-2 border-primary/50 hover:border-primary';

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl transition-all duration-500 animate-fade-in-up ${borderStyles} ${githubUrl ? 'cursor-pointer' : ''} hover:shadow-xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Content container */}
      <div className="relative h-full flex flex-col justify-between z-10 bg-card/95">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className={`h-12 w-12 rounded-full bg-card flex items-center justify-center border border-border/50 shadow-sm transition-all duration-500 ${isHovered ? 'bg-primary/10' : ''}`}>
              <Code className={`h-5 w-5 transition-all duration-500 ${isHovered ? 'text-primary' : 'text-muted-foreground'}`} />
            </div>
            
            <div>
              <h3 className={`text-xl font-medium transition-all duration-300 ${isHovered ? 'text-primary' : 'text-foreground'}`}>
                {title}
              </h3>
              
              {stars !== undefined && (
                <div className="flex items-center mt-1">
                  <Star className="h-3.5 w-3.5 mr-1.5 text-amber-500" />
                  <span className="text-xs font-medium text-foreground/70">{stars}</span>
                </div>
              )}
            </div>
          </div>
          
          <p className="text-muted-foreground transition-all duration-300 line-clamp-3 text-sm">
            {description}
          </p>
        </div>
        
        {githubUrl && (
          <div className={`flex items-center justify-between p-4 mt-auto border-t border-border/30 bg-background/50 backdrop-blur-sm transition-all duration-500 ${isHovered ? 'bg-primary/5' : ''}`}>
            <div className="flex items-center space-x-2">
              <GitFork className={`h-4 w-4 transition-all duration-300 ${isHovered ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className={`text-xs transition-all duration-300 ${isHovered ? 'text-primary font-medium' : 'text-muted-foreground'}`}>GitHub Repository</span>
            </div>
            
            <div className={`flex items-center transition-all duration-500 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
              <ChevronRight className="h-4 w-4 text-primary" />
              <ExternalLink className="h-4 w-4 text-primary ml-1" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

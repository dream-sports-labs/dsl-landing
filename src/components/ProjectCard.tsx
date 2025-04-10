
import { Github, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  logoSrc: string;
  githubUrl: string;
  docsUrl: string;
}

const ProjectCard = ({
  title,
  description,
  logoSrc,
  githubUrl,
  docsUrl,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="project-card fancy-card-effect group animate-fade-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 transition-all duration-300">
        <div className="flex items-center mb-4 relative">
          <div className="relative">
            <div className={`absolute inset-0 bg-primary/20 rounded-md blur-md transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            <img
              src={logoSrc}
              alt={`${title} logo`}
              className={`w-12 h-12 mr-3 rounded-md relative z-10 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}
            />
          </div>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-6 transition-all duration-300 group-hover:text-foreground">{description}</p>
        <div className="flex gap-3">
          <Button asChild variant="outline" size="sm" className="btn-hover-effect">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
              className="flex items-center gap-1 transition-transform hover:scale-105"
            >
              <Github className="h-4 w-4 transition-transform group-hover:animate-bounce-soft" />
              <span>GitHub</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="sm" className="btn-hover-effect">
            <a
              href={docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} documentation`}
              className="flex items-center gap-1 transition-transform hover:scale-105"
            >
              <FileText className="h-4 w-4 transition-transform group-hover:animate-bounce-soft" />
              <span>Docs</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

// Actual DreamSportsLabs open source projects
const projects = [
  {
    id: 1,
    title: "D11-react-native-fast-image",
    description: "High performance React Native image component optimized for speed and efficiency.",
    logoSrc: "/placeholder.svg",
    githubUrl: "https://github.com/dream-sports-labs/react-native-fast-image",
    docsUrl: "https://github.com/dream-sports-labs/react-native-fast-image#readme",
  },
  {
    id: 2,
    title: "Marco",
    description: "Tool to track and optimize app's performance with ease, providing insights for performance improvements.",
    logoSrc: "/placeholder.svg",
    githubUrl: "https://github.com/dream-sports-labs/marco",
    docsUrl: "https://github.com/dream-sports-labs/marco#readme",
  },
  {
    id: 3,
    title: "Checkmate",
    description: "Tool to streamline test case management, making it easier to organize and execute tests efficiently.",
    logoSrc: "/placeholder.svg",
    githubUrl: "https://github.com/dream-sports-labs/checkmate",
    docsUrl: "https://github.com/dream-sports-labs/checkmate#readme",
  },
  {
    id: 4,
    title: "deFrost",
    description: "Tool to detect frozen frames in React Native apps, helping improve user experience by identifying UI freezes.",
    logoSrc: "/placeholder.svg",
    githubUrl: "https://github.com/dream-sports-labs/defrost",
    docsUrl: "https://github.com/dream-sports-labs/defrost#readme",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="section-container">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-heading">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <Button 
          asChild
          variant="outline" 
          size="lg"
          className="btn-hover-effect group relative overflow-hidden transition-all duration-300"
        >
          <Link to="/projects" className="flex items-center gap-2">
            View All Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            logoSrc={project.logoSrc}
            githubUrl={project.githubUrl}
            docsUrl={project.docsUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;

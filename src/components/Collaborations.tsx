
import { ExternalLink, Users, Star, GitPullRequest, Award, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Actual DreamSportsLabs open source projects
const collaborations = [
  {
    id: 1,
    title: "react-native-fast-image",
    partner: "React Native Community",
    description: "FastImage is a React Native component for displaying images with better performance, handling caching, and controlling priority.",
    logoSrc: "/placeholder.svg",
    url: "https://github.com/patw0929/react-native-fast-image",
    contributors: 48,
    stars: 5800,
    pullRequests: 176,
    icon: <GitBranch className="h-5 w-5 text-primary" />
  },
  {
    id: 2,
    title: "marco",
    partner: "Open Source Community",
    description: "A framework that helps developers to generate network mocks for their projects, improving testing and development workflows.",
    logoSrc: "/placeholder.svg",
    url: "https://github.com/dream-sports-labs/marco",
    contributors: 12,
    stars: 76,
    pullRequests: 28,
    icon: <Award className="h-5 w-5 text-primary" />
  },
  {
    id: 3,
    title: "checkmate",
    partner: "Open Source Community",
    description: "A tool that helps verify and validate application behavior and configurations across different environments.",
    logoSrc: "/placeholder.svg",
    url: "https://github.com/dream-sports-labs/checkmate",
    contributors: 8,
    stars: 42,
    pullRequests: 16,
    icon: <GitPullRequest className="h-5 w-5 text-primary" />
  }
];

const ContributionCard = ({ 
  title, 
  partner, 
  description, 
  logoSrc, 
  url,
  contributors,
  stars,
  pullRequests,
  icon
}: {
  title: string;
  partner: string;
  description: string;
  logoSrc: string;
  url: string;
  contributors: number;
  stars: number;
  pullRequests: number;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="contribution-card overflow-hidden group border-border transition-all duration-300 hover:border-primary hover:shadow-lg">
      <CardHeader className="pb-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110">
            {icon}
          </div>
          <div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
            <CardDescription>with {partner}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground my-4 group-hover:text-foreground transition-colors duration-300">{description}</p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{contributors} contributors</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>{stars} stars</span>
          </div>
          <div className="flex items-center gap-1">
            <GitPullRequest className="h-4 w-4" />
            <span>{pullRequests} PRs</span>
          </div>
        </div>
        
        <Button asChild variant="outline" size="sm" className="w-full justify-center group-hover:border-primary group-hover:text-primary transition-all duration-300">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <span>View Project</span>
            <ExternalLink className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

const Collaborations = () => {
  return (
    <section id="collaborations" className="section-container bg-card/30">
      <h2 className="section-heading">
        Current <span className="text-gradient">Open Source Projects</span>
      </h2>
      <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
        DreamSportsLabs has incubated several open source projects that help developers build better applications. Here are some of our key projects.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collaborations.map((collab) => (
          <ContributionCard
            key={collab.id}
            title={collab.title}
            partner={collab.partner}
            description={collab.description}
            logoSrc={collab.logoSrc}
            url={collab.url}
            contributors={collab.contributors}
            stars={collab.stars}
            pullRequests={collab.pullRequests}
            icon={collab.icon}
          />
        ))}
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="contribution-card overflow-hidden group border-border transition-all duration-300 hover:border-primary hover:shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">deFrost</h3>
            <p className="text-muted-foreground mb-4">A tool to improve React Native loading times and user experience by optimizing startup processes.</p>
            <Button asChild variant="outline" size="sm" className="w-full justify-center">
              <a href="https://github.com/dream-sports-labs/defrost" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <span>Learn More</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="contribution-card overflow-hidden group border-border transition-all duration-300 hover:border-primary hover:shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">rn-benchmarking</h3>
            <p className="text-muted-foreground mb-4">A tool for benchmarking React Native applications to identify performance bottlenecks and optimization opportunities.</p>
            <Button asChild variant="outline" size="sm" className="w-full justify-center">
              <a href="https://github.com/dream-sports-labs/rn-benchmarking" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <span>Learn More</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12 text-center">
        <Button 
          variant="default" 
          size="lg" 
          asChild
          className="btn-hover-effect group relative overflow-hidden transition-all duration-300"
        >
          <a href="https://github.com/orgs/dream-sports-labs/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <GitBranch className="h-5 w-5" />
            <span>Explore All Projects</span>
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Collaborations;

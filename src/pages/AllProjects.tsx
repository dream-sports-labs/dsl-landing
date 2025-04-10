
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// All DreamSportsLabs open source projects
const allProjects = [
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
  {
    id: 5,
    title: "rn-benchmarking",
    description: "A tool for benchmarking React Native applications, allowing developers to measure and compare performance metrics.",
    logoSrc: "/placeholder.svg",
    githubUrl: "https://github.com/dream-sports-labs/rn-benchmarking",
    docsUrl: "https://github.com/dream-sports-labs/rn-benchmarking#readme",
  },
  {
    id: 6,
    title: "D11-react-native-mqtt",
    description: "MQTT client library for React Native, enabling efficient real-time communication in mobile applications.",
    logoSrc: "/placeholder.svg",
    githubUrl: "https://github.com/dream-sports-labs/react-native-mqtt",
    docsUrl: "https://github.com/dream-sports-labs/react-native-mqtt#readme",
  },
  {
    id: 7,
    title: "DOTA",
    description: "Coming Soon: Helps in over the air updates for React Native applications.",
    logoSrc: "/placeholder.svg",
    githubUrl: "https://github.com/orgs/dream-sports-labs/",
    docsUrl: "https://github.com/orgs/dream-sports-labs/",
  },
  {
    id: 8,
    title: "INFER",
    description: "Coming Soon: Helps in over the air delivery of light-weight ML models for mobile applications.",
    logoSrc: "/placeholder.svg",
    githubUrl: "https://github.com/orgs/dream-sports-labs/",
    docsUrl: "https://github.com/orgs/dream-sports-labs/",
  },
];

const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider defaultTheme="light">
      <Helmet>
        <title>All Projects - DreamSportsLabs</title>
        <meta name="description" content="Browse all open source projects by DreamSportsLabs, Dream11's initiative for advancing sports technology." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <section className="section-container">
            <div className="flex items-center justify-between mb-10">
              <h1 className="section-heading">
                <span className="text-gradient">All Projects</span>
              </h1>
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="btn-hover-effect transition-all duration-300 group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {allProjects.map((project, index) => (
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
            
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AllProjects;

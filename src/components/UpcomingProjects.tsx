
import ProjectCard from "./ProjectCard";

// Actual upcoming project data based on provided information
const upcomingProjects = [
  {
    id: 1,
    title: "DOTA",
    description: "Helps in over the air updates for React Native applications, enabling seamless updates without app store submissions.",
    logoSrc: "/placeholder.svg",
    githubUrl: "https://github.com/dream-sports-labs/dota",
    docsUrl: "https://github.com/dream-sports-labs/dota",
  },
  {
    id: 2,
    title: "INFER",
    description: "Enables over the air delivery of lightweight ML models, bringing machine learning capabilities to mobile applications efficiently.",
    logoSrc: "/placeholder.svg",
    githubUrl: "https://github.com/dream-sports-labs/infer",
    docsUrl: "https://github.com/dream-sports-labs/infer",
  },
  {
    id: 3,
    title: "Guardian",
    description: "A comprehensive solution that helps in user authentication and security for mobile and web applications.",
    logoSrc: "/placeholder.svg",
    githubUrl: "https://github.com/dream-sports-labs/guardian",
    docsUrl: "https://github.com/dream-sports-labs/guardian",
  },
  {
    id: 4,
    title: "Flash",
    description: "Server-driven UI framework that allows dynamic UI updates without app releases, improving flexibility and user experience.",
    logoSrc: "/placeholder.svg",
    githubUrl: "https://github.com/dream-sports-labs/flash",
    docsUrl: "https://github.com/dream-sports-labs/flash",
  },
];

const UpcomingProjects = () => {
  return (
    <section id="upcoming-projects" className="section-container bg-secondary/50">
      <h2 className="section-heading">
        Upcoming <span className="text-gradient">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {upcomingProjects.map((project) => (
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

export default UpcomingProjects;

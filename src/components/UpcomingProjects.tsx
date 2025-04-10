
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projects.json";

const UpcomingProjects = () => {
  return (
    <section id="upcoming-projects" className="section-container bg-secondary/50">
      <h2 className="section-heading">
        Upcoming <span className="text-gradient">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectsData.upcomingProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            logoSrc={project.logoSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default UpcomingProjects;

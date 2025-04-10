
import { Award, Code, Users, Zap } from "lucide-react";
import projectsData from "@/data/projects.json";

const iconComponents = {
  Code: <Code className="h-6 w-6 text-primary" />,
  Users: <Users className="h-6 w-6 text-primary" />,
  Zap: <Zap className="h-6 w-6 text-primary" />,
  Award: <Award className="h-6 w-6 text-primary" />,
};

const AboutCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 transition-all hover:shadow-md">
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-3 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const About = () => {
  const { title, description, cards } = projectsData.about;
  
  return (
    <section id="about" className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="section-heading">{title.split(" ")[0]} <span className="text-gradient">{title.split(" ")[1]}</span></h2>
        <p className="text-lg text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <AboutCard
            key={card.id}
            icon={iconComponents[card.icon as keyof typeof iconComponents]}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default About;


import { Award, Code, Users, Zap } from "lucide-react";

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
  return (
    <section id="about" className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="section-heading">About <span className="text-gradient">DreamSportsLabs</span></h2>
        <p className="text-lg text-muted-foreground">
          DreamSportsLabs is an initiative within Dream11 aimed at fostering innovation and collaboration in the tech community. 
          It serves as an umbrella for all open source initiatives and community engagement at Dream11.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AboutCard
          icon={<Code className="h-6 w-6 text-primary" />}
          title="Open Source Projects"
          description="DreamSportsLabs has incubated 6 open source projects including react-native-fast-image, marco, checkmate, deFrost, rn-benchmarking, and d11-react-native-mqtt."
        />
        <AboutCard
          icon={<Users className="h-6 w-6 text-primary" />}
          title="Community Engagement"
          description="We actively engage with the community by hosting meetups like React-Mumbai and Kong Meetup, as well as sharing our learnings through our tech blog at tech.dream11.in."
        />
        <AboutCard
          icon={<Zap className="h-6 w-6 text-primary" />}
          title="React Native Contributions"
          description="We actively contribute to the React Native repository by triaging and fixing issues, and have contributed to release testing of React Native."
        />
        <AboutCard
          icon={<Award className="h-6 w-6 text-primary" />}
          title="Innovation Focus"
          description="We're constantly pushing the boundaries of what's possible in sports technology, from data analytics to AI-driven insights and beyond."
        />
      </div>
    </section>
  );
};

export default About;

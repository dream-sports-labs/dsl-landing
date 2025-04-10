
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, BookOpen, Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const SocialButton = ({ 
  icon, 
  label, 
  href 
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Button
      variant="outline"
      size="lg"
      className="gap-2 w-full"
      asChild
    >
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="py-6"
      >
        {icon}
        <span>{label}</span>
      </a>
    </Button>
  );
};

const MeetupCard = ({
  title,
  date,
  location,
  attendees,
  imageSrc,
  link
}: {
  title: string;
  date: string;
  location: string;
  attendees: string;
  imageSrc: string;
  link: string;
}) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg border-border hover:border-primary">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{attendees}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm" className="w-full justify-center group-hover:border-primary group-hover:text-primary transition-all duration-300">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <span>View Details</span>
            <ExternalLink className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const CollaborationCard = ({
  title,
  description,
  repo,
  link
}: {
  title: string;
  description: string;
  repo: string;
  link: string;
}) => {
  return (
    <Card className="group hover:shadow-md transition-all duration-300 border-border hover:border-primary">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{repo}</h4>
                  <p className="text-xs text-muted-foreground">View repository details</p>
                </div>
                <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-0">
        <Button asChild variant="outline" size="sm" className="w-full justify-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <span>View Collaboration</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Community = () => {
  // Meetup data based on the provided information
  const meetups = [
    {
      id: 1,
      title: "React Mumbai Meetup",
      date: "September 2023",
      location: "Dream11 HQ, Mumbai",
      attendees: "100+ React developers",
      imageSrc: "/placeholder.svg",
      link: "https://x.com/ArshPawar5/status/1893246288277160233"
    },
    {
      id: 2,
      title: "Kong Meetup",
      date: "July 2023",
      location: "Dream11 Office, Mumbai",
      attendees: "80+ API developers",
      imageSrc: "/placeholder.svg",
      link: "https://x.com/Dream11Engg/status/1884145719650705689"
    }
  ];

  // Collaboration data
  const collaborations = [
    {
      id: 1,
      title: "React Native Release Testing",
      description: "Dream11 contributed to React Native by participating in release testing for improved stability.",
      repo: "facebook/react-native",
      link: "https://x.com/sg43245/status/1892466866179784913"
    },
    {
      id: 2,
      title: "Open Source Contributions",
      description: "Active contributions to various open source projects in the React Native ecosystem.",
      repo: "dream-sports-labs",
      link: "https://github.com/orgs/dream-sports-labs/"
    },
    {
      id: 3,
      title: "Tech Blog Contributions",
      description: "Sharing technical insights and learnings with the developer community.",
      repo: "dream11/tech-blog",
      link: "https://tech.dream11.in/blog"
    },
    {
      id: 4,
      title: "Community Issue Triaging",
      description: "Active participation in triaging and fixing issues in the React Native community.",
      repo: "facebook/react-native",
      link: "https://github.com/facebook/react-native/issues"
    }
  ];

  return (
    <section id="community" className="section-container bg-card/50">
      <h2 className="section-heading">Join Our <span className="text-gradient">Community</span></h2>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg text-muted-foreground mb-12">
          DreamSportsLabs actively engages with the developer community through meetups, tech blogs, and open source contributions. 
          Join us to stay updated with our latest initiatives.
        </p>
        
        {/* Meetups Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Recent <span className="text-gradient">Meetups</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {meetups.map(meetup => (
              <MeetupCard
                key={meetup.id}
                title={meetup.title}
                date={meetup.date}
                location={meetup.location}
                attendees={meetup.attendees}
                imageSrc={meetup.imageSrc}
                link={meetup.link}
              />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="group transition-all duration-300 hover:border-primary"
            >
              <a href="https://x.com/Dream11Engg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Follow for Upcoming Events</span>
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Community Collaborations Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Community <span className="text-gradient">Collaborations</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {collaborations.map(collab => (
              <CollaborationCard
                key={collab.id}
                title={collab.title}
                description={collab.description}
                repo={collab.repo}
                link={collab.link}
              />
            ))}
          </div>
        </div>
        
        {/* Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <SocialButton
            icon={<Github className="h-5 w-5" />}
            label="GitHub"
            href="https://github.com/orgs/dream-sports-labs/"
          />
          
          <SocialButton
            icon={<Twitter className="h-5 w-5" />}
            label="Dream11Engineering Twitter"
            href="https://x.com/Dream11Engg"
          />
          
          <SocialButton
            icon={<Linkedin className="h-5 w-5" />}
            label="Connect on LinkedIn"
            href="https://www.linkedin.com/company/dream11/"
          />
          
          <SocialButton
            icon={<BookOpen className="h-5 w-5" />}
            label="Read Our Tech Blog"
            href="https://tech.dream11.in/blog"
          />
        </div>
        
        <div className="text-center">
          <Button
            size="lg"
            asChild
          >
            <a 
              href="https://github.com/orgs/dream-sports-labs/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Start Contributing
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;

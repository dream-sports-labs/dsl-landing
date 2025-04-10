
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projects.json";
import { MessageSquare, Users, BookOpen, ExternalLink, Link } from "lucide-react";

const Collaborations = () => {
  return (
    <section id="community-collaborations" className="section-container bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Community <span className="text-gradient">Collaborations</span></h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-16 pt-6">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            
            <p className="text-center text-lg text-muted-foreground mb-12">
              DreamSportsLabs collaborates with the wider developer community on various open source projects. 
              Below are some of our recent collaborations that are making an impact.
            </p>
            
            <div className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/50"></div>
                <h3 className="text-2xl font-bold text-center">Featured <span className="text-gradient">Collaborations</span></h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/50"></div>
              </div>
              
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {projectsData.collaborations.map((collaboration) => (
                    <CarouselItem key={collaboration.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="overflow-hidden group transition-all duration-300 hover:shadow-lg border-border hover:border-primary rounded-xl border p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            {collaboration.id === 1 ? <BookOpen className="h-5 w-5 text-primary" /> : 
                             collaboration.id === 2 ? <Users className="h-5 w-5 text-primary" /> : 
                             collaboration.id === 3 ? <MessageSquare className="h-5 w-5 text-primary" /> : 
                             <Link className="h-5 w-5 text-primary" />}
                          </div>
                          <h4 className="text-xl font-medium group-hover:text-primary transition-colors duration-300">{collaboration.title}</h4>
                        </div>
                        
                        <p className="text-muted-foreground mb-6">{collaboration.description}</p>
                        
                        <a 
                          href={collaboration.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center text-sm text-primary gap-2 group-hover:underline"
                        >
                          <span>Learn more</span>
                          <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                <div className="hidden md:flex items-center justify-center gap-2 mt-8">
                  <CarouselPrevious className="static translate-y-0 h-9 w-9" />
                  <CarouselNext className="static translate-y-0 h-9 w-9" />
                </div>
                
                <div className="flex justify-center mt-8 md:hidden">
                  <CarouselPrevious className="static translate-y-0 h-9 w-9 mr-2" />
                  <CarouselNext className="static translate-y-0 h-9 w-9" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;

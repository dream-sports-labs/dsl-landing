
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Twitter, 
  Heart, 
  MessageCircle, 
  Link as LinkIcon, 
  Play, 
  Check, 
  ExternalLink
} from "lucide-react";
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import projectsData from "@/data/projects.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface TweetProps {
  author: string;
  username: string;
  isVerified: boolean;
  profilePic: string;
  content: string;
  date: string;
  time: string;
  likes: number;
  replies: number;
  hasVideo?: boolean;
  hasImage?: boolean;
  image?: string;
  tweetUrl: string;
}

const Tweet = ({
  author,
  username,
  isVerified,
  profilePic,
  content,
  date,
  time,
  likes,
  replies,
  hasVideo,
  hasImage,
  image,
  tweetUrl
}: TweetProps) => {
  const formattedContent = content.split('\n\n').map((paragraph, i) => {
    const withMentions = paragraph.replace(
      /@(\w+)/g, 
      '<span class="text-primary hover:underline cursor-pointer">@$1</span>'
    );
    
    return <p key={i} dangerouslySetInnerHTML={{ __html: withMentions }} className="mb-2 last:mb-0" />;
  });

  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(tweetUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Card className="border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-border/50">
            <img 
              src={profilePic} 
              alt={author} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="font-semibold">{author}</span>
              {isVerified && (
                <div className="text-primary bg-primary/10 rounded-full p-0.5">
                  <Check className="h-3 w-3" />
                </div>
              )}
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <span>@{username}</span>
              <span>·</span>
              <a 
                href={tweetUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                <Twitter className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <a 
            href={tweetUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="space-y-3">
          <div className="text-sm">
            {formattedContent}
          </div>
          
          {hasImage && image && (
            <div className="rounded-lg overflow-hidden border border-border/50 mt-2">
              <img 
                src={image} 
                alt="Tweet media" 
                className="w-full h-auto"
              />
            </div>
          )}
          
          {hasVideo && (
            <div className="relative rounded-lg overflow-hidden border border-border/50 mt-2 bg-muted/30">
              <div className="aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
                <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center z-10 cursor-pointer hover:bg-primary transition-colors duration-200">
                  <Play className="h-7 w-7 text-white ml-1" />
                </div>
                <div className="absolute bottom-3 right-3 text-xs text-white font-medium px-2 py-0.5 bg-black/70 rounded-md z-10">
                  Watch on X
                </div>
              </div>
            </div>
          )}
          
          <div className="text-xs text-muted-foreground">
            {time} · {date}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 flex justify-between text-muted-foreground text-sm">
        <div className="flex items-center gap-1 hover:text-primary transition-colors duration-200 cursor-pointer">
          <MessageCircle className="h-4 w-4" />
          <span>{replies}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-rose-500 transition-colors duration-200 cursor-pointer">
          <Heart className="h-4 w-4" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-primary transition-colors duration-200 cursor-pointer" onClick={copyLink}>
          <LinkIcon className="h-4 w-4" />
          <span >{copied ? "Link copied!" : "Copy link"}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const TrendingFeed = () => {
  const { trending } = projectsData;
  const [activeIndex, setActiveIndex] = useState(0);
  const twitterUrl = "https://x.com/Dream11Engg";
  
  // Slice to get top 10 tweets (or all if less than 10)
  const topTweets = trending.tweets.slice(0, 10);
  
  // Auto-rotate the carousel every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % Math.max(1, topTweets.length - 2));
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, [topTweets.length]);

  return (
    <section id="trending" className="w-full max-w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-5xl font-black tracking-tight mb-5">Trending</h2>
        <p className="text-lg text-muted-foreground max-w-6xl mx-auto">
          Stay updated with the latest insights, announcements, and tech talks from our engineering team.
        </p>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
            }}
            className="w-full relative"
            setApi={(api) => {
              if (api) {
                api.scrollTo(activeIndex);
              }
            }}
          >
            <CarouselContent className="-ml-4">
              {topTweets.map((tweet) => (
                <CarouselItem key={tweet.id} className="pl-4 md:basis-1/3">
                  <Tweet {...tweet} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
              {Array.from({ length: Math.max(1, topTweets.length - 2) }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? "w-6 bg-primary" : "w-2 bg-muted"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to tweet group ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
        
        <div className="flex justify-center mt-20">
          <Button 
            size="lg" 
            asChild
            className="gap-2 group"
          >
            <a 
              href={twitterUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Twitter className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Follow Dream11 Engineering on X</span>
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingFeed;

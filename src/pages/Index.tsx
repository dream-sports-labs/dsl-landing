
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import UpcomingProjects from "@/components/UpcomingProjects";
import About from "@/components/About";
import Community from "@/components/Community";
import Collaborations from "@/components/Collaborations";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <Helmet>
        <title>DreamSportsLabs - Open Source Sports Technology by Dream11</title>
        <meta name="description" content="DreamSportsLabs is Dream11's umbrella for all open source initiatives and community engagement, fostering innovation in tech." />
        <meta name="keywords" content="Dream11, sports technology, open source, fantasy sports, sports analytics, react native" />
        <meta property="og:title" content="DreamSportsLabs - Open Source Sports Technology" />
        <meta property="og:description" content="Building the future of sports technology through community-driven open source projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dreamsportslabs.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DreamSportsLabs - Open Source Sports Technology" />
        <meta name="twitter:description" content="Building the future of sports technology through community-driven open source projects" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <FeaturedProjects />
          <UpcomingProjects />
          <About />
          <Collaborations />
          <Community />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;

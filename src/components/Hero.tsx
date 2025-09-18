import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Facebook } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg.webp";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Hero Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-6">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-[6rem] mb-5">
            <span className="block text-foreground">Simon Akuien</span>
            <span className="block text-gradient">Atem</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-5 font-light">
            Developer. Designer. Dreamer.
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-5 max-w-2xl mx-auto leading-relaxed">
            Full Stack Web Developer specializing in MERN stack, crafting digital experiences that bridge creativity and
            functionality. Building sleek products, one line of code after the other.
          </p>

          <div className="py-5 mt-3 flex justify-center items-center">
            <img
              src="/mongo.svg"
              alt="Simon Akuien Atem Tech-Stack MERN"
              className="h-[5rem] w-[5rem] mr-5 cursor-pointer"
            />
            <img
              src="/expressjs.svg"
              alt="Simon Akuien Atem Tech-Stack MERN"
              className="h-[5rem] w-[5rem] mr-5 cursor-pointer"
            />
            <img
              src="/reactjs.svg"
              alt="Simon Akuien Atem Tech-Stack MERN"
              className="h-[5rem] w-[5rem] mr-5 cursor-pointer"
            />
            <img
              src="/nodejs.svg"
              alt="Simon Akuien Atem Tech-Stack MERN"
              className="h-[5rem] w-[5rem] mr-5 cursor-pointer"
            />
          </div>

          {/* Developer Image with radiant color */}
          <div className="flex flex-col items-center justify-center mt-6 mb-8 relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[280px] md:h-[280px] lg:w-[440px] lg:h-[440px] rounded-full bg-gradient-to-tr from-primary/40 via-accent/30 to-transparent blur-2xl animate-pulse-slow z-0"></span>
            <img
              src="/CEO.png.webp"
              alt="Developer"
              className="w-48 h-48 sm:w-72 sm:h-72 md:w-64 md:h-64 lg:w-[400px] lg:h-[400px] rounded-full object-cover border-4 border-primary shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ background: "#fff" }}
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button onClick={scrollToProjects} className="btn-hero group">
              See My Work
              <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/20 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="https://github.com/akuienistic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="h-6 w-6 transition-colors group-hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/simon-akuien-atem-710895290"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="h-6 w-6 transition-colors group-hover:text-primary" />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61572703111798"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110 group"
            >
              <Facebook className="h-6 w-6 transition-colors group-hover:text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 mb-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

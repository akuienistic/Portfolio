import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";
import { StatsSection } from "./StatsSection";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Who I <span className="text-gradient">Am</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="prose prose-lg max-w-none cursor-pointer p-6 border border-primary/10 rounded-lg bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hello! I'm <span className="text-success font-bold">{" </ Simon Akuien Atem > "}</span>, a passionate
                Full Stack Web Developer with a vision to revolutionize the digital landscape. My journey in tech began
                with curiosity and has evolved into a mission to create meaningful, user-centric solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Specializing in the MERN stack, I bridge the gap between stunning design and robust functionality. Every
                project is an opportunity to push boundaries and deliver excellence that exceeds expectations.
              </p>
            </div>

            {/* Key Points */}
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full cursor-pointer">
                <Code className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full cursor-pointer">
                <Palette className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">UI/UX Designer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full cursor-pointer">
                <Rocket className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">Future Entrepreneur</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full cursor-pointer">
                <Palette className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Graphic Designer</span>
              </div>
            </div>
          </div>

          {/* Stats/Highlights */}
          <StatsSection />
        </div>
      </div>
    </section>
  );
};

export default About;

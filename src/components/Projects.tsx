import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ProjectTestimonials } from "./ProjectTestimonials";

const Projects = () => {
  const projects = [
    {
      title: "MediTest Clinic",
      description:
        "A comprehensive hospital website featuring online appointment booking, patient management, and medical service information. Built with modern web technologies for optimal user experience.",
      image: "/meditest.png.webp",
      url: "https://meditestclinic.com",
      tags: ["React", "Node.js", "MongoDB", "Booking System", "Healthcare"],
    },
    {
      title: "DadaTech Showcase Website",
      description:
        "A sleek tech project of electronics dealing company in Juba, South Sudan. This project features dynamic content management, smooth animations, clean product browsing mechanism and responsive design.",
      image: "/dadatech.png.webp",
      url: "https://dadatech.netlify.app",
      tags: ["React", "Tailwind CSS", "Netlify", "Showcase", "Responsive"],
    },
    {
      title: "A Personal Portfolio",
      description:
        "An interactive portfolio and demonstration site showcasing creative design approaches and development techniques. Features smooth animations and modern UI components. I built this portfolio to highlight my skills and projects.",
      image: "/portfolio.png.webp",
      url: "https://symon-codes.vercel.app",
      github: "#",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Portfolio", "Responsive"],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A selection of my recent work that demonstrates my capabilities. Attached below are what I would call, the
            best of the year. At least for me.
          </p>
        </div>

        {/* Projects Grid */}

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group card-hover bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden mb-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 flex items-center justify-center bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full p-3 border-border/50 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 hover:cursor-pointer"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs bg-muted/50 cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary-hover" asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials below projects, side by side */}
        <ProjectTestimonials />
      </div>
    </section>
  );
};

export default Projects;

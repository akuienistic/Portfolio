import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 98 },
        { name: "Tailwind CSS", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "React", level: 95 },
      ],
      color: "primary",
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "RESTful APIs", level: 92 },
      ],
      color: "accent",
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Figma", level: 90 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "Docker", level: 80 },
      ],
      color: "success",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/20 bg-primary/5 text-primary";
      case "accent":
        return "border-accent/20 bg-accent/5 text-accent";
      case "success":
        return "border-success/20 bg-success/5 text-success";
      default:
        return "border-primary/20 bg-primary/5 text-primary";
    }
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary";
      case "accent":
        return "bg-accent";
      case "success":
        return "bg-success";
      default:
        return "bg-primary";
    }
  };

  return (
    <section id="skills" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Technologies and tools I use to bring ideas to life. <br />I am equiped with the latest and modern versions
            of frameworks. Modernity is peak here.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`p-6 card-hover bg-card/50 backdrop-blur-sm cursor-pointer ${getColorClasses(
                category.color
              )} animate-fade-in`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${getProgressColor(
                          category.color
                        )} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Tech Icons */}
        <div className="mt-20 mb-0 text-center">
          <p className="text-muted-foreground mb-8 text-lg">Also experienced with</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["MySQL", "Bootstrap", "Vercel", "Netlify", "Stripe"].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

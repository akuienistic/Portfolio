import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, ArrowRight, BriefcaseBusiness } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Full-stack web applications using modern technologies like React, Node.js, and MongoDB. From concept to deployment, I create scalable and performant solutions.",
      features: [
        "Responsive Web Applications",
        "E-commerce Solutions",
        "Database Design & Management",
        "API Development & Integration",
        "Performance Optimization",
      ],
      gradient: "from-primary to-primary-hover",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Creative visual solutions that communicate your brand's story effectively. From logos to complete brand identities, I bring your vision to life.",
      features: [
        "Logo & Brand Identity",
        "UI/UX Design",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design",
      ],
      gradient: "from-accent to-accent-hover",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My Core <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Templated below are the services that I offer. Do take your time to explore and see the contents found in
            each service and perhaps make inquiries or requests accordingly <br />
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative group card-hover cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${service.gradient} text-white`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group border-primary/20 hover:text-white hover:border-primary hover:bg-primary/5"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Request Service
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6 leading-[2]">
            Are you a developer, and would want me to collaborate <br /> with you on a project? Worry less, you are just
            a click away!!
          </p>
          <Button
            className="btn-hero cursor-pointer hover:scale-105 transition-transform"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request collaboration{" "}
            <BriefcaseBusiness className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

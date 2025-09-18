import { Button } from "@/components/ui/button";
import { Linkedin, SendIcon, Instagram, BriefcaseIcon, BriefcaseBusiness } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-t from-muted/50 to-background border-t border-border/100">
      <div className="mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center text-center">
          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Simon Star Tech</h3>
            <p className="text-muted-foreground leading-relaxed">
              I run a Creative Freelance Agency, "Simon Star Tech". Building sleek websites and creating clean visuals
              for brands and businesses.
            </p>
            <div className="flex gap-4 justify-center text-center">
              <a
                href="https://www.instagram.com/hakuienistic?utm_source=qr&igsh=NzI0c2h6c2hlNzNl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110 group"
              >
                <Instagram className="h-5 w-5 transition-colors group-hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/simon-akuien-atem-710895290"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="h-5 w-5 transition-colors group-hover:text-primary" />
              </a>
              <a
                href="https://t.me/akuienistic"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110 group"
              >
                <SendIcon className="h-5 w-5 transition-colors group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground mb-2">Quick Links</h4>
            <ul className="flex flex-col items-center gap-1">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "Blog", href: "#blog" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label} className="w-full">
                  <button
                    onClick={() => {
                      const el = document.querySelector(link.href);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.location.hash = link.href;
                      }
                    }}
                    className="w-full text-center text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Web Development</p>
              <p className="text-muted-foreground">Graphic Design</p>
              <p className="text-muted-foreground">UI/UX Design</p>
              <p className="text-muted-foreground">Consulting</p>
            </div>
            <Button
              className="mt-4 bg-primary hover:bg-primary-hover text-primary-foreground"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Work With Me <BriefcaseBusiness className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-5 border-t border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center text-muted-foreground text-center mt-5">
              <span>
                &copy; {new Date().getFullYear()} Simon Star Tech. All rights reserved | Designed & Built by{" "}
                <a
                  href="https://www.linkedin.com/in/simon-akuien-atem-710895290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-semibold"
                >
                  {"</ Simon A. Atem >"}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

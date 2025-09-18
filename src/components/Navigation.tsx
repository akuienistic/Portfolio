import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import StarLogo from "./StarLogo";
import { useTheme } from "@/hooks/useTheme";

// ModeToggle component (must be outside Navigation)
function ModeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="ml-2 p-2 rounded-full border border-border bg-background hover:bg-primary/10 transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-blue-500" />}
    </button>
  );
}

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#")}
            className="text-primary hover:text-primary-hover hover:scale-105 transition-all duration-200 flex items-center"
          >
            {/* Show black PNG in light mode, white PNG in dark mode */}
            <span className="h-16 w-16 aspect-square flex items-center justify-center transition-colors duration-300">
              <img
                src="/STAR LOGO BLACK PNG.png.webp"
                alt="Logo"
                className="h-16 w-16 aspect-square object-contain block dark:hidden"
                draggable="false"
              />
              <img
                src="/STAR LOGO WHITE PNG.png.webp"
                alt="Logo"
                className="h-16 w-16 aspect-square object-contain hidden dark:block"
                draggable="false"
              />
            </span>
            <span className="hidden sm:block text-lg font-bold">SIMON STAR TECH</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5"
              >
                {item.label}
              </button>
            ))}
            {/* Mode Toggle */}
            <ModeToggle />
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
              onClick={() => scrollToSection("#contact")}
            >
              Hire Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button & Mode Toggle */}
          <div className="flex items-center md:hidden gap-2">
            <ModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 animate-fade-in">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border/50">
                <Button
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                  onClick={() => scrollToSection("#contact")}
                >
                  Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

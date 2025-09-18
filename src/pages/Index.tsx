import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import EmailSubscription from "@/components/EmailSubscription";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Blog />
        <EmailSubscription />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

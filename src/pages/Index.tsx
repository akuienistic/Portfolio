import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Loading from "@/components/Loading";

const Blog = lazy(() => import("@/components/Blog"));
const EmailSubscription = lazy(() => import("@/components/EmailSubscription"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

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
        <Suspense fallback={<Loading />}>
          <Blog />
          <EmailSubscription />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;

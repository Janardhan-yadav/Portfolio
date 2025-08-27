import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import doraemonHero from "@/assets/doraemon-hero.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-sky relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Doraemon Hero Image */}
          <div className="mb-8 flex justify-center">
            <div className="doraemon-float">
              <img 
                src={doraemonHero} 
                alt="Doraemon with Bamboo Copter" 
                className="w-64 h-36 md:w-80 md:h-45 lg:w-96 lg:h-54 object-contain"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-doraemon font-bold text-foreground">
              Hi, I'm <span className="text-primary">Janardhan</span>
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl font-rounded font-medium text-muted-foreground">
              Developer <span className="text-3xl md:text-4xl lg:text-5xl">🚀</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-rounded">
              Crafting magical digital experiences with code, just like Doraemon creates wonders with his gadgets!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-doraemon hover:scale-105 transition-transform duration-300 shadow-doraemon text-lg px-8 py-6 rounded-2xl font-rounded font-semibold"
              onClick={() => scrollToSection("projects")}
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6 rounded-2xl font-rounded font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-gadget hover:shadow-doraemon"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-gadget hover:shadow-doraemon"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:janardhan@example.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-gadget hover:shadow-doraemon"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary hover:text-primary-glow transition-colors duration-300"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
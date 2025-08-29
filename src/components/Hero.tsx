import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden z-10">
      {/* Magical Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl magical-hover"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl doraemon-float"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-accent/10 rounded-full blur-2xl magical-hover" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Magical Flying Doraemon */}
          <div className="mb-8 flex justify-center relative">
            <div className="text-8xl md:text-9xl lg:text-[12rem] magical-hover relative z-10">
              🚁
            </div>
            {/* Magical glow effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          </div>

          {/* Hero Text */}
          <div className="text-lg md:text-xl text-foreground max-w-2xl mx-auto font-rounded drop-shadow-sm bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-doraemon font-bold text-foreground drop-shadow-lg">
              Hi, I'm <span className="text-4xl md:text-6xl lg:text-7xl font-doraemon font-bold text-foreground drop-shadow-lg">Janardhan</span>
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl font-rounded font-medium text-foreground drop-shadow-md">
              Developer <span className="text-3xl md:text-4xl lg:text-5xl">🚀</span>
            </div>
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto font-rounded drop-shadow-sm bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              Crafting magical digital experiences with code, just like Doraemon creates wonders with his gadgets!
            </p>
          </div>

          {/* Magical CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="magic-button text-lg px-10 py-8 rounded-3xl font-rounded font-bold shadow-doraemon border-4 border-primary/30 text-primary-foreground"
              onClick={() => scrollToSection("experience")}
            >
              ✨ Explore My Journey ✨
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-4 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 text-lg px-10 py-8 rounded-3xl font-rounded font-bold backdrop-blur-sm bg-white/20"
              onClick={() => scrollToSection("contact")}
            >
              🔗 Connect Through Time
            </Button>
          </div>

          {/* Magical Social Gadgets */}
          <div className="mt-12 flex justify-center space-x-8">
            <a 
              href="https://github.com/Janardhan-yadav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/20 backdrop-blur-md border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-gadget hover:shadow-doraemon hover:scale-125 hover:rotate-12"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/janardhan-yadav-tokala/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/20 backdrop-blur-md border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-gadget hover:shadow-doraemon hover:scale-125 hover:rotate-12"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:yadavjanardhan91@gmail.com"
              className="p-4 rounded-full bg-white/20 backdrop-blur-md border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-gadget hover:shadow-doraemon hover:scale-125 hover:rotate-12"
            >
              <Mail size={28} />
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
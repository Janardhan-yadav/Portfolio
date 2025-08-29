import { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
  id: 1,
  title: "DocVerify – Document Verification System",
  description: "A Flutter and FastAPI-based mobile app for verifying admission documents using OCR and BERT-based validation with real-time results.",
  tech: ["Flutter", "FastAPI", "EasyOCR", "BERT", "Firebase"],
  image: "📄",
  github: "https://github.com/Janardhan-yadav/Docverify",
  live: "https://drive.google.com/file/d/1h8Yh6OBySr_EhXgBkM49h1m149JpXGo5/view?usp=drive_link",
  gradient: "from-blue-500 to-indigo-500"
}
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden z-10">
      {/* Magical Background Decorations */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl magical-hover"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-2xl doraemon-float"></div>
      <div className="absolute top-1/3 left-1/3 w-56 h-56 bg-red-accent/15 rounded-full blur-3xl magical-hover" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Magical Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-doraemon font-bold text-foreground mb-6 relative drop-shadow-lg">
            🛠️ My Gadget Collection 🛠️
            <div className="absolute -top-6 -left-8 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌟</div>
            <div className="absolute -top-6 -right-8 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>✨</div>
          </h2>
          <p className="text-2xl text-foreground font-rounded flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-primary/20 inline-flex">
            <Sparkles className="text-accent animate-pulse" size={28} />
            Projects straight from Doraemon's magical pocket
            <Sparkles className="text-accent animate-pulse" size={28} />
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="gadget-card anywhere-door group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Magical Project Icon */}
              <div className="text-8xl mb-6 text-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative">
                {project.image}
                <div className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">✨</div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-doraemon font-bold text-foreground group-hover:text-primary transition-colors duration-300 drop-shadow-md">
                  {project.title}
                </h3>
                
                <p className="text-foreground font-rounded text-sm leading-relaxed bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-primary/10">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-rounded font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className={`flex gap-3 transition-all duration-300 ${
                  hoveredProject === project.id 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-2 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 backdrop-blur-sm bg-white/20 font-rounded font-semibold"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={18} className="mr-2" />
                      🔧 Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="magic-button font-rounded font-semibold border-2 border-white/30"
                    asChild
                  >
                    {/* Live Demo removed */}
                  </Button>
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Magical Call to Action */}
        <div className="text-center mt-20">
          <p className="text-2xl text-foreground font-rounded mb-8 flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-primary/20 inline-flex">
            🎪 Want to see more magical creations? 🎪
          </p>
          <Button
            size="lg"
            className="magic-button text-xl px-12 py-8 rounded-3xl font-rounded font-bold shadow-doraemon border-4 border-white/30 text-primary-foreground"
            asChild
          >
            <a href="https://github.com/Janardhan-yadav" target="_blank" rel="noopener noreferrer">
              <Github size={24} className="mr-4" />
              🌟 Explore All Gadgets on GitHub 🌟
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
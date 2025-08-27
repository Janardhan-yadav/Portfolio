import { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Anywhere Door Portal",
      description: "A React-based web application that connects different worlds through seamless navigation. Built with TypeScript and modern animations.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "🚪",
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Time Machine Dashboard",
      description: "A comprehensive analytics dashboard that helps you travel through your data across different time periods with beautiful visualizations.",
      tech: ["Next.js", "Chart.js", "PostgreSQL", "Prisma"],
      image: "⏰",
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Bamboo Copter Chat",
      description: "Real-time messaging application with flying message animations. Features group chats, emoji reactions, and voice messages.",
      tech: ["Socket.io", "Node.js", "MongoDB", "React"],
      image: "🚁",
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Memory Bread E-Learning",
      description: "An interactive learning platform that helps students absorb knowledge efficiently with spaced repetition and gamification.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS", "PWA"],
      image: "🍞",
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      id: 5,
      title: "Big Light AI Assistant",
      description: "An intelligent chatbot powered by modern AI that illuminates solutions to complex problems with natural language processing.",
      tech: ["Python", "OpenAI API", "FastAPI", "Redis"],
      image: "💡",
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      title: "Small Light Portfolio",
      description: "A minimalist portfolio generator that creates beautiful, responsive portfolios for developers and designers in minutes.",
      tech: ["Gatsby", "GraphQL", "Netlify CMS", "GSAP"],
      image: "🔦",
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-doraemon font-bold text-foreground mb-4">
            My Gadget Collection
          </h2>
          <p className="text-xl text-muted-foreground font-rounded flex items-center justify-center gap-2">
            <Sparkles className="text-accent" size={24} />
            Projects straight from Doraemon's pocket
            <Sparkles className="text-accent" size={24} />
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
              {/* Project Icon */}
              <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-doraemon font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground font-rounded text-sm leading-relaxed">
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
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-doraemon hover:scale-105 transition-transform duration-300"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground font-rounded mb-6">
            Want to see more magical creations?
          </p>
          <Button
            size="lg"
            className="bg-gradient-doraemon hover:scale-105 transition-transform duration-300 shadow-doraemon text-lg px-8 py-6 rounded-2xl font-rounded font-semibold"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-3" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
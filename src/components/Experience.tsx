import { useState } from "react";
import { Calendar, MapPin, ChevronRight, Briefcase, Award, Code2 } from "lucide-react";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Future Gadgets Laboratory",
      location: "Tokyo, Japan",
      duration: "2022 - Present",
      type: "Full-time",
      description: "Leading development of time-travel applications and dimensional portal interfaces. Specialized in React, Node.js, and quantum computing APIs.",
      achievements: [
        "🚀 Developed the Anywhere Door portal system with 99.9% accuracy",
        "⏰ Built Time Machine dashboard handling 1M+ timeline requests",
        "🤖 Created AI-powered gadget recommendation engine",
        "📈 Improved user experience by 300% through magical UI/UX design"
      ],
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AWS", "Docker"],
      icon: "🚪",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Bamboo Copter Industries",
      location: "Remote",
      duration: "2021 - 2022",
      type: "Full-time",
      description: "Specialized in creating flying user interfaces and aerial navigation systems. Built responsive applications for various gadgets and devices.",
      achievements: [
        "🚁 Developed the Bamboo Copter control interface",
        "📱 Created mobile-first design system used across 50+ gadgets",
        "✨ Implemented magical animations increasing user engagement by 200%",
        "🎨 Led UI/UX redesign resulting in 95% user satisfaction"
      ],
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js", "GraphQL"],
      icon: "🚁",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Memory Bread Solutions",
      location: "Hybrid",
      duration: "2020 - 2021",
      type: "Full-time",
      description: "Worked on educational technology platforms and knowledge absorption systems. Focused on creating interactive learning experiences.",
      achievements: [
        "🍞 Built Memory Bread learning platform with adaptive algorithms",
        "📚 Developed spaced repetition system improving retention by 150%",
        "🎯 Created gamification features increasing completion rates by 80%",
        "🔧 Optimized performance reducing load times by 60%"
      ],
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis"],
      icon: "🍞",
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 4,
      title: "Intern Developer",
      company: "Small Light Labs",
      location: "On-site",
      duration: "2019 - 2020",
      type: "Internship",
      description: "Started my journey in the magical world of programming. Learned the fundamentals while working on small but illuminating projects.",
      achievements: [
        "💡 Contributed to the Small Light navigation system",
        "🌟 Built my first full-stack application from scratch",
        "📖 Mastered modern JavaScript and React fundamentals",
        "🤝 Collaborated with senior developers on 10+ projects"
      ],
      technologies: ["JavaScript", "HTML/CSS", "React", "Node.js", "MySQL"],
      icon: "🔦",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden z-10">
      {/* Magical Background Decorations */}
      <div className="absolute top-32 left-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl magical-hover"></div>
      <div className="absolute bottom-32 right-16 w-80 h-80 bg-accent/20 rounded-full blur-2xl doraemon-float"></div>
      <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-red-accent/15 rounded-full blur-3xl magical-hover" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Magical Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-doraemon font-bold text-foreground mb-6 relative drop-shadow-lg">
            💼 My Time Travel Journey 💼
            <div className="absolute -top-6 -left-8 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>⏰</div>
            <div className="absolute -top-6 -right-8 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>🌟</div>
          </h2>
          <p className="text-2xl text-foreground font-rounded bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-primary/20 inline-flex items-center gap-3">
            <Briefcase className="text-primary animate-pulse" size={28} />
            Adventures through different companies and technologies
            <Briefcase className="text-primary animate-pulse" size={28} />
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="gadget-card group cursor-pointer"
              onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
            >
              <div className="flex items-start gap-6">
                {/* Magical Company Icon */}
                <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex-shrink-0">
                  {exp.icon}
                  <div className="text-sm text-center mt-2 font-rounded font-bold text-primary">
                    {exp.duration.split(' - ')[0]}
                  </div>
                </div>

                {/* Experience Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-doraemon font-bold text-foreground group-hover:text-primary transition-colors duration-300 drop-shadow-md">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2">
                        <p className="text-xl font-rounded font-semibold text-primary">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-foreground bg-white/60 backdrop-blur-sm rounded-lg px-3 py-1">
                          <MapPin size={16} />
                          <span className="font-rounded text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground bg-white/60 backdrop-blur-sm rounded-lg px-3 py-1">
                          <Calendar size={16} />
                          <span className="font-rounded text-sm">{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ChevronRight 
                      className={`text-primary transition-transform duration-300 ${
                        selectedExp === exp.id ? 'rotate-90' : ''
                      }`} 
                      size={24} 
                    />
                  </div>

                  {/* Basic Description */}
                  <p className="text-foreground font-rounded bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-primary/10">
                    {exp.description}
                  </p>

                  {/* Expandable Content */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    selectedExp === exp.id 
                      ? 'max-h-[1000px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="space-y-6 pt-4">
                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-doraemon font-bold text-foreground flex items-center gap-2 mb-3">
                          <Award className="text-accent" size={20} />
                          Key Achievements
                        </h4>
                        <div className="grid gap-3">
                          {exp.achievements.map((achievement, idx) => (
                            <div 
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-primary/20"
                              style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                              <ChevronRight className="text-primary flex-shrink-0 mt-1" size={16} />
                              <span className="font-rounded text-foreground text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-doraemon font-bold text-foreground flex items-center gap-2 mb-3">
                          <Code2 className="text-primary" size={20} />
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIdx) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-doraemon text-primary-foreground rounded-full text-xs font-rounded font-semibold shadow-gadget hover:shadow-doraemon transition-shadow duration-300"
                              style={{ animationDelay: `${techIdx * 0.05}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Magical Call to Action */}
        <div className="text-center mt-20">
          <p className="text-2xl text-foreground font-rounded mb-8 bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-primary/20 inline-flex items-center gap-2">
            🎯 Ready for the next adventure? 🎯
          </p>
          <div className="magic-button inline-block px-12 py-6 rounded-3xl font-rounded font-bold shadow-doraemon border-4 border-white/30 text-primary-foreground bg-gradient-doraemon">
            <div className="flex items-center gap-4 text-xl">
              <Briefcase size={24} />
              ✨ Let's Create Magic Together! ✨
              <Briefcase size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
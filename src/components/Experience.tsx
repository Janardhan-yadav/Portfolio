import { useState } from "react";
import { Calendar, MapPin, ChevronRight, Briefcase, Award, Code2 } from "lucide-react";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);
  const [showSkills, setShowSkills] = useState(false);

  const allSkills = [
    "React", "TypeScript", "Node.js", "MongoDB", "AWS", 
    "Docker", "Tailwind CSS", "Next.js", "GraphQL", 
    "Vue.js", "Python", "Django", "PostgreSQL", "Redis",
    "JavaScript", "HTML/CSS", "MySQL", "Framer Motion"
  ];

type ExperienceType = {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon: string;
  color: string;
  certificateUrl: string;
  githubUrl?: string;
};

const experiences: ExperienceType[] = [
  {
    id: 1,
    title: "Research Intern",
    company: "International Institute of Information Technology, Hyderabad (IIITH – iHub Data)",
    location: "Hyderabad, India",
    duration: "Jun 2024 – Aug 2024",
    type: "Internship",
    description: "Worked on an end-to-end ML pipeline for detecting and classifying surgical tools in laparoscopic videos using YOLOv11n.",
    achievements: [
      "🔍 Annotated 1000+ images with Label Studio and prepared YOLO-formatted datasets",
      "📊 Applied data augmentation and trained YOLOv11n model for 50 epochs on Google Colab GPU",
      "🎥 Performed real-time inference to generate bounding-box detection videos"
    ],
    technologies: ["YOLOv11", "PyTorch", "OpenCV", "Pandas", "Matplotlib", "Google Colab"],
    icon: "🧑‍🔬",
    color: "from-blue-500 to-indigo-500",
    certificateUrl: "https://drive.google.com/file/d/1gwn6Ndtwc70AIHTtia79GPHWcYrkaaJG/view",
    githubUrl: "https://github.com/Janardhan-yadav/Cholec80-Surgical-Tool-Detection"
  },
  {
    id: 2,
    title: "Industrial Training",
    company: "Pixel Quest",
    location: "Hyderabad, India",
    duration: "2023",
    type: "Training",
    description: "Hands-on training focused on real-time systems and embedded development workflows.",
    achievements: [
      "⚙️ Gained exposure to embedded system design and workflows",
      "🧪 Assisted in testing and validating small-scale embedded modules in a team setting"
    ],
    technologies: ["Embedded Systems", "C/C++", "Testing Tools"],
    icon: "💡",
    color: "from-yellow-500 to-orange-500",
    certificateUrl: "https://drive.google.com/file/d/1KJP7C1tfrUuhqXGfnovGOWKl5oFg7R21/view"
  }
];

  return (
    <section id="experience" className="py-20 relative overflow-hidden z-10">
      {/* Magical Background Decorations */}
      <div className="absolute top-32 left-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl magical-hover"></div>
      <div className="container mx-auto px-4">
        <div className="grid gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative group bg-white/80 backdrop-blur-lg rounded-3xl shadow-doraemon p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-doraemon-lg"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl sm:text-5xl">{exp.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-doraemon font-bold text-primary mb-2 flex items-center gap-2">
                    {exp.title}
                    <span className="text-base sm:text-lg font-normal text-foreground/70">({exp.type})</span>
                  </h3>
                  <p className="text-base text-foreground/80 font-rounded mb-2">
                    {exp.company} &mdash; {exp.location}
                  </p>
                  <p className="text-sm text-foreground/60 font-rounded mb-2 flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    {exp.duration}
                  </p>
                  <p className="text-base text-foreground font-rounded mb-3">
                    {exp.description}
                  </p>
                  <ul className="list-disc pl-5 mb-3">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="text-sm text-foreground/80 font-rounded mb-1">{ach}</li>
                    ))}
                  </ul>
                  {/* Certificate Link */}
                  {exp.certificateUrl && (
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-full font-rounded font-semibold shadow-gadget hover:bg-primary/80 transition-colors duration-300"
                    >
                      📜 View Certificate
                    </a>
                  )}
                  {/* GitHub Link for Research Intern only */}
                  {exp.githubUrl && (
                    <a
                      href={exp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 ml-2 px-4 py-2 bg-gray-800 text-white rounded-full font-rounded font-semibold shadow-gadget hover:bg-gray-700 transition-colors duration-300"
                    >
                      🐙 View GitHub
                    </a>
                  )}
                  <h4 className="text-base sm:text-lg font-doraemon font-bold text-foreground flex items-center gap-2 mb-3">
                    <Code2 className="text-primary" size={18} />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={tech}
                        className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-doraemon text-primary-foreground rounded-full text-xs font-rounded font-semibold shadow-gadget hover:shadow-doraemon transition-shadow duration-300"
                        style={{ animationDelay: `${techIdx * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl pointer-events-none`}></div>
            </div>
          ))}
        </div>
        {/* Magical Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg md:text-2xl text-foreground font-rounded mb-6 md:mb-8 bg-white/20 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-primary/20 inline-flex items-center gap-2">
            🎯 Ready for the next adventure? 🎯
          </p>
          <button
            className="magic-button inline-block px-6 py-4 md:px-12 md:py-6 rounded-3xl font-rounded font-bold shadow-doraemon border-4 border-white/30 text-primary-foreground bg-gradient-doraemon"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <div className="flex items-center gap-2 md:gap-4 text-lg md:text-xl">
              <Briefcase size={20} className="md:w-6 md:h-6" />
              <span className="hidden sm:inline">✨ Let's Create Magic Together! ✨</span>
              <span className="sm:hidden">✨ Let's Work! ✨</span>
              <Briefcase size={20} className="md:w-6 md:h-6" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;

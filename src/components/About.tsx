import { useState } from "react";
import { Code, Palette, Rocket, Heart } from "lucide-react";

const About = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "UI/UX Design", "Tailwind CSS", "Git"
  ];

  const funFacts = [
    "I can debug code faster than Doraemon can pull out a gadget! 🔧",
    "My coffee consumption rivals Doraemon's dorayaki addiction ☕",
    "I dream in code and wake up with solutions 💭",
    "I've watched every Doraemon episode for 'research purposes' 📺"
  ];

  const handlePocketClick = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 3000);
  };

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-doraemon font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground font-rounded">
            Stored in Doraemon's magical pocket
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doraemon's Pocket */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div 
                className="pocket-container w-80 h-80 cursor-pointer transition-transform duration-300 hover:scale-105 flex items-center justify-center text-9xl"
                onClick={handlePocketClick}
              >
                🎒
                
                {/* Click me indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-rounded font-semibold shadow-lg animate-pulse">
                  Click the pocket!
                </div>
              </div>

              {/* Toggle Content Button */}
              <button
                onClick={toggleContent}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-rounded font-semibold hover:bg-primary-glow transition-colors duration-300 shadow-lg z-10"
              >
                {isContentVisible ? "Hide" : "Explore"}
              </button>

              {/* Easter Egg */}
              {showEasterEgg && (
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-6 py-3 rounded-2xl text-center font-rounded font-semibold shadow-lg animate-bounce z-20">
                  <div className="text-sm">Fun Fact!</div>
                  <div className="text-xs mt-1">
                    {funFacts[Math.floor(Math.random() * funFacts.length)]}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content that slides out */}
          <div className={`transition-all duration-700 ${isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full lg:translate-x-full'}`}>
            <div className="space-y-8">
              {/* Intro */}
              <div className="space-y-4">
                <h3 className="text-2xl font-doraemon font-bold text-foreground flex items-center gap-3">
                  <Heart className="text-red-accent" size={28} />
                  Hello from the pocket!
                </h3>
                <p className="text-lg text-muted-foreground font-rounded leading-relaxed">
                  I'm a passionate developer who believes in creating magical digital experiences. 
                  Just like Doraemon helps Nobita solve problems with his amazing gadgets, 
                  I use code to solve real-world challenges and bring ideas to life.
                </p>
              </div>

              {/* Skills Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-doraemon font-bold text-foreground flex items-center gap-3">
                  <Code className="text-primary" size={24} />
                  My Gadgets (Skills)
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-doraemon text-primary-foreground rounded-full text-sm font-rounded font-semibold shadow-gadget hover:shadow-doraemon transition-shadow duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h4 className="text-xl font-doraemon font-bold text-foreground flex items-center gap-3">
                  <Palette className="text-accent" size={24} />
                  What Drives Me
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-card rounded-2xl shadow-gadget">
                    <Rocket className="text-primary" size={20} />
                    <span className="font-rounded">Innovation & Technology</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-card rounded-2xl shadow-gadget">
                    <Palette className="text-accent" size={20} />
                    <span className="font-rounded">Beautiful UI/UX</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <p className="text-muted-foreground font-rounded italic">
                  "The best way to predict the future is to create it!" - Just like Doraemon's time machine! ⏰
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
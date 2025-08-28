import { useState } from "react";
import { Code, Palette, Rocket, Heart } from "lucide-react";

const About = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

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
    <section id="about" className="py-20 relative overflow-hidden z-10">
      {/* Magical Background Decorations */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl magical-hover"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-primary/20 rounded-full blur-3xl doraemon-float"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-red-accent/15 rounded-full blur-2xl magical-hover" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-doraemon font-bold text-foreground mb-6 relative drop-shadow-lg">
            ✨ About Me ✨
            <div className="absolute -top-4 -right-8 text-3xl animate-bounce">🎈</div>
          </h2>
          <p className="text-2xl text-foreground font-rounded drop-shadow-md bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-primary/20 inline-block">
            🎒 Stored in Doraemon's magical pocket of wonders 🎒
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Magical Doraemon's Pocket */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div 
                className="pocket-magic w-96 h-96 cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-3 flex items-center justify-center text-[8rem] shadow-doraemon relative"
                onClick={handlePocketClick}
                onMouseEnter={() => setShowSkills(true)}
                onMouseLeave={() => setShowSkills(false)}
              >
                🎒
                
                {/* Skills floating out of pocket on hover */}
                {showSkills && (
                  <div className="absolute inset-0 pointer-events-none">
                    {skills.map((skill, index) => {
                      const positions = [
                        { top: '-60px', left: '50px', delay: '0s' },
                        { top: '-40px', right: '30px', delay: '0.1s' },
                        { top: '20px', right: '-50px', delay: '0.2s' },
                        { bottom: '40px', right: '-40px', delay: '0.3s' },
                        { bottom: '-40px', left: '40px', delay: '0.4s' },
                        { bottom: '20px', left: '-60px', delay: '0.5s' },
                        { top: '60px', left: '-50px', delay: '0.6s' },
                        { top: '10px', left: '10px', delay: '0.7s' },
                        { top: '100px', right: '10px', delay: '0.8s' }
                      ];
                      const pos = positions[index % positions.length];
                      
                      return (
                        <div
                          key={skill}
                          className="absolute bg-gradient-doraemon text-primary-foreground px-3 py-2 rounded-full text-sm font-rounded font-semibold shadow-doraemon border-2 border-white/50 animate-fade-in z-30"
                          style={{
                            ...pos,
                            animationDelay: pos.delay,
                            transform: 'translateZ(0)'
                          }}
                        >
                          ✨ {skill}
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {/* Magical sparkles */}
                <div className="absolute top-8 right-8 text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>✨</div>
                <div className="absolute bottom-8 left-8 text-2xl animate-bounce" style={{ animationDelay: '1s' }}>⭐</div>
                <div className="absolute top-1/2 -right-4 text-xl animate-bounce" style={{ animationDelay: '1.5s' }}>💫</div>
                
                {/* Hover/Click me indicator */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-lg font-rounded font-bold shadow-lg animate-pulse border-2 border-accent/50">
                  {showSkills ? "🎒 Skills are floating out!" : "🪄 Hover for skills, click for fun!"}
                </div>
              </div>

              {/* Magical Toggle Button */}
              <button
                onClick={toggleContent}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 magic-button px-8 py-4 rounded-full font-rounded font-bold shadow-doraemon z-10 text-lg border-4 border-white/30 text-primary-foreground"
              >
                {isContentVisible ? "🚪 Hide Magic" : "🌟 Discover Magic"}
              </button>

              {/* Magical Easter Egg */}
              {showEasterEgg && (
                <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 bg-gradient-doraemon text-primary-foreground px-8 py-4 rounded-3xl text-center font-rounded font-bold shadow-doraemon border-4 border-white/30 z-20 max-w-xs">
                  <div className="text-lg flex items-center justify-center gap-2">
                    ✨ Fun Fact! ✨
                  </div>
                  <div className="text-sm mt-2 leading-relaxed">
                    {funFacts[Math.floor(Math.random() * funFacts.length)]}
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-2xl animate-bounce">🎉</div>
                </div>
              )}
            </div>
          </div>

          {/* Content that slides out */}
          <div className={`transition-all duration-700 ${isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full lg:translate-x-full'}`}>
            <div className="space-y-8">
              {/* Intro */}
              <div className="space-y-4">
                <h3 className="text-2xl font-doraemon font-bold text-foreground flex items-center gap-3 drop-shadow-md">
                  <Heart className="text-red-accent" size={28} />
                  Hello from the pocket!
                </h3>
                <p className="text-lg text-foreground font-rounded leading-relaxed bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                  I'm a passionate developer who believes in creating magical digital experiences. 
                  Just like Doraemon helps Nobita solve problems with his amazing gadgets, 
                  I use code to solve real-world challenges and bring ideas to life.
                </p>
              </div>

              {/* Skills Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-doraemon font-bold text-foreground flex items-center gap-3 drop-shadow-md">
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
                <h4 className="text-xl font-doraemon font-bold text-foreground flex items-center gap-3 drop-shadow-md">
                  <Palette className="text-accent" size={24} />
                  What Drives Me
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-gadget border border-primary/20">
                    <Rocket className="text-primary" size={20} />
                    <span className="font-rounded text-foreground font-semibold">Innovation & Technology</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-gadget border border-primary/20">
                    <Palette className="text-accent" size={20} />
                    <span className="font-rounded text-foreground font-semibold">Beautiful UI/UX</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <p className="text-foreground font-rounded italic bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
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
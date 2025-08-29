import { Heart, Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Janardhan-yadav",
      color: "hover:text-primary",
      gadget: "🔧" // Repair Tool
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/janardhan-yadav-tokala/",
      color: "hover:text-blue-600",
      gadget: "📱" // Communication Device
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:yadavjanardhan91@gail.com",
      color: "hover:text-accent",
      gadget: "✉️" // Letter
    }
  ];

  return (
    <footer id="contact" className="bg-gradient-doraemon text-primary-foreground relative overflow-hidden">
      {/* Magical Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-10 left-20 w-48 h-48 bg-white rounded-full blur-3xl magical-hover"></div>
        <div className="absolute bottom-20 right-32 w-40 h-40 bg-accent rounded-full blur-2xl doraemon-float"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full blur-xl magical-hover" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-red-accent rounded-full blur-lg doraemon-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Magical Doraemon Waving */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="text-[10rem] magical-hover relative">
                  👋
                  {/* Magical sparkles around the wave */}
                  <div className="absolute -top-4 -right-4 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>✨</div>
                  <div className="absolute -bottom-4 -left-4 text-2xl animate-bounce" style={{ animationDelay: '1s' }}>⭐</div>
                  <div className="absolute top-1/2 -left-8 text-xl animate-bounce" style={{ animationDelay: '1.5s' }}>💫</div>
                </div>
                
                {/* Magical Speech bubble */}
                <div className="absolute -top-12 -right-8 bg-white text-primary px-8 py-4 rounded-3xl shadow-doraemon border-4 border-primary/20">
                  <div className="font-doraemon font-bold text-xl">🎉 Thanks for visiting! 🎉</div>
                  <div className="text-base font-rounded mt-1">Let's create magic together! ✨🚀</div>
                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-3 left-12 w-6 h-6 bg-white transform rotate-45 border-r-4 border-b-4 border-primary/20"></div>
                </div>
              </div>
            </div>

            {/* Magical Contact Information */}
            <div className="text-center lg:text-left space-y-10">
              <div>
                <h3 className="text-4xl font-doraemon font-bold mb-6 relative">
                  🌟 Let's Connect! 🌟
                  <div className="absolute -top-2 -right-8 text-2xl animate-bounce">🎈</div>
                </h3>
                <p className="text-xl font-rounded opacity-95 max-w-2xl leading-relaxed">
                  🚀 Ready to embark on a magical journey together? Whether you need a website, 
                  have a project idea, or just want to chat about technology, I'm here to help!
                  Let's build something amazing with the power of code and imagination! 🌈✨
                </p>
              </div>

              {/* Magical Communication Gadgets */}
              <div>
                <h4 className="text-2xl font-doraemon font-bold mb-8 flex items-center gap-3">
                  📡 My Communication Gadgets 📡
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-6 bg-white/20 backdrop-blur-md rounded-3xl hover:bg-white/30 transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-gadget hover:shadow-doraemon border-2 border-white/30"
                      >
                        <div className="text-3xl mb-3 group-hover:animate-bounce group-hover:scale-125 transition-all duration-300">
                          {social.gadget}
                        </div>
                        <Icon size={28} className="mb-3 group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-base font-rounded font-bold">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Magical Bottom Bar */}
        <div className="border-t border-white/30 py-8 bg-white/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
              <div className="flex items-center space-x-3 text-lg font-rounded">
                <span>© {currentYear} Janardhan's Magical Portfolio.</span>
                <span>Made with</span>
                <Heart size={20} className="text-red-accent animate-pulse" />
                <span>and lots of</span>
                <span className="font-doraemon font-bold">Dorayaki</span>
                <span className="text-xl">🥞</span>
              </div>
              
              <div className="text-lg font-rounded opacity-90 flex items-center gap-2">
                <span>⚡</span>
                <span>Powered by Doraemon's Future Technology</span>
                <span>⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Magical Floating Elements */}
      <div className="absolute top-20 right-10 text-8xl opacity-30 magical-hover" style={{ animationDelay: '1s' }}>
        🚁
      </div>
      <div className="absolute bottom-40 left-10 text-6xl opacity-30 doraemon-float" style={{ animationDelay: '2s' }}>
        🚪
      </div>
      <div className="absolute top-1/3 right-1/4 text-5xl opacity-25 magical-hover" style={{ animationDelay: '3s' }}>
        ⏰
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-4xl opacity-25 doraemon-float" style={{ animationDelay: '4s' }}>
        💡
      </div>
    </footer>
  );
};

export default Footer;
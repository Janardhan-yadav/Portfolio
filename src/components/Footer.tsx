import { Heart, Mail, Github, Linkedin, Twitter } from "lucide-react";
import doraemonWave from "@/assets/doraemon-wave.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      color: "hover:text-primary",
      gadget: "🔧" // Repair Tool
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
      gadget: "📱" // Communication Device
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      color: "hover:text-blue-400",
      gadget: "📡" // Broadcasting Antenna
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:janardhan@example.com",
      color: "hover:text-accent",
      gadget: "✉️" // Letter
    }
  ];

  return (
    <footer id="contact" className="bg-gradient-doraemon text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-20 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-accent rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Doraemon Waving */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src={doraemonWave} 
                  alt="Doraemon Waving Goodbye" 
                  className="w-64 h-64 object-contain doraemon-float"
                />
                
                {/* Speech bubble */}
                <div className="absolute -top-8 -right-4 bg-white text-primary px-6 py-3 rounded-2xl shadow-lg">
                  <div className="font-doraemon font-bold text-lg">Thanks for visiting!</div>
                  <div className="text-sm font-rounded">Let's create magic together! ✨</div>
                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center lg:text-left space-y-8">
              <div>
                <h3 className="text-3xl font-doraemon font-bold mb-4">
                  Let's Connect!
                </h3>
                <p className="text-lg font-rounded opacity-90 max-w-lg">
                  Ready to embark on a magical journey together? Whether you need a website, 
                  have a project idea, or just want to chat about technology, I'm here to help!
                </p>
              </div>

              {/* Social Links as Gadgets */}
              <div>
                <h4 className="text-xl font-doraemon font-semibold mb-6">My Communication Gadgets</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        <div className="text-2xl mb-2 group-hover:animate-bounce">
                          {social.gadget}
                        </div>
                        <Icon size={24} className="mb-2 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-rounded font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2 text-sm font-rounded">
                <span>© {currentYear} Janardhan's Portfolio.</span>
                <span>Made with</span>
                <Heart size={16} className="text-red-accent animate-pulse" />
                <span>and lots of</span>
                <span className="font-doraemon font-semibold">Dorayaki</span>
                <span>🥞</span>
              </div>
              
              <div className="text-sm font-rounded opacity-75">
                Powered by Doraemon's Future Technology ⚡
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>
        🚁
      </div>
      <div className="absolute bottom-32 left-10 text-4xl opacity-20 animate-bounce" style={{ animationDelay: '2s' }}>
        🚪
      </div>
    </footer>
  );
};

export default Footer;
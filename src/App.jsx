import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Menu, X, ExternalLink, Code, Wrench, GraduationCap, Download, FileText } from 'lucide-react';
import image from './assets/image.png';
import image2 from './assets/image2.png';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = {
    programming: [
      { name: 'Python'},
      { name: 'C++' },
      { name: 'JavaScript'},
      { name: 'Java' }
    ],
    webDev: [
      { name: 'HTML & CSS'},
      { name: 'React'},
      { name: 'Next.js'},
      { name: 'Node.js'}
    ],
    tools: [
      { name: 'Git & GitHub'},
      { name: 'MongoDB' },
      { name: 'VS Code'},
    ]
  };

  const projects = [
    {
      title: 'Guess the Number Game',
      tech: 'JavaScript • CSS',
      description: 'A fun web-based game where players guess a randomly generated number within a range. Built with JavaScript and styled with CSS.',
      gradient: 'from-purple-400 to-purple-600',
      icon: '🎲',
      demo: 'https://guess-the-number-2uhpuw9dx-shaurya1707-cells-projects.vercel.app/',
      github: 'https://github.com/Shaurya1707-cell/Guess-the-number/tree/main'
    },
    {
      title: 'Password Manager',
      tech: 'Next.js • JavaScript • CSS • MongoDB',
      description: 'A secure password manager built with Next.js, allowing users to store and manage their passwords safely.',
      gradient: 'from-pink-400 to-red-500',
      icon: '🔐',
      demo: 'https://password-manager-2uhpuw9dx-shaurya1707-cells-projects.vercel.app/',
      github: 'https://github.com/Shaurya1707-cell/Password-manager'
    },
    {
      title: 'Project Title 3',
      tech: 'Python • MATLAB',
      description: 'Description of a mechanical engineering or interdisciplinary project combining programming with engineering.',
      gradient: 'from-blue-400 to-cyan-400',
      icon: '⚙️',
      demo: '#',
      github: '#'
    }
  ];

  const handleResumeDownload = () => {
    // This would trigger the download of your actual resume file
    // Replace 'resume.pdf' with the actual path to your resume
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf'; // Update this path
    link.download = 'Shaurya_Dwivedi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Liquid Crystal Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300" 
           style={{
             background: scrollY > 50 
               ? 'rgba(17, 24, 39, 0.95)' 
               : 'transparent',
             backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
           }}>
        <div className="relative overflow-hidden">
          {/* Liquid Crystal Effect */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`,
            }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent
                            hover:scale-105 transition-transform duration-300 cursor-pointer">
                SD
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`relative px-3 py-2 transition-all duration-300 group ${
                      activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'
                    }`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 
                                   transform origin-left transition-transform duration-300 
                                   ${activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700 animate-slideDown">
            <div className="px-4 py-2 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-300
                           ${activeSection === item.toLowerCase() 
                             ? 'bg-cyan-500 text-white' 
                             : 'hover:bg-gray-700'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400 opacity-10 animate-float"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 10 + 's',
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50 
                            group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              <img
                src={image}
                alt="Shaurya Dwivedi"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400 
                         shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center md:text-left order-2 md:order-1 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
                         bg-clip-text text-transparent animate-gradient">
              Shaurya Dwivedi
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              B.Tech Mechanical Engineering Student
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              First Year | MMMUT, Gorakhpur | Passionate about Engineering & Technology
            </p>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg 
                         transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/50
                         relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-cyan-400 hover:bg-cyan-400 rounded-lg 
                         transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50
                         transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 
                       bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed transform transition-all duration-500 hover:scale-105">
                I'm a first-year B.Tech Mechanical Engineering student at Madan Mohan Malaviya University of Technology, 
                Gorakhpur. With a strong foundation in both mechanical engineering principles and computer science, 
                I'm passionate about leveraging technology to solve real-world engineering problems.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: 'Projects', value: '5+' },
                  { label: 'Skills', value: '7+' },
                  { label: 'Programming', value: 'Since 2020' },
                  { label: 'Caffeine', value: '∞' }
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg text-center transform transition-all duration-300 
                                            hover:scale-105 hover:bg-gray-700 cursor-pointer group">
                    <div className="text-3xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <InfoCard
                icon={<GraduationCap className="text-cyan-400" size={32} />}
                title="Education"
                content="B.Tech in Mechanical Engineering"
                subtitle="MMMUT, Gorakhpur"
                details="2024 - 2028"
              />
              <InfoCard
                icon={<MapPin className="text-cyan-400" size={32} />}
                title="Location"
                content="Gorakhpur"
                subtitle="Uttar Pradesh, India"
              />
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg 
                            border border-gray-700 transform transition-all duration-300 hover:scale-105 
                            hover:shadow-cyan-500/20">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Focus Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'Mechanical Design', 'Programming'].map((area, index) => (
                    <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm
                                               hover:bg-cyan-500/30 transition-colors cursor-pointer">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 
                       bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCategory title="Programming Languages" skills={skills.programming} icon="💻" />
            <SkillCategory title="Web Development" skills={skills.webDev} icon="🌐" />
            <SkillCategory title="Tools & Technologies" skills={skills.tools} icon="🔧" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 
                       bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 
                       bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl 
                        border border-gray-700 transform transition-all duration-500 hover:scale-105 
                        hover:shadow-cyan-500/20 relative overflow-hidden group">
            {/* Animated Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 text-center space-y-6">
              <div className="inline-block p-4 bg-cyan-500/20 rounded-full mb-4 animate-bounce">
                <FileText className="text-cyan-400" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-white">Download My Resume</h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Get a comprehensive overview of my education, skills, projects, and experience. 
                Perfect for recruiters and potential collaborators.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <button
                  onClick={handleResumeDownload}
                  className="group/btn px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg 
                           transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg 
                           hover:shadow-cyan-500/50 relative overflow-hidden flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2 text-lg font-semibold">
                    <Download size={24} />
                    Download PDF
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 
                                group-hover/btn:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button
                  onClick={() => window.open('https://docs.google.com/document/d/your-resume-link', '_blank')}
                  className="px-8 py-4 border-2 border-cyan-400 hover:bg-cyan-400 rounded-lg 
                           transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50
                           transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg font-semibold"
                >
                  <ExternalLink size={24} />
                  View Online
                </button>
              </div>
              
              <div className="pt-8 border-t border-gray-700 mt-8">
                <p className="text-gray-500 text-sm">
                  Last Updated: January 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 
                       bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactItem
              icon={<Mail className="text-cyan-400" size={28} />}
              title="Email"
              content="shauryagkp2006@gmail.com"
              link="mailto:shauryagkp2006@gmail.com"
            />
            <ContactItem
              icon={<Phone className="text-cyan-400" size={28} />}
              title="Phone"
              content="+91-7007103090"
              link="tel:+917007103090"
            />
            <ContactItem
              icon={<Linkedin className="text-cyan-400" size={28} />}
              title="LinkedIn"
              content="View Profile"
              link="https://www.linkedin.com/in/shaurya-dwivedi-164321379/"
            />
            <ContactItem
              icon={<Github className="text-cyan-400" size={28} />}
              title="GitHub"
              content="@Shaurya1707-cell"
              link="https://github.com/Shaurya1707-cell"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2026 Shaurya Dwivedi. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/shaurya-dwivedi-164321379/" 
                 className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Shaurya1707-cell" 
                 className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300">
                <Github size={24} />
              </a>
              <a href="mailto:shauryagkp2006@gmail.com" 
                 className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

// Info Card Component
function InfoCard({ icon, title, content, subtitle, details }) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg 
                  border border-gray-700 transform transition-all duration-300 hover:scale-105 
                  hover:shadow-cyan-500/20 group">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-sm text-gray-400 mb-1">{title}</h3>
          <p className="text-lg font-semibold text-white">{content}</p>
          {subtitle && <p className="text-cyan-400">{subtitle}</p>}
          {details && <p className="text-sm text-gray-500 mt-1">{details}</p>}
        </div>
      </div>
    </div>
  );
}

// Skill Category Component
function SkillCategory({ title, skills, icon }) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg 
                  border border-gray-700 transform transition-all duration-500 hover:scale-105 
                  hover:shadow-cyan-500/20">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex justify-between mb-2">
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">{skill.name}</span>
              <span className="text-gray-500 text-sm">{skill.level}</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full 
                         transform origin-left transition-all duration-1000 group-hover:scale-x-105"
                style={{ width: skill.level }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ title, tech, description, gradient, icon, demo, github, index }) {
  return (
    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden 
                   border border-gray-700 transform transition-all duration-500 hover:scale-105 
                   hover:shadow-cyan-500/20 group`}
         style={{ animationDelay: `${index * 100}ms` }}>
      <div className={`h-2 bg-gradient-to-r ${gradient}`} />
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-cyan-400 text-sm font-mono">{tech}</p>
        <p className="text-gray-400 leading-relaxed">{description}</p>
        <div className="flex gap-3 pt-4">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-center 
                     transition-all duration-300 flex items-center justify-center gap-2 
                     transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 border border-gray-600 hover:border-cyan-400 rounded-lg 
                     text-center transition-all duration-300 flex items-center justify-center gap-2
                     transform hover:-translate-y-1"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

// Contact Item Component
function ContactItem({ icon, title, content, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg 
               border border-gray-700 transform transition-all duration-300 hover:scale-105 
               hover:shadow-cyan-500/20 group block"
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="p-4 bg-cyan-500/20 rounded-full group-hover:bg-cyan-500/30 
                      transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
        <div>
          <h3 className="text-sm text-gray-400 mb-1">{title}</h3>
          <p className="text-white font-medium group-hover:text-cyan-400 transition-colors break-all">
            {content}
          </p>
        </div>
      </div>
    </a>
  );
}
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-5xl font-bold text-gradient">
                EL
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Eduardo José Lara Da Silva
          </h1>

          <div className="text-2xl md:text-3xl font-semibold mb-4 text-gradient">
            Frontend Developer | React & TypeScript
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Building dynamic and scalable web experiences with modern technologies.
            Passionate about creating intuitive user interfaces that users love.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="btn-primary group">
              <span className="flex items-center gap-2">
                Download CV
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
            <a href="#contact" className="card-glass px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
              Hire Me
            </a>
            <a href="#projects" className="card-glass px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
              See My Work
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/eduardolara"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 card-glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/eduardo-lara"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 card-glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:eduardo@example.com"
              className="w-12 h-12 card-glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={32} className="text-primary-400" />
      </a>
    </section>
  );
}

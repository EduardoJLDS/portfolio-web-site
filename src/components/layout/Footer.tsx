import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/eduardolara', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/eduardo-lara', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:eduardo.lara@example.com', label: 'Email' }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-950 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/20 to-transparent"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Eduardo Lara</h3>
            <p className="text-gray-400 mb-4">
              Frontend Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 card-glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Available for freelance projects and full-time opportunities.</p>
              <a
                href="mailto:eduardo.lara@example.com"
                className="text-primary-400 hover:text-primary-300 transition-colors inline-block"
              >
                eduardo.lara@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Eduardo José Lara Da Silva. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with <Heart size={16} className="text-red-500 fill-current" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

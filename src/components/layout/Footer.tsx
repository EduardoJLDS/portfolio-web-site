import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../../hooks';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/EduardoJLDS', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/eduardojlds/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:eduardojoselara12@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#projects', label: t('nav.projects') }
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-950 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/20 to-transparent"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Eduardo Lara</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
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
            <h4 className="text-lg font-semibold text-gray-200 mb-4">{t('footer.quickLinks')}</h4>
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
            <h4 className="text-lg font-semibold text-gray-200 mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2 text-gray-400">
              <p>{t('footer.availability')}</p>
              <a
                href="mailto:eduardojoselara12@gmail.com"
                className="text-primary-400 hover:text-primary-300 transition-colors inline-block"
              >
                eduardojoselara12@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Eduardo José Lara Da Silva. {t('footer.rights')}
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              {t('footer.builtWith')} <Heart size={16} className="text-red-500 fill-current" /> {t('footer.technologies')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

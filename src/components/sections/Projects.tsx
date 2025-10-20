import { ExternalLink, Github, Code2 } from 'lucide-react';
import { useLanguage } from '../../hooks';
import techGearImage from '../../assets/images/tech-gear.png';

export default function Projects() {
const { t } = useLanguage();

  const projects = [
    {
  title: "Tech & Gear Emporium",
  description: "Modern e-commerce application for tech products featuring interactive shopping cart, product catalog with quantity selection, and comprehensive testing suite. Built with React and TypeScript for optimal performance and type safety.",
  image: techGearImage,
  technologies: ["React", "TypeScript", "Zustand", "Vitest", "Testing Library", "CSS3", "Vite", "ESLint"],
  github: "https://github.com/EduardoJLDS/Tech---Gear-Emporium",
  demo: "https://tech-gear-emporium.vercel.app/",
  featured: true
}
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gray-900/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('projects.title')} <span className="text-gradient">{t('projects.titleHighlight')}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              {t('projects.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-glass overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {t('projects.featured')}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gradient group-hover:text-primary-300 transition-colors">
                      {project.title}
                    </h3>
                    <Code2 size={20} className="text-primary-400 flex-shrink-0" />
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-primary-900/30 border border-primary-500/30 rounded text-primary-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 card-glass hover:bg-white/10 rounded-lg transition-all duration-300"
                    >
                      <Github size={18} />
                      <span className="text-sm">{t('projects.viewCode')}</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/50 rounded-lg transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">{t('projects.viewProject')}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://github.com/EduardoJLDS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <Github size={20} />
              {t('projects.viewMoreGithub')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

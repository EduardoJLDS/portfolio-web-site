import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Clorian',
      position: 'Frontend Developer',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Leading frontend development initiatives, building scalable React applications with TypeScript. Implemented modern design systems and optimized performance across multiple projects.',
      achievements: [
        'Reduced page load time by 40% through code splitting and lazy loading',
        'Built reusable component library used across 5+ projects',
        'Mentored junior developers in React best practices',
        'Implemented CI/CD pipelines improving deployment efficiency by 60%'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL']
    },
    {
      company: 'Las Villas',
      position: 'Frontend Developer',
      period: '2021 - 2022',
      location: 'Hybrid',
      description: 'Developed responsive web applications for real estate management platform. Collaborated with designers and backend teams to deliver seamless user experiences.',
      achievements: [
        'Redesigned main dashboard improving user engagement by 35%',
        'Integrated RESTful APIs for dynamic content management',
        'Implemented responsive design supporting all device sizes',
        'Reduced bug reports by 50% through comprehensive testing'
      ],
      technologies: ['React', 'JavaScript', 'Redux', 'Material-UI', 'REST APIs']
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-950/10 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Professional journey building impactful web solutions
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="card-glass p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gradient">{exp.position}</h3>
                        <p className="text-xl text-gray-300">{exp.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                    <div className="flex items-center gap-2 text-primary-400">
                      <Calendar size={18} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={18} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary-400 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <span className="text-accent-400 mt-1">▸</span>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-900/30 border border-primary-500/30 rounded-full text-sm text-primary-300 hover:bg-primary-900/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

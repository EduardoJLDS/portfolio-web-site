import { Code2, Palette, Rocket, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code with best practices'
    },
    {
      icon: Palette,
      title: 'UI/UX Focus',
      description: 'Creating beautiful and intuitive user experiences'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach with strong communication skills'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-primary-400 font-semibold">Frontend Developer</span> with
                a strong focus on building modern, responsive, and user-centric web applications. My journey in
                web development has been driven by a genuine love for creating seamless digital experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in <span className="text-accent-400 font-semibold">React, TypeScript, and modern CSS frameworks</span>,
                I transform complex requirements into elegant solutions. I'm constantly learning and adapting to new
                technologies to stay at the forefront of web development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My proactive approach and attention to detail ensure that every project I work on not only meets
                technical requirements but also delivers an exceptional user experience.
              </p>
            </div>

            <div className="card-glass p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Experience</span>
                  <span className="text-primary-400 font-semibold">3+ Years</span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Projects Completed</span>
                  <span className="text-primary-400 font-semibold">25+</span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Technologies Mastered</span>
                  <span className="text-primary-400 font-semibold">15+</span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Location</span>
                  <span className="text-primary-400 font-semibold">Available Remote</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-glass p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gradient">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Code2, Database, Layout, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Layout,
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 98 }
      ]
    },
    {
      icon: Database,
      category: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Supabase', level: 85 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      icon: Wrench,
      category: 'DevOps & Tools',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Vercel', level: 90 },
        { name: 'Webpack/Vite', level: 85 }
      ]
    },
    {
      icon: Code2,
      category: 'Design & UX',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Responsive Design', level: 95 },
        { name: 'UI/UX Principles', level: 88 },
        { name: 'Accessibility (a11y)', level: 85 },
        { name: 'Animation (Framer)', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gray-900/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications from design to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card-glass p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gradient">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-primary-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 card-glass p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Always Learning</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Currently exploring <span className="text-primary-400 font-semibold">AI Integration</span>,
              <span className="text-primary-400 font-semibold"> Web3 Technologies</span>, and
              <span className="text-primary-400 font-semibold"> Advanced Animation Techniques</span> to
              stay ahead in the ever-evolving web development landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionTitle from '../components/ui/SectionTitle';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Technologies I Have Worked With"
          subtitle="Continuous learning and growth"
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 ">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="group relative bg-whiterounded-xl p-5 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl mb-4 text-cyan-600 group-hover:text-cyan-700 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="font-medium text-gray-800 group-hover:text-cyan-600 transition-colors">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import SectionTitle from '../components/ui/SectionTitle'
import { skills } from '../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Technologies I have worked with"
        />
        
        <div className="mx-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-blue-500 text-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className=" text-4xl mb-3">{skill.icon}</div>
              <h3 className="font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
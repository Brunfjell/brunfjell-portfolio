import SectionTitle from '../components/ui/SectionTitle'
import { projects } from '../data/projects'
import ProjectCard from '../components/ui/ProjectCard'

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="My Projects" 
          subtitle="Some of my recent work" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
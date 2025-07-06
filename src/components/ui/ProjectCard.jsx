import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="h-48 bg-gray-200">
        {/* Project image sample */}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 px-3 py-1 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Live Demo
            </a>
          )}
          <a 
            href={project.codeUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:underline"
          >
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
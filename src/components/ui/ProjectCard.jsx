import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-green-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="h-48 bg-gray-200">
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-gray-100 text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-200 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 px-3 py-1 text-sm rounded-lg">
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
              className="bg-amber-600 px-3 py-1 text-white rounded-lg hover:underline"
            >
              Open
            </a>
          )}
          {project.codeUrl && (
            <a 
              href={project.codeUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 py-1 hover:underline"
            >
              View Repository
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
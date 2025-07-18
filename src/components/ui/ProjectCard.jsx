import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="bg-stone-800 rounded-xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-300"
    >
      <motion.div 
        className="h-48 bg-gray-200 overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-400">
            <span className="text-gray-600 font-medium">Project Preview</span>
          </div>
        )}
      </motion.div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-gray-50 text-xl font-bold mb-1 line-clamp-1">{project.title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <motion.span 
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="bg-white/90 px-3 py-1 text-xs font-medium rounded-lg text-gray-800 shadow-sm hover:bg-cyan-600 hover:text-stone-200"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 px-4 py-2 text-white rounded-lg font-medium text-sm shadow-md transition-colors"
            >
              Open
            </motion.a>
          )}
          {project.codeUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 px-4 py-2 text-gray-100 rounded-lg font-medium text-sm border border-white/20 transition-colors"
            >
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Code
              </span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
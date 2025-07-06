import { motion } from "framer-motion"
import { X } from "react-feather"

const MobileMenu = ({ onClose }) => {
  const menuItems = ['About', 'Projects', 'Skills', 'Contact']
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 bg-white z-40 pt-24 px-6"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-500 hover:text-gray-800"
      >
        <X size={24} />
      </button>
      
      <nav className="flex flex-col gap-6">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={onClose}
            className="text-2xl font-medium py-2 border-b border-gray-100 hover:text-blue-600"
          >
            {item}
          </a>
        ))}
      </nav>
    </motion.div>
  )
}

export default MobileMenu
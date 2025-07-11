import { motion } from "framer-motion"
import { useState } from "react"
import MobileMenu from "./MobileMenu"
import SocialIcons from '../shared/SocialIcons'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <motion.img 
            src="./assets/icons/brunfjell-icon.png" 
            className="h-8 w-auto" 
            alt="Brunfjell Logo"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <span>BRUNFJELL</span>
        </motion.h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <SocialIcons className="hidden md:flex" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  )
}

export default Header
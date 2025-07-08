import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="bg-orange-500 min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-stone-50"
        >
          BRUNFJELL
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-stone-100 mb-8"
        >
          Portfolio of an IT enthusiast with a passion for tech and hands-on problem-solving. 
          Where building apps, websites, and IoT systems that blend creativity with functionality becomes the story.
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
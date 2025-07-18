import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-orange-500 flex items-center justify-center text-center px-4"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 w-[200%]"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            backgroundImage: `
              linear-gradient(135deg, 
                rgba(255,255,255,0.08) 25%, transparent 25%,
                transparent 50%, rgba(255,255,255,0.08) 50%,
                rgba(255,255,255,0.08) 75%, transparent 75%
              )`,
            backgroundSize: "60px 60px",
            height: "100%"
          }}
        />
      </div>

      <motion.div
        className="absolute top-1/6 left-1/4 w-40 h-40 rounded-full bg-stone-900/10"
        animate={{
          x: ["0%", "20%", "20%", "0%", "0%"],
          y: ["0%", "0%", "15%", "15%", "0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/8 w-24 h-24 rounded-full bg-stone-900/10"
        animate={{
          x: ["0%", "20%", "20%", "0%", "0%"],
          y: ["0%", "0%", "15%", "15%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/5 right-1/4 w-32 h-32 rounded-full bg-stone-900/10"
        animate={{
          x: ["0%", "-15%", "-15%", "10%", "0%"],
          y: ["0%", "10%", "-10%", "-10%", "0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 10
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
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
  );
};

export default Hero;
import SectionTitle from '../components/ui/SectionTitle'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="About Me"
        />
        
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-4">
              I'm Luis Troy Paraiso, an IT enthusiast, passionate about creating digital solutions 
              that make an impact.
            </p>
            <p className="text-lg mb-4">
              With expertise in web development, IoT systems, and problem-solving, I bridge the gap 
              between technology and user needs.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open 
              source, or mentoring aspiring developers.
            </p>
          </div>
          <div className="rounded-lg">
            <img src=".\assets\images\profile-pic.jpg" className='rounded-full' alt="poto ni yortz"></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
import { FaReact } from 'react-icons/fa';
import { SiVite, SiGithub, SiGit, SiNodedotjs } from 'react-icons/si';

const Footer = ({ year }) => {
  return (
    <footer className="bg-stone-900 text-white py-8">
      <div className=" pt-8 text-sm text-stone-700">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
            
            <div>
              <p className="font-semibold">&copy; {year} BRUNFJELL</p>
              <p>All rights reserved.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Made by</p>
                <a 
                  href="https://brunfjell.github.io/brunfjell-portfolio/" 
                  className="font-bold font-sans text-lg text-center" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  BRUNFJELL
                </a>
              </div>
              <div>
                <p className="font-bold">Made with</p>
                <div className="flex items-center gap-2">
                  <FaReact className="h-6 w-6 text-stone-700" />
                  <SiVite className="h-6 w-6 text-stone-700" />
                  <SiNodedotjs className="h-6 w-6 text-stone-700" />
                  <SiGithub className="h-6 w-6 text-stone-700" />
                  <SiGit className="h-6 w-6 text-stone-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
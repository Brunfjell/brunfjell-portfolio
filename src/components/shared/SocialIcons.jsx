import { socialLinks } from '../../data/socials'

const SocialIcons = ({ className = "" }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  )
}

export default SocialIcons
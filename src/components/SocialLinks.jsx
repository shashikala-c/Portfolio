import { Github, Linkedin } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

const socialLinks = [
  { label: 'LinkedIn profile', href: portfolio.linkedin, icon: Linkedin },
  { label: 'GitHub profile', href: portfolio.github, icon: Github },
]

export function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="social-link"
        >
          <Icon size={17} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  )
}

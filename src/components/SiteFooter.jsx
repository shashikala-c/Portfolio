import { ArrowUpRight } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {portfolio.name}. Built with curiosity.</p>
        <a className="back-top" href="#home">Back to top <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  )
}

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'
import { SocialLinks } from '../components/SocialLinks.jsx'

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="hero-section section-anchor">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div
        className="hero-aura"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { scale: [1, 1.04, 1], opacity: [0.65, 0.9, 0.65] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="hero-layout content-shell">
        <div className="hero-copy">
          <motion.div
            className="availability-pill"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="pill-spark"><Sparkles size={13} /></span>
            AI & DATA SCIENCE
          </motion.div>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            Hi, I’m <span className="gradient-text">{portfolio.shortName}.</span>
            <br />
            <span className="hero-role">Turning ideas into</span>
            <br />
            <span className="hero-role"><span className="gradient-text">meaningful experiences.</span></span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Engineering Intelligence into Reality.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            <a className="button button-primary" href="#projects">
              Explore projects <ArrowRight size={16} />
            </a>
          </motion.div>
          <div className="hero-meta">
            <SocialLinks />
            <a className="scroll-cue" href="#about"><ArrowDown size={14} /> SCROLL TO EXPLORE</a>
          </div>
        </div>

        <motion.div
          className="profile-stage"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="profile-orbit orbit-outer" />
          <div className="profile-orbit orbit-inner" />
          <div className="orbit-node node-top" aria-hidden="true" />
          <div className="orbit-node node-bottom" aria-hidden="true" />
          <motion.div
            className="profile-photo-frame"
            animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img className="profile-photo" src="/images/profile-photo.jpeg" alt={`Portrait of ${portfolio.name}`} />
          </motion.div>
          <div className="float-note note-code">
            <span className="note-icon">{'{ }'}</span>
            <span><strong>Curious by design</strong><small>building with purpose</small></span>
          </div>
          <div className="float-note note-stack">
            <span className="stack-dot" />
            <span><strong>AI · Data · Ideas</strong><small>thoughtful by design</small></span>
          </div>
          <span className="stage-caption">AI · DATA SCIENCE · DIGITAL PRODUCTS</span>
        </motion.div>
      </div>
      <div className="hero-bottom-line content-shell">
        <span>INTRODUCTION</span>
        <span>CURIOUS THINKING. PRACTICAL IMPACT.</span>
      </div>
    </section>
  )
}

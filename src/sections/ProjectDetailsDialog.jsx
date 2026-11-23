import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Github, Layers3, X } from 'lucide-react'

export function ProjectDetailsDialog({ project, onClose }) {
  const closeButtonRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!project) return undefined

    const previousFocus = document.activeElement
    closeButtonRef.current?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus?.()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="dialog-backdrop"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') onClose()
          }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <motion.section
            className="project-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
          >
            <div className={`project-artwork artwork-${project.visual} dialog-artwork`}>
              <button ref={closeButtonRef} className="dialog-close" type="button" onClick={onClose} aria-label="Close project details">
                <X size={18} />
              </button>
              <span className="artwork-index">{project.mark} / SELECTED PROJECT</span>
              <span className="artwork-monogram" aria-hidden="true">
                {project.visual === 'health'
                  ? 'HEALTH / INSIGHTS'
                  : project.visual === 'sentiment'
                    ? 'NLP / SENTIMENT'
                    : 'STUDY / FOCUS'}
              </span>
            </div>
            <div className="dialog-content">
              <p className="section-eyebrow">{project.category}</p>
              <h2 id="project-dialog-title">{project.name}</h2>
              <p className="dialog-description">{project.details}</p>
              <div className="dialog-stack-heading"><Layers3 size={15} /> TECHNOLOGY USED</div>
              <div className="technology-list">
                {project.stack.map((technology) => <span key={technology} className="technology-chip">{technology}</span>)}
              </div>
              <div className="dialog-links-note">
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github size={14} /> View project on GitHub
                  </a>
                ) : (
                  'Project repository link is not available yet.'
                )}
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Github, Sparkles } from 'lucide-react'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { projects } from '../data/portfolio.js'
import { ProjectDetailsDialog } from './ProjectDetailsDialog.jsx'

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)
  const reduceMotion = useReducedMotion()

  return (
    <section id="projects" className="section-block section-projects section-anchor">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Ideas made"
            accent="tangible."
            description="A selection of ideas built to solve practical problems and create meaningful experiences."
          />
        </Reveal>
        <motion.div layout className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.055}>
              <motion.article
                layout
                whileHover={reduceMotion ? undefined : { y: -5, scale: 1.005 }}
                className="project-card"
              >
                <div className={`project-artwork artwork-${project.visual}`}>
                  <div className="artwork-grid" aria-hidden="true" />
                  <span className="artwork-index">{project.mark} / SELECTED PROJECT</span>
                  <span className="artwork-orbit" aria-hidden="true" />
                  <div className="artwork-window">
                    <span className="window-lights"><i /><i /><i /></span>
                    <Sparkles size={21} />
                    <span>
                      {project.visual === 'health'
                        ? 'VITALS / LIVE'
                        : project.visual === 'sentiment'
                          ? 'TWEET / ANALYSIS'
                          : 'SENSOR / SYNC'}
                    </span>
                  </div>
                  <span className="artwork-monogram" aria-hidden="true">
                    {project.visual === 'health'
                      ? 'HEALTH / INSIGHTS'
                      : project.visual === 'sentiment'
                        ? 'NLP / SENTIMENT'
                        : 'STUDY / FOCUS'}
                  </span>
                </div>
                <div className="project-card-content">
                  <div className="project-heading-row">
                    <div>
                      <p className="project-kicker">{project.category}</p>
                      <h3>{project.name}</h3>
                    </div>
                  </div>
                  <p className="project-summary">{project.summary}</p>
                  <div className="technology-list">
                    {project.stack.slice(0, 5).map((technology) => (
                      <span key={technology} className="technology-chip">{technology}</span>
                    ))}
                    {project.stack.length > 5 && <span className="technology-chip">+{project.stack.length - 5}</span>}
                  </div>
                  <div className="project-card-actions">
                    <button className="project-detail-button" type="button" onClick={() => setSelectedProject(project)}>
                      View details
                    </button>
                    <span className="project-placeholder-actions">
                      {project.githubUrl ? (
                        <a
                          className="project-repo-link"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.name} on GitHub`}
                        >
                          <Github size={12} /> GitHub
                        </a>
                      ) : (
                        <button type="button" className="project-unavailable-button" disabled title="Project repository URL has not been provided">
                          <Github size={12} /> GitHub
                        </button>
                      )}
                    </span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </motion.div>
      </div>
      <ProjectDetailsDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

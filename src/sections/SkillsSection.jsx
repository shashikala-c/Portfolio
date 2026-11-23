import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { skillGroups } from '../data/portfolio.js'

export function SkillsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="section-block section-skills section-anchor">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Technical toolkit"
            title="Tools for the"
            accent="whole stack."
            description="An evolving toolkit across frontend, backend, databases, and design fundamentals."
          />
        </Reveal>
        <div className="skill-groups">
          {skillGroups.map(({ category, icon: GroupIcon, skills }, index) => (
            <Reveal key={category} delay={index * 0.05}>
              <article className="skill-group">
                <div className="skill-group-heading">
                  <span className="skill-category-icon"><GroupIcon size={16} /></span>
                  <h3>{category}</h3>
                </div>
                <div className="skill-chip-list">
                  {skills.map(({ name, icon: SkillIcon }) => (
                    <motion.div
                      key={name}
                      className="skill-chip"
                      whileHover={reduceMotion ? undefined : { y: -3, borderColor: 'rgba(77, 226, 238, .38)' }}
                      transition={{ duration: reduceMotion ? 0 : 0.18 }}
                    >
                      <SkillIcon size={15} />
                      <span>{name}</span>
                    </motion.div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="skills-note">A growing toolkit for analysis, problem-solving, and thoughtful design.</p>
      </div>
    </section>
  )
}

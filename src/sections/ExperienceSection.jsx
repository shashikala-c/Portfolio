import { ArrowUpRight, BriefcaseBusiness, CalendarDays } from 'lucide-react'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { experience } from '../data/portfolio.js'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-block section-experience section-anchor">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I’ve"
            accent="grown."
            description="Practical experience through internship and project-based technical training."
          />
        </Reveal>
        <div className="experience-list">
          {experience.map((item, index) => (
            <Reveal key={item.organization} delay={index * 0.07}>
              <article className="experience-card">
                <div className="experience-main">
                  <div className="experience-topline">
                    <span className="experience-kind"><BriefcaseBusiness size={12} /> {item.category}</span>
                    <span className="experience-dates"><CalendarDays size={13} /> {item.dates}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <p className="experience-organization">{item.organization}</p>
                  <ul>
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
                <ArrowUpRight className="experience-arrow" size={18} aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

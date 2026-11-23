import { Award, GraduationCap, Sparkles } from 'lucide-react'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'

export function AboutSection() {
  return (
    <section id="about" className="section-block section-about section-anchor">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            eyebrow="A little about me"
            title="Curiosity, with"
            accent="purpose."
            description="A foundation in AI and data science, and a passion for making useful things across the stack."
          />
        </Reveal>
        <div className="about-layout">
          <Reveal className="about-lead">
            <span className="about-mark" aria-hidden="true">SC<span>.</span></span>
            <p className="about-lead-copy">
              I’m an Artificial Intelligence and Data Science graduate interested in using data and technology to solve practical problems.
            </p>
            <p className="about-body-copy">
              I’m interested in the full journey from a clear interface to a dependable API and the data behind it. I’m keen to keep growing as a developer and contribute to user-centered products that solve real problems.
            </p>
          </Reveal>
          <div className="about-aside">
            <Reveal delay={0.06}>
              <article className="info-panel education-panel">
                <div className="panel-icon"><GraduationCap size={18} /></div>
                <div className="info-panel-content">
                  <p className="micro-label">EDUCATION</p>
                  <h3>B.E. Artificial Intelligence & Data Science</h3>
                  <p>Don Bosco Institute of Technology · Bengaluru</p>
                  <div className="panel-foot"><span>2022 — 2026</span><span>CGPA 8.0</span></div>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="info-panel education-panel">
                <div className="panel-icon"><GraduationCap size={18} /></div>
                <div className="info-panel-content">
                  <p className="micro-label">EDUCATION</p>
                  <h3>Pre-University Course (PCMB)</h3>
                  <p>Don Bosco PU College, Bengaluru</p>
                  <div className="panel-foot"><span>2020 — 2022</span><span>77%</span></div>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.14}>
              <article className="info-panel recognition-panel">
                <div className="panel-icon"><Award size={18} /></div>
                <div className="info-panel-content">
                  <p className="micro-label">HACKATHON · MICROLABS FEVER</p>
                  <h3>Finalist · 4th place</h3>
                  <p>AI-driven remote fever progression monitoring</p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="interest-panel">
                <Sparkles size={15} />
                <p><strong>Interested in</strong> intelligent products, connected devices, and thoughtful interface design.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

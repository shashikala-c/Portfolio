import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Award, X } from 'lucide-react'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'

const certificates = [
  {
    title: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    issued: 'November 18, 2025',
    summary:
      'Foundational AI concepts and processes, common AI applications, and generative AI, including practice refining and creating prompts.',
    pdfUrl: '/certificates/ibm-getting-started-with-artificial-intelligence.pdf',
  },
  {
    title: 'The MERN Stack & FSD',
    issuer: 'Course completion',
    issued: 'July 13, 2024',
    summary:
      'Course completion covering the MERN web-development stack: MongoDB, Express.js, React, and Node.js.',
    pdfUrl: '/certificates/mern-stack-fsd.pdf',
  },
  {
    title: 'Data Fundamentals',
    issuer: 'IBM SkillsBuild',
    issued: 'November 22, 2025',
    summary:
      'Data analytics concepts, data science methods, and tools in the data ecosystem, including cleaning, refining, and visualizing data with IBM Watson Studio.',
    pdfUrl: '/certificates/ibm-data-fundamentals.pdf',
  },
  {
    title: 'Generative AI in Action',
    issuer: 'IBM SkillsBuild',
    issued: 'November 22, 2025',
    summary:
      'Generative AI principles, prompt engineering, Python libraries, model applications and ethics, plus workplace skills and career pathways.',
    pdfUrl: '/certificates/ibm-generative-ai-in-action.pdf',
  },
  {
    title: 'Data Science 101 (DS0101EN)',
    issuer: 'Cognitive Class · IBM Developer Skills Network',
    issued: 'March 12, 2024',
    summary: 'An introductory course in data science.',
    pdfUrl: '/certificates/cognitive-class-data-science-101.pdf',
  },
]

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const closeButtonRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!selectedCertificate) return undefined

    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') setSelectedCertificate(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus?.()
    }
  }, [selectedCertificate])

  return (
    <section id="certificates" className="section-block section-certificates section-anchor">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Learning & development"
            title="Certificates"
            description="A collection of credentials reflecting my learning in AI, data science, and full-stack development."
          />
        </Reveal>
        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.pdfUrl} delay={index * 0.045}>
              <article className="certificate-card">
                <div className="certificate-card-icon" aria-hidden="true">
                  <Award size={22} />
                </div>
                <div className="certificate-card-content">
                  <div className="certificate-card-meta">
                    <span>{certificate.issuer}</span>
                    <span>Issued {certificate.issued}</span>
                  </div>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.summary}</p>
                  <div className="certificate-card-actions">
                    <button
                      className="button button-primary"
                      type="button"
                      onClick={() => setSelectedCertificate(certificate)}
                    >
                      View certificate
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="dialog-backdrop certificate-viewer-backdrop"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedCertificate(null)
            }}
          >
            <motion.section
              className="certificate-viewer"
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-viewer-title"
              initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.99 }}
              transition={{ duration: reduceMotion ? 0 : 0.22 }}
            >
              <div className="certificate-viewer-header">
                <div>
                  <p className="section-eyebrow">{selectedCertificate.issuer}</p>
                  <h2 id="certificate-viewer-title">{selectedCertificate.title}</h2>
                </div>
                <button
                  ref={closeButtonRef}
                  className="dialog-close certificate-viewer-close"
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Close certificate viewer"
                >
                  <X size={18} />
                </button>
              </div>
              <iframe
                className="certificate-viewer-frame"
                src={selectedCertificate.pdfUrl}
                title={`${selectedCertificate.title} certificate`}
              />
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

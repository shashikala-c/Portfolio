import { useState } from 'react'
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { portfolio } from '../data/portfolio.js'

export function ContactSection() {
  const [isSending, setIsSending] = useState(false)
  const [submission, setSubmission] = useState({
    status: 'idle',
    message: '',
  })

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form).entries())
    setIsSending(true)
    setSubmission({ status: 'sending', message: 'Checking contact service…' })

    try {
      const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '')
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const result = await response.json()

      if (!response.ok) {
        setSubmission({ status: 'error', message: result.error || 'Message delivery is not configured.' })
        return
      }

      form.reset()
      setSubmission({ status: 'success', message: 'Your message was sent.' })
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setSubmission({ status: 'error', message: 'Could not reach the contact service. Please try again later.' })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="section-block section-contact section-anchor">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Start a conversation"
            title="Have something"
            accent="in mind?"
            description="For opportunities, collaboration, or a conversation about technology, feel free to reach out."
          />
        </Reveal>
        <div className="contact-layout">
          <Reveal className="contact-details">
            <div className="contact-callout">
              <span className="contact-callout-index">LET’S CONNECT</span>
              <h3>Good work starts with a conversation.</h3>
              <p>Send a note and I’ll get back to you through the contact details you provide.</p>
            </div>
            <a href={`mailto:${portfolio.email}`} className="contact-detail-link">
              <span className="contact-detail-icon"><Mail size={17} /></span>
              <span><small>EMAIL</small><strong>{portfolio.email}</strong></span>
            </a>
            <div className="contact-detail-link">
              <span className="contact-detail-icon"><MapPin size={17} /></span>
              <span><small>LOCATION</small><strong>{portfolio.location}</strong></span>
            </div>
            <div className="contact-socials">
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={16} /> LinkedIn</a>
              <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={16} /> GitHub</a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label className="form-label">Your name
                  <input className="form-control" type="text" name="name" autoComplete="name" maxLength={100} placeholder="Name" required />
                </label>
                <label className="form-label">Email address
                  <input className="form-control" type="email" name="email" autoComplete="email" maxLength={254} placeholder="you@example.com" required />
                </label>
              </div>
              <label className="form-label">Message
                <textarea className="form-control form-message" name="message" rows="5" maxLength={5000} placeholder="Write your message..." required />
              </label>
              <div className="form-submit-row">
                <button className="button button-primary" type="submit" disabled={isSending}>
                  {isSending ? 'Checking…' : 'Send message'} <ArrowRight size={15} />
                </button>
                {submission.message && (
                  <p
                    className={`form-status${submission.status === 'error' ? ' is-error' : ''}${submission.status === 'success' ? ' is-success' : ''}`}
                    aria-live="polite"
                    role={submission.status === 'error' ? 'alert' : 'status'}
                  >
                    {submission.message}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

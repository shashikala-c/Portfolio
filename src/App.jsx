import { SiteHeader } from './components/SiteHeader.jsx'
import { SiteFooter } from './components/SiteFooter.jsx'
import { AboutSection } from './sections/AboutSection.jsx'
import { ContactSection } from './sections/ContactSection.jsx'
import { CertificatesSection } from './sections/CertificatesSection.jsx'
import { ExperienceSection } from './sections/ExperienceSection.jsx'
import { HeroSection } from './sections/HeroSection.jsx'
import { ProjectsSection } from './sections/ProjectsSection.jsx'
import { SkillsSection } from './sections/SkillsSection.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <div aria-hidden="true" className="page-glow" />
    </>
  )
}

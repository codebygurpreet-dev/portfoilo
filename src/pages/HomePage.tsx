import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

function HomePage() {
  return (
    <div className="min-h-screen bg-page text-ink transition-colors duration-200">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-12">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default HomePage

import { projects } from '../utils/portfolio'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section
      className="scroll-mt-24 py-20 sm:py-28"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 font-mono text-[11px] font-medium tracking-[0.12em] text-ink-muted uppercase">
            A few things I&apos;ve made
          </p>
          <h2
            className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl"
            id="projects-title"
          >
            Selected work
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-ink-muted">
          From thoughtful interfaces to dependable services, each project
          reflects a focus on practical, well-crafted software.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

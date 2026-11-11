import type { Project } from '../utils/portfolio'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const liveLink = project.liveLink ?? {
    label: 'Open placeholder live site',
    href: 'https://example.com/',
  }
  const githubLink = project.githubLink ?? {
    label: 'View on GitHub (placeholder destination)',
    href: 'https://github.com/',
  }

  return (
    <article className="group rounded-2xl border border-line bg-surface p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-28px_rgba(29,38,34,0.24)] sm:p-8">
      <div className="mb-12 flex items-start justify-between">
        <span className="font-mono text-[11px] font-medium tracking-[0.12em] text-ink-muted">
          {project.number}
        </span>
        <a
          aria-label={`${liveLink.label} for ${project.title} (opens in a new tab)`}
          className="grid size-8 place-items-center text-ink-muted transition-colors duration-200 hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
          href={liveLink.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            aria-hidden="true"
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            viewBox="0 0 24 24"
          >
            <path d="M14 4h6v6M20 4l-9 9" />
            <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
          </svg>
        </a>
      </div>
      <h3 className="font-display text-2xl font-medium tracking-tight text-ink transition-all duration-200 group-hover:font-semibold group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-3 min-h-12 text-sm leading-6 text-ink-muted">
        {project.description}
      </p>
      <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies">
        {project.technologies.map((technology) => (
          <li
            className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-accent"
            key={technology}
          >
            {technology}
          </li>
        ))}
      </ul>
      <a
        aria-label={`${githubLink.label} for ${project.title} (opens in a new tab)`}
        className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-page focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
        href={githubLink.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span aria-hidden="true" className="font-mono text-base font-semibold">
          {'<>'}
        </span>
        View on GitHub
      </a>
    </article>
  )
}

export default ProjectCard

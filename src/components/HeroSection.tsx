import { heroContent } from '../utils/portfolio'

function HeroSection() {
  return (
    <section
      className="grid gap-12 border-b border-line py-20 sm:py-28 lg:grid-cols-[minmax(0,1fr)_230px] lg:items-end lg:gap-16 lg:py-32"
      id="home"
      aria-labelledby="intro-title"
      tabIndex={-1}
    >
      <div className="hero-fade-up">
        <p className="mb-7 flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.12em] text-ink-muted uppercase sm:mb-8">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
          {heroContent.role}
        </p>
        <h1
          className="max-w-4xl font-display text-[clamp(3rem,7.5vw,5.25rem)] leading-[0.99] font-medium tracking-[-0.045em] text-ink"
          id="intro-title"
        >
          {heroContent.headline}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-ink-muted sm:mt-8 sm:text-lg sm:leading-8">
          {heroContent.description}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-10">
          <a
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium text-page transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-page"
            href={heroContent.primaryAction.href}
          >
            {heroContent.primaryAction.label}
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="inline-flex min-h-12 items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
            href={heroContent.secondaryAction.href}
          >
            {heroContent.secondaryAction.label}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <aside
        aria-label="Technical focus areas"
        className="hero-fade-up-delayed border-l border-accent pl-5 text-sm leading-6 text-ink-muted lg:mb-2"
      >
        <p className="font-mono text-[11px] font-medium tracking-[0.12em] text-ink uppercase">
          Areas of focus
        </p>
        <ul className="mt-4 space-y-2">
          {heroContent.focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

export default HeroSection

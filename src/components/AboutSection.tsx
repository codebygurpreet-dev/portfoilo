import { aboutContent, type AboutGroup } from '../utils/portfolio'

type CapabilityGroupProps = {
  group: AboutGroup
}

function SkillGroup({ group }: CapabilityGroupProps) {
  return (
    <div className="rounded-xl border border-line bg-surface p-4 transition-colors duration-200 hover:border-accent sm:p-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-mono text-[11px] font-medium tracking-[0.12em] text-ink-muted uppercase">
          {group.label}
        </h3>
        <span
          aria-hidden="true"
          className="font-mono text-[10px] text-ink-muted"
        >
          {String(group.items.length).padStart(2, '0')}
        </span>
      </div>
      <ul
        aria-label={`${group.label} skills`}
        className="mt-4 flex flex-wrap gap-2"
      >
        {group.items.map((item) => (
          <li
            className="rounded-full border border-line bg-surface-muted px-3 py-1.5 text-xs leading-5 text-ink-muted sm:text-sm"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function AboutSection() {
  return (
    <section
      aria-labelledby="about-title"
      className="mb-20 scroll-mt-24 rounded-2xl border border-line bg-surface-muted px-6 py-10 sm:mb-28 sm:px-10 sm:py-12"
      id="about"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-16 lg:gap-y-10">
        <div className="about-content-enter">
          <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] text-ink-muted uppercase">
            {aboutContent.eyebrow}
          </p>
          <h2
            className="max-w-xl font-display text-4xl leading-[1.08] font-medium tracking-[-0.035em] text-ink sm:text-[2.75rem]"
            id="about-title"
          >
            {aboutContent.headline}
          </h2>
        </div>
        <div className="about-content-enter-delayed">
          <div className="max-w-2xl space-y-4 text-base leading-7 text-ink-muted">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="about-content-enter-delayed lg:col-span-2">
          <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] text-ink-muted uppercase">
            Used in delivered work
          </p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {aboutContent.groups.map((group) => (
              <SkillGroup group={group} key={group.label} />
            ))}
          </div>
        </div>
        <div className="about-content-enter-delayed flex flex-col gap-3 lg:col-span-2 sm:flex-row sm:items-center">
          <h3 className="shrink-0 font-mono text-[11px] font-medium tracking-[0.12em] text-ink-muted uppercase">
            Currently exploring
          </h3>
          <ul
            aria-label="Current areas of exploration"
            className="flex flex-wrap gap-2"
          >
            {aboutContent.currentFocus.map((item) => (
              <li
                className="rounded-full border border-line px-3 py-1.5 text-xs leading-5 text-ink-muted sm:text-sm"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

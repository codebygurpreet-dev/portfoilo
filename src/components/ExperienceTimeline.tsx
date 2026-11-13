import type { ExperienceEntry } from '../utils/portfolio'

type ExperienceTimelineProps = {
  entries: readonly ExperienceEntry[]
}

function formatMonthYear(value: string) {
  const [year, month] = value.split('-').map(Number)

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(new Date(Date.UTC(year, month - 1, 1)))
}

function CompanyIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5 shrink-0 text-accent"
      fill="none"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <rect
        height="14"
        rx="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        width="18"
        x="3"
        y="7"
      />
      <path
        d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-12 5h18m-11 0v2h4v-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5 shrink-0 text-location-icon"
      fill="none"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path
        d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <ol
      aria-label="Professional experience"
      className="ml-1 border-l border-line"
    >
      {entries.map((entry, index) => (
        <li
          className="experience-entry-enter relative grid gap-2 border-b border-line pb-7 pl-7 last:border-b-0 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-8 sm:pl-9"
          key={`${entry.startDate}-${entry.title}`}
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <span
            aria-hidden="true"
            className={`absolute -left-[6px] top-1.5 size-3 rounded-full border-2 ${
              entry.endDate === null
                ? 'border-accent bg-accent'
                : 'border-line bg-page'
            }`}
          />
          <p className="font-mono text-xs leading-6 text-ink-muted">
            <time dateTime={entry.startDate}>
              {formatMonthYear(entry.startDate)}
            </time>
            <span aria-hidden="true"> – </span>
            {entry.endDate ? (
              <time dateTime={entry.endDate}>
                {formatMonthYear(entry.endDate)}
              </time>
            ) : (
              <span>Present</span>
            )}
          </p>
          <div className="pb-1">
            <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
              {entry.title}
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <CompanyIcon />
                {entry.organization}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-muted px-2 py-0.5 text-xs">
                <LocationIcon />
                {entry.location}
              </span>
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-ink-muted marker:text-accent">
              {entry.impactHighlights.map(({ outcome, detail }) => (
                <li key={outcome}>
                  <strong className="font-semibold text-ink">{outcome}.</strong>{' '}
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default ExperienceTimeline

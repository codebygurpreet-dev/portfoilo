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
            <p className="mt-1 text-sm text-ink-muted">{entry.organization}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default ExperienceTimeline

import { experienceEntries } from '../utils/portfolio'
import ExperienceTimeline from './ExperienceTimeline'

function getMonthIndex(value: string) {
  const [year, month] = value.split('-').map(Number)

  return year * 12 + month - 1
}

function calculateExperienceYears(asOfDate: Date) {
  const currentMonthIndex =
    asOfDate.getUTCFullYear() * 12 + asOfDate.getUTCMonth()
  const totalMonths = experienceEntries.reduce((total, entry) => {
    const endMonthIndex = entry.endDate
      ? getMonthIndex(entry.endDate)
      : currentMonthIndex

    return total + endMonthIndex - getMonthIndex(entry.startDate) + 1
  }, 0)

  return Math.floor(totalMonths / 12)
}

const totalExperienceYears = calculateExperienceYears(new Date())

function ExperienceSection() {
  return (
    <section
      aria-labelledby="experience-title"
      className="scroll-mt-24 grid gap-10 border-b border-line py-20 sm:py-28 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16"
      id="experience"
    >
      <div>
        <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] text-ink-muted uppercase">
          Career timeline
        </p>
        <h2
          className="font-display text-4xl leading-[1.08] font-medium tracking-[-0.035em] text-ink sm:text-[2.75rem]"
          id="experience-title"
        >
          Experience
        </h2>
        <p className="mt-5 max-w-sm text-base leading-7 text-ink-muted">
          A progression of roles at Sabre India, from internship to SDE III.
        </p>
        <div className="relative mt-7">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-display text-3xl leading-none font-medium tracking-tight text-ink">
                {totalExperienceYears}+ years
              </p>
              <details
                className="group"
                onPointerEnter={(event) => {
                  if (event.pointerType === 'mouse') {
                    event.currentTarget.open = true
                  }
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType === 'mouse') {
                    event.currentTarget.open = false
                  }
                }}
              >
                <summary
                  aria-controls="experience-calculation"
                  aria-label="How total experience is calculated"
                  className="grid size-4 cursor-help list-none place-items-center rounded-full border border-line text-[10px] font-medium leading-none text-ink-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <span aria-hidden="true">?</span>
                </summary>
                <div
                  className="absolute left-0 top-full z-10 mt-2 w-72 max-w-[calc(100vw-3rem)] rounded-xl border border-line bg-surface p-4 text-sm leading-6 text-ink shadow-lg sm:left-auto sm:right-0"
                  id="experience-calculation"
                >
                  <p className="font-medium text-ink">How this is calculated</p>
                  <p className="mt-2 text-ink-muted">
                    Approximate cumulative time across the roles listed,
                    including internships. The calendar months shown are
                    summed; gaps between roles are excluded.
                  </p>
                </div>
              </details>
            </div>
            <p className="mt-2 font-mono text-[10px] font-medium tracking-[0.1em] text-ink-muted uppercase">
              Cumulative · internships included
            </p>
          </div>
        </div>
      </div>
      <ExperienceTimeline entries={experienceEntries} />
    </section>
  )
}

export default ExperienceSection

import { contactContent } from '../utils/portfolio'

function ContactSection() {
  return (
    <section
      aria-labelledby="contact-title"
      className="mb-16 scroll-mt-24 sm:mb-20"
      id="contact"
    >
      <div className="grid gap-8 rounded-2xl border border-line bg-surface-muted p-6 sm:p-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-stretch">
        <div className="max-w-2xl self-center">
          <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] text-ink-muted uppercase">
            {contactContent.eyebrow}
          </p>
          <h2
            className="font-display text-4xl leading-[1.08] font-medium tracking-[-0.035em] text-ink sm:text-[2.75rem]"
            id="contact-title"
          >
            {contactContent.headline}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink-muted">
            {contactContent.description}
          </p>
        </div>
        <div className="flex flex-col justify-center rounded-xl border border-line bg-surface p-6 sm:p-8">
          <p className="font-mono text-[11px] font-medium tracking-[0.12em] text-ink-muted uppercase">
            Email
          </p>
          <a
            className="group mt-4 inline-flex min-h-14 items-center justify-between gap-4 rounded-lg bg-ink px-5 py-4 text-sm font-medium text-page transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
            href={`mailto:${contactContent.email}`}
          >
            <span className="break-all">{contactContent.email}</span>
            <svg
              aria-hidden="true"
              className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
            </svg>
          </a>
          <p className="mt-4 text-xs leading-5 text-ink-muted">
            Opens your default email app.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

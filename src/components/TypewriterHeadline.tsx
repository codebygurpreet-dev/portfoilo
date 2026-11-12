import { useEffect, useRef, useState } from 'react'

type TypewriterHeadlineProps = {
  headingId: string
  staticHeadline: string
  prefix: string
  phrases: readonly [string, ...string[]]
}

const TYPE_DELAY_MS = 85
const DELETE_DELAY_MS = 45
const PHRASE_HOLD_MS = 1200
const INTER_PHRASE_DELAY_MS = 280

function TypewriterHeadline({
  headingId,
  staticHeadline,
  prefix,
  phrases,
}: TypewriterHeadlineProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [characterIndex, setCharacterIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isInView, setIsInView] = useState(true)
  const [isDocumentVisible, setIsDocumentVisible] = useState(
    () =>
      typeof document === 'undefined' || document.visibilityState === 'visible',
  )
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    const updateMotionPreference = () =>
      setPrefersReducedMotion(motionPreference.matches)

    updateMotionPreference()
    motionPreference.addEventListener('change', updateMotionPreference)

    return () =>
      motionPreference.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    const heading = headingRef.current
    if (!heading || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setIsInView(entry.isIntersecting)
    })
    observer.observe(heading)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateDocumentVisibility = () =>
      setIsDocumentVisible(document.visibilityState === 'visible')

    document.addEventListener('visibilitychange', updateDocumentVisibility)
    return () =>
      document.removeEventListener('visibilitychange', updateDocumentVisibility)
  }, [])

  const currentPhrase = phrases[phraseIndex]
  const isPhraseComplete = characterIndex === currentPhrase.length
  const isAnimationActive =
    !prefersReducedMotion && !isPaused && isInView && isDocumentVisible
  const isTextChanging =
    isAnimationActive && (isDeleting || !isPhraseComplete)

  useEffect(() => {
    if (!isAnimationActive) return

    const delay = isDeleting
      ? DELETE_DELAY_MS
      : isPhraseComplete
        ? PHRASE_HOLD_MS
        : characterIndex === 0
          ? INTER_PHRASE_DELAY_MS
          : TYPE_DELAY_MS

    const timeoutId = window.setTimeout(() => {
      if (isDeleting) {
        if (characterIndex > 0) {
          setCharacterIndex((index) => index - 1)
        } else {
          setIsDeleting(false)
          setPhraseIndex((index) => (index + 1) % phrases.length)
        }
      } else if (isPhraseComplete) {
        setIsDeleting(true)
      } else {
        setCharacterIndex((index) => index + 1)
      }
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [
    currentPhrase,
    characterIndex,
    isAnimationActive,
    isPhraseComplete,
    isDeleting,
    phrases.length,
  ])

  const displayedText = prefersReducedMotion
    ? phrases[0]
    : currentPhrase.slice(0, characterIndex)

  return (
    <div>
      <h1
        className="max-w-4xl font-display text-[clamp(3rem,7.5vw,5.25rem)] leading-[0.99] font-medium tracking-[-0.045em] text-ink"
        id={headingId}
        ref={headingRef}
      >
        <span className="sr-only">{staticHeadline}</span>
        <span aria-hidden="true">
          {prefix}
          <span className="block min-h-[1.98em] text-accent sm:min-h-[0.99em]">
            <span>
              {displayedText}
              <span
                aria-hidden="true"
                className={`typewriter-caret ml-1 inline-block h-[0.82em] translate-y-[0.08em] border-l border-current${isTextChanging ? ' typewriter-caret--active' : ''}`}
              />
            </span>
          </span>
        </span>
      </h1>
      {!prefersReducedMotion && (
        <button
          aria-controls={headingId}
          aria-label={isPaused ? 'Resume typewriter animation' : 'Pause typewriter animation'}
          className="mt-4 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-ink-muted transition-colors duration-200 hover:border-accent hover:bg-surface-muted hover:text-ink"
          onClick={() => setIsPaused((paused) => !paused)}
          type="button"
        >
          <svg
            aria-hidden="true"
            className="size-3.5"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            {isPaused ? (
              <path d="M6.5 4.5v7l5.5-3.5-5.5-3.5Z" />
            ) : (
              <path d="M4.5 4.5h2v7h-2zm5 0h2v7h-2z" />
            )}
          </svg>
          <span>{isPaused ? 'Resume animation' : 'Pause animation'}</span>
        </button>
      )}
    </div>
  )
}

export default TypewriterHeadline

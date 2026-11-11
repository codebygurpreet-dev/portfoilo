import { useEffect, useRef } from 'react'

function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frameId: number | null = null

    function updateProgress() {
      if (frameId !== null) return

      frameId = window.requestAnimationFrame(() => {
        frameId = null
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const progress =
          maxScroll > 0
            ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1)
            : 0

        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${progress})`
        }
      })
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      if (frameId !== null) window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1"
    >
      <div
        className="h-full origin-left bg-accent transition-transform duration-100 ease-out"
        ref={progressRef}
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}

export default ScrollProgress

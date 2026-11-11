import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const themeStorageKey = 'portfolio-theme'

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#151A17' : '#F7F6F1')
}

function getSavedTheme(): Theme | null {
  try {
    const savedTheme = window.localStorage.getItem(themeStorageKey)
    return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : null
  } catch (error) {
    console.warn('Unable to read the theme preference.', error)
    return null
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!mediaQuery) return

    function handleSystemThemeChange(event: MediaQueryListEvent) {
      if (getSavedTheme() !== null) return

      const nextTheme = event.matches ? 'dark' : 'light'
      applyTheme(nextTheme)
      setTheme(nextTheme)
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () =>
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    applyTheme(nextTheme)
    setTheme(nextTheme)

    try {
      window.localStorage.setItem(themeStorageKey, nextTheme)
    } catch (error) {
      console.warn('Unable to save the theme preference.', error)
    }
  }

  return { theme, toggleTheme }
}

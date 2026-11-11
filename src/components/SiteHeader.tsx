import {
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { navigationLinks, siteName } from "../utils/portfolio";
import ScrollProgress from "./ScrollProgress";
import ThemeToggle from "./ThemeToggle";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function handleNavigationKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  }

  function handleHomeNavigation(event: MouseEvent<HTMLAnchorElement>) {
    if (window.location.pathname !== "/") return;

    event.preventDefault();
    window.history.replaceState(null, "", "/");
    window.scrollTo(0, 0);
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-line/80 bg-page/75 backdrop-blur-md"
      onKeyDown={handleNavigationKeyDown}
    >
      <ScrollProgress />
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-8 gap-y-4 px-6 py-5 sm:px-10 lg:px-12">
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-3 focus:text-ink"
          href="#home"
        >
          Skip to main content
        </a>
        <a
          className="text-sm font-bold tracking-tight text-ink"
          href="/"
          aria-label={`${siteName}, home`}
          onClick={handleHomeNavigation}
        >
          {siteName.toUpperCase()}
        </a>
        <div className="order-2 ml-auto flex items-center gap-2 sm:order-3 sm:ml-0 sm:gap-3">
          <ThemeToggle />
          <a
            className="hidden rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-page transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-page sm:inline-flex"
            href="#contact"
          >
            Get in touch
          </a>
          <button
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-surface-muted sm:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            ref={menuButtonRef}
            type="button"
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="20"
              viewBox="0 0 24 24"
              width="20"
            >
              {isMenuOpen ? (
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.7"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.7"
                />
              )}
            </svg>
          </button>
        </div>
        <nav
          aria-label="Primary navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} order-3 w-full flex-col gap-1 border-t border-line pt-3 sm:order-2 sm:ml-auto sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-8 sm:border-0 sm:pt-0`}
          id="primary-navigation"
        >
          {navigationLinks.map((link) => (
            <a
              className="rounded px-3 py-2 text-sm text-ink-muted transition-colors hover:text-ink sm:px-0"
              href={link.href}
              key={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;

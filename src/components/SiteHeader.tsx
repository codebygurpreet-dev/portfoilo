import {
  useEffect,
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
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const activeNavigationLabel = navigationLinks.find(
    (link) => link.href.slice(1) === activeSection,
  )?.label;

  useEffect(() => {
    const sectionIds = [
      "home",
      ...navigationLinks.map((link) => link.href.slice(1)),
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const finalSectionId =
      navigationLinks[navigationLinks.length - 1]?.href.slice(1);
    const isAtPageEnd = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      return maxScroll > 0 && window.scrollY >= maxScroll - 2;
    };
    const isFooterVisible = () => {
      const footerBounds = document
        .querySelector("footer")
        ?.getBoundingClientRect();

      return Boolean(
        footerBounds &&
          footerBounds.top < window.innerHeight &&
          footerBounds.bottom > 0,
      );
    };
    const updateActiveForFinalArea = () => {
      if (finalSectionId && (isAtPageEnd() || isFooterVisible())) {
        setActiveSection(finalSectionId);
      }
    };

    window.addEventListener("scroll", updateActiveForFinalArea, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveForFinalArea);

    if (!("IntersectionObserver" in window) || sections.length === 0) {
      updateActiveForFinalArea();
      return () => {
        window.removeEventListener("scroll", updateActiveForFinalArea);
        window.removeEventListener("resize", updateActiveForFinalArea);
      };
    }

    let observer: IntersectionObserver | undefined;
    const updateObserver = () => {
      observer?.disconnect();
      const topInset = Math.round(window.innerHeight * 0.35);
      const bottomInset = Math.round(window.innerHeight * 0.55);

      observer = new IntersectionObserver(
        (entries) => {
          if (finalSectionId && (isAtPageEnd() || isFooterVisible())) {
            setActiveSection(finalSectionId);
            return;
          }

          const currentSection = entries.find((entry) => entry.isIntersecting);
          if (currentSection) setActiveSection(currentSection.target.id);
        },
        {
          rootMargin: `-${topInset}px 0px -${bottomInset}px 0px`,
          threshold: 0,
        },
      );

      sections.forEach((section) => observer?.observe(section));
    };

    updateObserver();
    updateActiveForFinalArea();
    window.addEventListener("resize", updateObserver);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", updateObserver);
      window.removeEventListener("scroll", updateActiveForFinalArea);
      window.removeEventListener("resize", updateActiveForFinalArea);
    };
  }, []);

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
    setActiveSection("home");
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
          aria-current={activeSection === "home" ? "location" : undefined}
          className={`text-sm font-bold tracking-tight transition-colors ${
            activeSection === "home" ? "text-accent" : "text-ink"
          }`}
          href="/"
          aria-label={`${siteName}, home`}
          onClick={handleHomeNavigation}
        >
          {siteName.toUpperCase()}
        </a>
        <div className="order-2 ml-auto flex items-center gap-2 sm:order-3 sm:ml-0 sm:gap-3">
          <ThemeToggle />
          {!isMenuOpen && activeNavigationLabel && (
            <span
              aria-hidden="true"
              className="font-mono text-[10px] font-medium tracking-[0.1em] text-accent uppercase sm:hidden"
            >
              {activeNavigationLabel}
            </span>
          )}
          <button
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen
                ? "Close navigation"
                : activeNavigationLabel
                  ? `Open navigation, current section: ${activeNavigationLabel}`
                  : "Open navigation"
            }
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
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                aria-current={isActive ? "location" : undefined}
                className={`relative rounded px-3 py-2 text-sm transition-colors duration-200 sm:px-0 ${
                  isActive
                    ? "bg-accent-soft font-medium text-ink sm:bg-transparent sm:text-accent"
                    : "text-ink-muted hover:text-ink"
                }`}
                href={link.href}
                key={link.href}
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveSection(link.href.slice(1));
                }}
              >
                <span className="flex items-center gap-2">
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-full bg-accent sm:hidden"
                    />
                  )}
                  {link.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-1 hidden h-px origin-left bg-accent transition-transform duration-200 sm:block ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;

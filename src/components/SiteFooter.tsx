import { siteName, socialLinks, type SocialPlatform } from "../utils/portfolio";

const currentYear = new Date().getFullYear();

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "instagram") {
    return (
      <svg
        aria-hidden="true"
        className="size-5"
        fill="none"
        viewBox="0 0 24 24"
      >
        <rect
          height="17"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.7"
          width="17"
          x="3.5"
          y="3.5"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17.5" cy="6.7" fill="currentColor" r=".9" />
      </svg>
    );
  }

  if (platform === "github") {
    return (
      <svg
        aria-hidden="true"
        className="size-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.09.66-.22.66-.48v-1.69c-2.78.61-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.99c.85.004 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.67.91.67 1.85v2.6c0 .27.16.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.45 3H3.55C3.25 3 3 3.24 3 3.54v16.92c0 .3.25.54.55.54h16.9c.3 0 .55-.24.55-.54V3.54c0-.3-.25-.54-.55-.54ZM8.34 18H5.67V9h2.67v9ZM7 7.77a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18 18h-2.67v-4.38c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3V18H9.54V9h2.56v1.23h.04c.36-.7 1.23-1.45 2.53-1.45 2.7 0 3.2 1.78 3.2 4.1V18Z" />
    </svg>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-line bg-page py-7 text-ink-muted sm:py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 sm:px-10 lg:px-12">
        <nav aria-label="Social profiles">
          <ul className="flex items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  aria-label={`${link.label} profile (opens in a new tab)`}
                  className="grid size-12 place-items-center rounded-full text-ink-muted transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <SocialIcon platform={link.platform} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="pt-1 text-center text-sm leading-6 text-ink-muted">
          © {currentYear} {siteName}. Crafted with passion.
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;

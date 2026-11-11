import { useTheme } from "../hooks/useTheme";

type ThemeIconProps = {
  className: string;
  kind: "moon" | "sun";
};

function ThemeIcon({ className, kind }: ThemeIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      {kind === "sun" ? (
        <>
          <circle
            cx="12"
            cy="12"
            r="3.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M12 2.75v2m0 14.5v2m9.25-9.25h-2m-14.5 0h-2m15.79-6.54-1.42 1.42M6.88 17.12l-1.42 1.42m13.08 0-1.42-1.42M6.88 6.88 5.46 5.46"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
        </>
      ) : (
        <path
          d="M20.2 15.1A8.4 8.4 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
      )}
    </svg>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className="grid size-10 cursor-pointer place-items-center rounded-full border border-line bg-surface text-ink-muted transition-colors duration-200 hover:bg-surface-muted hover:text-ink"
      onClick={toggleTheme}
      type="button"
    >
      <span className="pointer-events-none relative grid size-6 place-items-center">
        <ThemeIcon
          className={`absolute size-[18px] transition-[transform,opacity] duration-500 ease-out ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
          kind="sun"
        />
        <ThemeIcon
          className={`absolute size-[18px] transition-[transform,opacity] duration-500 ease-out ${
            isDark
              ? "-rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
          kind="moon"
        />
      </span>
    </button>
  );
}

export default ThemeToggle;

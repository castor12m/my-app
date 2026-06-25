import { useLocation } from "react-router-dom";
import { useTheme } from "@/providers/theme";
import { Moon, Sun } from "lucide-react";

const pageTitles = {
  "/home": "Home",
  "/": "Home",
  "/patches": "Patches",
  "/playground": "Playground",
  "/settings": "Settings",
  "/about": "About",
};

export default function Navbar() {
  const location = useLocation();
  const current = pageTitles[location.pathname] || "";
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <header className="flex h-14 w-full flex-shrink-0 items-center border-b border-border px-5 backdrop-blur-xl" style={{ background: 'var(--panel-bg, hsl(var(--background) / 0.72))' }}>
      <div className="flex items-center gap-2.5 text-sm font-semibold">
        <span className="text-muted-foreground">CASTOR</span>
        <span className="text-muted-foreground/40">/</span>
        <span className="text-foreground">{current}</span>
      </div>
      <div className="ml-auto flex items-center gap-2.5">
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
          title="Toggle theme"
        >
          {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>
        <a
          href="https://github.com/castor12m/my-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.3.5.7.5 1.5v2.2c0 .2.1.5.5.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z" />
          </svg>
        </a>
      </div>
    </header>
  );
}

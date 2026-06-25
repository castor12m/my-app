import { useTheme } from "@/providers/theme";
import { useSidebar } from "@/components/ui/sidebar";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const { toggleSidebar, open } = useSidebar();

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="px-8 py-10 md:px-12" style={{ maxWidth: 560 }}>
      <h2
        className="mb-6 text-foreground"
        style={{ font: "900 28px/1 'Geist', sans-serif", letterSpacing: '-0.02em' }}
      >
        Settings
      </h2>

      <div className="flex items-center justify-between rounded-[13px] border border-border bg-card p-[18px]">
        <div>
          <div className="text-sm font-semibold text-foreground">Theme</div>
          <div className="mt-1.5 text-xs text-muted-foreground">
            {isDark ? '다크 모드 (기본)' : '라이트 모드'}
          </div>
        </div>
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="flex h-[26px] w-[46px] cursor-pointer items-center rounded-full p-[3px] transition-colors"
          style={{
            background: isDark ? 'hsl(var(--primary))' : 'hsl(var(--border))',
            justifyContent: isDark ? 'flex-end' : 'flex-start',
          }}
        >
          <div className="h-5 w-5 rounded-full bg-white shadow-sm" />
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-[13px] border border-border bg-card p-[18px]">
        <div>
          <div className="text-sm font-semibold text-foreground">Sidebar</div>
          <div className="mt-1.5 text-xs text-muted-foreground">
            {open ? '펼침' : '접힘'}
          </div>
        </div>
        <button
          onClick={toggleSidebar}
          className="rounded-lg border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          Toggle
        </button>
      </div>
    </div>
  );
}

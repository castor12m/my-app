export default function About() {
  return (
    <div className="flex flex-wrap gap-8 px-8 py-10 md:px-12" style={{ maxWidth: 1000 }}>
      {/* Profile Card */}
      <div className="flex w-80 flex-shrink-0 flex-col items-center rounded-[18px] border border-border bg-card p-8 text-center">
        <div
          className="flex h-28 w-28 items-center justify-center rounded-full border"
          style={{
            background: 'repeating-linear-gradient(45deg, #10151d, #10151d 8px, #161d27 8px, #161d27 16px)',
            borderColor: 'hsl(var(--primary) / 0.3)',
          }}
        >
          <span className="mono text-[9px] tracking-[0.1em] text-muted-foreground/40">avatar</span>
        </div>
        <div className="mt-5 text-lg font-extrabold text-foreground">castor12m</div>
        <div className="mono mt-2 text-[11px] tracking-[0.08em] text-muted-foreground">
          SATELLITE ENGINEER
        </div>
        <div className="mt-5 flex gap-2">
          <a
            href="https://github.com/castor12m"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8 1.2-.3 2.6-.3 3.8 0 1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.3.5.7.5 1.5v2.2c0 .2.1.5.5.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z" />
            </svg>
          </a>
          <div className="h-9 w-9 rounded-lg border border-border" />
          <div className="h-9 w-9 rounded-lg border border-border" />
        </div>
      </div>

      {/* Right side */}
      <div className="flex min-w-[280px] flex-1 flex-col gap-7">
        {/* Intro */}
        <div>
          <div className="mono mb-3.5 text-[10px] tracking-[0.16em] text-muted-foreground/60">INTRO</div>
          <p className="max-w-[520px] text-sm leading-[1.7] text-muted-foreground">
            소개 문구가 들어갈 자리. 위성 개발 경험, 관심 분야, 이 아카이브를 만든 이유 등을 자유롭게 채울 수 있습니다.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <div className="mono mb-3.5 text-[10px] tracking-[0.16em] text-muted-foreground/60">TECH STACK</div>
          <div className="flex flex-wrap gap-2">
            {["React", "Vite", "Tailwind", "shadcn/ui"].map((tech) => (
              <span
                key={tech}
                className="rounded-[9px] border px-4 py-2 text-xs font-medium text-muted-foreground"
                style={{ borderColor: 'hsl(var(--primary) / 0.28)' }}
              >
                {tech}
              </span>
            ))}
            <span className="rounded-[9px] border border-dashed border-border px-4 py-2 text-xs font-medium text-muted-foreground/50">
              + add
            </span>
          </div>
        </div>

        {/* Links */}
        <div>
          <div className="mono mb-3.5 text-[10px] tracking-[0.16em] text-muted-foreground/60">LINKS</div>
          <div className="flex max-w-[440px] flex-col gap-2.5">
            <a
              href="https://github.com/castor12m"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-muted">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8 1.2-.3 2.6-.3 3.8 0 1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.3.5.7.5 1.5v2.2c0 .2.1.5.5.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z" />
                </svg>
              </div>
              github.com/castor12m
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5 text-[13px] font-medium text-muted-foreground/50">
              <div className="h-[30px] w-[30px] rounded-lg bg-muted" />
              링크 추가
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

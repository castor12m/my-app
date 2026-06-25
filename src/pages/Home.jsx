import { NavLink } from "react-router-dom";

const steps = [
  { label: "Design", active: true, filled: true },
  { label: "Build", active: true, filled: false },
  { label: "Test", active: false, filled: false },
  { label: "Launch", active: false, filled: false },
  { label: "Operate", active: false, filled: false },
];

export default function Home() {
  return (
    <div className="px-8 py-10 md:px-12 md:py-10" style={{ maxWidth: 1100 }}>
      <p className="mono text-[11px] tracking-[0.2em] text-primary">
        PERSONAL EXHIBITION · v2
      </p>

      <h1
        className="mt-4 text-foreground"
        style={{ font: "900 clamp(32px, 5vw, 56px)/1.02 'Geist', sans-serif", letterSpacing: '-0.03em' }}
      >
        Mission patches,
        <br />
        <span className="text-muted-foreground">collected & displayed.</span>
      </h1>

      <p className="mt-5 max-w-[540px] text-[15px] leading-relaxed text-muted-foreground">
        위성 개발팀의 미션 패치를 홀로그램 카드로 전시하는 개인 아카이브.
        각 패치는 하나의 비행, 하나의 이야기.
      </p>

      <div className="mt-6 flex gap-3">
        <NavLink
          to="/patches"
          className="flex items-center gap-2 rounded-[10px] px-5 py-3 text-[13px] font-bold"
          style={{
            background: 'linear-gradient(140deg, hsl(var(--primary)), hsl(var(--accent)))',
            color: '#04141d',
            boxShadow: '0 0 24px -6px hsl(var(--primary))',
          }}
        >
          Explore patches →
        </NavLink>
        <NavLink
          to="/about"
          className="rounded-[10px] border border-border px-5 py-3 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </NavLink>
      </div>

      {/* Stats */}
      <div className="mt-10 grid max-w-[620px] grid-cols-3 gap-3.5">
        {[
          { value: "11", label: "PATCHES" },
          { value: "6", label: "MISSIONS" },
          { value: "'24", label: "SINCE" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-[14px] border border-border bg-card p-5"
          >
            <div
              className="text-foreground"
              style={{ font: "900 32px/1 'Geist', sans-serif" }}
            >
              {stat.value}
            </div>
            <div className="mono mt-2 text-[10px] tracking-[0.12em] text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Development Process */}
      <div className="mt-10 max-w-[680px]">
        <div className="mono mb-5 text-[10px] tracking-[0.16em] text-muted-foreground/60">
          DEVELOPMENT PROCESS
        </div>
        <div className="relative flex items-start justify-between">
          <div
            className="absolute left-[9px] right-[9px] top-[9px] h-px"
            style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--border)))' }}
          />
          {steps.map((step) => (
            <div key={step.label} className="relative w-[18%] text-center">
              <div
                className="mx-auto h-[18px] w-[18px] rounded-full"
                style={
                  step.filled
                    ? { background: 'hsl(var(--primary))', boxShadow: '0 0 12px -2px hsl(var(--primary))' }
                    : step.active
                    ? { background: 'hsl(var(--background))', border: '2px solid hsl(var(--primary))' }
                    : { background: 'hsl(var(--background))', border: '2px solid hsl(var(--border))' }
                }
              />
              <div
                className={`mt-2.5 text-[11px] font-semibold ${
                  step.active ? 'text-muted-foreground' : 'text-muted-foreground/50'
                }`}
              >
                {step.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

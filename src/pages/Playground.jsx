export default function Playground() {
  return (
    <div className="flex h-full min-h-[420px] flex-col items-center justify-center p-16 text-center">
      <svg width="34" height="34" viewBox="0 0 16 16" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.3">
        <path d="M3 5.5L6 8 3 10.5" />
        <path d="M8 11h5" />
      </svg>
      <div
        className="mt-5 text-foreground"
        style={{ font: "800 22px/1 'Geist', sans-serif" }}
      >
        Playground
      </div>
      <div className="mt-2.5 text-sm text-muted-foreground">
        실험 공간 — 곧 채워집니다.
      </div>
    </div>
  );
}

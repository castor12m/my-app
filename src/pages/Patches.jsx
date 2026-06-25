import { useState, useEffect, useCallback } from 'react';
import HoloCard from '@/components/HoloCard';

const patches = [
  { id: 'pm', file: 'pm-r1.png', title: 'PM', subtitle: 'Project Management', phase: 'PM', year: '2024' },
  { id: 'se', file: 'se-r1.png', title: 'SE', subtitle: 'Systems Engineering', phase: 'SE', year: '2024' },
  { id: 'electronics', file: 'electronics-r1.png', title: 'Electronics', subtitle: 'EPS · Design · Integration', phase: 'EPS', year: '2024' },
  { id: 'embedded', file: 'embedded-r1.png', title: 'Embedded', subtitle: 'On-Board Computer', phase: 'OBC', year: '2024' },
  { id: 'fsw', file: 'fsw-r1.png', title: 'FSW', subtitle: 'Flight Software', phase: 'FSW', year: '2024' },
  { id: 'gnc', file: 'gnc-r1.png', title: 'GNC', subtitle: 'Guidance · Navigation · Control', phase: 'GNC', year: '2024' },
  { id: 'rf', file: 'rf-r1.png', title: 'RF', subtitle: 'Radio Frequency · COMMS', phase: 'RF', year: '2024' },
  { id: 'thestr', file: 'thestr-r1.png', title: 'THE/STR', subtitle: 'Thermal · Structural', phase: 'THE/STR', year: '2024' },
  { id: 'gsw', file: 'gsw-r1.png', title: 'GSW', subtitle: 'Ground Software', phase: 'GSW', year: '2024' },
  { id: 'ait', file: 'ait-r1.png', title: 'AIT', subtitle: 'Assembly · Integration · Test', phase: 'AIT', year: '2024' },
  { id: 'git', file: 'git-r1.png', title: 'Git', subtitle: 'Version Control', phase: 'GIT', year: '2024' },
];

const effects = [
  { id: 'holo', label: 'Holo', desc: 'Rainbow prism' },
  { id: 'cosmos', label: 'Cosmos', desc: 'Galaxy sparkle' },
  { id: 'radiant', label: 'Radiant', desc: 'Cyan glow' },
  { id: 'gold', label: 'Gold', desc: 'Golden foil' },
];

function PatchModal({ patch, index, onClose, onPrev, onNext }) {
  const imgSrc = `${import.meta.env.BASE_URL}patches/${patch.file}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-8"
      style={{ background: 'rgba(4,7,11,.74)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-[760px] overflow-hidden rounded-[22px] border bg-background"
        style={{
          borderColor: 'hsl(var(--primary) / 0.22)',
          boxShadow: '0 40px 100px -20px rgba(0,0,0,.8), 0 0 90px -34px hsl(var(--primary))',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Image */}
        <div
          className="hidden w-[330px] flex-shrink-0 items-center justify-center border-r border-border md:flex"
          style={{ background: 'radial-gradient(circle at 50% 45%, hsl(var(--primary) / 0.16), transparent 65%)' }}
        >
          <div
            className="relative flex h-[248px] w-[248px] items-center justify-center overflow-hidden rounded-full"
            style={{
              background: '#05070a',
              border: '1px solid hsl(var(--primary) / 0.34)',
              boxShadow: '0 0 70px -10px hsl(var(--primary)), inset 0 0 50px -16px hsl(var(--primary))',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'conic-gradient(from 30deg, rgba(56,189,248,.22), rgba(34,211,238,.22), rgba(168,85,247,.14), rgba(56,189,248,.22))',
                mixBlendMode: 'screen',
                opacity: 0.78,
              }}
            />
            <img
              src={imgSrc}
              alt={patch.title}
              className="relative z-10 h-[76%] w-[76%] rounded-full object-cover"
              style={{ border: '1px dashed hsl(var(--primary) / 0.32)' }}
            />
          </div>
        </div>

        {/* Right: Details */}
        <div className="relative flex-1 p-8 md:p-9">
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.6">
              <path d="M2 2l10 10M12 2L2 12" />
            </svg>
          </button>

          <div className="mono text-[10px] tracking-[0.2em] text-primary">
            PATCH {String(index + 1).padStart(2, '0')} / {patches.length}
          </div>
          <h3
            className="mt-3.5 text-foreground"
            style={{ font: "900 30px/1.05 'Geist', sans-serif", letterSpacing: '-0.02em' }}
          >
            {patch.title}
          </h3>
          <div className="mt-2 text-[13px] font-medium text-muted-foreground">
            {patch.subtitle}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            패치 설명이 들어갈 자리. 미션 배경, 팀, 비행 이력 등 짧은 캡션. 데이터가 준비되면 JSON에서 채워집니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span
              className="mono rounded-[7px] px-3 py-1 text-[10px] tracking-[0.06em] text-primary"
              style={{ background: 'hsl(var(--primary) / 0.12)' }}
            >
              {patch.phase}
            </span>
            <span className="mono rounded-[7px] bg-muted px-3 py-1 text-[10px] tracking-[0.06em] text-muted-foreground">
              {patch.year}
            </span>
          </div>

          <div className="mt-8 flex items-center gap-2.5">
            <button
              onClick={onPrev}
              className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.6" fill="none">
                <path d="M8.5 3L4.5 7l4 4" />
              </svg>
            </button>
            <button
              onClick={onNext}
              className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.6" fill="none">
                <path d="M5.5 3l4 4-4 4" />
              </svg>
            </button>
            <div className="mono ml-auto text-[10px] text-muted-foreground/50">
              ← → · ESC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Patches() {
  const [effect, setEffect] = useState('radiant');
  const [modalIndex, setModalIndex] = useState(null);

  const shift = useCallback((d) => {
    setModalIndex((prev) => (prev + d + patches.length) % patches.length);
  }, []);

  useEffect(() => {
    if (modalIndex === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') setModalIndex(null);
      else if (e.key === 'ArrowRight') shift(1);
      else if (e.key === 'ArrowLeft') shift(-1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [modalIndex, shift]);

  return (
    <div className="px-8 py-8 md:px-11">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2
            className="text-foreground"
            style={{ font: "900 32px/1 'Geist', sans-serif", letterSpacing: '-0.02em' }}
          >
            Mission Patches
          </h2>
          <p className="mt-3 text-[13px] text-muted-foreground">
            {patches.length} holographic cards · hover to reveal · click to expand
          </p>
        </div>

        <div className="flex gap-1.5 rounded-lg border border-border p-1 bg-card/50">
          {effects.map((fx) => (
            <button
              key={fx.id}
              onClick={() => setEffect(fx.id)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                effect === fx.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              title={fx.desc}
            >
              {fx.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {patches.map((patch, i) => (
          <div
            key={patch.id}
            onClick={() => setModalIndex(i)}
            className="cursor-pointer transition-transform hover:-translate-y-1.5"
          >
            <HoloCard
              image={`${import.meta.env.BASE_URL}patches/${patch.file}`}
              title={patch.title}
              subtitle={patch.subtitle}
              effect={effect}
            />
          </div>
        ))}
      </div>

      {modalIndex !== null && (
        <PatchModal
          patch={patches[modalIndex]}
          index={modalIndex}
          onClose={() => setModalIndex(null)}
          onPrev={() => shift(-1)}
          onNext={() => shift(1)}
        />
      )}
    </div>
  );
}

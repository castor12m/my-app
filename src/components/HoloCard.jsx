import { useRef, useState, useCallback } from 'react';

export default function HoloCard({ image, title, subtitle, effect = 'holo', className = '' }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [interacting, setInteracting] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    const rotateY = (px - 50) / 3.5;
    const rotateX = -(py - 50) / 3.5;

    const bgX = 50 + (px - 50) / 4;
    const bgY = 50 + (py - 50) / 4;

    const fromCenter = Math.sqrt((px - 50) ** 2 + (py - 50) ** 2) / 50;

    setStyle({
      '--pointer-x': `${px}%`,
      '--pointer-y': `${py}%`,
      '--rotate-x': `${rotateY}deg`,
      '--rotate-y': `${rotateX}deg`,
      '--bg-x': `${bgX}%`,
      '--bg-y': `${bgY}%`,
      '--opacity': Math.min(1, fromCenter * 1.2 + 0.3),
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setInteracting(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setInteracting(false);
    setStyle({});
  }, []);

  return (
    <div className={`holo-card-wrapper ${className}`}>
      <div
        ref={cardRef}
        className={`holo-card holo-card--${effect} ${interacting ? 'holo-card--active' : ''}`}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="holo-card__rotator">
          <img
            src={image}
            alt={title}
            className="holo-card__image"
            draggable={false}
          />
          <div className="holo-card__shine" />
          <div className="holo-card__glare" />
        </div>
      </div>
      {title && (
        <div className="mt-3 text-center">
          <h3 className="text-sm font-bold tracking-wider uppercase text-foreground">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
}

export function Marquee() {
  const phrase = "Play • Grow • Celebrate";
  const items = Array.from({ length: 12 }, () => phrase);

  return (
    <div className="marquee flex h-[10vh] min-h-[60px] items-center overflow-hidden bg-[#143620] select-none">
      <div className="marquee-track">
        {[...items, ...items].map((p, i) => (
          <span
            key={i}
            className="px-6 text-[var(--color-brand-primary)]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: "var(--text-2xl)",
              fontWeight: 500,
              fontStyle: "normal",
              letterSpacing: "-0.01em",
            }}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[600px] w-full overflow-hidden">
      <Image
        src="/uploads/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[80%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 from-40% to-black/55 to-100%" />

      <div className="relative z-10 mx-auto flex h-full max-w-[var(--max-w)] flex-col px-[var(--space-l)] py-[var(--space-l)]">
        <Image
          src="/uploads/logo.png"
          alt="CSport Center"
          width={1536}
          height={862}
          priority
          sizes="72px"
          className="h-auto w-[72px]"
        />

        <div className="mt-auto mb-[var(--space-4xl)] flex flex-col gap-[var(--space-m)]">
          <h1
            className="font-display max-w-[14ch] text-white"
            style={{ fontSize: "var(--text-4xl)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.02em" }}
          >
            A Sporty Stop for Every Family Member
          </h1>
          <p className="max-w-xl font-semibold text-white/95" style={{ fontSize: "var(--text-l)" }}>
            Explore South Jakarta&rsquo;s premier sport center, a family-driven hub built for real-life wins.
          </p>
          <a
            href="#features"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-[var(--radius-full)] bg-[var(--color-brand-primary)] px-6 py-3 font-semibold text-[var(--color-brand-secondary)] transition hover:bg-[var(--color-brand-tertiary)] hover:text-white"
            style={{ fontSize: "var(--text-m)" }}
          >
            Explore
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

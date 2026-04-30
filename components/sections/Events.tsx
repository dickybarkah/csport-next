import Image from "next/image";

const FEATURED = {
  title: "Studio Class is Now Open",
  location: "Lebak Bulus, Jakarta",
  body: "Join Reformer Pilates, Balance Body Flow, Vinyasa to Yin, and Yoga for Men at C Sport Center, Lebak Bulus, South Jakarta. Premium and comfortable facilities at Sekolah Cikal.",
  image: "/uploads/event-studio-class.png",
  cta: "Join Now",
  href: "#contact",
  label: "New",
};

const EVENTS = [
  {
    title: "Dad and Kids Padel Time",
    location: "Jakarta",
    body: "A fun bonding session for dads and kids on the padel court. Move together, laugh together, and make new memories!",
    image: "/uploads/event-dad-kids-padel.webp",
    label: "Padel Court",
    cta: "Join Now",
    href: "#contact",
  },
  {
    title: "Mom Community Padel with Kids Corner",
    location: "Jakarta",
    body: "Join other moms for a fun padel session while your little ones play safely at the kids corner.",
    image: "/uploads/event-mom-community.webp",
    label: "Padel Court",
    cta: "Join Now",
    href: "#contact",
  },
  {
    title: "Holiday Program for Kids",
    location: "Jakarta",
    body: "Keep your kids active and happy this holiday! Fun games, padel drills, and teamwork activities designed just for them.",
    image: "/uploads/event-holiday.webp",
    label: "Padel Court",
    cta: "Join Now",
    href: "#contact",
  },
];

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowChip() {
  return (
    <span className="inline-flex items-center justify-center bg-white text-black" style={{ borderRadius: "var(--radius-full)", padding: "4px 10px" }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 6 15 12 9 18" />
      </svg>
    </span>
  );
}

function Label({ text }: { text: string }) {
  return (
    <span
      className="absolute z-10 bg-[var(--color-brand-tertiary)] font-medium text-white"
      style={{
        top: "var(--space-m)",
        right: "var(--space-m)",
        fontSize: "var(--text-xs)",
        borderRadius: "var(--radius-xs)",
        padding: "var(--space-4xs) var(--space-2xs)",
      }}
    >
      {text}
    </span>
  );
}

export function Events() {
  return (
    <section
      id="events"
      className="bg-[var(--color-brand-primary)] scroll-mt-20"
      style={{
        borderTopLeftRadius: "calc(var(--radius-xl) * 2)",
        borderTopRightRadius: "calc(var(--radius-xl) * 2)",
        paddingTop: "var(--space-xl)",
        paddingBottom: "var(--space-4xl)",
        paddingLeft: "var(--space-l)",
        paddingRight: "var(--space-l)",
      }}
    >
      <div className="mx-auto flex max-w-[var(--max-w)] flex-col items-center gap-[var(--space-xl)]">
        <div className="flex w-full flex-col items-center gap-[var(--space-m)]">
          <h2
            className="font-display text-center text-[var(--color-brand-dark)]"
            style={{ fontSize: "var(--text-3xl)", fontWeight: 700, lineHeight: 1.05 }}
          >
            Upcoming Events
          </h2>
          <p
            className="max-w-2xl text-center text-[var(--color-brand-dark)]"
            style={{ fontSize: "var(--text-l)", fontWeight: 300, textWrap: "balance" }}
          >
            Join our community for exciting sports activities!
          </p>
        </div>

        {/* Featured top card */}
        <article
          className="relative flex w-full flex-col overflow-hidden bg-[var(--color-brand-secondary)] lg:w-[80%]"
          style={{ borderRadius: "var(--radius-m)" }}
        >
          <Label text={FEATURED.label} />
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={FEATURED.image}
              alt={FEATURED.title}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />
          </div>
          <div
            className="flex flex-col gap-[var(--space-m)]"
            style={{ padding: "var(--space-l)" }}
          >
            <span
              className="inline-flex items-center gap-[var(--space-4xs)] text-white/85"
              style={{ fontSize: "var(--text-s)", fontWeight: 300 }}
            >
              <PinIcon />
              {FEATURED.location}
            </span>
            <h3
              className="font-display text-white"
              style={{ fontSize: "var(--text-xl)", fontWeight: 600, lineHeight: 1.15 }}
            >
              {FEATURED.title}
            </h3>
            <p className="text-white/90" style={{ fontSize: "var(--text-m)", fontWeight: 300, lineHeight: 1.55 }}>
              {FEATURED.body}
            </p>
            <a
              href={FEATURED.href}
              className="inline-flex items-center justify-between bg-[var(--color-brand-tertiary)] font-medium text-white transition hover:opacity-90 lg:w-fit"
              style={{
                borderRadius: "var(--radius-full)",
                padding: "var(--space-xs) var(--space-s)",
                fontSize: "var(--text-m)",
              }}
            >
              <span className="mr-3">{FEATURED.cta}</span>
              <ArrowChip />
            </a>
          </div>
        </article>

        {/* Bottom 3 cards */}
        <div className="grid w-full gap-[var(--space-m)] md:grid-cols-3 lg:w-[80%]">
          {EVENTS.map((e) => (
            <article
              key={e.title}
              className="relative flex flex-col overflow-hidden bg-[var(--color-brand-secondary)]"
              style={{ borderRadius: "var(--radius-m)" }}
            >
              {e.label && <Label text={e.label} />}
              <div className="relative aspect-square w-full">
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div
                className="flex flex-1 flex-col gap-[var(--space-m)]"
                style={{ padding: "var(--space-m)" }}
              >
                <span
                  className="inline-flex items-center gap-[var(--space-4xs)] text-white/80"
                  style={{ fontSize: "var(--text-xs)", fontWeight: 300 }}
                >
                  <PinIcon />
                  {e.location}
                </span>
                <h3
                  className="font-display text-white"
                  style={{ fontSize: "var(--text-l)", fontWeight: 600, lineHeight: 1.2 }}
                >
                  {e.title}
                </h3>
                <p className="text-white/85" style={{ fontSize: "var(--text-s)", fontWeight: 300, lineHeight: 1.5 }}>
                  {e.body}
                </p>
                <a
                  href={e.href}
                  className="mt-auto inline-flex items-center justify-between bg-[var(--color-brand-tertiary)] font-medium text-white transition hover:opacity-90"
                  style={{
                    borderRadius: "var(--radius-full)",
                    padding: "var(--space-2xs) var(--space-s)",
                    fontSize: "var(--text-s)",
                    width: "100%",
                  }}
                >
                  {e.cta}
                  <ArrowChip />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

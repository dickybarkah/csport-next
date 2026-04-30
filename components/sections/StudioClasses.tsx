import Image from "next/image";
import { BookingModal } from "@/components/BookingModal";

type ClassItem = {
  title: string;
  image: string;
  body: string;
  modal?: { title: string; targets: { label: string; src: string }[] };
};

const CLASSES: ClassItem[] = [
  {
    title: "Reformer Pilates",
    image: "/uploads/class-reformer.png",
    body: "Build core strength and improve posture with South Jakarta’s premium, low-impact Reformer Pilates for total body flexibility and wellness.",
    modal: {
      title: "Book Reformer Pilates",
      targets: [
        { label: "Booking dengan Friska", src: "https://megatix.co.id/white-label/reformer-pilates-by-friska" },
        { label: "Booking dengan Zahra",  src: "https://megatix.co.id/white-label/reformer-pilates-by-zahra"  },
      ],
    },
  },
  {
    title: "Balance Body Flow",
    image: "/uploads/class-balance-body.webp",
    body: "Enhance mobility, coordination, and functional strength with South Jakarta’s dynamic Balance Body Flow mindful movement sessions.",
    modal: {
      title: "Book Balance Body Flow",
      targets: [
        { label: "Booking Balance Body Flow", src: "https://megatix.co.id/white-label/balanced-body-flow" },
      ],
    },
  },
  {
    title: "Vinyasa to Yin",
    image: "/uploads/class-vinyasa.webp",
    body: "Experience deep stretching and recovery with Vinyasa to Yin, South Jakarta’s premium yoga class blending dynamic flow with restorative stillness.",
    modal: {
      title: "Book Vinyasa to Yin",
      targets: [
        { label: "Booking Vinyasa to Yin", src: "https://megatix.co.id/white-label/vinyasa-to-yin" },
      ],
    },
  },
  {
    title: "Yoga for Men",
    image: "/uploads/class-yoga-men.webp",
    body: "Enhance athletic performance and functional strength with South Jakarta’s dedicated Yoga for Men sessions designed for flexibility and focus.",
    modal: {
      title: "Book Yoga for Men",
      targets: [
        { label: "Booking Yoga for Men", src: "https://megatix.co.id/white-label/hatha-flow-yoga" },
      ],
    },
  },
];

function ArrowChip() {
  return (
    <span className="inline-flex items-center justify-center bg-[var(--color-brand-secondary)] text-white" style={{ borderRadius: "var(--radius-full)", padding: "4px 10px" }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 6 15 12 9 18" />
      </svg>
    </span>
  );
}

const bookNowClass =
  "mt-auto inline-flex w-full items-center justify-between bg-[var(--color-brand-secondary)] font-medium text-white transition hover:bg-[var(--color-brand-dark)]";

const bookNowStyle: React.CSSProperties = {
  borderRadius: "var(--radius-full)",
  padding: "var(--space-xs) var(--space-s)",
  fontSize: "var(--text-s)",
};

function ClassCard({ c }: { c: ClassItem }) {
  return (
    <article
      className="flex flex-col gap-[var(--space-m)] overflow-hidden bg-[var(--color-brand-tertiary)]"
      style={{
        padding: "var(--space-s)",
        borderRadius: "var(--radius-m) calc(var(--radius-xl) * 2) var(--radius-m) var(--radius-m)",
      }}
    >
      <div className="flex flex-col gap-[var(--space-xs)]">
        <h3 className="font-display text-white" style={{ fontSize: "var(--text-m)", fontWeight: 600, lineHeight: 1.2 }}>
          {c.title}
        </h3>
        <p className="text-white/90" style={{ fontSize: "var(--text-s)", fontWeight: 300, lineHeight: 1.5 }}>
          {c.body}
        </p>
      </div>
      <div className="relative h-48 w-full overflow-hidden" style={{ borderRadius: "var(--radius-m)" }}>
        <Image
          src={c.image}
          alt={c.title}
          fill
          sizes="(max-width: 640px) 100vw, 256px"
          className="object-cover"
        />
      </div>

      {c.modal ? (
        <BookingModal
          title={c.modal.title}
          targets={c.modal.targets}
          buttonClassName={bookNowClass}
          buttonStyle={bookNowStyle}
          buttonLabel={
            <>
              Book Now
              <ArrowChip />
            </>
          }
        />
      ) : (
        <a href="#contact" className={bookNowClass} style={bookNowStyle}>
          Book Now
          <ArrowChip />
        </a>
      )}
    </article>
  );
}

export function StudioClasses() {
  return (
    <section
      id="classes"
      className="bg-[var(--color-brand-primary)] scroll-mt-20"
      style={{
        borderBottomLeftRadius: "calc(var(--radius-xl) * 2)",
        borderBottomRightRadius: "calc(var(--radius-xl) * 2)",
        paddingTop: "var(--space-xl)",
        paddingBottom: "var(--space-4xl)",
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <div
        className="mx-auto flex max-w-[var(--max-w)] flex-col gap-[var(--space-m)]"
        style={{ paddingLeft: "var(--space-l)", paddingRight: "var(--space-l)" }}
      >
        <h2
          className="font-display text-[var(--color-brand-dark)]"
          style={{ fontSize: "var(--text-3xl)", fontWeight: 700, lineHeight: 1.05 }}
        >
          Studio Classes
        </h2>
        <p
          className="max-w-xl text-[var(--color-brand-dark)]"
          style={{ fontSize: "var(--text-l)", fontWeight: 300, textWrap: "balance" }}
        >
          Find your balance, feel your energy with our classes.
        </p>
      </div>

      <div className="classes-scroll mt-[var(--space-xl)]">
        {CLASSES.map((c) => <ClassCard key={c.title} c={c} />)}
      </div>
    </section>
  );
}

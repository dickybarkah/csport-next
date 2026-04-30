import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";

export const metadata: Metadata = {
  title: "Jadwal Kelas Reformer Pilates",
  description:
    "Pilih jadwal kelas Reformer Pilates di CSport Center — Bersama Friska, Bersama Zahra, atau Bersama Nia Umar.",
  alternates: { canonical: "/schedule-reformerpilates" },
};

type Schedule = {
  title: string;
  subtitle: string;
  src: string;
  modalTitle: string;
};

const SCHEDULES: Schedule[] = [
  {
    title: "Bersama Friska",
    subtitle: "Booking sesi reformer pilates langsung dengan Coach Friska.",
    src: "https://megatix.co.id/white-label/reformer-pilates-by-friska",
    modalTitle: "Booking — Reformer Pilates dengan Friska",
  },
  {
    title: "Bersama Zahra",
    subtitle: "Booking sesi reformer pilates langsung dengan Coach Zahra.",
    src: "https://megatix.co.id/white-label/reformer-pilates-by-zahra",
    modalTitle: "Booking — Reformer Pilates dengan Zahra",
  },
  {
    title: "Bersama Nia Umar",
    subtitle: "Booking sesi reformer pilates langsung dengan Coach Nia Umar.",
    src: "https://megatix.co.id/white-label/reformer-pilates",
    modalTitle: "Booking — Reformer Pilates dengan Nia Umar",
  },
];

function ArrowChip() {
  return (
    <span
      className="inline-flex items-center justify-center bg-[var(--color-brand-primary)] text-[var(--color-brand-secondary)]"
      style={{ borderRadius: "var(--radius-full)", padding: "4px 10px" }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="9 6 15 12 9 18" />
      </svg>
    </span>
  );
}

const cardButtonClass =
  "mt-auto inline-flex w-full items-center justify-between bg-[var(--color-brand-secondary)] font-medium text-white transition hover:bg-black";

const cardButtonStyle: React.CSSProperties = {
  borderRadius: "var(--radius-full)",
  padding: "var(--space-xs) var(--space-s)",
  fontSize: "var(--text-s)",
};

function ScheduleCard({ s }: { s: Schedule }) {
  return (
    <article
      className="flex flex-col gap-[var(--space-m)] overflow-hidden bg-[var(--color-brand-tertiary)]"
      style={{
        padding: "var(--space-s)",
        borderRadius:
          "var(--radius-m) calc(var(--radius-xl) * 2) var(--radius-m) var(--radius-m)",
      }}
    >
      <div className="flex flex-col gap-[var(--space-xs)]">
        <div
          className="font-medium uppercase tracking-wide text-white/80"
          style={{ fontSize: "var(--text-xs)", letterSpacing: "0.08em" }}
        >
          Reformer Pilates
        </div>
        <h3
          className="font-display text-white"
          style={{ fontSize: "var(--text-xl)", fontWeight: 600, lineHeight: 1.15 }}
        >
          {s.title}
        </h3>
        <p
          className="text-white/90"
          style={{ fontSize: "var(--text-s)", fontWeight: 300, lineHeight: 1.5 }}
        >
          {s.subtitle}
        </p>
      </div>

      <div
        className="relative aspect-square w-full overflow-hidden"
        style={{ borderRadius: "var(--radius-m)" }}
      >
        <Image
          src="/uploads/class-reformer.png"
          alt="Reformer Pilates"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </div>

      <BookingModal
        title={s.modalTitle}
        targets={[{ label: s.title, src: s.src }]}
        buttonClassName={cardButtonClass}
        buttonStyle={cardButtonStyle}
        buttonLabel={
          <>
            Book Now
            <ArrowChip />
          </>
        }
      />
    </article>
  );
}

export default function SchedulePage() {
  return (
    <>
      <main className="flex-1">
        <section
          className="bg-[var(--color-brand-primary)]"
          style={{
            paddingTop: "var(--space-m)",
            paddingBottom: "var(--space-m)",
            paddingLeft: "var(--space-l)",
            paddingRight: "var(--space-l)",
            borderBottomLeftRadius: "calc(var(--radius-xl) * 2)",
            borderBottomRightRadius: "calc(var(--radius-xl) * 2)",
          }}
        >
          <div className="mx-auto flex max-w-[var(--max-w)] flex-col gap-[var(--space-3xs)]">
            <div
              className="font-medium uppercase tracking-wide text-[var(--color-brand-secondary)]/70"
              style={{ fontSize: "var(--text-xs)", letterSpacing: "0.12em" }}
            >
              CSport Center
            </div>
            <h1
              className="font-display text-[var(--color-brand-secondary)]"
              style={{ fontSize: "var(--text-2xl)", fontWeight: 700, lineHeight: 1.1 }}
            >
              Jadwal Kelas
            </h1>
            <p
              className="max-w-2xl text-[var(--color-brand-secondary)]/85"
              style={{
                fontSize: "var(--text-s)",
                fontWeight: 300,
                textWrap: "balance",
              }}
            >
              Pilih jadwal Reformer Pilates yang paling cocok untukmu.
            </p>
          </div>
        </section>

        <section
          style={{
            paddingTop: "var(--space-2xl)",
            paddingBottom: "var(--space-4xl)",
            paddingLeft: "var(--space-l)",
            paddingRight: "var(--space-l)",
          }}
        >
          <div
            className="mx-auto grid max-w-[var(--max-w)] gap-[var(--space-l)] md:grid-cols-2 lg:grid-cols-3"
          >
            {SCHEDULES.map((s) => (
              <ScheduleCard key={s.src} s={s} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

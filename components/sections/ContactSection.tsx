import Image from "next/image";
import site from "@/content/site.json";

export function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-20 bg-[var(--color-brand-secondary)]" style={{ padding: 0 }}>
      <div className="relative grid w-full grid-cols-1 items-stretch lg:min-h-[860px] lg:grid-cols-2">
        <div
          className="order-2 flex min-h-[440px] flex-col items-start justify-center gap-[var(--space-m)] bg-[var(--color-brand-tertiary)] py-[var(--space-2xl)] lg:order-1 lg:min-h-0"
          style={{ paddingLeft: "var(--space-2xl)", paddingRight: "var(--space-2xl)" }}
        >
          <h2
            className="font-display text-left text-white"
            style={{
              fontSize: "var(--text-3xl)",
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            Ready to Collaborate or Build Something Together?
          </h2>
          <p
            className="text-left text-white"
            style={{
              fontSize: "var(--text-m)",
              textWrap: "balance",
            }}
          >
            Interested in partnership or collaboration opportunities? We&rsquo;re always open to new ideas and meaningful connections.
          </p>
          <a
            href={site.contact.whatsappCta}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 bg-[var(--color-brand-primary)] px-6 py-3 font-semibold text-[var(--color-brand-secondary)] transition hover:bg-[var(--color-brand-secondary)] hover:text-white"
            style={{ borderRadius: "var(--radius-full)", fontSize: "var(--text-m)" }}
          >
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </a>
        </div>

        <div className="relative order-1 min-h-[460px] lg:order-2 lg:min-h-0">
          <Image
            src="/uploads/cta-bg.webp"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition: "50% 50%" }}
          />
        </div>

        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 lg:top-[80%]">
          <Image
            src="/uploads/cta-deco.png"
            alt=""
            width={128}
            height={128}
            sizes="128px"
            className="spin-slow h-32 w-32 object-contain"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

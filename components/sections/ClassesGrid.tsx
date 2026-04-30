import Image from "next/image";
import { getClasses } from "@/lib/content";
import { BookNowButton } from "@/components/BookNowButton";

export async function ClassesGrid() {
  const classes = await getClasses();

  return (
    <section id="classes" className="bg-(--color-brand-ink) py-20 text-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-(--color-brand-lime)">
            Studio
          </p>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">
            Studio Classes
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Pick a class, pick a teacher, book in seconds.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {classes.map((c) => (
            <article
              key={c.slug}
              className="group overflow-hidden rounded-2xl bg-white text-(--color-brand-ink) shadow-lg transition hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {c.thumbnail && (
                  <Image
                    src={c.thumbnail}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-col gap-3 p-5">
                <h3 className="font-display text-xl font-bold leading-tight">
                  {c.title}
                </h3>
                {c.excerpt && (
                  <p className="text-sm text-(--color-brand-ink-soft) line-clamp-3">
                    {c.excerpt}
                  </p>
                )}
                <div className="mt-2">
                  <BookNowButton
                    classTitle={c.title}
                    booking={c.booking ?? []}
                    className="inline-flex w-full items-center justify-center rounded-full bg-(--color-brand-orange) px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

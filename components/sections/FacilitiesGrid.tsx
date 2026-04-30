import Image from "next/image";

const FACILITIES = [
  { slug: "studio-class",       title: "Studio Class",         image: "/uploads/fac-studio-class.webp",      body: "Experience professional guidance in mat pilates, reformer pilates, and family yoga sessions in a comfortable, private environment." },
  { slug: "padel-court",        title: "Padel Court",          image: "/uploads/fac-padel.webp",             body: "Whether you are looking to rent a padel court for a friendly match or searching for a padel club near Lebak Bulus, our premium facility offers the perfect environment for all skill levels." },
  { slug: "basketball-court",   title: "Basketball Court",     image: "/uploads/fac-basketball-court.webp",  body: "This indoor basketball court serves as a premier venue for private coaching, student athlete training, and corporate team building sessions near the TB Simatupang business district." },
  { slug: "tennis-court",       title: "Tennis Court",         image: "/uploads/fac-tennis.webp",            body: "Our professional tennis court facility offers a fresh open-air environment for competitive matches, private drills, and social games within the Cilandak vicinity." },
  { slug: "mini-soccer",        title: "Mini Soccer Academy",  image: "/uploads/fac-mini-soccer.webp",       body: "Designed for youth development and early years, our soccer school offers professional coaching on premium turf facilities easily accessible from the Fatmawati and Cinere neighborhoods." },
  { slug: "basketball-academy", title: "Basketball Academy",   image: "/uploads/fac-basketball-academy.webp",body: "Our youth basketball academy focuses on fundamental skill development and character-building for student-athletes, led by professional coaches within a premier indoor training facility." },
  { slug: "recovery",           title: "Sport Recovery Center",image: "/uploads/fac-recovery.webp",          body: "A dedicated recovery area to stretch, rest, and recharge after your session or match." },
  { slug: "mini-gym",           title: "Mini Gym",             image: "/uploads/fac-mini-gym.webp",          body: "Light workout area for warming up before a game or cooling down after." },
  { slug: "locker",             title: "Locker Rooms",         image: "/uploads/fac-locker.webp",            body: "Clean and comfortable locker rooms with separate changing and shower areas." },
  { slug: "cafetaria",          title: "Cafetaria",            image: "/uploads/fac-cafetaria.webp",         body: "The perfect spot to grab a coffee, wait for your kids, or hang out with friends after a game." },
  { slug: "club-store",         title: "Club Store",           image: "/uploads/fac-clubstore.webp",         body: "Shop for sports gear, drinks, or jerseys. Everything your team needs in one place." },
  { slug: "parking",            title: "Parking Space",        image: "/uploads/fac-parking.webp",           body: "Spacious parking for cars and motorcycles, just arrive and play." },
];

export function FacilitiesGrid() {
  return (
    <section
      id="facilities"
      className="bg-[var(--color-brand-secondary)] scroll-mt-20"
      style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-2xl)", paddingLeft: 0, paddingRight: 0 }}
    >
      <div
        className="mx-auto flex max-w-[var(--max-w)] flex-col items-center gap-[var(--space-m)]"
        style={{ paddingLeft: "var(--space-l)", paddingRight: "var(--space-l)" }}
      >
        <h2
          className="font-display text-center text-white"
          style={{ fontSize: "var(--text-3xl)", fontWeight: 700 }}
        >
          Facilities
        </h2>
        <p
          className="max-w-2xl text-center text-white/85"
          style={{ fontSize: "var(--text-l)", textWrap: "balance" }}
        >
          Explore our range of sports experiences and community programs.
        </p>
      </div>

      <div className="facilities-scroll mt-[var(--space-xl)]">
        {FACILITIES.map((f) => (
          <article
            key={f.slug}
            className="flex h-auto flex-col items-stretch gap-[var(--space-m)] bg-[var(--color-brand-tertiary)] sm:h-[280px] sm:flex-row sm:items-stretch"
            style={{ borderRadius: "var(--radius-m)", padding: "var(--space-m)" }}
          >
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-[var(--space-s)] order-2 sm:order-1">
              <h3
                className="font-display text-white"
                style={{ fontSize: "var(--text-l)", fontWeight: 600, lineHeight: 1.2 }}
              >
                {f.title}
              </h3>
              <p
                className="text-white/95"
                style={{ fontSize: "var(--text-s)", fontWeight: 300, lineHeight: 1.5 }}
              >
                {f.body}
              </p>
            </div>
            <div
              className="relative aspect-square w-full shrink-0 overflow-hidden order-1 sm:order-2 sm:h-full sm:w-auto"
              style={{ borderRadius: "var(--radius-s)" }}
            >
              <Image
                src={f.image}
                alt={f.title}
                fill
                sizes="(max-width: 640px) 85vw, 240px"
                className="object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
